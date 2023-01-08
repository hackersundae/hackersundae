import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      coffee: "hsl(10,4%,96%)",
      hiContrast: "hsl(256,15%,21%)",
      loContrast: "white",
      hierContrast: "black",

      gray100: "hsl(206,22%,99%)",
      gray200: "hsl(206,12%,97%)",
      gray300: "hsl(206,11%,92%)",
      gray400: "hsl(206,10%,84%)",
      gray500: "hsl(206,10%,76%)",
      gray550: "hsl(215,20%,72%)",
      gray600: "hsl(206,10%,44%)",
      gray700: "hsl(210,10%,13%)",

      purple100: "hsl(252,100%,99%)",
      purple200: "hsl(252,100%,98%)",
      purple300: "hsl(252,100%,94%)",
      purple400: "hsl(252,75%,84%)",
      purple500: "hsl(252,78%,60%)",
      purple600: "hsl(252,80%,53%)",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
      7: "32px",
      8: "36px",
    },
    fonts: {
      system: "system-ui",
      hacker: "IBM Plex Mono, monospace;",
    },
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    sm: "(max-width: 640px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1024px)",
    xl: "(min-width: 1025px)",
  },
});
