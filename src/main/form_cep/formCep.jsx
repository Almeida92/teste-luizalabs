import React, { Component } from 'react';
import { Button, Jumbotron, Col, Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import If from '../if';
import MapBox from './map/mapBox';
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';

const URL = 'http://viacep.com.br/ws/'

class FormCep extends Component {
    constructor(props) {
        super(props);

        this.state = { cep : '' , erro: false, msg: '', map: false, data: {}};

        this.consultar_cep = this.consultar_cep.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    consultar_cep () {
        this.reset();

        if (!this.state.cep) {
            this.setState({
                cep: this.state.cep,
                erro: true,
                msg: 'Cep não encontrado',
                map: false,
                data: {}
            });
        }

        axios.get(`${URL}${this.state.cep}/json/`)
            .then(resp => {
                if (!resp.data.erro) {
                    this.setState({
                        cep: this.state.cep,
                        erro: this.state.erro,
                        msg: this.state.msg,
                        map: true,
                        data: resp.data
                    });
                }else {
                    this.setState({
                        cep: this.state.cep,
                        erro: true,
                        msg: 'Cep não encontrado',
                        map: false,
                        data: {}
                    });
                }
                
            })
            .catch(err => {
                this.setState({
                    cep: this.state.cep,
                    erro: true,
                    msg: 'Cep não encontrado',
                    data: {},
                    map: false
                });
            })
    }

    reset() {
        this.setState({
            cep: this.state.cep,
            erro: false,
            msg: '',
            map: false,
            data: {}
        });
    }

    handleChange(event) {
        this.setState({ cep: event.target.value })
    }

    render() {
        return (
            <div>
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
                                    <InputMask mask="99999-999" value={this.state.cep} onChange={this.handleChange}>
                                        {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
                                    </InputMask>
                                    {/* <Form.Control 
                                        type="text" placeholder="00000-000" value={this.state.cep} onChange={this.handleChange} /> */}
                                </Col>
                                <Col sm="2">
                                    <Button variant="primary" onClick={this.consultar_cep}>Buscar</Button>
                                </Col>
                            </div>
                        </Col>                     
                    </div>
                </Jumbotron>

                <If test={this.state.map}>
                    <MapBox endereco={this.state.data}/>
                </If>
            </div>
        )
    }
}

export default FormCep;