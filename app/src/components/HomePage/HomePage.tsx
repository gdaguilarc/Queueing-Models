
import React from "react";
import { History } from "history";
import { useCallback } from "react";
import useStyles from "./HomePageStyles";

import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from "@material-ui/core/Box";



interface HomePageProps {
  history: History;
}

const HomePage: React.FC<HomePageProps> = ({ history }) => {
  const classes = useStyles();

  const navToMidSquare = useCallback(() => {
    history.push(`midsquare`);
  }, [history]);


  return (
    <Box className={classes.root}> 
      <div  className={classes.gradient}>
        <h1 className={classes.title}>SIMULADOR DE MODELOS DE FILAS DE ESPERA</h1>
        <Divider className={classes.divider} />
        <Card className={classes.card}>
          <CardContent>
            <Grid
              container
              direction="row"
              justify="space-between"
            >
              <Avatar className={classes.redAvatar}>
                  <Icon>view_agenda</Icon>
              </Avatar>
              <Typography className={classes.subtitles}  gutterBottom>
                Modelo M/M/1
              </Typography>
            
            </Grid>
            <Divider  className={classes.dividersmall}/>
            <Grid
              container
              direction="row"
              justify="space-between"
            >
              <Avatar className={classes.greenAvatar}>
                  <Icon>view_agenda</Icon>
              </Avatar>
              <Typography className={classes.subtitles} gutterBottom>
                Modelo M/M/s
              </Typography>
            
            </Grid>
            <Divider className={classes.dividersmall} />
            <Grid
              container
              direction="row"
              justify="space-between"
            >
              <Avatar className={classes.blueAvatar}>
                  <Icon>view_agenda</Icon>
              </Avatar>
              <Typography className={classes.subtitles}  gutterBottom>
                Modelo M/M/s/K
              </Typography>
            
            </Grid>
            <Divider  className={classes.dividersmall}/>
            <Grid
              container
              direction="row"
              justify="space-between"
            >
              <Avatar className={classes.yellowAvatar}>
                  <Icon>view_agenda</Icon>
              </Avatar>
              <Typography className={classes.subtitles}  gutterBottom>
                Modelo M/G/1
              </Typography>
            
            </Grid>
        </CardContent>
        </Card>
        </div>
      </Box>
  );
};



export default HomePage;