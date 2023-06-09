let state = {
    size: 16,
    palette: ['#000'],
    color: 0,
}

document.querySelector('#grid-size').addEventListener(
    'change', (s) => {
        state.size = document.querySelector('#grid-size').valueAsNumber;
        init(state);
    }
)

document.querySelectorAll('.button').forEach((b) => {
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

    if (b.dataset.action == 'eraser') {
        b.addEventListener('click', (e) => {
            state.color = undefined;
        })
    }
});

init(state);

function init(state) {
    let grid = document.querySelector('#grid');
    document.querySelector('#grid-size').value = state.size;

    grid.replaceChildren();
    grid.style.gridTemplateColumns = `repeat(${state.size}, 1fr)`;
    grid.style.backgroundSize = `${4 * 256 / state.size}px`;

    for (let i = 0; i < state.size * state.size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    
        cell.addEventListener('mouseover', (e) => {
            if (state.color === undefined) {
                e.target.style.removeProperty('background-color');
                return;
            }

            color(e.target);
            state.color = (state.color + 1) % state.palette.length;
        });
    }
}

function color(cell) {
    cell.style.backgroundColor = `${state.palette[state.color]}`;
}