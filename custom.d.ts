import { StringMappingType } from "typescript";

declare module "*.svg" {
  const content: any;
}
declare module "*.jpg" {
  const content: string;
}
