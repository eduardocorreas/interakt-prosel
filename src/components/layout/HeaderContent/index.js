import React from 'react';
import { Layout } from 'antd';
const { Header} = Layout;

const HeaderContentComponent = ({title}) =>{
  return (
    <Header style={styleHeader}>
        <h1>{title}</h1>
    </Header>
  )
};

const styleHeader = {
  background: '#fff', padding: 0, paddingLeft: 20, 
  borderBottom: 'solid', marginBottom:30, fontSize: 18
}

export default HeaderContentComponent;
