import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    handleClick = () => {
        throw new Error('Caught');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Hi Click Here</button>
            </div>
        );
    }
}

export default Hello;
