import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explores" />
      <Title>Explore Repositorios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/49954230?s=460&u=32fe74955f68b81ba984adc1b20419cc49b047d1&v=4"
            alt="Cleiton"
          />
          <div>
            <strong>CardAnimatedCthulhu</strong>
            <p>Card animado, utilizando apenas CSS e Javascript</p>
          </div>
        </a>
      </Repositories>
    </>
  );
};
export default Dashboard;
