export default function Square({ value, onSquareClick }: {value :string, onSquareClick: ()=>void}) {
    return (
      <button
        type="button"
        className="square"
        onClick={onSquareClick}
      >{value}
      </button>
    );
  }
