import React from 'react';
import Cell from './Cell';

const Rows = ({ cellForRow }) => {
    return (
        <>
            {cellForRow.map((_, rowIndex) => (
                <tr key={rowIndex}>
                    {cellForRow.map((_, colIndex) => (
                        <Cell key={colIndex} />
                    ))}
                </tr>
            ))}
        </>
    );
};

export default Rows;
