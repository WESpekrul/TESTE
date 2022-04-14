import React from 'react';

//import { BrowserRouter, Switch, Route} from 'react-router-dom';

import { BrowserRouter, Routes, Route,} from 'react-router-dom';

import Dashboard from './pages/admin/dashboard';
import Produtos from './pages/admin/produtos';
import ProdutoEditar from './pages/admin/produtos/produtoeditar';
import ProdutoCadastrar from './pages/admin/produtos/produtocadastrar';
import Usuarios from './pages/admin/usuarios';
import UsuarioEditar from './pages/admin/usuarios/usuarioeditar';
import UsuarioCadastrar from './pages/admin/usuarios/usuariocadastrar';
import Home from './pages/client/painel';

import ProdutoDetalhes from './pages/client/produtos/produtosdetalhes';

function Rota (){ 

    return(
        <BrowserRouter>              
            <Routes>
                {/*Rota Cliente*/}
                <Route path='/' exact element={<Home/>} />
                <Route path='/produtos/:idProduto' exact element={<ProdutoDetalhes/>} />

                 {/*Rota Admin*/}
                <Route path="/admin" exact element={<Dashboard/>}/>
                <Route path="/admin/produtos" exact element={<Produtos/>}/>
                <Route path="/admin/produtos/cadastrar" exact element={<ProdutoCadastrar/>} />
                <Route path="/admin/produtos/editar/:_id" exact element={<ProdutoEditar/>}/>
                                    
                <Route path="/admin/usuarios" exact element={<Usuarios/>}/>
                <Route path="/admin/usuarios/cadastrar" exact element={<UsuarioCadastrar/>}/>
                <Route path="/admin/usuarios/editar/:_id" exact element={<UsuarioEditar/>} />                       
            </Routes>
        </BrowserRouter>
    )
};

export default Rota;