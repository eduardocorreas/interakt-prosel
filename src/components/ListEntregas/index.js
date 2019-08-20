import React from 'react';
import {Row, Col, Badge} from 'antd'
import './styles.css';

const ListEntregas = ({item}) => {
  return (
    <Row justify="space-between" style={{width:'100%'}}>
      <Col span={2}>
      <div  className="box-id"><p>{item.id}</p></div>
      </Col>
      <Col span={6}>
      <div className="descricao">{item.descricao}</div>
      </Col>
      <Col span={6} offset={8}>
      <div className="status">
        {item.status ==='Pendente' && <Badge style={{backgroundColor: 'gray'}} count={item.status} />}
        {item.status ==='Entregue' && <Badge style={{backgroundColor: 'green'}} count={item.status} />}
        {item.status ==='Perdido' && <Badge style={{backgroundColor: 'red'}} count={item.status} />}
        
      </div>
      </Col>
    </Row>
  )
};

export default ListEntregas;
