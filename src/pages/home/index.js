import React, {useState} from 'react';

import {List} from 'antd'


import './styles.css';


export default function Home() {

  const [data] = useState([
    {
      id: 1,
      descricao: 'Dsadsd',
      preco:'dasdas'
    }
  ])
  
    return (
      <List
      header={<div><strong>Lista de Produtos</strong></div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          {item.product}
        </List.Item>
      )}
    />    );
}