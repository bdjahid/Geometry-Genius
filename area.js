function calculateTriangleArea() {

    // base 
    const baseField = document.getElementById('triangle-base');
    const baseFieldString = baseField.value;
    const base = parseFloat(baseFieldString)
    console.log(base)
    // height
    const heightField = document.getElementById('triangle-height');
    const heightFieldString = heightField.value;
    const height = parseFloat(heightFieldString)
    console.log(height)
    const area = 0.5 * base * height;

    // add to calculation Entry
    addToCalculationEntry('Triangle', area)


    const areaSpan = document.getElementById('triangle-area')
    areaSpan.innerText = area;
}

function calculateRectangleArea() {
    //width
    const rectangleField = document.getElementById('rectangle-width');
    const rectangleFieldValueString = rectangleField.value;
    const width = parseFloat(rectangleFieldValueString)
    console.log(width)
    // length
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldValueString = lengthField.value;
    const length = parseFloat(lengthFieldValueString)
    console.log(length)
    // validation
    if (isNaN(width) || isNaN(length)) {
        alert('Please valid a number')
        return;
    }

    // area
    const area = width * length;

    // add to calculation Entry
    addToCalculationEntry('rectangle', area)


    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

}

function calculateParallelogramArea() {
    const base = getInputValue("parallelogram-base");
    const height = getInputValue("parallelogram-height");
    if (isNaN(base) || isNaN(height)) {
        alert('Your Number is invalid');
        return;
    }
    const area = base * height;
    setInnerTextField('parallelogram-area', area)
    // add to calculation Entry
    addToCalculationEntry('parallelogram', area)

}
function calculateEllipseArea() {
    const a = getInputValue("ellipse-first-radius");
    const b = getInputValue("ellipse-second-radius");
    const area = 3.14 * a * b;
    const areaToFixed = area.toFixed(2)
    // add to calculation Entry
    addToCalculationEntry('Ellipse', areaToFixed)


    setInnerTextField('ellipse-area', areaToFixed)

}

function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputValueField = inputField.value;
    const value = parseFloat(inputValueField);
    return value;
}

function setInnerTextField(areaId, area) {
    const element = document.getElementById(areaId);
    element.innerText = area;
}

// add to calculation
function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}.${areaType} ${area} cm<sup>2</sup> <button class="btn btn success">Convert</button>`
    calculationEntry.appendChild(p)
}