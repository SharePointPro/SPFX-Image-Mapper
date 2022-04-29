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
import * as React from 'react';
import styles from './ImageMapperLandingPage.module.scss';
var ImageMapperLandingPage = /** @class */ (function (_super) {
    __extends(ImageMapperLandingPage, _super);
    function ImageMapperLandingPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageMapperLandingPage.prototype.onClick = function (link, openInNewWindow) {
        if (openInNewWindow) {
            window.open(link, '_blank');
        }
        else {
            window.location.href = link;
        }
    };
    ImageMapperLandingPage.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.imageMapperLandingPage },
            React.createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 1600 902" },
                React.createElement("image", { width: this.props.imageWidth, height: this.props.imageHeight, xlinkHref: this.props.imageUrl }),
                this.props.items.map(function (imageMapping, index) {
                    return (React.createElement("a", { className: styles.pointer, onClick: function () { return _this.onClick(imageMapping.url, imageMapping.openInNewWindow); } },
                        React.createElement("rect", { x: imageMapping.x, y: imageMapping.y, fill: "#fff", opacity: "0", width: imageMapping.width, height: imageMapping.height })));
                }))));
    };
    return ImageMapperLandingPage;
}(React.Component));
export default ImageMapperLandingPage;
//# sourceMappingURL=ImageMapperLandingPage.js.map