import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>
        <form onSubmit={function HandleSubmit(e) {
          e.preventDefault();
          setCategorias([
            ...categorias,
            nomeDaCategoria
          ]);
        }}>
          <div>
            <label>
              Nome da Categoria:
              <input 
                type="text"
                value={nomeDaCategoria}
                onChange={(e) => setNomeDaCategoria(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Descrição:
              <textarea 
                type="text"
                value={nomeDaCategoria}
                onChange={(e) => setNomeDaCategoria(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Cor:
              <input 
                type="color"
                value={nomeDaCategoria}
                onChange={(e) => setNomeDaCategoria(e.target.value)}
              />
            </label>
          </div>

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, index) => {
            return (
              <li key={index}>
                {`${categoria}${index}`}
              </li>
            )
          })}
        </ul>
        
      <Link to="/">
        Ir para a home.
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;