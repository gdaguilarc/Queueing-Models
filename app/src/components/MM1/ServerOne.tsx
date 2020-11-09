import React from "react";
import { useState, useCallback } from "react";
import { History } from "history";


import useStyles from "../Global/Styles";
import Box from "@material-ui/core/Box";
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
     <IconButton size="medium" onClick={navBack}>
            <ArrowBackIosIcon fontSize="inherit" />
          </IconButton>
      <h1>hola</h1>
    </Box>
  );
};

export default ServerOne;