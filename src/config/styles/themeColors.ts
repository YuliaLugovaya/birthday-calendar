export const colors = {
  text: {
    primary: "#000000",
    secondary: "#FFFFFF",
  },
  color: {
    background: "#e0f7fa",
    accent: "#26c6da",
    hover: "#0097a7",
    birthday: "#fbc02d",
    other: "#81c784",
    greenLight: "#e8f5e9",
    yellowLight: "#fffde7",
    wedding: "#ffab91",
    disabled: "#e0e0e0",
    grey: "#424242",
  },
};

declare module "@mui/material/styles" {
  interface Palette {
    color: {
      background: string;
      accent: string;
      hover: string;
      birthday: string;
      other: string;
      greenLight: string;
      yellowLight: string;
      wedding: string;
      disabled: string;
      grey: string;
    };
  }
  interface PaletteOptions {
    color?: {
      background?: string;
      accent?: string;
      hover?: string;
      birthday?: string;
      other?: string;
      greenLight?: string;
      yellowLight?: string;
      wedding?: string;
      disabled?: string;
      grey?: string;
    };
  }
}
