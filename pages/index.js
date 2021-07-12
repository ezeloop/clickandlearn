import Head from "next/head";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import React, { useEffect } from "react";
import { Button, Container, makeStyles, Grid } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import Category from "../components/layout/Category";
import { useSelector, useDispatch } from 'react-redux';
import StrapiClient from '../lib/strapi-client'
import Result from "../components/layout/Result";
import {uiFinishLoading, uiStartLoading} from '../redux/actions/uiActions'

const useStyles = makeStyles({
  root: {
    marginBottom: "16px",
    height: '100%',
  },
  line: {
    height: "24rem",
    marginBottom: "4rem",
    boxShadow: "-1px 0px 0 #6c606a",
  },
  title: {
    fontWeight: "500",
    fontFamily: "60px",
  },
  subTitle: {
    fontSize: "16px",
    color: "#4d4d4d",
    fontWeight: "500",
    lineHeight: "27px",
    margin: "20px 0 20px 0",
  },
  button: {
    padding: "30px 30px 0 30px",
  },
  buttonChangeArticle: {
    marginRight: '30px'
  },
  spinner: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonsContainer: {
    paddingBottom: '2rem'
  },
  resultArticle: {
    height: '100%',
    paddingTop: '150px',
  },
  buttons: {
    paddingTop: '90px',
    paddingBottom: '50px',
    ["@media (max-width:768px)"]: {
      // eslint-disable-line no-useless-computed-key
      paddingTop: '90px',
      paddingBottom: '10px',
    },
    ["@media (max-width:320px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: 'grid',
      justifyContent: 'center',
      alignContent: 'space-between'
    },
  }
});

const client = new StrapiClient();

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [categorias, setCategorias] = React.useState([])

  const [loading, setLoading] = React.useState(false)

  const [result, setResult] = React.useState({})

  const [background, setBackground] = React.useState({})

  const buttonPrimaryStyle = {
    background: background.firstColor,
    color: background.textColor,
  }

  const buttonCecondaryStyle = {
    background: background.secondColor,
    color: background.textColor,
  }

  useEffect(() => {

    getStaticProps();
    getStaticProps2();
    getBackgrounds();
  }, [])

  const getStaticProps = async () => {
    const categorias = await client.fetchData('categorias')

    setCategorias(categorias)

  }

  const getStaticProps2 = async () => {
    const result = await client.fetchData(`the-things`)
    //tengo que ver el tamaño, para hacer length y hacer un math random de su cantidad

    //rndInt sera un id random para hacer el fetch y traer los resultados
    const rndInt = Math.floor(Math.random() * result.length) + 1

    const article = await client.fetchData(`the-things/${rndInt}`)

    setResult(article)
    setLoading(true)
    dispatch(uiStartLoading())
    setTimeout(function () { dispatch(uiFinishLoading()) }, 1000);
    setTimeout(function () { setLoading(false) }, 1000);

  }

  const getBackgrounds = async () => {
    const result = await client.fetchData(`backgrounds`)
    //tengo que ver el tamaño, para hacer length y hacer un math random de su cantidad

    //rndInt sera un id random para hacer el fetch y traer los resultados
    const rndInt = Math.floor(Math.random() * result.length) + 1

    const background = await client.fetchData(`backgrounds/${rndInt}`)
    setBackground(background)
    dispatch(uiStartLoading())
    setLoading(true)
    setTimeout(function () { setLoading(false) }, 1000);
    setTimeout(function () { dispatch(uiFinishLoading()) }, 1000);
  }

  //en esta tengo que hacer una logica de filtrado
  // const getStaticProps2 = async () => {
  //   const result = await client.fetchData('the-things')

  //   console.log(result)

  //   setResult(result)
  // }

  return (
        <Layout>
        
          <div>
            {/* <Container maxWidth="lg" className={classes.container}></Container> */}
            {/* <Category categories={categorias} /> */}
            {!loading ? <Grid container
              spacing={0}
              alignItems="center"
              justify="center"
              className={classes.buttonsContainer}>
              <div className={classes.buttons}>
                <Button variant="contained"
                  style={buttonCecondaryStyle}
                  className={classes.buttonChangeArticle} onClick={getStaticProps2}>Change article</Button>

                <Button variant="contained"
                  style={buttonPrimaryStyle}
                  onClick={getBackgrounds}>Change background</Button>
              </div>
              <Result result={result} colors={background} className={classes.resultArticle}/>
            </Grid> :
              <Grid container
                spacing={0}
                alignItems="center"
                justify="center"
                className={classes.spinner}>
                <CircularProgress color="secondary" />
              </Grid>
            }

          </div>
        </Layout>
     
  );
}
