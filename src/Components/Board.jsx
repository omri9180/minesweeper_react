import './Styles/Board.css';

const Board = () => {
    return (
        <div className="board">
            <div className="info_screen">
                <div className="mine_counter">Counter</div>
                <div className="reset_btn">😊</div>
                <div className="time_count">Time</div>
            </div>
            <div className="cells_board">Cells</div>
        </div>
    );
};

export default Board;
