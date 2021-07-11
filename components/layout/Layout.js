import React from "react";
import Header from "./Header";
import { Global, css } from "@emotion/react";
import Head from "next/head";
import { useSelector } from "react-redux";
import LinearProgress from '@material-ui/core/LinearProgress';

const Layout = ({children}) => {

  const primaryColor = useSelector(state => state.ui.colors)
  const loadingState = useSelector(state => state.ui.loading)

  return (
    <>
      <Global
        styles={css`
          :root {
            --primary: ${primaryColor ? primaryColor.firstColor : null};
            --secondary: ${primaryColor ? primaryColor.secondColor : null};
          }
          /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

          /* Box sizing rules */
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          /* Remove default margin */
          body,
          h1,
          h2,
          h3,
          h4,
          p,
          figure,
          blockquote,
          dl,
          dd {
            margin: 0;
          }

          /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
          ul[role="list"],
          ol[role="list"] {
            list-style: none;
          }

          /* Set core root defaults */
          html:focus-within {
            scroll-behavior: smooth;
          }

          /* Set core body defaults */
          body {
            min-height: 100vh;
            text-rendering: optimizeSpeed;
            line-height: 1.5;
            font-family: "Azo Sans", sans-serif;
          }

          /* A elements that don't have a class get default styles */
          a:not([class]) {
            text-decoration-skip-ink: auto;
          }

          /* Make images easier to work with */
          img,
          picture {
            max-width: 100%;
            display: block;
          }

          /* Inherit fonts for inputs and buttons */
          input,
          button,
          textarea,
          select {
            font: inherit;
          }

          /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
          @media (prefers-reduced-motion: reduce) {
            html:focus-within {
              scroll-behavior: auto;
            }

            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
          ${"" /* nextjs div at 100x100 */}
          html,
        body,
        body > div:first-of-type,
        div#__next,
        div#__next > div {
            height: 100%;
          }
          ${"" /* main {
            min-height: 100vh;
          } */}
        `}
      />
      <Head>
        <title>Learn the thing</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
          integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg=="
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="//db.onlinewebfonts.com/c/6c79f7fd645c0d39b4ca10428237984a?family=Azo+Sans"
          rel="stylesheet"
          type="text/css"
        />
        {/* <link href="/static/css/app.css" rel="stylesheet" /> */}
      </Head>
      {loadingState ? <LinearProgress variant='query' color="secondary" /> : <Header
        // css={css`
        //       height: 100%;
        //       padding: 120px;
        //       width: 100vw;
        //       position: absolute;
        //       top: 300px;
        //       bottom: 300px;
        //     `} 

            />}
      
      <main>{children}</main>
    </>
  );
};

export default Layout;
