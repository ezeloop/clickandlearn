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
});

const PrimaryButton = styled(Button)`
  text-transform: none;
  margin-bottom: 16px;
  background-color: #0069b6;
  &:hover {
    background-color: #da552f;
  }
`;
const SecondaryButton = styled(Button)`
  text-transform: none;
  margin-bottom: 16px;
`;

const client = new StrapiClient();

export default function Home() {
  const classes = useStyles();
  const router = useRouter();

  const [categorias, setCategorias] = React.useState([])

  const [result, setResult] = React.useState({})

  const [background, setBackground] = React.useState({})


  useEffect(() => {

    getStaticProps();
    getStaticProps2();
    getBackgrounds();
    console.log('intente cargar')
  }, [])

  const getStaticProps = async () => {
    const categorias = await client.fetchData('categorias')

    console.log(categorias)

    setCategorias(categorias)

  }

  const getStaticProps2 = async () => {
    const result = await client.fetchData(`the-things`)
    //tengo que ver el tamaño, para hacer length y hacer un math random de su cantidad

    //rndInt sera un id random para hacer el fetch y traer los resultados
    const rndInt = Math.floor(Math.random() * result.length) + 1

    const article = await client.fetchData(`the-things/${rndInt}`)

    console.log(article)

    setResult(article)
  }

  const getBackgrounds = async () => {
    const result = await client.fetchData(`backgrounds`)
    //tengo que ver el tamaño, para hacer length y hacer un math random de su cantidad

    //rndInt sera un id random para hacer el fetch y traer los resultados
    const rndInt = Math.floor(Math.random() * result.length) + 1

    const background = await client.fetchData(`backgrounds/${rndInt}`)

    console.log(background)

    setBackground(background)
  }

  //en esta tengo que hacer una logica de filtrado
  // const getStaticProps2 = async () => {
  //   const result = await client.fetchData('the-things')

  //   console.log(result)

  //   setResult(result)
  // }

  return (
    <Provider store={store}>
      <div style={{background: `linear-gradient(to right,  ${background.firstColor} 0%,${background.secondColor} 100%)`}}>
        <Layout>
          <div>
            <Head>
              <title>Learn the Thing</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Container maxWidth="lg" className={classes.container}></Container> */}
            {/* <Category categories={categorias} /> */}
            <Result result={result} />
            <button onClick={getStaticProps2}>Change article</button>
            <button onClick={getBackgrounds}>Change background</button>
          </div>
        </Layout>
      </div>
    </Provider>
  );
}
