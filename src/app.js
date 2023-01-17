/*
File: index.html
Author: Grünhut Gábor
Copyright: 2023, Grünhut Gábor
Group: Szoft I 1/E
Date: 2023-01-17
Github: https://github.com/GaborGrunhut/haromszog.git
Licenc: GNU GPL
*/


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

