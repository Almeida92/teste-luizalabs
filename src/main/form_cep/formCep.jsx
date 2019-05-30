import React, { Component } from 'react';
import { Button, Jumbotron, Col, Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import If from '../if';

const URL = 'http://viacep.com.br/ws/'

class FormCep extends Component {
    constructor(props) {
        super(props);

        this.state = { cep : '' , erro: false, msg: ''};

        this.consultar_cep = this.consultar_cep.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    consultar_cep () {
        this.reset();

        if (!this.state.cep) {
            this.setState({
                cep: this.state.cep,
                erro: true,
                msg: 'Cep não encontrado'
            });
        }

        axios.get(`${URL}${this.state.cep}/json/`)
            .then(resp => {
                // this.setState({ description: description, list: resp.data })
            })
            .catch(err => {
                this.setState({
                    cep: this.state.cep,
                    erro: true,
                    msg: 'Cep não encontrado'
                });
            })
    }

    reset() {
        this.setState({
            cep: this.state.cep,
            erro: false,
            msg: ''
        });
    }

    handleChange(event) {
        this.setState({ cep: event.target.value })
    }

    render() {
        return (
            <Jumbotron>
                <h3>Consultar</h3>
                <If test={this.state.erro}>
                    <Alert variant={'danger'}>
                        {this.state.msg}
                    </Alert>
                </If>
                <div className="row">
                    <Col sm="6">
                        <div className="row">
                            <Form.Label column sm="2">
                                CEP
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control 
                                    type="text" placeholder="00000-000" value={this.state.cep} onChange={this.handleChange} />
                            </Col>
                            <Col sm="2">
                                <Button variant="primary" onClick={this.consultar_cep}>Buscar</Button>
                            </Col>
                        </div>
                    </Col>                     
                </div>
            </Jumbotron> 
        )
    }
}

export default FormCep;