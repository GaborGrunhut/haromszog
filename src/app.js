const baseElem = document.querySelector("#base");
const heightElem = document.querySelector("#height");
const calcButton = document.querySelector("#calcButton");
const areaElem = document.querySelector("#area");

calcButton.addEventListener('click', () => {
    var base = Number(baseElem.value);          // számmá konvertáljuk a "number" függvénnyel.
    var height = Number(heightElem.value);
    var area = calcTriangleArea(base, height);
    console.log("Terület: " + area);
    areaElem.value = area;
});


function calcTriangleArea (base, height) {
    return base * height / 2;
}

