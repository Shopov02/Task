//Return the number of balls on the screen
  function countBallsOnScreen() {
    let ballCount = bubbleGame.lines
        .map(line => line.bubbleCount)  
        .reduce((total, count) => total + count, 0);  

    return ballCount;
}

//Count balls of color
function countBallsOfColor(color) {
    return bubbleGame.lines
        .reduce((total, line) => {
            return total + line.bubbles.filter(bubble => bubble._type === color && bubble._type !== undefined).length;
        }, 0);
}

//Check Bubbles Match
function checkBubblesMatch() {
    let totalBalls = countBallsOnScreen();

    return totalBalls === bubbleGame.gridContainer.children.length;
}