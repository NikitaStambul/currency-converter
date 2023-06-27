/* eslint-disable no-unused-vars */
import { BreakpointOverrides, Theme, ThemeOptions, CssBaseline, useMediaQuery, PaletteOptions, PaletteColor, Palette, PaletteColorOptions } from '@mui/material';
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
}

declare module '@mui/material/styles' {
  interface TypeBackground {
    secondary: string;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    accent?: PaletteColor;
  }

  interface PaletteOptions {
    accent?: PaletteColorOptions;
  }
}