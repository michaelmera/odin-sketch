let size = 16;

document.querySelector('#grid-size').addEventListener(
    'change', (s) => document.querySelector('#popup label').textContent = `${s.target.valueAsNumber} x ${s.target.valueAsNumber}`
)

document.querySelectorAll('.button').forEach((b) => {
    if (b.dataset.action === 'new') {
        b.addEventListener('click', (e) => {
            document.querySelector('#overlay').classList.add('appear');
        })
        return;
    }

    if (b.dataset.action === 'reset') {
        b.addEventListener('click', (e) => {
            init(document.querySelector('#grid-size').valueAsNumber);
            document.querySelector('#overlay').classList.remove('appear');
        });
    }
});

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