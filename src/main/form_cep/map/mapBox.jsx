import React, { Component } from 'react'
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import icon from './icon.png';
import './mapBox.css'

const URL = 'https://api.opencagedata.com/geocode/v1/json?q=';
const KEY = '439511cb7911414d94c0ecf592eebd0b';

const AnyReactComponent = ({ text }) => <div>
    <img className="icon-marker" src={icon} />
</div>;

class MapBox extends Component {
    constructor(props) {
        super(props);
        this.state = { loc: {}, loading: true}
    }

    componentDidMount() {
        if (this.props.endereco) {
            axios.get(`${URL}${this.props.endereco.logradouro.replace(' ', '%20')}&key=${KEY}`)
                .then(resp => {
                    this.setState({
                        loc: resp.data.results[0].geometry,
                        loading: false
                    })
                })
        }
    }

    renderMap = loc => {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCFFyYW7gyHdjwKW14eiyJO84dJlKNJ7-g' }}
                    defaultCenter={loc}
                    defaultZoom={17} >
                    <AnyReactComponent lat={loc.lat} lng={loc.lng} />
                </GoogleMapReact>
            </div>
        )
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

                {this.state.loading ? "Loading" : this.renderMap(this.state.loc)}
            </div>
        )
    }
}

export default MapBox;