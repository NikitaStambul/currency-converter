/* eslint-disable no-unused-vars */
import { BreakpointOverrides, PaletteColor, PaletteColorOptions } from '@mui/material';
import React from 'react';

declare module '@mui/material' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
  }
}

declare module '@mui/material' {
  interface Theme {
    appDrawer: {
      width: React.CSSProperties['width'];
      breakpoint: BreakpointOverrides;
    };
  }
  interface ThemeOptions {
    appDrawer?: {
      width?: React.CSSProperties['width'];
      breakpoint?: BreakpointOverrides;
    };
  }

  interface TypeText {
    dark: string;
  }

  interface TypeBackground {
    secondary: string;
  }

  interface Palette {
    accent?: PaletteColor;
  }

  interface PaletteOptions {
    accent?: PaletteColorOptions;
  }
}
