import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneButton,
  PropertyPaneButtonType,
  PropertyPaneCheckbox,
  PropertyPaneChoiceGroup,
  PropertyPaneDropdown,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
// import {
//   PropertyFieldCustomList,
//   CustomListFieldType,
// } from "sp-client-custom-fields/lib/PropertyFieldCustomList";

import * as strings from "ImageMapperLandingPageWebPartStrings";
import ImageMapperLandingPage from "./components/ImageMapperLandingPage";
import { IImageMapperLandingPageProps } from "./components/IImageMapperLandingPageProps";

export interface IMapArea {
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  url?: string;
  openInNewWindow?: boolean;
  imapType?: string;
  d?: string;
}

export interface IImageMapperLandingPageWebPartProps {
  description: string;
  imageUrl: string;
  imageHeight: string;
  imageWidth: string;
  imageHorizontalPosition: string;
  imageVerticalPosition: string;
  items: IMapArea[];
}

export default class ImageMapperLandingPageWebPart extends BaseClientSideWebPart<IImageMapperLandingPageWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IImageMapperLandingPageProps> =
      React.createElement(ImageMapperLandingPage, {
        description: this.properties.description,
        imageUrl: this.properties.imageUrl,
        imageHeight: this.properties.imageHeight,
        imageWidth: this.properties.imageWidth,
        imageHorizontalPosition: this.properties.imageHorizontalPosition,
        imageVerticalPosition: this.properties.imageVerticalPosition,
        items: this.properties.items,
      });

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected onAddButtonClick(value: any) {
    this.properties.items.push({});
  }

  protected onDeleteButtonClick(value: any) {
    this.properties.items.splice(value, 1);
  }

  private createNewGroup(iMapArea: IMapArea, index: number): any {
    if (iMapArea.imapType === "Path") {
      return {
        groupName: `Mapped Area ${index + 1}`,
        groupFields: [
          PropertyPaneDropdown(`items[${index}].imapType`, {
            label: "Map Area Type",
            selectedKey: iMapArea.imapType,
            options: [
              { key: "Rectangle", text: "Rectangle" },
              { key: "Path", text: "Path" },
            ],
          }),
          PropertyPaneTextField(`items[${index}].d`, {
            label: "D",
            value: iMapArea.d,
          }),
          PropertyPaneTextField(`items[${index}].url`, {
            label: "Url",
            value: iMapArea.url,
          }),
          PropertyPaneCheckbox(`items[${index}].openInNewWindow`, {
            checked: iMapArea.openInNewWindow,
            text: "Open in new window",
          }),
          PropertyPaneButton("deleteButton", {
            text: "Delete",
            buttonType: PropertyPaneButtonType.Command,
            icon: "RecycleBin",
            onClick: this.onDeleteButtonClick.bind(this, index),
          }),
          PropertyPaneButton("addButton", {
            text: "Add",
            buttonType: PropertyPaneButtonType.Command,
            icon: "CirclePlus",
            onClick: this.onAddButtonClick.bind(this),
          }),
        ],
      };
    } else {
      return {
        groupName: `Mapped Area ${index + 1}`,
        groupFields: [
          PropertyPaneDropdown(`items[${index}].imapType`, {
            label: "Map Area Type",
            selectedKey: iMapArea.imapType,
            options: [
              { key: "Rectangle", text: "Rectangle" },
              { key: "Path", text: "Path" },
            ],
          }),
          PropertyPaneTextField(`items[${index}].x`, {
            label: "X",
            value: iMapArea.x,
          }),
          PropertyPaneTextField(`items[${index}].y`, {
            label: "Y",
            value: iMapArea.y,
          }),
          PropertyPaneTextField(`items[${index}].width`, {
            label: "Width",
            value: iMapArea.width,
          }),
          PropertyPaneTextField(`items[${index}].height`, {
            label: "Height",
            value: iMapArea.height,
          }),
          PropertyPaneTextField(`items[${index}].url`, {
            label: "Url",
            value: iMapArea.url,
          }),
          PropertyPaneCheckbox(`items[${index}].openInNewWindow`, {
            checked: iMapArea.openInNewWindow,
            text: "Open in new window",
          }),
          PropertyPaneButton("deleteButton", {
            text: "Delete",
            buttonType: PropertyPaneButtonType.Command,
            icon: "RecycleBin",
            onClick: this.onDeleteButtonClick.bind(this, index),
          }),
          PropertyPaneButton("addButton", {
            text: "Add",
            buttonType: PropertyPaneButtonType.Command,
            icon: "CirclePlus",
            onClick: this.onAddButtonClick.bind(this),
          }),
        ],
      };
    }
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    var pages = [];

    pages.push({
      header: {
        description: "Image Area Settings",
      },
      groups: [
        {
          groupName: "Image",
          groupFields: [
            PropertyPaneTextField("imageUrl", {
              label: "Image Url",
            }),
            PropertyPaneTextField("imageHeight", {
              label: "Image Height",
            }),
            PropertyPaneTextField("imageWidth", {
              label: "Image Width",
            }),
            PropertyPaneDropdown("imageHorizontalPosition", {
              label: "Image Horizontal Position",
              options: [
                { key: "left", text: "Left" },
                { key: "center", text: "Center" },
                { key: "right", text: "Right" },
              ],
            }),
            PropertyPaneDropdown("imageVerticalPosition", {
              label: "Image Vertical Position",
              options: [
                { key: "start", text: "Top" },
                { key: "center", text: "Center" },
                { key: "end", text: "Bottom" },
              ],
            }),
          ],
        },
        {
          groupName: "",
          groupFields: [
            PropertyPaneButton("addButton", {
              text: "Add",
              buttonType: PropertyPaneButtonType.Command,
              icon: "CirclePlus",
              onClick: this.onAddButtonClick.bind(this),
            }),
          ],
        },
      ],
    });

    console.log(this.properties);
    this.properties.items.forEach((item, index) => {
      pages.push({
        header: {
          description: `Map Area ${index + 1}`,
        },
        groups: [this.createNewGroup(item, index)],
      });
    });

    return {
      pages: pages,
    };
  }

  protected onPropertyPaneFieldChanged(
    propertyPath: string,
    oldValue: any,
    newValue: any
  ): void {
    if (propertyPath === "imageUrl" && newValue) {
      const image = new Image();
      image.src = newValue;

      image.onload = () => {
        this.properties.imageHeight = image.height.toString();
        this.properties.imageWidth = image.width.toString();
      };
    }
  }
}
