import React from "react";
import { useState, useCallback } from "react";
import { History } from "history";

import useStyles from "../Global/Styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

import MMs from "../../core/classes/MMs";

const LAMBDA = "LAMBDA";
const MIU = "MIU";
const N = "N";
const S = "S"
const CS = "CS";
const CW = "CW";

type Input = "LAMBDA" | "MIU" | "N" | "S" | "CW" | "CS";

interface ServerOneProps {
  history: History;
}

const getHistory = (sim: MMs, n: number) => {
  let arr: number[] = [];

  for (let i = 0; i < n; i += 1) {
    arr.push(sim.getPn(i));
  }
  return arr;
};

const ServerOne: React.FC<ServerOneProps> = ({ history }) => {
  const classes = useStyles();
  const [lambda, setLambda] = useState(0);
  const [items, setItems] = useState<number[]>([]);
  const [miu, setMiu] = useState(0);
  const [cw, setCw] = useState(0);
  const [cs, setCs] = useState(0);
  const [s, setS] = useState(0);
  const [n, setN] = useState(0);
  const [state, setState] = useState({
    ro: 0,
    l: 0,
    lq: 0,
    wq: 0,
    w: 0,
    p0: 0,
    totalCost: 0,
  });


  const handleChange = (n: string, type: Input) => {
    if (!n) return;

    const parsedNum = parseInt(n);
    if (parsedNum < 0) return;
    if (type === LAMBDA) setLambda(parsedNum);
    if (type === MIU) setMiu(parsedNum);
    if (type === N) setN(parsedNum);
    if (type === S) setS(parsedNum);
    if (type === CW) setCw(parsedNum);
    if (type === CS) setCs(parsedNum);
  };

  const handleCalculate = () => {
    const sim: MMs = new MMs(lambda, miu, s);
    const res = sim.calculateVars();
    setState(res);
    setItems(getHistory(sim, n));
  };

  const handleCostCalculation = () => {
    const sim: MMs = new MMs(lambda, miu, s);
    const totalCost = sim.getTotalCost(cw, cs, state.lq, s);
    setState({
      ...state,
      totalCost,
    })
  }

  const navBack = useCallback(() => {
    history.replace("/");
  }, [history]);

  return (
    <Box pt={4} className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.gradientRed}  container
                direction="row">
            <IconButton size="medium" onClick={navBack}>
                <ArrowBackIosIcon fontSize="inherit" />
              </IconButton>
            <h1 className={classes.title}> Modelo M/M/S</h1>
          </Grid>
          <Grid item xs={4}>
            <Typography  variant="h4" color="inherit" className={classes.subtitles} >
              Variables
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography  variant="h4" color="inherit" className={classes.subtitles} >
              Resultados
            </Typography>
          </Grid>
          <Grid item xs={12} direction="row" container justify="space-between">
            <Grid item xs={4}  direction="row" container >
              <Grid item xs={6}  className={classes.myPadding}>
                <TextField
                  label="Lambda"
                  variant="outlined"
                  className={classes.textfield}
                  type="number"
                  value={lambda}
                  onChange={(e) => handleChange(e.target.value, LAMBDA)}
                />
              </Grid>
              <Grid item xs={6}  className={classes.myPadding}>
                <TextField
                  label="Miu"
                  variant="outlined"
                  type="number"
                  className={classes.textfield}
                  value={miu}
                  onChange={(e) => handleChange(e.target.value, MIU)}
                />
              </Grid>
              <Grid item xs={6}  className={classes.myPadding}>
                <TextField
                  label="S"
                  variant="outlined"
                  type="number"
                  className={classes.textfield}
                  value={s}
                  onChange={(e) => handleChange(e.target.value, S)}
                />
              </Grid>
              <Grid item xs={6}  className={classes.myPadding}>
                <TextField
                  label="N"
                  variant="outlined"
                  type="number"
                  className={classes.textfield}
                  value={n}
                  onChange={(e) => handleChange(e.target.value, N)}
                />
              </Grid>
              <Grid item xs={6}  className={classes.myPadding}>
                <TextField
                  label="CW"
                  variant="outlined"
                  type="number"
                  className={classes.textfield}
                  value={cw}
                  onChange={(e) => handleChange(e.target.value, CW)}
                />
              </Grid>
              <Grid item xs={6}  className={classes.myPadding}>
                <TextField
                  label="CS"
                  variant="outlined"
                  type="number"
                  className={classes.textfield}
                  value={cs}
                  onChange={(e) => handleChange(e.target.value, CS)}
                />
              </Grid>
              <Grid item xs={6} className={classes.myPadding}>
                <Fab variant="extended" onClick={handleCalculate} className={classes.myBtn}  >
                  Calcular
                </Fab>
              </Grid>
              <Grid item xs={6} className={classes.myPadding}>
                <Fab variant="extended" onClick={handleCostCalculation} className={classes.myBtn}  >
                  Costo Total
                </Fab>
              </Grid>
              <Grid item xs={12} container >
                <List className={classes.root}>
                  <ListItem>
                    <Avatar className={classes.redAvatar}>
                      <Icon>check_box_outline_blank</Icon>
                    </Avatar>
                    <ListItemText primary="Ro" secondary={" " + state.ro} className={ classes.text}/>
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.blueAvatar}>
                      <Icon>radio_button_checked</Icon>
                    </Avatar>
                    <ListItemText primary="LQ" secondary={" " + state.lq}/>
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.greenAvatar}> 
                      <Icon>panorama_horizontal</Icon>
                    </Avatar>
                    <ListItemText primary="L" secondary={" " + state.l} />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.yellowAvatar}> 
                      <Icon>panorama_vertical</Icon>
                    </Avatar>
                    <ListItemText primary="W" secondary={" " + state.w} />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.redAvatar}>
                      <Icon>panorama_wide_angle</Icon>
                    </Avatar>
                    <ListItemText primary="WQ" secondary={" " + state.wq} />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.blueAvatar}> 
                      <Icon>panorama_fish_eye</Icon>
                    </Avatar>
                    <ListItemText primary="P0" secondary={" " + state.p0}/>
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.blueAvatar}> 
                      <Icon>panorama_fish_eye</Icon>
                    </Avatar>
                    <ListItemText primary="CT" secondary={" " + state.totalCost}/>
                  </ListItem>
                </List>
              </Grid>
            </Grid>


            <Grid item xs={8}>
              <TableContainer>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Pn</TableCell>
                      <TableCell align="left">Probabilidad</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((item: number, index: number) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          P{index}
                        </TableCell>
                        <TableCell align="left">{item}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
            </TableContainer>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default ServerOne;
