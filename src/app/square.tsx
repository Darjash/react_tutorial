import { Button } from "@mui/material";

export default function Square({ value, onSquareClick }: {value :string, onSquareClick: ()=>void}) {
    return (
      <Button sx={{
        background:'rgb(240, 236, 232)',
        height:'150px',
        width:'150px',
        fontSize:'85px',
        border:'1px solid',
        borderColor:'black',
        fontWeight:'lighter',
        color:'black',
      }}
        type="button"
        onClick={onSquareClick}
      >{value}
      </Button>
    );
  }
