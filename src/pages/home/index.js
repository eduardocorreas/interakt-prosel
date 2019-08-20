import React, {useState} from 'react';
import {List, Row, Col} from 'antd'

import HeaderContentComponent from '../../components/layout/HeaderContent'
import ListEntregas from '../../components/ListEntregas'
import './styles.css';


export default function Home() {

  const [data] = useState([
    {
      id: 1,
      descricao: 'Produto 1',
      status:'Pendente'
    },
    {
      id: 2,
      descricao: 'Produto 2',
      status:'Entregue'
    },
  ])
  
    return (
      <>
      <HeaderContentComponent title={"Painel de Entregas"}/>
      <Row>
      <Col span={12} offset={6}>
      <List
      header={<div><strong>Acompanhamento de Entregas</strong></div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <ListEntregas item={item}/>
        </List.Item>
      )}
    /> 
      </Col>
    </Row>
    </>
         );
}