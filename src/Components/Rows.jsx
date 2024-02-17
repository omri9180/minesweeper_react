import React from 'react';
import Cell from './Cell';

const Rows = ({ cellForRow }) => {
    return (
        <>
            <tr>
                {cellForRow.map((_, colIndex) => (
                    <Cell key={colIndex} />
                ))}
            </tr>
        </>
    );
};

export default Rows;
