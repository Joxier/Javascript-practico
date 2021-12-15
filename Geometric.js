// //Cuadrado

// console.group("Cuadrado");

// const ladoCuadrado = 5 ;

// console.log (
// "Todos los lados del cuadrado miden "
// + ladoCuadrado 
// + " cm"
// );

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log(
//     "El perímetro del cuadrado es " 
//     + perimetroCuadrado 
//     + " cm"
// );

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es "
//  + areaCuadrado
//  + " cm^2");

//  console.groupEnd();

//  //Triangulo
//  console.group("Triángulo");
  
//   const ladoTriangulo1 = 6 ;
//   const ladoTriangulo2 = 6 ;
//   const baseTriangulo = 3 ;
//   const alturaTriangulo = 5;

//  console.log (
//     "El triángulo tiene los lados de "
//     + ladoTriangulo1 + " cm y "
//     + ladoTriangulo2 + " cm, la base de " 
//     + baseTriangulo + " cm y la altura es de "
//     + alturaTriangulo + " cm"
//     );

//  const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//  console.log(
//  "El perímetro del triángulo mide" 
//  + perimetroTriangulo 
//  + " cm"
//  );

// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
// console.log("El área del triángulo es " 
// + areaTriangulo + " cm^2");

// console.groupEnd();

// // Códig del círculo
// console.group("Círculo");

// // radio
// const radioCirculo = 5 ;
// console.log("El radio del círculo es " + radioCirculo +" cm");

// // Diametro
// const diametroCirculo = radioCirculo * 2 ;
// console.log("El díametro del círculo es " + diametroCirculo+" cm");

// // PI
// const PI = Math.PI;

// // circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("La círcunferencia del círculo es " + perimetroCirculo +" cm");

// // Área

// const areaCirculo = PI *(radioCirculo * radioCirculo);
// console.log("El área del círculo es " + areaCirculo +" cm^2");
// console.groupEnd();

// En este segundo ejercicio voy a replicar los mismos procedimientos que el anterior pero cambio las variables por funcipones 

function perimetroCuadrado (lado) 
    {
        const perimetro = lado*4;
        return perimetro;
        
    }

function areaCuadrado (lado)
    {

        return  `El area del cuadrado es ${lado * lado} ` ;
        
    }

// Triangulo

function perimetroTriangulo (lado1, lado2, base)
    {
        const perimetro = lado1+ lado2 + base ;
        return perimetro;
    }

function areaTriangulo (base,altura)
    {
        const area = (base*altura)/2;
        return area;
    }

// circulo
function diametroCirculo (radio)
    {
        const diametro = radio*2;
        return diametro;
    }
 // PI
const PI = Math.PI;

function perimetroCirculo (radio)
    {
        const diametro = diametroCirculo(radio);
        const perimetro = diametro*PI;
        return perimetro;
    }
    function areaCirculo (radio)
    {
        const area = radio*radio*PI;
        return area;
    }

    // Funciones de botones

    function cPerimetroCuadrado(){
        const input = document.getElementById("ladoCuadrado");
        const value = input.value;
        
        const perimetro = perimetroCuadrado(value);
       
        const resultadoP = document.getElementById("rPCuadrado");
        resultadoP.innerHTML ="El perímetro es " + perimetro +" m";
        
    }


    function cAreaCuadrado(){
        const input = document.getElementById("ladoCuadrado");
        const value = input.value;
        
        const area = areaCuadrado(value);
       

        const resultadoP = document.getElementById("rACuadrado");
        resultadoP.innerHTML ="El área es " + area + " m" ;

    }

    function cPerimetroTriangulo(){
        const lado1 = document.getElementById("inputL1");
        const value1 = lado1.value;

        const lado2 = document.getElementById("inputL2");
        const value2 = lado2.value;

        const base = document.getElementById("inputB");
        const valueb = base.value;

        
        
        const perimetro = perimetroTriangulo(value1, value2, valueb);
       
        const resultadoP = document.getElementById("rPerimetroT");
        resultadoP.innerHTML ="El perímetro es " + perimetro +" m";
        
    }

    function cAreaTriangulo(){
        const base = document.getElementById("inputB");
        const valueB = base.value;

        const altura = document.getElementById("inputA");
        const valueh = altura.value;
        
        const area = areaTriangulo(valueB,valueh);
        
        const resultadoP = document.getElementById("rAreaT");
        resultadoP.innerHTML ="El área es " + area +" m^2";

    }

    function cPerimetroCirculo(){
        const input = document.getElementById("inputRadio");
        const value = input.value;
        
        const perimetro = perimetroCirculo(value);
        
        const resultadoP = document.getElementById("rPCirculo");
        resultadoP.innerHTML ="El perímetro es " + perimetro +" m";
    }


    function cAreaCirculo(){
        const radio = document.getElementById("inputRadio");
        const valueRadio = radio.value;
        
        const area = areaCirculo(valueRadio);
       
        
        const resultadoP = document.getElementById("rACirculo");
        resultadoP.innerHTML ="El área es " + area +" m^2";
       
     }