import React, { useEffect, useState } from 'react';
import './Styles/Cell.css';

const Cell = ({ numRows, numCols, numMines, startGame }) => {
    const [board, setBoard] = useState([]);
    const [countMines, setCountMines] = useState(0);
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
        boardCells.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                if (cell.isMine) return;
                cell.neighborCount = getNeighborMines(boardCells, rowIndex, colIndex);
            });
        });
        setBoard(boardCells);
    }, []);

    const getNeighborMines = (boardCells, row, col) => {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                const newRow = row + i;
                const newCol = col + j;
                if (
                    newRow >= 0 &&
                    newRow < numRows &&
                    newCol >= 0 &&
                    newCol < numCols &&
                    boardCells[newRow][newCol].isMine
                ) {
                    count++;
                }
            }
        }
        return count;
    };

    const handleCellClick = (row, col) => {
        if (board[row][col].neighborCount > 0) {
            return;
        }
    };

    return (
        <>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <div key={colIndex} className="cell" onClick={handleCellClick(rowIndex, colIndex)}>
                            {cell.isMine ? '☢️' : board[rowIndex][colIndex].neighborCount}
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
