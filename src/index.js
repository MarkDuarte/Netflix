import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/pages/home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from '../src/pages/cadastro/video';
import CadastroCategoria from '../src/pages/cadastro/categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Cadastro/Video" component={CadastroVideo} />
      <Route path="/Cadastro/Categoria" component={CadastroCategoria} />
      <Route component={() => (<div>404: Página não encontrada.</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

