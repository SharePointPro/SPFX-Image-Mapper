import * as React from 'react';
import styles from './ImageMapperLandingPage.module.scss';
import { IImageMapperLandingPageProps } from './IImageMapperLandingPageProps';

export default class ImageMapperLandingPage extends React.Component<IImageMapperLandingPageProps, {}> {

  public onClick(link: string, openInNewWindow: boolean): void {
    if (openInNewWindow) {
      window.open(link, '_blank');
    } else {
      window.location.href = link;
    }

  }

  public render(): React.ReactElement<IImageMapperLandingPageProps> {
    console.log("this.props", this.props);
    return (
      <div className={styles.imageMapperLandingPage}>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1600 902">
          <image width={this.props.imageWidth} height={this.props.imageHeight} xlinkHref={this.props.imageUrl}></image>

          {this.props.items.map((imageMapping, index) => {
            return (
              <a className={styles.pointer} onClick={() => this.onClick(imageMapping.url, imageMapping.openInNewWindow)}>
                <rect x={imageMapping.x} y={imageMapping.y} fill="#fff" opacity="0" width={imageMapping.width} height={imageMapping.height}></rect>
              </a>)
          })}

        </svg>
      </div>
    );
  }
}
