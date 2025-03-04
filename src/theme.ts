import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    customVars: {
      headerHeight: string;
    };
  }
  interface ThemeOptions {
    customVars?: {
      headerHeight?: string;
    };
  }
}
const HEADER_HEIGHT = "57px";


const theme = createTheme({
  customVars: {
    headerHeight: HEADER_HEIGHT,
  },
});

export default theme;
