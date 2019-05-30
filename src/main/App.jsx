import React from 'react';
import { hot } from 'react-hot-loader/root';
import './app.css';

import { Button, Jumbotron, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron>
            <h3>Consultar</h3>
                <div class="row">
                    <Col sm="6">
                        <div class="row">
                            <Form.Label column sm="2">
                                CEP
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="00000-000" />
                            </Col>
                            <Col sm="2">
                                <Button variant="primary">Buscar</Button>
                            </Col>
                        </div>
                    </Col>                     
                </div>
            </Jumbotron>
        )
    }
}

export default hot(App);
