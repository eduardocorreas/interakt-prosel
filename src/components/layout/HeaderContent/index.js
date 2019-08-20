import React from 'react';
import { Layout } from 'antd';
const { Header} = Layout;

// import { Container } from './styles';

const HeaderContentComponent = ({title}) =>{
  return (
    <Header style={{ background: '#fff', padding: 0, paddingLeft: 20, 
      borderBottom: 'solid', marginBottom:30, fontSize: 18}}>
        <h1>{title}</h1>
    </Header>
  )
};

export default HeaderContentComponent;
