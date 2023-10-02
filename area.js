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
    console.log(area)
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
    // area
    const area = width * length;

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

}

function calculateParallelogramArea() {
    const base = getInputValue("parallelogram-base");
    const height = getInputValue("parallelogram-height");
    const area = base * height;
    setInnerTextField('parallelogram-area', area)

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