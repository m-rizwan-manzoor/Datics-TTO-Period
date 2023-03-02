import { styled, Button } from '@mui/material/';

export const DarkButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
        backgroundColor: theme.palette.otherColor.main,
    },
    fontSize: "0.9rem",
    borderRadius: "30px",
    textTransform: "capitalize",
    [theme.breakpoints.up("xs")]: {
        marginLeft: "8px",
        padding: "3px 10px",
    },
    [theme.breakpoints.up("md")]: {
        marginLeft: "16px",
        padding: "10px 30px",
    },

}));

export const LightButton = styled(Button)(({ theme }) => ({
    border: "2px solid",
    fontSize: "0.9rem",
    borderRadius: "30px",
    textTransform: "capitalize",
    [theme.breakpoints.up("xs")]: {
        marginLeft: "4px",
        padding: "2px 4px",
    },
    [theme.breakpoints.up("md")]: {
        marginLeft: "8px",
        padding: "7px 30px",
    },

}));