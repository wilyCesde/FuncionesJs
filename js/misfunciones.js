// Función para calcular el resultado de las operaciones

function operacionMat(val1, val2, oper){
    let result = 0;
    let mval1 = parseFloat(val1)
    let mval2 = parseFloat(val2)
    switch (oper){
        case "+":
            result = mval1 + mval2;
            break;
        case "-":
            result = mval1 - mval2;
            break;
        case "*":
            result = mval1 * mval2;
            break;
        case "/":
            result = mval1 / mval2;
            break;
    }
    return result;
}