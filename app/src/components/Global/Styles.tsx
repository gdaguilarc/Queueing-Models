import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#efefef",
      minHeight: "100vh",
      color: theme.palette.primary.dark,
      flexFlow: "1",
    },
    container: {
      padding: theme.spacing(2),
    },
    text: {
        color: theme.palette.primary.dark,
        fontWeight: "bold"
    },
    gradient: {     
      background: "linear-gradient(90deg, rgba(59,89,153,1) 55%, rgba(69,97,157,1) 78%, rgba(95,120,173,0.9023810207676821) 100%)",
      height: "20rem",
      borderRadius: "0px",
      padding: '50px 100px'
    },
    cards: {
      borderRadius: "0px",
    },
    title: {
      color: "#f0f4fb",

    },
    subtitles: {
      color: theme.palette.secondary.light,
      margin: "auto 0  !important",
    },
    divider: {
      height: "5px !important",
      backgroundColor:  "#f0f4fb !important"
    },
    icon: {
    margin: 1 * 2,
    },
    card: {
      maxWidth: "30rem",
      margin: "9rem auto 0 auto", 
    },
    dividersmall: {
      margin: "1.5rem 0rem !important"
    },
    blueAvatar: {
      backgroundColor: "#4285f4 !important"
    },  
    redAvatar: {
      backgroundColor: "#ea4335 !important"
    },
    yellowAvatar: {
      backgroundColor: "#fbbc05 !important"
    },  
    greenAvatar: {
      backgroundColor: "#34a853 !important"
    }  
  })
);

export default useStyles;
