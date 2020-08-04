import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de vídeo.</h1>
        <form>
          <label>
            Nome da Categoria:
            <input type="text"
            />
          </label>
          <button>
            Cadastrar
          </button>
        </form>
        
      <Link to="/">
        Ir para a home.
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;