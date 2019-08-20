import React from 'react';
import { Layout } from 'antd';
const { Header} = Layout;

// import { Container } from './styles';

const HeaderContentComponent = () =>{
  return (
    <Header style={{ background: '#fff', padding: 0, paddingLeft: 20}}>
            <h1>Painel de Entregas</h1>
          </Header>
  )
};

export default HeaderContentComponent;
