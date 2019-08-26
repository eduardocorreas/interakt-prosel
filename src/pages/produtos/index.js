import React, {useState} from 'react';
import {List, Row, Col, Input, InputNumber, Button} from 'antd'

import HeaderContentComponent from '../../components/layout/HeaderContent'
import ListProdutos from '../../components/ListProdutos'
import './styles.css';

import {graphql, useMutation} from 'react-apollo'
import gql from 'graphql-tag'

const ADD_PRODUTO = gql`
  mutation AddProduto($type: String!){
    addProduto(type: $descricao, type: $preco){
      id
      descricao
      preco
    }
  }
`;

function Produtos(props) {

  const [descricao, setDescricao] = useState("")
  const [preco, setPreco] = useState(0)

  const [addProduto] = useMutation(ADD_PRODUTO);


  const {produtos} = props;


  function salvarProduto(e){
      e.preventDefault();
      addProduto({ produto: descricao, preco:preco });
      console.log(descricao, preco)
  }
  
  function handleDescricao(e){
    e.preventDefault();
    setDescricao(e.target.value)
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
                <Input placeholder="Digite a descrição do produto" onChange={e => handleDescricao(e)} />
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
            <Button type="primary" className="btn-submit" block onClick={e => salvarProduto(e)} >Salvar</Button> 
        </Col>
    </Row>
      <Row>
      <Col span={12} offset={6}>
      {produtos.loading ?
        <p>Carregando</p>
        :
      <List
      header={<div><strong>Lista de Produtos</strong></div>}
      bordered
      dataSource={produtos.allProdutoses}
      renderItem={(item, index) => (
        <List.Item>
          <ListProdutos item={item} index={index}/>
        </List.Item>
      )}
    />} 
      </Col>
    </Row>
    </>
         );

        }
const ProdutosQuery = gql`
  query{
    allProdutoses{
      id
      descricao
      preco
    }
  }      
`;

export default graphql(ProdutosQuery,{
  name: 'produtos'
})(Produtos);