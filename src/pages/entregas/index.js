import React, {useState} from 'react';
import {List, Row, Col, Input, Select, DatePicker, Button } from 'antd'
import ptBR from 'antd/lib/locale-provider/pt_BR';
import moment from 'moment';
import 'moment/locale/pt';

import HeaderContentComponent from '../../components/layout/HeaderContent'
import ListEntregas from '../../components/ListEntregas'
import './styles.css';

const { TextArea } = Input;
const { Option } = Select;
export default function Entregas() {

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

  const [produtos, setProdutos] = useState([
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
    }
  ])
  const [produto, setProduto] = useState("")
  const [preco, setPreco] = useState(0)

  
  function salvarEntrega(){
      console.log(produto, preco)
  }
  
  function handleProduto(e){
    e.preventDefault();
    setProduto(e.target.value)
  }

  function handlePreco(preco){
    setPreco(preco)
  }

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }
  
    return (
      <>
      <HeaderContentComponent title={"Entregas"}/>

      <Row>

        <Col span={12} className="main-col">
          <Row className="row">
            <Col>
              <div>
                  <p className="form-label">Local:</p>
                   <Input placeholder="Digite o local da entrega"  onChange={e => handleProduto(e)} />
              </div>
            </Col>
          </Row>
          

          <Row className="row">
              <Col span={12} style={{marginRight: 20}}>
                <div>
                    <p className="form-label">Entregador:</p>
                    <Select style={{width:'100%'}} placeholder="Selecione um entregador">
                      <Option value="jack">Entregador 1</Option>
                    </Select>
                </div>
              </Col>
              <Col  span={11}>
                <div>
                    <p className="form-label">Data:</p>
                    <DatePicker
                      format="DD-MM-YYYY"
                      disabledDate={disabledDate}
                      locale={ptBR}
                      placeholder="Selecione uma data"
                    />
                </div>
              </Col>
          </Row>

          <Row className="row">
            <Col>
              <div>
                  <p className="form-label">Produtos:</p>
                  <Select mode="tags" style={{ width: '100%' }} 
                    placeholder="Selecione os produtos para essa entrega"
                     tokenSeparators={[',']}>
                    {produtos.map(prod => {
                        return <Option key={prod.id}>{prod.descricao}</Option>
                    })}
                  </Select>
              </div>
            </Col>
          </Row>

          <Row className="row">
            <Col>
              <div>
                  <p className="form-label">Descrição:</p>
                   <TextArea placeholder="Escreva observações sobre a entrega a ser feita" rows={4} onChange={e => handleProduto(e)} />
              </div>
            </Col>
          </Row>
          <Row className="row">
          <Col>
            <Button type="primary" className="btn-submit" 
            block onClick={() => salvarEntrega()} >Salvar</Button> 
        </Col>
        </Row>
        </Col>


      <Col span={12} className="main-col">
        <List
        header={<div><strong>Entregas</strong></div>}
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