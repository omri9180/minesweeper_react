import Clock from './Clock';
import './Styles/Board.css';
import { useState } from 'react';
import Cell from './Cell';

const Board = () => {
    const numRows = 10;
    const numCols = 10;
    const numMines = 10;
    const [timeCount, setTimeCount] = useState([0, 0, 0]);
    const [startClock, setStartClock] = useState(false);
    const startGame = () => {
        setStartClock(true);
    };
    const cellStyle = {
        display: 'grid',
        gap: '0.2px',
        gridTemplateColumns: `repeat(${numCols}, 30px)`,
        gridTemplateRows: `repeat(${numRows}, 30px)`,
    };
    return (
        <div className="board">
            <div className="info_screen">
                <div className="mine_counter">Counter</div>
                <div className="reset_btn">😊</div>
                <div className="time_count">
                    <Clock setTimeCount={setTimeCount} timeCount={timeCount} startClock={startClock} />
                </div>
            </div>
            <div style={cellStyle} className="cells_board">
                <Cell numRows={numRows} numCols={numCols} numMines={numMines} startGame={startGame} />
            </div>
        </div>
    );
};

export default Board;
{
    /* <table>
<tbody>
    {num.map((row, index) => (
        <Rows key={index} RowsNum={num} startGame={startGame} />
    ))}
</tbody>
</table> */
}
