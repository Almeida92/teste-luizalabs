import React, { Component } from 'react'
import axios from 'axios';

const URL = 'https://api.opencagedata.com/geocode/v1/json?q=';
const KEY = '439511cb7911414d94c0ecf592eebd0b';

class MapBox extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`${URL}${this.props.endereco.localidade.replace(' ', '%20')}&key=${KEY}`)
            .then(resp => {
                let coord = resp.data.results[0].geometry;
            })
    }

    render() {
        return (
            <div className="box-map">
                <div className="container">
                    <h2>{this.props.endereco.logradouro}</h2>
                    <p>
                        {this.props.endereco.bairro} <br/>
                        {this.props.endereco.localidade } - {this.props.endereco.uf } <br/>
                        {this.props.endereco.cep }
                    </p>
                </div>
            </div>
        )
    }
}

export default MapBox;