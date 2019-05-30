import React from 'react';
import { hot } from 'react-hot-loader/root';
import './app.css';

import FormCep from './form_cep/formCep';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormCep></FormCep>
        )
    }
}

export default hot(App);
