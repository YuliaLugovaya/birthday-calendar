export const colors = {
  text: {
    primary: "#252525",
    secondary: "#FFFFFF",
  },
  color: {
    blueLight: "#e0f7fa",
    blue: "#26c6da",
    blueDark: "#0097a7",
    yellow: "#fbc02d",
    green: "#81c784",
    greenLight: "#e8f5e9",
    yellowLight: "#fffde7",
    coral: "#ffab91",
    coralLight: "#fbe9e3",
    disabled: "#e0e0e0",
    grey: "#424242",
  },
};

declare module "@mui/material/styles" {
  interface Palette {
    color: {
      blueLight: string;
      blue: string;
      blueDark: string;
      yellow: string;
      green: string;
      greenLight: string;
      yellowLight: string;
      coral: string;
      coralLight: string;
      disabled: string;
      grey: string;
    };
  }
  interface PaletteOptions {
    color?: {
      blueLight?: string;
      blue?: string;
      blueDark?: string;
      yellow?: string;
      green?: string;
      greenLight?: string;
      yellowLight?: string;
      coral?: string;
      coralLight?: string;
      disabled?: string;
      grey?: string;
    };
  }
}
