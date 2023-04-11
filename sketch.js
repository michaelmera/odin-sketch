let grid = document.querySelector('#grid');

for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);

    cell.addEventListener('mouseover', (e) => color(e.target));
}

function color(cell) {
    cell.style.backgroundColor = '#000';
}