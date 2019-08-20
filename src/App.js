import React from 'react';
import {BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import { Layout } from 'antd';
import SiderComponent from './components/layout/Sider'
import HeaderTopComponent from './components/layout/HeaderTop'
import HeaderContentComponent from './components/layout/HeaderContent';
import Home from './pages/home';
import Products from './pages/products';

const { Content } = Layout;

export default function App(){
  return(
    <>
    <Router>
    <HeaderTopComponent/>
    <Layout style={{height:"100vh"}}>
      <SiderComponent/>
      <Layout>
        <HeaderContentComponent/>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          <div>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/products' exact component={Products}/>
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
          </Router>
    </>
    
  )
}