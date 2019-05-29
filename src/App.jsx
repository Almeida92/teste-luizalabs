import React from 'react';
import { hot } from 'react-hot-loader/root';
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        counter: 0
    }
  
    increment = () => {
        this.setState(prevState => ({counter: prevState.counter + 1}));
    }

    render() {
        return (
            <React.Fragment>
                <div>Counter Example</div>
                <h3>{this.state.counter}</h3>
                <button onClick={this.increment} >+</button>
            </React.Fragment>
        )
    }
}

export default hot(App);
