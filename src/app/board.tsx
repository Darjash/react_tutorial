import Square from './square';
import calculateWinner from './calulateWinner';
import { Box } from '@mui/material';

export default function Board({
    xIsNext,
    squares,
    onPlay,
  }: {
    xIsNext: boolean;
    squares: string[];
    onPlay: (x: string[]) => void;
  }) {
    function handleClick(i: number) {
      if (squares[i] || calculateWinner(squares)) {
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
        <Box sx={{
          color:'rgb(145, 60, 107)',
          marginTop:'10px',
          marginBottom:'30px',
        }}>{status}</Box>
        <Box sx={{
          display:'grid',
          gridTemplateColumns:'1fr 1fr 1fr',
          gridTemplateRows:'1fr 1fr 1fr',
          width:'300px',
          margin:'0px',
        }} > {/*.container */}
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />

          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </Box>
      </>
    );
  }
