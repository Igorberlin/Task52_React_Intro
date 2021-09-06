import React from 'react';
import Text from './Text';

const bStyle = {
    padding: '5px',
    width: '200px',
    textTransform: 'uppercase',
    borderRadius: '20px',
    backgroundColor: '#62f557',
    marginTop: '50px',
    color:'white'
}
export default function Button(){
    return (
        <button style={bStyle} className='btn'>My firs button in react, click me!!!</button>
    )
}
