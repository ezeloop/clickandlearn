import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { css } from "@emotion/react";
import { makeStyles } from "@material-ui/core/styles";
import StyleIcon from '@material-ui/icons/Style';
import Image from "next/image";
import { useSelector } from "react-redux";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  alignJustifyCenter: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
  },
  titleTopbarLogged: {
    width: "13rem",
    height: "70px",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
  },
  titleColorWhite: {
    color: "white",
    fontWeight: 700,
  },
  buttonBackground: {
    color: 'white',
    margin: '0 20px',
    "&:hover": {
      borderRadius: "2px",
      color: "#dc7652",
      transition: "0.2s",
    },
  }
});

const ContainerHeader = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: var(--primary);
  display: grid;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: 'absolute';
  top: 0

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Header = () => {
  //si user es true, quiere decir que está logueado (falta que se cree con redux)
  const [user, setUser] = useState(true);

  const classes = useStyles();

  return (
    <header
      css={css`
        border-bottom: 7px solid white;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
      `}
    >
      <ContainerHeader>
        <Link href="/">
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
              height: 100%;
              cursor: pointer;
            `}
          >
            {/* <Image
              src="/LogoCenco.png"
              alt="Picture of the author"
              width={137}
              height={74}
            /> */}
            <div className={classes.titleTopbarLogged}>
              <p className={classes.titleColorWhite}>LEARN THE THING</p>
            </div>
          </div>
        </Link>
        {/* <div>
          <StyleIcon fontSize="large" className={classes.buttonBackground}/>
        </div> */}

        {/* agregar aqui un boton para cambiar el background color */}
      </ContainerHeader>
    </header>
  );
};

export default Header;
