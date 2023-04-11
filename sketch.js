let size = 16;

document.querySelector('#grid-size').addEventListener(
    'change', (s) => init(s.target.valueAsNumber)
)

init(size);

function init(size) {
    let grid = document.querySelector('#grid');
    grid.replaceChildren();
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    
        cell.addEventListener('mouseover', (e) => color(e.target));
    }
}

function color(cell) {
    cell.style.backgroundColor = '#000';
}