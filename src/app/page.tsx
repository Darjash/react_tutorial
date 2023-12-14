'use client';

 /// /////????????????????/

import { useState } from 'react';
import Square from './square';

// function Square({value, onSquareClick}) {
//   return (<button
//   className="square"
//   onClick={onSquareClick}>{value}</button>);

// }

function Board({ xIsNext, squares, onPlay }: {xIsNext: boolean, squares:string[], onPlay : (x:string[])=>void}) {
  function handleClick(i : number) {
    if (squares[i] || calculateWinner(squares)) { /// //////??????????
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

const winner = calculateWinner(squares);
let status;
if (winner) {
  status = `Winner${winner}`;
} else {
  status = `Next player: ${xIsNext ? 'X' : 'O'}`;
}

  return (
    <>
      <div className="status">{status}</div>
      <div className="container">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />

        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />

      </div>
    </>
  );
}

/// /////////////////////////////////////////////////////////////
/// ////////////////////////////////////
/// /////////////////////////////////////////
/// ///////////////////////////////////

export default function Game() {
  const [history, setHistory] = useState <string[][]>([Array(9).fill(null)]); /// // mogu ostavit any ?????? -[[null],[null]]
  const [currentMove, setCurrentMove] = useState(0); /// //Before you can implement jumpTo, you need the Game component to keep track of which step the user is currently viewing.
  const currentSquares = history[currentMove]; /// //to render the currently selected move, instead of always rendering the final move:
  const [xIsNext, setXIsNext] = useState(true);

console.log(history[1]);

  function handlePlay(nextSquares :string[]) { /// /////will be called by the Board component to update the game.
    const nextHistory: string[][] = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
/* If you “go back in time” and then make a new move from that point, you only want to keep the history up to that point.
Instead of adding nextSquares after all items (... spread syntax) in history, you’ll add it after all items in history.slice(0, currentMove + 1) so that you’re only keeping that portion of the old history.
Each time a move is made, you need to update currentMove to point to the latest history entry.
*/
  }
  function jumpTo(nextMove : number) { // jump to past moves
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = 'Go to game start';
    }
    return (
      <li className="info-text" key={move}>
        <button type="button" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares : string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
