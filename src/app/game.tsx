'use client';

import { useState } from 'react';
import Board from './board';
import Header from './pages/header';
import Template from './pages/template';
import { Box, Button } from '@mui/material';



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
        <Button sx={{
        background: 'pink',
        fontSize:'20px',
        borderRadius:'10px',
        fontWeight:'normal',
        color:'black',
        }}
        type="button" 
        onClick={() => jumpTo(move)}
        
        
        >
          {description}
        </Button>
      </li>
    );
  });

  return (
    <Template>
    <Header/>
     <Box className="game"
     sx={{
      fontFamily:"'Chakra Petch', sans-serif",
      fontSize:'54px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      gap:'200px',
      color:'rgb(209, 201, 201)',
      //backgroundColor:'rgb(209, 201, 201)',
      width:'100%',
      height:'calc(100vh - 80px)',
      }}>

      <Box sx={{
        width:'350px',
      }}> 
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </Box>
      <Box className="game-info"
      sx={{
        color:'rgb(145, 60, 107)',
      }}>
        <ol>{moves}</ol>
      </Box>
      </Box>
    </Template>);

}
