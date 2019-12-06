import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    handleClick = () => {
        try {
            throw new Error('Caught');
        } catch(err) {

        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>2111</button>
            </div>
        );
    }
}

export default Hello;
