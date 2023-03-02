import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#142C8E",
    },
    otherColor: {
      main: "#0070E0",
    },
  },
});

theme.typography.h1 = {
  lineHeight: 1,
  fontSize: '2rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '6rem',
  },
};
