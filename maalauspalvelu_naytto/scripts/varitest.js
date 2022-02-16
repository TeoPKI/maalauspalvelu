class PaletteColor {
    constructor(name, hex) {
        this.name = name;
        this.hex = hex;
    }
}

const cellContainer = document.getElementById('palette');
const cells = [];
let selectedCellIndex;

const palette = [new PaletteColor('Fiesta', '#DD4132'),
new PaletteColor('Jester Red', ' #9E1030'),
new PaletteColor('Turmeric', '#FE840E'),
new PaletteColor('Living Coral', '#FF6F61'),
new PaletteColor('Pink Peacock', '#C62168'),
new PaletteColor('Pepper Stem', '#8D9440'),
new PaletteColor('Aspen Gold', '#FFD662'),
new PaletteColor('Princess Blue', '#00539C'),
new PaletteColor('Toffee', '#755139'),
new PaletteColor('Mango Mojito', '#D69C2F'),
new PaletteColor('Terrarium Moss', '#616247'),
new PaletteColor('Sweet Lilac', '#E8B5CE'),
new PaletteColor('Soybean', '#D2C29D'),
new PaletteColor('Eclipse', '#343148'),
new PaletteColor('Sweet Corn', '#F0EAD6'),
new PaletteColor('Brown Granite', '#615550')];

let selectedCell;

// create color cells
for (let index = 0; index < palette.length; index++) {
    let newCellElement = document.createElement('div');
    newCellElement.classList.add('palette-cell');
    newCellElement.style.background = palette[index].hex;
    cells.push(newCellElement);

    newCellElement.onclick = function highlightCell() {
        if (selectedCell != null) {
            selectedCell.style.border = 'none';
        }

        newCellElement.style.border = 'solid';
        selectedCell = newCellElement;
        selectedCellIndex = index;
    }

    cellContainer.append(newCellElement);
}

// activate 1st element by default
cells[0].onclick.apply();

// svg
const lWall = document.getElementById('lWall');
const rWall = document.getElementById('rWall');
const fWall = document.getElementById('fWall');
const ceiling = document.getElementById('ceiling');

const infoLWall = document.getElementById('info-lWall');
const infoRWall = document.getElementById('info-rWall');
const infoFWall = document.getElementById('info-fWall');
const infoCeiling = document.getElementById('info-ceiling');

lWall.onclick = function () {
    paintWall(lWall, selectedCell.style.background);
    setInfoFieldText(infoLWall, 'visible', palette[selectedCellIndex].name, palette[selectedCellIndex].hex);
}

rWall.onclick = function () {
    paintWall(rWall, selectedCell.style.background);
    setInfoFieldText(infoRWall, 'visible', palette[selectedCellIndex].name, palette[selectedCellIndex].hex);
}

fWall.onclick = function () {
    paintWall(fWall, selectedCell.style.background);
    setInfoFieldText(infoFWall, 'visible', palette[selectedCellIndex].name, palette[selectedCellIndex].hex);
}

ceiling.onclick = function () {
    paintWall(ceiling, selectedCell.style.background);
    setInfoFieldText(infoCeiling, 'visible', palette[selectedCellIndex].name, palette[selectedCellIndex].hex);
}


function paintWall(element, color) {
    element.style.fill = color;
}

function clearColors() {
    paintWall(lWall, 'white');
    paintWall(rWall, 'white');
    paintWall(fWall, 'white');
    paintWall(ceiling, 'white');
    setInfoFieldText(infoCeiling, 'hidden', "placeholder","placeholder");
    setInfoFieldText(infoLWall, 'hidden', "placeholder", "placeholder");
    setInfoFieldText(infoRWall, 'hidden', "placeholder", "placeholder");
    setInfoFieldText(infoFWall, 'hidden', "placeholder", "placeholder");
}

function setInfoFieldText(element, visibility, name, hex) {
    // 0 = name, 1 = HEX
    let colorNameField = element.children[0];
    let colorHexField = element.children[1];

    colorNameField.style.visibility = visibility;
    colorHexField.style.visibility = visibility;

    colorNameField.innerHTML = name;
    colorHexField.innerHTML = hex;
}