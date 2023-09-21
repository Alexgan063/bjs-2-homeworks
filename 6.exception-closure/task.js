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
    let parsingResult = parseCount(count);
    return parsingResult; 
    } catch (error) {
        return error;
    }
}

// Задача 2 - Работа с треугольником - 

class Triangle{
    #perimeter;
    #area;
    constructor(a, b, c){
        let error = new Error ('Треугольник с такими сторонами не существует');

        if ((a+b) < c || (b+c) < a || (a+c) < b){
            throw error;
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    
    set perimeter(any){
        return this.#perimeter;
   }

    get perimeter(){
        return this.#perimeter = this.a + this.b + this.c;
    }
    

    set area(any){
        return this.#area;
    }

    get area(){
        let p = this.perimeter / 2; 

        return this.#area = Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c){
    try{
        let triangle1 = new Triangle(a, b, c);
        return triangle1;
    }
    catch(error)
    {
        return {
           get perimeter (){return "Ошибка! Треугольник не существует"},
           get area (){return "Ошибка! Треугольник не существует"}
          }
    }
}