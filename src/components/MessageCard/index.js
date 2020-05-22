import React from 'react';
import styled from 'styled-components';

const Estilo = styled.div`
 background-color: blue;
` 

class MessageCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Estilo></Estilo>
        )
    }
}

export default MessageCard;
