const info = () => {
  console.log("INFO");

  const response = {
    apiversion: "1",
    author: "ferretcode",
    color: "#20DD7F",
    head: "default",
    tail: "default",
  };

  return response;
};

const start = (gameState) => {
  console.log(`${gameState.game.id} START`);
};

const end = (gameState) => {
  console.log(`${gameState.game.id} END\n`);
};

const move = (gameState) => {
  let possibleMoves = {
    up: true,
    down: true,
    left: true,
    right: true,
  };

  const myHead = gameState.you.head;
  const myNeck = gameState.you.body[1];

  if (myNeck.x < myHead.x) {
    possibleMoves.left = false;
  } else if (myNeck.x > myHead.x) {
    possibleMoves.right = false;
  } else if (myNeck.y < myHead.y) {
    possibleMoves.down = false;
  } else if (myNeck.y > myHead.y) {
    possibleMoves.up = false;
  }

  // TODO: Step 1 - Don't hit walls.
  // Use information in gameState to prevent your Battlesnake from moving beyond the boundaries of the board.
  // const boardWidth = gameState.board.width
  // const boardHeight = gameState.board.height
  const width = gameState.board.width;
  const height = gameState.board.height;

  console.log(`head x: ${gameState.you.head.x}, wall width: ${width}`);
  console.log(`head y: ${gameState.you.head.y}, wall height: ${height}`);

  if (gameState.you.head.x - width === 0) possibleMoves.left = false;
  else if (width - gameState.you.head.x === 0) possibleMoves.right = false;

  if (gameState.you.head.y - height === 0) possibleMoves.down = false;
  else if (height - gameState.you.head.y === 0) possibleMoves.up = false;

  // TODO: Step 2 - Don't hit yourself.
  // Use information in gameState to prevent your Battlesnake from colliding with itself.
  // const mybody = gameState.you.body

  // TODO: Step 3 - Don't collide with others.
  // Use information in gameState to prevent your Battlesnake from colliding with others.

  // TODO: Step 4 - Find food.
  // Use information in gameState to seek out and find food.

  // Finally, choose a move from the available safe moves.
  // TODO: Step 5 - Select a move to make based on strategy, rather than random.
  const safeMoves = Object.keys(possibleMoves).filter(
    (key) => possibleMoves[key]
  );
  const response = {
    move: safeMoves[Math.floor(Math.random() * safeMoves.length)],
  };

  console.log(`${gameState.game.id} MOVE ${gameState.turn}: ${response.move}`);

  return response;
};

module.exports = {
  info: info,
  start: start,
  move: move,
  end: end,
};
