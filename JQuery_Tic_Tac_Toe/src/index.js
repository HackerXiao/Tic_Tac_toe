const View = require('./ttt-view');
const Game = require('/Users/xiaozhang/workspace/JQuery_Tic_Tac_Toe/ttt_node/solution/game.js');


$( () => {
  const rootEl = $('.ttt');
  const game = new Game();
  new View(game, rootEl);
});
