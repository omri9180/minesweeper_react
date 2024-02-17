import React from 'react';
import './Styles/Cell.css';

const Cell = ({ startGame, value }) => {
    return (
        <td onClick={startGame} className="cell">
            {value}
        </td>
    );
};

export default Cell;
