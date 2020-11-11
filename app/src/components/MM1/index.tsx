import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import { History } from "history";

import useStyles from "../Global/Styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
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

import MM1 from "../../core/classes/MM1";
import { parse } from "path";

const LAMBDA = "LAMBDA";
const MIU = "MIU";
const N = "N";

type Input = "LAMBDA" | "MIU" | "N";

interface ServerOneProps {
  history: History;
}

const getHistory = (sim: MM1, n: number) => {
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
  const [n, setN] = useState(0);
  const [state, setState] = useState({
    ro: 0,
    l: 0,
    lq: 0,
    wq: 0,
    w: 0,
    p0: 0,
  });

  // useEffect(() => {}, []);

  const handleChange = (n: string, type: Input) => {
    if (!n) return;

    const parsedNum = parseInt(n);
    if (parsedNum < 0) return;
    if (type === LAMBDA) setLambda(parsedNum);
    if (type === MIU) setMiu(parsedNum);
    if (type === N) setN(parsedNum);
  };

  const handleCalculate = () => {
    const sim: MM1 = new MM1(lambda, miu);
    const res = sim.calculateVars();
    setState(res);
    setItems(getHistory(sim, n));
  };

  const navBack = useCallback(() => {
    history.replace("/");
  }, [history]);

  return (
    <Box pt={4} className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.text}>
              <IconButton size="medium" onClick={navBack}>
                <ArrowBackIosIcon fontSize="inherit" />
              </IconButton>
              Modelo M/M/1
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" color="inherit">
              VARIABLES
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Lambda"
              variant="outlined"
              className={classes.textfield}
              type="number"
              value={lambda}
              onChange={(e) => handleChange(e.target.value, LAMBDA)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Miu"
              variant="outlined"
              type="number"
              className={classes.textfield}
              value={miu}
              onChange={(e) => handleChange(e.target.value, MIU)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="N"
              variant="outlined"
              type="number"
              className={classes.textfield}
              value={n}
              onChange={(e) => handleChange(e.target.value, N)}
            />
          </Grid>
          <Grid item xs={3} className={classes.centered}>
            <Button
              variant="outlined"
              size="large"
              className={classes.textfield}
              onClick={handleCalculate}
            >
              CALCULAR
            </Button>
          </Grid>
          <Grid item xs={6}>
            RO: {" " + state.ro}
          </Grid>
          <Grid item xs={6}>
            LQ: {" " + state.lq}
          </Grid>
          <Grid item xs={6}>
            L: {" " + state.l}
          </Grid>
          <Grid item xs={6}>
            W: {" " + state.w}
          </Grid>
          <Grid item xs={6}>
            WQ: {" " + state.wq}
          </Grid>
          <Grid item xs={6}>
            P0: {" " + state.p0}
          </Grid>
          <Grid item xs={12}>
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
      </Container>
    </Box>
  );
};

export default ServerOne;
