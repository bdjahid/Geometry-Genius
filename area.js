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