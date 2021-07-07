import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from "react-redux";
import Image from 'next/image'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '50px'
  },
  media: {
    height: 140,
  },
  // imageContainer: {
  //   width: '400px'
  // }
});

export default function Result({ result }) {
  const classes = useStyles();

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


  return (
    <>
      {result ? (
        <Grid container className={classes.root} justifycontent="center" spacing={2}>
          <Grid item xs={6}>
            {result.categoria && (
              <Typography gutterBottom variant="h5" component="h2">
                {result.name} ({result.categoria.name})
              </Typography>)
            }
            <Typography variant="body2" color="textSecondary" component="p">
              {result.text}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {result.image && (
              <div className={classes.imageContainer}>
                <Image
                  src={`http://localhost:1337${result.image.url}`}
                  height={500}
                  width={600}
                  priority
                />
              </div>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button size="small" color="primary">
              Share via whatsapp
            </Button>
          </Grid>
        </Grid>
        /* <Image src={result.image} width={200} height={200}/> */
      ) : <p>Nada</p>}
    </>
  );
}
