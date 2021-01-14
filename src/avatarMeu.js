import {Container, Typography, Box, Avatar, makeStyles, useMediaQuery}
from '@material-ui/core'
import { sizing, width, height } from '@material-ui/system';

const useEstilos = makeStyles((theme)=>({
  large:{
    width: theme.spacing(7),
    height: theme.spacing(7),
    float: 'left'
  },
}))

function avatarMeu() {
  const classes = useEstilos();

  return(
    <Avatar alt='Gustavo Malfa Correa' src='/gumalfa.jpg'
    className={classes.large}/>
  )
}

export default avatarMeu
