import React from "react";
import { useState, useCallback } from "react";
import { History } from "history";


import useStyles from "../Global/Styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";



interface ServerOneProps {
  history: History;
}

const ServerOne: React.FC<ServerOneProps> = ({ history }) => {
    const classes = useStyles();
    
    const navBack = useCallback(() => {
      history.replace("/");
    }, [history]);

return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
         <Typography variant="h4" className={classes.text}>
          <IconButton size="medium" onClick={navBack}>
            <ArrowBackIosIcon fontSize="inherit" />
          </IconButton>
          Modelo M/M/1
        </Typography>
      </Container>
    </Box>
  );
};

export default ServerOne;