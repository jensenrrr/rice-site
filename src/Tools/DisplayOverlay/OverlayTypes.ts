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
  readonly backgroundVideo: string;
  readonly backgroundSize: BackgroundSize;
  readonly overlaidImages: readonly OverlaidImageInput[];
}
/*
export interface DisplayOverlayInfo {
  readonly backgroundImage: string;
  readonly backgroundSize: BackgroundSize;
  readonly overlaidImages: readonly OverlaidImageData[];
}*/
export interface BackgroundSize {
  width: boolean;
  scale: number;
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
  backgroundHeight: number;
  backgroundWidth: number;
}

/*interface DisplayOverlayInfo {
  backgroundImage: backgroundImage;
  overlayImages: OverlayImage[];
}
interface backgroundImage {
  image: string;
  width: number;
  height: number;
}
interface OverlayImage {
  image: string;
  relativePosition: relativePosition;
  absolutePosition: absolutePosition;
}

interface relativePosition {
  yRelative: number;
  xRelative: number;
  widthScale: number;
  heightScale: number;
}*/
