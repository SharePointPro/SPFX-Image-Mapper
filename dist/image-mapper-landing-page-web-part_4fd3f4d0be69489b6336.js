define("c895c94f-ba8c-42aa-b0fa-90c0d8224369_0.0.1",["@microsoft/sp-property-pane","@microsoft/sp-core-library","@microsoft/sp-webpart-base","react","react-dom"],function(n,a,i,r,o){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="Kd4u")}({"26ea":function(e,t){e.exports=n},JPst:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,a,i,r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var s=(n=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(i," */")),c=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[r].concat(c).concat([s]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(a[r]=!0)}for(var o=0;o<e.length;o++){var s=e[o];null!=s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},Kd4u:function(e,t,n){"use strict";n.r(t);var a=n("cDcd"),i=n("faye"),r=n("UWqr"),o=n("26ea"),s=n("br4S");n("pSp2");var c,d=(c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.onClick=function(e,t){t?window.open(e,"_blank"):window.location.href=e},t.prototype.render=function(){var e=this;return a.createElement("div",{className:"imageMapperLandingPage_89167875"},a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 1600 902"},a.createElement("image",{width:this.props.imageWidth,height:this.props.imageHeight,xlinkHref:this.props.imageUrl}),this.props.items.map(function(t,n){return a.createElement("a",{className:"pointer_89167875",onClick:function(){return e.onClick(t.url,t.openInNewWindow)}},a.createElement("rect",{x:t.x,y:t.y,fill:"#fff",opacity:"0",width:t.width,height:t.height}))})))},t}(a.Component),u=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.render=function(){var e=a.createElement(l,{description:this.properties.description,imageUrl:this.properties.imageUrl,imageHeight:this.properties.imageHeight,imageWidth:this.properties.imageWidth,items:this.properties.items});i.render(e,this.domElement)},t.prototype.onDispose=function(){i.unmountComponentAtNode(this.domElement)},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return r.Version.parse("1.0")},enumerable:!1,configurable:!0}),t.prototype.onAddButtonClick=function(e){this.properties.items.push({})},t.prototype.onDeleteButtonClick=function(e){this.properties.items.splice(e,1)},t.prototype.createNewGroup=function(e,t){return{groupName:"Mapped Area "+(t+1),groupFields:[Object(o.PropertyPaneTextField)("items["+t+"].x",{label:"X",value:e.x}),Object(o.PropertyPaneTextField)("items["+t+"].y",{label:"Y",value:e.y}),Object(o.PropertyPaneTextField)("items["+t+"].width",{label:"Width",value:e.width}),Object(o.PropertyPaneTextField)("items["+t+"].height",{label:"Height",value:e.height}),Object(o.PropertyPaneTextField)("items["+t+"].url",{label:"Url",value:e.url}),Object(o.PropertyPaneCheckbox)("items["+t+"].openInNewWindow",{checked:e.openInNewWindow,text:"Open in new window"}),Object(o.PropertyPaneButton)("deleteButton",{text:"Delete",buttonType:o.PropertyPaneButtonType.Command,icon:"RecycleBin",onClick:this.onDeleteButtonClick.bind(this,t)}),Object(o.PropertyPaneButton)("addButton",{text:"Add",buttonType:o.PropertyPaneButtonType.Command,icon:"CirclePlus",onClick:this.onAddButtonClick.bind(this)})]}},t.prototype.getPropertyPaneConfiguration=function(){var e=this,t=[];return t.push({header:{description:"Image Area Settings"},groups:[{groupName:"Image",groupFields:[Object(o.PropertyPaneTextField)("imageUrl",{label:"Image Url"}),Object(o.PropertyPaneTextField)("imageHeight",{label:"Image Height"}),Object(o.PropertyPaneTextField)("imageWidth",{label:"Image Width"})]},{groupName:"",groupFields:[Object(o.PropertyPaneButton)("addButton",{text:"Add",buttonType:o.PropertyPaneButtonType.Command,icon:"CirclePlus",onClick:this.onAddButtonClick.bind(this)})]}]}),console.log(this.properties),this.properties.items.forEach(function(n,a){t.push({header:{description:"Map Area "+(a+1)},groups:[e.createNewGroup(n,a)]})}),{pages:t}},t}(s.BaseClientSideWebPart);t.default=f},UWqr:function(e,t){e.exports=a},XNXU:function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,'.imageMapperLandingPage_89167875{height:calc(100vh - 270px)}.imageMapperLandingPage_89167875 svg{height:100%}.imageMapperLandingPage_89167875 .image_89167875{width:100%}.imageMapperLandingPage_89167875 .pointer_89167875{cursor:pointer}.imageMapperLandingPage_89167875 .container_89167875{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.imageMapperLandingPage_89167875 .row_89167875{margin:0 -8px;box-sizing:border-box;zoom:1;color:#fff;background-color:#005a9e;padding:20px}.imageMapperLandingPage_89167875 .row_89167875:after,.imageMapperLandingPage_89167875 .row_89167875:before{display:table;content:"";line-height:0}.imageMapperLandingPage_89167875 .row_89167875:after{clear:both}.imageMapperLandingPage_89167875 .column_89167875{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .imageMapperLandingPage_89167875 .column_89167875{float:left}[dir=rtl] .imageMapperLandingPage_89167875 .column_89167875{float:right}.imageMapperLandingPage_89167875 .column_89167875 .ms-Grid_89167875{padding:0}@media (min-width:640px){.imageMapperLandingPage_89167875 .column_89167875{width:83.3333333333%}}@media (min-width:1024px){.imageMapperLandingPage_89167875 .column_89167875{width:66.6666666667%}}@media (min-width:1024px){[dir=ltr] .imageMapperLandingPage_89167875 .column_89167875{left:16.6666666667%}[dir=rtl] .imageMapperLandingPage_89167875 .column_89167875{right:16.6666666667%}}@media (min-width:640px){[dir=ltr] .imageMapperLandingPage_89167875 .column_89167875{left:8.3333333333%}[dir=rtl] .imageMapperLandingPage_89167875 .column_89167875{right:8.3333333333%}}.imageMapperLandingPage_89167875 .title_89167875{font-size:21px;font-weight:100;color:#fff}.imageMapperLandingPage_89167875 .description_89167875,.imageMapperLandingPage_89167875 .subTitle_89167875{font-size:17px;font-weight:300;color:#fff}.imageMapperLandingPage_89167875 .button_89167875{text-decoration:none;height:32px;min-width:80px;background-color:#0078d4;border-color:#0078d4;color:#fff;outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.imageMapperLandingPage_89167875 .button_89167875 .label_89167875{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}',""])},br4S:function(e,t){e.exports=i},cDcd:function(e,t){e.exports=r},faye:function(e,t){e.exports=o},pSp2:function(e,t,n){var a=n("XNXU"),i=n("ruv1");"string"==typeof a&&(a=[[e.i,a]]);for(var r=0;r<a.length;r++)i.loadStyles(a[r][1],!0);a.locals&&(e.exports=a.locals)},ruv1:function(e,t,n){"use strict";(function(e){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.splitStyles=t.detokenize=t.clearStyles=t.loadTheme=t.flush=t.configureRunMode=t.configureLoadStyles=t.loadStyles=void 0;var a,i="undefined"==typeof window?e:window,r=i&&i.CSPSettings&&i.CSPSettings.nonce,o=((a=i.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]}).runState||(a=n(n({},a),{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}})),a.registeredThemableStyles||(a=n(n({},a),{registeredThemableStyles:[]})),i.__themeState__=a,a),s=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,c=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function d(e){var t=c();e();var n=c();o.perf.duration+=n-t}function l(){d(function(){var e=o.runState.buffer.slice();o.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&u(t)})}function u(e,t){o.loadStyles?o.loadStyles(m(e).styleString,e):function(e){if("undefined"!=typeof document){var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),a=m(e),i=a.styleString,s=a.themable;n.setAttribute("data-load-themed-styles","true"),r&&n.setAttribute("nonce",r),n.appendChild(document.createTextNode(i)),o.perf.count++,t.appendChild(n);var c=document.createEvent("HTMLEvents");c.initEvent("styleinsert",!0,!1),c.args={newStyle:n},document.dispatchEvent(c);var d={styleElement:n,themableStyle:e};s?o.registeredThemableStyles.push(d):o.registeredStyles.push(d)}}(e)}function f(e){void 0===e&&(e=3),3!==e&&2!==e||(p(o.registeredStyles),o.registeredStyles=[]),3!==e&&1!==e||(p(o.registeredThemableStyles),o.registeredThemableStyles=[])}function p(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function m(e){var t=o.theme,n=!1;return{styleString:(e||[]).map(function(e){var a=e.theme;if(a){n=!0;var i=t?t[a]:void 0,r=e.defaultValue||"inherit";return t&&!i&&console,i||r}return e.rawString}).join(""),themable:n}}function _(e){var t=[];if(e){for(var n=0,a=void 0;a=s.exec(e);){var i=a.index;i>n&&t.push({rawString:e.substring(n,i)}),t.push({theme:a[1],defaultValue:a[2]}),n=s.lastIndex}t.push({rawString:e.substring(n)})}return t}t.loadStyles=function(e,t){void 0===t&&(t=!1),d(function(){var n=Array.isArray(e)?e:_(e),a=o.runState,i=a.mode,r=a.buffer,s=a.flushTimer;t||1===i?(r.push(n),s||(o.runState.flushTimer=setTimeout(function(){o.runState.flushTimer=0,l()},0))):u(n)})},t.configureLoadStyles=function(e){o.loadStyles=e},t.configureRunMode=function(e){o.runState.mode=e},t.flush=l,t.loadTheme=function(e){o.theme=e,function(){if(o.theme){for(var e=[],t=0,n=o.registeredThemableStyles;t<n.length;t++){var a=n[t];e.push(a.themableStyle)}e.length>0&&(f(1),u([].concat.apply([],e)))}}()},t.clearStyles=f,t.detokenize=function(e){return e&&(e=m(_(e)).styleString),e},t.splitStyles=_}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}})});