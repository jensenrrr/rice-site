export interface OverlayImageInstance {
  img: string;
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
  readonly img: string;
  readonly relativePositionAndSize: RelativePositionAndSize;
}
export interface OverlaidImageData {
  readonly img: string;
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
