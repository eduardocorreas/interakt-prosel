import React from 'react';
import {BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import { Layout } from 'antd';
import SiderComponent from './components/layout/Sider'
import HeaderTopComponent from './components/layout/HeaderTop'
import Home from './pages/home';
import Produtos from './pages/produtos';
import Entregas from './pages/entregas';

const { Content } = Layout;

export default function App(){
  return(
    <>
    <Router>
    <HeaderTopComponent/>
    <Layout style={{height:"100vh"}}>
      <SiderComponent/>
      <Layout>
        <Content
          style={{
            padding: 10,
            background: '#fff',
            minHeight: 280,
          }}
          >
          
          <div>
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/produtos' component={Produtos}/>
              <Route path='/entregas' component={Entregas}/>
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
          </Router>
    </>
    
  )
}