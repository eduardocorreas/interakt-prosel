import React from 'react';
import {Row, Col, Icon} from 'antd'
import './styles.css';

const ListProdutos = ({item}) => {
  return (
    <Row justify="space-between" style={{width:'100%'}}>
      <Col span={2}>
      <div  className="box-id"><p>{item.id}</p></div>
      </Col>
      <Col span={6}>
      <div className="descricao">{item.descricao}</div>
      <div className="descricao">{item.preco}</div>
      </Col>
      <Col span={6} offset={8}>
      <div className="options">
        <Icon type="edit" style={{marginRight: 20, marginTop: 10}}/> 
        <Icon type="delete" /> 
      </div>
      </Col>
    </Row>
  )
};

export default ListProdutos;
