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
        <title>Política de Privacidade - Recorde-me Remedio</title>
        <meta charSet="utf-8" />
    </Head>
    <h2><span style="color: rgb(68, 68, 68);">Política Privacidade</span></h2>
    <p><span style="color: rgb(68, 68, 68);">A sua privacidade é importante para nós. É política do Recorde-me Remedio respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="Recorde-me Remedio">Recorde-me Remedio</a>, e outros sites que possuímos e operamos.</span></p><p><span style="color: rgb(68, 68, 68);">Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</span></p><p><span style="color: rgb(68, 68, 68);">Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</span></p><p><span style="color: rgb(68, 68, 68);">Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</span></p><p><span style="color: rgb(68, 68, 68);">O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas&nbsp;</span><a href="https://politicaprivacidade.com/" rel="noopener noreferrer" target="_blank" style="background-color: transparent; color: rgb(68, 68, 68);">políticas de privacidade</a><span style="color: rgb(68, 68, 68);">.</span></p><p><span style="color: rgb(68, 68, 68);">Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</span></p><p><span style="color: rgb(68, 68, 68);">O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.</span></p><p><span style="color: rgb(68, 68, 68);"><ul><li><span style="color: rgb(68, 68, 68);">O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.</span></li><li><span style="color: rgb(68, 68, 68);">Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.</span></li><li><span style="color: rgb(68, 68, 68);">Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</span></li><li><span style="color: rgb(68, 68, 68);">Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.</span></li></ul><p><br></p></span></p><h3><span style="color: rgb(68, 68, 68);">Compromisso do Usuário</span></h3><p><span style="color: rgb(68, 68, 68);">O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Recorde-me Remedio oferece no site e com caráter enunciativo, mas não limitativo:</span></p><ul><li><span style="color: rgb(68, 68, 68);">A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</span></li><li><span style="color: rgb(68, 68, 68);">B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, </span><span style="color: rgb(33, 37, 41);"><a href='https://ondeapostar.com/betano-e-confiavel/' rel='nofollow' target='_BLANK' style='color:inherit !important; text-decoration: none !important; font-size: inherit !important;'>onde apostar</a></span><span style="color: rgb(68, 68, 68);"> ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</span></li><li><span style="color: rgb(68, 68, 68);">C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Recorde-me Remedio, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</span></li></ul><h3><span style="color: rgb(68, 68, 68);">Mais informações</span></h3><p><span style="color: rgb(68, 68, 68);">Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</span></p><p><span style="color: rgb(68, 68, 68);">Esta política é efetiva a partir de&nbsp;</span><strong style="color: rgb(68, 68, 68);">1 December 2022 23:33</strong></p>
  </Container>
)}

export default Home
