import React, { useEffect, useState } from 'react';
import './Styles/Cell.css';

const Cell = ({ numRows, numCols, numMines, startGame }) => {
    const [board, setBoard] = useState([]);
    useEffect(() => {
        const boardCells = Array.from({ length: numRows }, () =>
            Array.from({ length: numCols }, () => ({
                isMine: false,
                isOpen: false,
                isFlagged: false,
                neighborCount: 0,
            }))
        );

        let minesPlaced = 0;
        while (minesPlaced < numMines) {
            const row = Math.floor(Math.random() * numRows);
            const col = Math.floor(Math.random() * numCols);
            if (!boardCells[row][col].isMine) {
                boardCells[row][col].isMine = true;
                minesPlaced++;
            }
        }
        setBoard(boardCells);
    }, []);

    return (
        <>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <div key={colIndex} className="cell" onClick={startGame}>
                            {cell.isMine ? '💣' : ''}
                        </div>
                    ))}
                </div>
            ))}
        </>

        // <td onClick={startGame} className="cell">
        //     {value}
        // </td>
    );
};

export default Cell;
