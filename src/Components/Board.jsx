import Clock from './Clock';
import './Styles/Board.css';
import { useState } from 'react';

const Board = () => {
    const [timeCount, setTimeCount] = useState([0, 0, 0]);
    const [startClock, setStartClock] = useState(false);

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
                <button onClick={startGame}> start</button>
            </div>
        </div>
    );
};

export default Board;
