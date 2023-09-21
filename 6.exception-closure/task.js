// Задача 1 - Перехват ошибок
function parseCount(count){
    let parsingResult = parseFloat(count);
    let error = new Error ('Невалидное значение');
    if (isNaN(parsingResult)){
        throw error;
    } 
    return parsingResult;
}

function validateCount(count){
    try {
        return parseCount(count);
    }
    catch (error) {
        return error;
    }
}

// Задача 2 - Работа с треугольником - 

class Triangle{
    constructor(a, b, c){
        let error = new Error ('Треугольник с такими сторонами не существует');

        if ((a+b) < c || (b+c) < a || (a+c) < b){
            throw error;
        } 
            
        this.a = a;   
        this.b = b;
        this.c = c;  
    } 

    get perimeter(){
        return this.a + this.b + this.c;
    }
    
    get area(){
        let p = this.perimeter / 2; 

        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }    
}

function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    }
    catch(error)
    {
        return {
           get perimeter (){return "Ошибка! Треугольник не существует"},
           get area (){return "Ошибка! Треугольник не существует"}
          }
    }
}