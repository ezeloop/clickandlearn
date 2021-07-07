import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    display: "grid",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
    margin: "8px 0",
  },
  icon: {
    ["@media (max-width:700px)"]: {
      // eslint-disable-line no-useless-computed-key
      marginTop: "20px",
      display: "grid",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

const AlertMessage = ({ message, severity }) => {
  //The severity it might be 4 types: "error", "warning", "info", "success"
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert variant="outlined" severity={severity} className={classes.icon}>
        <p>{message}</p>
      </Alert>
    </div>
  );
};

export default AlertMessage;
