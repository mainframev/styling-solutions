import type { CSSProp } from "@compiled/react";

interface Theme {}

declare module "react" {
  interface Attributes {
    css?: CSSProp<MyTheme>;
  }
}
