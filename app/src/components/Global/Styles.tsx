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
      fontWeight: "bold",
    },
    gradientRed: {
      background:
        " linear-gradient(90deg, rgba(234,67,53,1) 64%, rgba(230,91,79,1) 82%, rgba(227,148,141,1) 100%)",
      padding: "50px 100px",
      width: "100%",
    },
    gradientBlue: {
      background:
        "linear-gradient(90deg, rgba(66,133,244,1) 64%, rgba(117,162,236,1) 82%, rgba(160,191,242,1) 100%)",
      padding: "50px 100px",
      width: "100%",
    },
    gradientGreen: {
      background:
        "linear-gradient(90deg, rgba(52,168,83,1) 64%, rgba(89,200,119,1) 82%, rgba(128,219,152,1) 100%)",
      padding: "50px 100px",
      width: "100%",
    },
    gradientYellow: {
      background:
        "linear-gradient(90deg, rgba(251,188,5,1) 64%, rgba(242,199,74,1) 82%, rgba(250,233,182,0.9920168751094187) 100%)",
      padding: "50px 100px",
      width: "100%",
    },
    title: {
      color: "#f0f4fb",
      margin: "1rem auto",
    },
    subtitles: {
      color: theme.palette.primary.main,
      margin: "auto 0  !important",
      fontWeight: "bold",
    },

    myPadding: {
      padding: "5px"
    },
    redAvatar: {
      backgroundColor: "#4e69a2 !important"
    },
    yellowAvatar: {
      backgroundColor: "#627aac !important"
    },  
    greenAvatar: {
      backgroundColor: "#758ab6 !important"
    },
    blueAvatar: {
      backgroundColor: "#899bc1 !important"
    }, 

    card: {
      maxWidth: "30rem",
      margin: "9rem auto 0 auto",
    },

    myBtn: {
      backgroundColor: "#3b5998 !important",
      color: "#ffffff !important",
    },


    // CLASSES DAVIDCIN ;)
    textfield: {
      width: "100%",
    },
    cardTemp: {
      height: "214px",
    },
    centeredCard: {
      width: "100%",
      height: "214px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    centered: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export default useStyles;
