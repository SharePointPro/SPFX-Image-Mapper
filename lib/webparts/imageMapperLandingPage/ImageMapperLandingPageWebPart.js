var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { PropertyPaneButton, PropertyPaneButtonType, PropertyPaneCheckbox, PropertyPaneDropdown, PropertyPaneTextField, } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import ImageMapperLandingPage from "./components/ImageMapperLandingPage";
var ImageMapperLandingPageWebPart = /** @class */ (function (_super) {
    __extends(ImageMapperLandingPageWebPart, _super);
    function ImageMapperLandingPageWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageMapperLandingPageWebPart.prototype.render = function () {
        var element = React.createElement(ImageMapperLandingPage, {
            description: this.properties.description,
            imageUrl: this.properties.imageUrl,
            imageHeight: this.properties.imageHeight,
            imageWidth: this.properties.imageWidth,
            items: this.properties.items,
        });
        ReactDom.render(element, this.domElement);
    };
    ImageMapperLandingPageWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(ImageMapperLandingPageWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    ImageMapperLandingPageWebPart.prototype.onAddButtonClick = function (value) {
        this.properties.items.push({});
    };
    ImageMapperLandingPageWebPart.prototype.onDeleteButtonClick = function (value) {
        this.properties.items.splice(value, 1);
    };
    ImageMapperLandingPageWebPart.prototype.createNewGroup = function (iMapArea, index) {
        if (iMapArea.imapType === "Path") {
            return {
                groupName: "Mapped Area " + (index + 1),
                groupFields: [
                    PropertyPaneDropdown("items[" + index + "].imapType", {
                        label: "Map Area Type",
                        selectedKey: iMapArea.imapType,
                        options: [
                            { key: "Rectangle", text: "Rectangle" },
                            { key: "Path", text: "Path" },
                        ],
                    }),
                    PropertyPaneTextField("items[" + index + "].d", {
                        label: "D",
                        value: iMapArea.d,
                    }),
                    PropertyPaneTextField("items[" + index + "].url", {
                        label: "Url",
                        value: iMapArea.url,
                    }),
                    PropertyPaneCheckbox("items[" + index + "].openInNewWindow", {
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
        else {
            return {
                groupName: "Mapped Area " + (index + 1),
                groupFields: [
                    PropertyPaneDropdown("items[" + index + "].imapType", {
                        label: "Map Area Type",
                        selectedKey: iMapArea.imapType,
                        options: [
                            { key: "Rectangle", text: "Rectangle" },
                            { key: "Path", text: "Path" },
                        ],
                    }),
                    PropertyPaneTextField("items[" + index + "].x", {
                        label: "X",
                        value: iMapArea.x,
                    }),
                    PropertyPaneTextField("items[" + index + "].y", {
                        label: "Y",
                        value: iMapArea.y,
                    }),
                    PropertyPaneTextField("items[" + index + "].width", {
                        label: "Width",
                        value: iMapArea.width,
                    }),
                    PropertyPaneTextField("items[" + index + "].height", {
                        label: "Height",
                        value: iMapArea.height,
                    }),
                    PropertyPaneTextField("items[" + index + "].url", {
                        label: "Url",
                        value: iMapArea.url,
                    }),
                    PropertyPaneCheckbox("items[" + index + "].openInNewWindow", {
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
    };
    ImageMapperLandingPageWebPart.prototype.getPropertyPaneConfiguration = function () {
        var _this = this;
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
        this.properties.items.forEach(function (item, index) {
            pages.push({
                header: {
                    description: "Map Area " + (index + 1),
                },
                groups: [_this.createNewGroup(item, index)],
            });
        });
        return {
            pages: pages,
        };
    };
    return ImageMapperLandingPageWebPart;
}(BaseClientSideWebPart));
export default ImageMapperLandingPageWebPart;
//# sourceMappingURL=ImageMapperLandingPageWebPart.js.map