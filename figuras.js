//Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

console.groupEnd();

//Codigo del triangulo

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2 ;
}

console.groupEnd();

// Codigo del circulo
//Diametro
console.group("Circulos");

function diametroCirculo (radio) {
    return radio * 2;
}

//Pi
const PI= Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


// Aqui interactuamos con el HTML
// Funciones del cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//altura de un triangulo isoseles


function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}