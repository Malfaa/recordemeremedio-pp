import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import theme from '../src/theme'
import AvatarMeu from '../src/avatarMeu'
import {Container, Typography, Box, Avatar, makeStyles, useMediaQuery, Switch,
  Paper,Grow, GridList, GridListTile, GridListTileBar,Tooltip, Accordion,
  AccordionSummary, AccordionDetails}
from '@material-ui/core'

function Home(){

  const useEstilos = makeStyles((theme)=>({
    categoriaCentral:{
      background: 'linear-gradient(45deg, #a66bfe 30%, #d2fff6 90%)',//FF8E53  a66bfe
      padding: '0 30px',
      borderRadius: 5,
    },
    mainSectionInfo:{
      border: "2px",
      borderStyle: 'solid',
      float: 'right',
      margin: '1px',
      padding: '1px',
      backgroundColor: 'grey',
      borderRadius: '10px',
      width: '69%',
      [theme.breakpoints.down("sm")]:{
        width : '99%',
        float: 'none'

      }
    },
    mainProfileInfo:{
      backgroundColor: '#d2fff6',
      padding: '20px',
      float: 'left',
      border: '2px solid',
      borderRadius: '10px',
      borderStyle: 'solid',
      [theme.breakpoints.down('sm')]:{
        width : '99%',
        float: 'none',
        alignItems: 'flex-start',
        marginBottom:'4px'
      }
    },
    secaoProjetos:{
      padding: '10px',
      margin: '15px',
      backgroundColor: 'white',
      display: 'flex',
      borderRadius: '5px',
      border: '0px',
      height: '210px',

    },
    mainBlock:{
      padding:'30px',
      background: '#e7e5ec',
      overflow:'hidden',
      height:'100%',
    },
    projetos:{
      width: '100%',
      minHeight: '180px',
      minWidth: '150px',
      overflow: 'hidden',
      height: '100% !important',
      '&:hover':{
        borderStyle:'solid',
        borderColor:'#8ee9e0',
        border:'3px',
      },
      [theme.breakpoints.down('sm')]:{
        minHeight: '150px',
      }
    },
    dropbox:{
      backgroundColor:'#e0ecea',
      borderRadius:'10px',
      margin:'2px',
      padding: '3px'
    },
    gridList:{
      flexWrap:'nowrap',
      spacing: 3,
      height: '100%',
      width: 'inherit'
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
    small:{
      width: theme.spacing(3),
      height: theme.spacing(3),
      float: 'left',
      marginRight: '10px',
      backgroundColor: 'white',
      },
    cabecalho: {
      fontSize: 15,
      fontWeight: 500,
  },
    gridListIcone:{
      spacing: 2,
      minWidth: '25px',
      overflow: 'hidden',
      minHeight: '25px',
      height: '100% !important',
      width: '29px !important',
    },

  }))
  // TODO: Colocar mais projetos!
  // TODO: Mudar o Sobre
  const classes = useEstilos();
  return (
  <Container className={classes.mainBlock} maxWidth={false}>
    <Head>
        <title>📝Gustavo Portfolio</title>
        <meta charSet="utf-8" />
    </Head>
    <Box className={classes.mainProfileInfo} width='30%' >
      <Box my={1}>
        <Typography variant='h3' align= 'center'>
        <AvatarMeu/>
          Gustavo Malfa Corrêa
        </Typography>
        <br/><br/><br/>
        <Box>
          <Accordion className={classes.dropbox}>
              <AccordionSummary>
                <Typography className={classes.cabecalho}>Objetivo Deste Site:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='subtitle1' paragraph= 'true'>
                &emsp;Esse site tem como objetivo uma forma de mostrar os projetos que criei ao longo
                do meu desenvolvimento como programador, é um simples Portfolio.<br/>
                &emsp;Viso aprender de tudo um pouco, gosto de aprender/entender novas tecnologias e poder crescer nelas de alguma forma!
                Seja desenvolvendo um simples projeto ou algo mais complexo.
                </Typography>
              </AccordionDetails>
          </Accordion>
            <br/>
          <Accordion className={classes.dropbox}>
                <AccordionSummary>
                  <Typography className={classes.cabecalho}>Porque deste site? </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='subtitle1' paragraph= 'true'>
                  &emsp;Eu pensei em criar esse Portfolio para meus projetos criados até o momento.<br/>
                  &emsp;É uma forma dinâmica de apresenta-los e na criação consigo aprender novas ferramentas.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <br/>
              <Accordion className={classes.dropbox}>
                <AccordionSummary>
                  <Typography className={classes.cabecalho}>Sobre:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='subtitle1' paragraph= 'true'>
                    <li>Site criado com React usando framework Next.JS e
                    API Material-UI.</li><br/>
                    <li>Hospedagem no próprio servidor da Vercel.</li>
                  </Typography>
                </AccordionDetails>
          </Accordion>
        </Box>

        <br/><br/><br/>

        <GridList className={classes.gridList}>
          <Tooltip title='Git Projeto'>
            <GridListTile className= {classes.gridListIcone}>
              <Link href='https://github.com/Malfaa/web-portfolio'>
                <Avatar src='https://www.flaticon.com/svg/static/icons/svg/38/38401.svg'
                variant='square' className={classes.small}/>
              </Link>
            </GridListTile>
          </Tooltip>

          <br/>

          <Tooltip title='LinkedIn'>
            <GridListTile className= {classes.gridListIcone}>
              <Link href='https://www.linkedin.com/in/gustavo-malfa-corr%C3%AAa-a581b21a5/'>
                <Avatar src='https://cutt.ly/3jjdpcE'
                variant='square' className={classes.small}/>
              </Link>
            </GridListTile>
          </Tooltip>

          <br/>

          <Tooltip title='Facebook'>
            <GridListTile className= {classes.gridListIcone}>
              <Link href='https://www.facebook.com/gustavo.malfa'>
                <Avatar src='https://cutt.ly/0jjs68X'
                variant='square' className={classes.small}/>
              </Link>
            </GridListTile>
          </Tooltip>
        </GridList>


      </Box>
    </Box>

    <Box className={classes.mainSectionInfo} width = '69%'>
      <Typography className={classes.categoriaCentral} variant='h4'
      display='block' align='center'>
        Android
      </Typography>
      <Box className={classes.secaoProjetos}>
        <GridList className={classes.gridList}>
          <Tooltip title= 'Simulador de Venda por App'>
            <GridListTile className={classes.projetos}>
              <Link href='https://malfaa.github.io/Android-GasAgua/'>
                <Image src='/GasAguaPrincipal.jpeg' height={190} width={150} />
              </Link>
              <GridListTileBar title={'App_Venda'} classes={classes.titleBar}/>
            </GridListTile>
          </Tooltip>
        </GridList>
      </Box>

      <Typography className={classes.categoriaCentral}variant='h4'
      display='block' align='center'>
        Java (Desktop)
      </Typography>
      <Box className={classes.secaoProjetos}>
        <GridList width={400} className={classes.gridList} cols={2.5}>
          <Tooltip title='Casthor-Game Ambiental'>
            <GridListTile className={classes.projetos}>
              <Link href='https://github.com/Malfaa/APS-Casthor'>
                <Image src='/casthor.png' width={150} height={190} alt='Casthor-Game Ambiental'/>
              </Link>
              <GridListTileBar title={'Game Ambiental'} classes={classes.titleBar}/>
            </GridListTile>
          </Tooltip>

        </GridList>
      </Box>

      <Typography className={classes.categoriaCentral}variant='h4'
      display='block' align='center'>
        Web
      </Typography>
      <Box className={classes.secaoProjetos}>
        <Tooltip title='TO-DO'>
          <GridList className={classes.gridList} cols={1}>
            <GridListTile className={classes.projetos}>
              <Link href='https://todo-clone-d1e70.web.app/'>
                <Image src='/todolist.png' width={150} height={100} />
              </Link>
              <GridListTileBar title={'TODO List'} className={classes.titleBar}/>
            </GridListTile>
          </GridList>
        </Tooltip>
      </Box>
    </Box>
  </Container>
)}

export default Home
