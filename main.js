function paint(event) {
    let color = colorMode();
    if (event.altKey) {
        event.target.classList.add('hovered');
    }
}

function colorMode() {
    let colorModeRadio = document.getElementsByName('color');
    colorModeRadio.forEach((button) => {
        if (button.checked) {
            return button.value
        }
    })
}

const gridCells = document.querySelectorAll('.gridCell');
gridCells.forEach((cell) => {
    cell.addEventListener('mouseover', function (e) {
        console.log(e);
        paint(e);
    });
});