import { CSSProperties, FC } from "react";

export interface OverlayImageRenderProps {
  img: string;
  hoverImg: string;
  hoverAdjust: RelativePositionAndSize;
  absolutePositionAndSize: AbsolutePositionAndSize;
}
export interface OverlayImageInstance {
  render: any;
  imgProps: any;
  absolutePositionAndSize?: AbsolutePositionAndSize;
}
export interface AbsolutePositionAndSize {
  top: number;
  left: number;
  width: number;
  height: number;
}
export interface DisplayOverlayInput {
  readonly backgroundImage: string;
  readonly backgroundVideo?: string;
  readonly backgroundScale?: BackgroundScale;
  readonly overlaidImages: readonly OverlaidImageInput[];
}
export interface BackgroundScale {
  width?: number;
  height?: number;
  heightTrim?: number;
  cutTop?: boolean;
  cutBottom?: boolean;
}
export interface OverlaidImageInput {
  readonly render: any;
  readonly imgProps: any;
  readonly relativePositionAndSize: RelativePositionAndSize;
}
export interface OverlaidImageData {
  readonly render: any;
  readonly imgProps: any;
  readonly relativePositionAndSize: RelativePositionAndSize;
  readonly absolutePositionAndSize: AbsolutePositionAndSize;
}
export interface RelativePositionAndSize {
  yRelative: number;
  xRelative: number;
  widthScale: number;
  heightScale: number;
}
export interface ResizeAction {
  verticalMargin: number;
  backgroundHeight: number;
  backgroundWidth: number;
}