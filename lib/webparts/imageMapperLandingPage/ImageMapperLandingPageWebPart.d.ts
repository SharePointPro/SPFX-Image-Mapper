import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
export interface IMapArea {
    x?: string;
    y?: string;
    width?: string;
    height?: string;
    url?: string;
    openInNewWindow?: boolean;
}
export interface IImageMapperLandingPageWebPartProps {
    description: string;
    imageUrl: string;
    imageHeight: string;
    imageWidth: string;
    items: IMapArea[];
}
export default class ImageMapperLandingPageWebPart extends BaseClientSideWebPart<IImageMapperLandingPageWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected onAddButtonClick(value: any): void;
    protected onDeleteButtonClick(value: any): void;
    private createNewGroup;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ImageMapperLandingPageWebPart.d.ts.map