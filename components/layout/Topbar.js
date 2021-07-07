import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Topbar = () => {

  const classes = useStyles();

  return (
    <>
    <button>background</button>
    </>
  );
};

export default Topbar;
