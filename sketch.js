let state = {
    size: 16,
    palette: ['#000'],
    color: 0,
}

document.querySelector('#grid-size').addEventListener(
    'change', (s) => document.querySelector('#popup label').textContent = `${s.target.valueAsNumber} x ${s.target.valueAsNumber}`
)

document.querySelectorAll('.button').forEach((b) => {
    if (b.dataset.action === 'new') {
        b.addEventListener('click', (e) => {
            document.querySelector('#grid-size').value = state.size;
            document.querySelector('#overlay').classList.add('appear');
        })
        return;
    }

    if (b.dataset.action === 'reset') {
        b.addEventListener('click', (e) => {
            state.size = document.querySelector('#grid-size').valueAsNumber;
            init(state);
            document.querySelector('#overlay').classList.remove('appear');
        });
        return;
    }

    if (b.dataset.action == 'rainbow') {
        b.addEventListener('click', (e) => {
            state.palette = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#EE82EE'];
            state.color = 0;
        });
        return;
    }

    if (b.dataset.action == 'pen') {
        b.addEventListener('click', (e) => {
            state.palette = ['#000'];
            state.color = 0;
        });
        return;
    }
});

init(state);

function init(state) {
    let grid = document.querySelector('#grid');

    grid.replaceChildren();
    grid.style.gridTemplateColumns = `repeat(${state.size}, 1fr)`;
    grid.style.backgroundSize = `${4 * 256 / state.size}px`;

    for (let i = 0; i < state.size * state.size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    
        cell.addEventListener('mouseover', (e) => {
            color(e.target);
            state.color = (state.color + 1) % state.palette.length;
        });
    }
}

function color(cell) {
    cell.style.backgroundColor = `${state.palette[state.color]}`;
}