// code your solution here
function superbowlWin(data) {
  const win = data.find(game => game.result === "W");
  return win ? win.year : undefined;
}
