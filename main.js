const gridCells = document.querySelectorAll('.gridCell');
gridCells.forEach((cell) => {
    cell.addEventListener('mouseover', function (e) {
        console.log(e);
        if (e.altKey) {
            cell.classList.add('hovered');
        }
    });
});