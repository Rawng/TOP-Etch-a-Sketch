function paint(event) {
    let color = colorMode();
    if (event.altKey) {
        if (color == 'black') {
            event.target.style.backgroundColor = 'black';
        } else if (color == 'color') {
            event.target.style.backgroundColor = getRandomColor();
        } else {
            event.target.style.backgroundColor = 'white';
        }
    }
}

function colorMode() {
    let radioChoice = '';
    let colorModeRadio = document.getElementsByName('color');
    colorModeRadio.forEach((button) => {
        if (button.checked) {
            radioChoice = button.value;
        }
    });
    return radioChoice;
}

function getRandomColor() {
    return '#333333';
}

const gridCells = document.querySelectorAll('.gridCell');
gridCells.forEach((cell) => {
    cell.addEventListener('mouseover', function (e) {
        console.log(e);
        paint(e);
    });
});