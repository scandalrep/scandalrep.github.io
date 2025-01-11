// Площадь фигуры с тремя отверстиями
function getAreaCircle(x){
    return Math.PI*x*x 
}
let s1 = 100
let s2 = 5
let s3 = 7
let s4 = 9
let areaFig = getAreaCircle(s1) - getAreaCircle(s2) - getAreaCircle(s3) - getAreaCircle(s4)
console.log(areaFig)