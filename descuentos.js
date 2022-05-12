

function calcularPrecioConDescuento(precio, descuento, cupon) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento - cupon) / 100;
    
    return precioConDescuento;
}








function onClickButtonPriceDiscount () {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    if (couponValue === 2) {
        cupon = 10;
    } else if (couponValue === 3) {
        cupon = 20;
    } else if (couponValue === 4) {
        cupon = 30;
    } else { 
        document.write("No es un cupon valido"); 
    };

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    

    const priceWithDiscount = calcularPrecioConDescuento(priceValue, discountValue, couponValue);

    const resultPrice = document.getElementById("ResultP");
    resultPrice.innerText = `El precio con descuento es: $ ${priceWithDiscount}`;

};