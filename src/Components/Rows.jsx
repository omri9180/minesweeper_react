import React from 'react';
import Cell from './Cell';

const Rows = ({ RowsNum, startGame }) => {
    return (
        <tr>
            {RowsNum.map((cell, index) => (
                <Cell key={index} value={index} startGame={startGame} />
            ))}
        </tr>
    );
};

export default Rows;
