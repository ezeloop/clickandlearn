import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from "react-redux";
import Image from 'next/image'
import Grid from '@material-ui/core/Grid';
import { setColors } from '../../redux/actions/uiActions';
import {
  TwitterShareButton,
  WhatsappShareButton,

  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '50px',

  },
  media: {
    height: 140,
  },
  textContainer: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '1rem'
  },
  image: {
    height: '100%',
  },
  imageContainer: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    border: '7px solid white'
  },
  icons: {
    margin: '1rem 1rem'
  }
});

export default function Result({ result, colors }) {
  const classes = useStyles();
  const dispatch = useDispatch()

  const selectedCategory = useSelector(state => state.category.category)

  const [image, setImage] = React.useState('')

  const [resultsInFilter, setResultsInFilter] = React.useState(result)

  const [resultSelected, setResultSelected] = React.useState('')

  // React.useEffect(()=> {

  //     if(result){
  //       const randomNumber = Math.floor(Math.random() )*10

  //       console.log(randomNumber )

  //       setResultSelected(result[randomNumber])


  //       if(selectedCategory){
  //         result.map((result, i)=> {
  //           if(result.categoria.id === selectedCategory && selectedCategory){
  //             setResultsInFilter(...resultsInFilter, result)
  //             console.log('yay')
  //           }
  //           console.log(result)
  //         })
  //       }
  //     }

  //     console.log(result)


  //   // if(resultsInFilter){
  //   //   const randomNumber = Math.random() * (resultsInFilter.length - 0) + 0;

  //   //   console.log(resultsInFilter[randomNumber])


  //   // }
  // }, [])

  React.useEffect(() => {
    if (result) {
      dispatch(setColors(colors))
    }
  }, [result])

  const buttonPrimaryStyle = {
    background: colors.firstColor,
    color: colors.textColor
  }

  const textColor = {
    color: colors.textColor,
    textAlign: 'justify'
  }

  return (
    <>
      {result ? (
        <Grid container className={classes.root} justifycontent="center" spacing={2}>
          <Grid xs={12} md={6} lg={6} className={classes.textContainer}>
            {result.categoria && (
              <Typography gutterBottom style={textColor} variant="h5" component="h2">
                {result.name} ({result.categoria.name})
              </Typography>)
            }
            <Typography variant="body2" style={textColor} component="p">
              {result.text}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            {result.image && (
              <div className={classes.imageContainer}>
                <Image
                  src={`http://localhost:1337${result.image.url}`}
                  height={result.image.formats.medium.height}
                  width={result.image.formats.medium.width}
                  className={classes.image}
                  priority
                />
              </div>
            )}
          </Grid>
          <Grid container
            spacing={0}
            alignItems="center"
            justify="flex-end">
            {result && (
              <>
                <WhatsappShareButton
                  url="Aprende mas en: https://lalala/"
                  className={classes.icons}
                  title={`${result.name} - ${result.text}`}
                  separator="- "
                >
                  <WhatsappIcon size={42} round />
                </WhatsappShareButton>
                <TwitterShareButton
                  className={classes.icons}
                  url="Aprende mas en: https://lalala/"
                  title={`${result.name} - ${result.text}`}
                >
                  <TwitterIcon size={42} round />
                </TwitterShareButton>
              </>
            )}
          </Grid>
        </Grid>
        /* <Image src={result.image} width={200} height={200}/> */
      ) : <p>Nada</p>}
    </>
  );
}
