export interface OverlayElementRenderProps {
  globalProps: any;
  absolutePositionAndSize: AbsolutePositionAndSize;
}
export interface OverlayElementInstance {
  render: any;
  globalProps: any;
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
  readonly globalProps?: any;
  readonly onLoad?: () => void;
  readonly overlaidElements: readonly OverlaidElementInput[];
}
export interface BackgroundScale {
  width?: number;
  height?: number;
  heightTrim?: number;
  cutTop?: boolean;
  cutBottom?: boolean;
}
export interface OverlaidElementInput {
  readonly render: any;
  readonly imgProps?: any;
  readonly relativePositionAndSize: RelativePositionAndSize;
}
export interface OverlaidElementData {
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
