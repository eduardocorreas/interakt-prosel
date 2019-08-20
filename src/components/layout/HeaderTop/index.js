import React from 'react';
import { Layout } from 'antd';
const { Header} = Layout;

// import { Container } from './styles';

const HeaderTopComponent = () =>{
  return (
    <Header className='header' >
        <h2 className="title">INTERAKT | Challenge</h2>
      </Header>
  )
};

export default HeaderTopComponent;
