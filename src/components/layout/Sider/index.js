import React from 'react';
import {Link} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { Sider} = Layout;

// import { Container } from './styles';

const SiderComponent = () =>{
  return (
    <Sider trigger={null} collapsible collapsed={true}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to='/' >
                <Icon type="home" />
              <span>Painel de Entregas</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to='/entregas' >
              <Icon type="file" />
              <span>Entregas</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to='/produtos' >
              <Icon type="gold" />
              <span>Produtos</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
  )
};

export default SiderComponent;
