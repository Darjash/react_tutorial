'use client';

import { useState } from 'react';
import Board from './board';

export default function Game() {
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0); /// //Before you can implement jumpTo, you need the Game component to keep track of which step the user is currently viewing.
  const currentSquares = history[currentMove]; /// //to render the currently selected move, instead of always rendering the final move:
  const [xIsNext, setXIsNext] = useState(true);

  function handlePlay(nextSquares: string[]) {
    /// /////will be called by the Board component to update the game.
    const nextHistory: string[][] = [
      ...history.slice(0, currentMove + 1),
      nextSquares,
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
    /* If you “go back in time” and then make a new move from that point, you only want to keep the history up to that point.
Instead of adding nextSquares after all items (... spread syntax) in history, you’ll add it after all items in history.slice(0, currentMove + 1) so that you’re only keeping that portion of the old history.
Each time a move is made, you need to update currentMove to point to the latest history entry.
*/
  }
  function jumpTo(nextMove: number) {
    // jump to past moves
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
      <li className="info-text" key={`${move + description}`}>
        <button type="button" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
