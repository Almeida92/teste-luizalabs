import React from 'react';

class If extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.test) {
            return this.props.children
        } else {
            return false
        }
    }
}

export default If;