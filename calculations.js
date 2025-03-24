// Heron's Formula Calculation
//By using document., we tell JavaScript to look for elements within the current web page's DOM structure.
document.getElementById('heron-form').addEventListener('submit', (event) => {
    event.preventDefault();
    //The parseFloat converts a string to a floating-point number
    //getElementById returns a reference to the first object with the specified value of the ID attribute.
    const a = parseFloat(document.getElementById('a-side').value);
    const b = parseFloat(document.getElementById('b-side').value);
    const c = parseFloat(document.getElementById('c-side').value);
    const area = 0.25 * (Math.sqrt(4 * (a ** 2) * (b ** 2) - (((a ** 2) + (b ** 2) - (c ** 2)) ** 2)))
    //toFixed returns a string representing a number in a fixed point notation the (#) is choosing how many decimal points
    document.getElementById('heron-result').value = area.toFixed(2)
    console.log(area)
})

//Ambiguous Case Calculation
//MAYBE MAKE IT CHECK IF THE TRIANGLE IS EVEN POSSIBLE
document.getElementById('ambiguous-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const aAngle = parseFloat(document.getElementById('a-angle').value);
    const aSide = parseFloat(document.getElementById('a-side-2').value);
    const bSide = parseFloat(document.getElementById('b-side-2').value);
    // The ((aAngle)*(Math.PI/180)) part change the degrees into radians because Math.sin takes radians
    const hSide = Math.round((bSide * (Math.sin((aAngle) * (Math.PI / 180)))) * 100) / 100;

    if (aAngle <= 90) {
        if (aSide < hSide) {
            document.getElementById('ambiguous-result').value = "No triangle"
        }
        else if (aSide == hSide) {
            document.getElementById('ambiguous-result').value = "Right triangle"
        }
        else if (aSide > bSide) {
            document.getElementById('ambiguous-result').value = "One triangle"
        }
        else if (hSide < aSide && aSide < bSide) {
            document.getElementById('ambiguous-result').value = "Two triangles (ambiguous case)"
        }
    }
    else if (aAngle < 180) {
        if (aSide < bSide || aSide == bSide) {
            document.getElementById('ambiguous-result').value = "No triangle"
        }
        else {
            document.getElementById('ambiguous-result').value = "One triangle"
        }
    }
    else {
        document.getElementById('ambiguous-result').value = "Please enter an angle between 0-180"
    }
})

// -------------------------------------------------------------------------
document.getElementById('newton-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let x1 = parseFloat(document.getElementById('root').value);
    let x2 = x1

    do {
        x1 = x2;
        x2 = x1 - ((6 * x1 ** 4 - 13 * x1 ** 3 - 18 * x1 ** 2 + 7 * x1 + 6) / (24 * x1 ** 3 - 39 * x1 ** 2 - 36 * x1 + 7));
    } while (Math.abs(x1 - x2) > 0.001);
    document.getElementById('newton-result').value = x2.toFixed(2);
})

document.getElementById('polynomial-form').addEventListener('submit', (event) => {
    event.preventDefault();
    // Splitting the string into an array
    // Number is a built-in JavaScript function that converts a value into a number.
    // When you use .map(Number), you’re telling JavaScript to apply the Number function to each element in the array.
    //The .map() function is a built-in JavaScript array method.
    // It creates a new array by applying a function to each element of the original array.
    // The function provided to .map() is called for every element in the array, and the result of that function is used to populate the new array.
    const coeffs = document.getElementById('coefficient').value.split(' ').map(Number);
    const exps = document.getElementById('exponent').value.split(' ').map(Number);
    const xValue = parseFloat(document.getElementById('x-value').value);
    let polynomialEq = "";
    let polynomialEv = 0;

    if (coeffs.length == exps.length) {
        // Making the polynomial
        //The for loops lets it run until it's gone through the entire array
        for (let i = 0; i < coeffs.length; i++) {
            const coeff = coeffs[i];
            const exp = exps[i];

            // Checking if the exponent is positive or negative
            if (i > 0 && coeff >= 0) {
                polynomialEq += ' + ';
            } else if (i > 0 && coeff < 0) {
                polynomialEq += ' - ';
            }

            //Adding the correct symbol after the coefficient
            if (exp == 0) {
                polynomialEq += Math.abs(coeff);
            } else if (exp == 1) {
                polynomialEq += (Math.abs(coeff)) + 'x';
            } else {
                polynomialEq += Math.abs(coeff) + 'x^' + exp;
            }
            // Calculating the polynomial value
            polynomialEv += coeff * (xValue ** exp);
        }
        document.getElementById('polynomial-result').value = polynomialEq;
        document.getElementById('polynomial-result-2').value = polynomialEv.toFixed(2);
    } else {
        document.getElementById('polynomial-result').value = 'Please enter the same # of exponents and coefficients';
        document.getElementById('polynomial-result-2').value = 'Please enter the same # of exponents and coefficients';
    }
})