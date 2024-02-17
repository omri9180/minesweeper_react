import Clock from './Clock';
import './Styles/Board.css';
import { useState } from 'react';
import Rows from './Rows';

const Board = () => {
    const [timeCount, setTimeCount] = useState([0, 0, 0]);
    const [startClock, setStartClock] = useState(false);
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const startGame = () => {
        setStartClock(true);
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
            <div className="cells_board">
                <table>
                    <tbody>
                        {num.map((row, index) => (
                            <Rows key={index} RowsNum={num} startGame={startGame} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Board;
