import Head from "next/head";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import React, { useEffect } from "react";
import { Button, Container, makeStyles, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import CircularProgress from '@material-ui/core/CircularProgress';
import Category from "../components/layout/Category";
import { Provider } from 'react-redux';
import StrapiClient from '../lib/strapi-client'
import Result from "../components/layout/Result";
import store from '../redux/store'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles({
  root: {
    marginBottom: "16px",
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
  container: {
    marginTop: "11%",
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
  }
});

const PrimaryButton = styled(Button)`
  text-transform: uppercase;
  margin-bottom: 16px;
  background-color: #3f51b5;
  &:hover {
    background-color: #3f51b5;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
  }
`;
const SecondaryButton = styled(Button)`
  text-transform: uppercase;
  margin-bottom: 16px;
  background-color: #E1E8EB;
  color: black;
  &:hover {
    background-color: #E1E8EB;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
  }
`;

const client = new StrapiClient();

export default function Home() {
  const classes = useStyles();
  const router = useRouter();

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

  const containerBackground = {
    background: `linear-gradient(to right,  ${background.firstColor} 0%,${background.secondColor} 100%)`,
    width: '100%',
    height: '100%',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  }

  console.log(background.textColor)


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
    setTimeout(function () { setLoading(false) }, 1000);

  }

  const getBackgrounds = async () => {
    const result = await client.fetchData(`backgrounds`)
    //tengo que ver el tamaño, para hacer length y hacer un math random de su cantidad

    //rndInt sera un id random para hacer el fetch y traer los resultados
    const rndInt = Math.floor(Math.random() * result.length) + 1

    const background = await client.fetchData(`backgrounds/${rndInt}`)
    setBackground(background)
    setLoading(true)
    setTimeout(function () { setLoading(false) }, 1000);
  }

  //en esta tengo que hacer una logica de filtrado
  // const getStaticProps2 = async () => {
  //   const result = await client.fetchData('the-things')

  //   console.log(result)

  //   setResult(result)
  // }

  return (
    <Provider store={store}>
      <div style={containerBackground}>
        <Layout>
          <div>
            <Head>
              <title>Learn the Thing</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Container maxWidth="lg" className={classes.container}></Container> */}
            {/* <Category categories={categorias} /> */}
            {!loading ? <Grid container
              spacing={0}
              alignItems="center"
              justify="center"
              className={classes.buttonsContainer}>
              <Result result={result} colors={background} />

              <Button variant="contained"
                style={buttonCecondaryStyle}
                startIcon={<WhatsAppIcon />} className={classes.buttonChangeArticle} onClick={getStaticProps2}>Change article</Button>

              <Button variant="contained"
                style={buttonPrimaryStyle}
                startIcon={<WhatsAppIcon />} onClick={getBackgrounds}>Change background</Button>
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
      </div>
    </Provider>
  );
}
