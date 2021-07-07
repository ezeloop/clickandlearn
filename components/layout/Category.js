import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';
import {setCategoryAction} from '../../redux/actions/category';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent:'center'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Category({categories}) {
  const classes = useStyles();
  const [category, setCategory] = React.useState('Random');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const dispatch = useDispatch();

  React.useEffect( ()=> {
    if(category){
        dispatch(setCategoryAction(category))
    }
  }, [category])

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
        >
           {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
        </Select>
      </FormControl>
     
    </div>
  );
}