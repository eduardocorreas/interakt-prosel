import React, {useState} from 'react';
import {List, Row, Col, Input, InputNumber, Button} from 'antd'

import HeaderContentComponent from '../../components/layout/HeaderContent'
import ListProdutos from '../../components/ListProdutos'
import './styles.css';


export default function Produtos() {

  const [data] = useState([
    {
      id: 1,
      descricao: 'Produto 1',
      preco: '10,00',
      status:'Pendente'
    },
    {
      id: 2,
      descricao: 'Produto 2',
      preco: '20,00',
      status:'Entregue'
    },
  ])

  const [produto, setProduto] = useState("")
  const [preco, setPreco] = useState(0)

  
  function salvarProduto(){
      console.log(produto, preco)
  }
  
  function handleProduto(e){
    e.preventDefault();
    setProduto(e.target.value)
  }

  function handlePreco(preco){
    setPreco(preco)
  }
  
    return (
      <>
      <HeaderContentComponent title={"Produtos"}/>
      <Row>
      <Col>
        <Col span={6} offset={6}>
            <div>
                <p className="form-label">Descrição:</p>
                <Input placeholder="Digite a descrição do produto" onChange={e => handleProduto(e)} />
            </div>
        </Col>
        <Col span={6}>
            <div style={{marginLeft: 40}}>
                <p className="form-label">Preço:</p>
                <InputNumber defaultValue={1000}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')} 
                onChange={preco => handlePreco(preco)}
                style={{minWidth: 200}} />
            </div>
        </Col>
      </Col>
        <Col span={12} offset={6} style={{marginTop: 30, marginBottom:30}}>
            <Button type="primary" block onClick={() => salvarProduto()} >Salvar</Button> 
        </Col>
    </Row>
      <Row>
      <Col span={12} offset={6}>
      <List
      header={<div><strong>Lista de Produtos</strong></div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <ListProdutos item={item}/>
        </List.Item>
      )}
    /> 
      </Col>
    </Row>
    </>
         );
}