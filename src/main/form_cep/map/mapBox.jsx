import React, { Component } from 'react'

class MapBox extends Component {
    constructor(props) {
        super(props);
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