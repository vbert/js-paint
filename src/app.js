// 
const jsBlackBoard = document.getElementById('jsPaintBlackBoard');
const jsStatusBar = document.getElementById('jsPaintStatusBar');
const jsCursorPosition = document.getElementById('jsCursorPosition');
const jsInfoBar = document.getElementById('jsInfoBar');

const toInt = number => Math.floor(number);

const relativePosition = (absolutePosition, element) => {
    const absoluteX = toInt(absolutePosition.clientX);
    const absoluteY = toInt(absolutePosition.clientY);
    const startX = toInt(element.offsetLeft);
    const startY = toInt(element.offsetTop);
    return {
        x: absoluteX - startX,
        y: absoluteY - startY
    }
}

const cursorPositinOnStatusBar = position => jsCursorPosition.textContent = `X: ${position.x}, Y: ${position.y}`;

const cursorPosition = event => {
    const relative = relativePosition(event, jsBlackBoard);
    cursorPositinOnStatusBar(relative);
}

jsBlackBoard.addEventListener('mousemove', cursorPosition);