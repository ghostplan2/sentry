import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        console.log(undef);
    }

    componentDidMount() {
        console.log('component did mount');
    }

    render() {
        return (
            <div>123</div>
        );
    }
}

export default Hello;
