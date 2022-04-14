import React , {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../../../components/menu-admin';
import Footer from "../../../components/footer-admin";
import TextField from '@mui/material/TextField';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import api from '../../../services/api';
import { useParams } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  formControl: {
    width:'100%'
  }
  
}));

export default function UsuarioEditar() {

  const classes = useStyles();

  const [nome , setNome] = useState ('');
  const [email , setEmail] = useState ('');
  const [tipo , setTipo] = useState ('');
  const [senha , setSenha] = useState ('');

  const { _id } = useParams();

  useEffect(() => {
    async function getUsuario(){
      var response = await api.get('/listarusuario/'+_id);
      
      setNome(response.data.nome);
      setEmail(response.data.email);
      setTipo(response.data.tipo);
      setSenha(response.data.senha);

    }
    getUsuario();
},[])

  async function handleSubmit(){
    const data = {
      nome: nome, 
      email: email, 
      tipo: tipo, 
      senha: senha,
      _id: _id
    }

    

    if(nome !==''&& email !==''&& tipo !=='' && senha !==''){

      const response = await api.put('/editusuario/',data)

    if(response.status === 200){
      window.location.href='/admin/usuarios/'
    }
    else{
      alert ('Erro ao cadastrar o usuario !');
    }
  }else {
    alert('Por favor Preencher todos os dados');

  }

  }    

  return (
    <div className={classes.root}>
      
      <MenuAdmin title={'USUÁRIOS'}/>      
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>            
                    <Paper className = {classes.paper}>
                      <h2>Atualização de Usuário</h2>
                      <Grid container spacing={3}>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          required
                          id="nome"
                          name="nome"
                          label="Nome Completo: "
                          fullWidth
                          autoComplete="Nome completo"
                          value={nome}
                          onChange = { e => setNome (e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="email"
                          name="email"
                          label="E - mail: "
                          fullWidth
                          autoComplete="Melhor e-mail"
                          value={email}
                          onChange = { e => setEmail (e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="labelTipo">Tipo</InputLabel>
                            <Select 
                            labelId="labelTipo" 
                            id="tipo"
                            value={tipo}
                            onChange = { e => setTipo (e.target.value)}
                            >                            
                              <MenuItem value={1}>Administrador</MenuItem>
                              <MenuItem value={2}>Colaborador</MenuItem>                            
                            </Select>
                        </FormControl>
                      </Grid>
                        <Grid item xs={12} sm={3}>
                          <TextField
                            type="password"
                            required
                            id="senha"
                            name="senha"
                            label="Senha:"
                            fullWidth
                            autoComplete="Senha Unica"
                            value={senha}
                            onChange = { e => setSenha (e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Button variant="contained" onClick={handleSubmit} color="primary">
                          Salvar
                        </Button>   
                        </Grid>
                        </Grid>                   
                        </Paper>                           
                        </Grid>
                        </Grid>                        
                          <Box pt={4}>
                              <Footer />
                          </Box>
                          </Container>
                        </main>
                      </div>
                    );
                  }
                  
                  

