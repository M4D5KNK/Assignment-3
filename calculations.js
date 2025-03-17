// Heron's Formula Calculation
//By using document., we tell JavaScript to look for elements within the current web page's DOM structure.
document.getElementById('heron-form').addEventListener('submit', (event) =>{
    event.preventDefault();
    //The parseFloat converts a string to a floating-point number
    //getElementById returns a reference to the first object with the specified value of the ID attribute.
    const a = parseFloat(document.getElementById('a-side').value);
    const b = parseFloat(document.getElementById('b-side').value);
    const c = parseFloat(document.getElementById('c-side').value);
    const area = 0.25*(Math.sqrt((4*a**2*b**2)-(a**2+b**2+c**2)**2))
    //toFixed returns a string representing a number in a fixed point notation the (#) is choosing how many decimal points
    document.getElementById('heron-result').value = area.toFixed(2)
})

//Ambiguous Case Calculation
//MAYBE MAKE IT CHECK IF THE TRIANGLE IS EVEN POSSIBLE
document.getElementById('ambiguous-form').addEventListener('submit', (event)=>{
    event.preventDefault();
    const aAngle = parseFloat(document.getElementById('a-angle').value);
    const aSide = parseFloat(document.getElementById('a-side-2').value);
    const bSide = parseFloat(document.getElementById('b-side-2').value);
    const hSide = bSide*(Math.sin(bSide)*(180/Math.PI));

    if(aAngle <= 90){
        if(aSide < hSide){
            document.getElementById('ambiguous-result').value = "No triangle"
        }
        else if (aSide == hSide){
            document.getElementById('ambiguous-result').value = "Right triangle"
        }
        else if (aSide > bSide){
            document.getElementById('ambiguous-result').value = "One triangle"
        }
        else if (hSide < aSide && aSide < bSide){
            document.getElementById('ambiguous-result').value = "Two triangles (ambiguous case)"
        }
    }   
    else if(aAngle < 180){
        if(aSide < bSide || aSide==bSide){
            document.getElementById('ambiguous-result').value = "No triangle"
        }
        else{
            document.getElementById('ambiguous-result').value = "One triangle"
        }
    }
    else{
        document.getElementById('ambiguous-result').value = "Please enter an angle between 0-180"
    }
})

// -------------------------------------------------------------------------
document.getElementById('newton-form').addEventListener('submit', (event) =>{
    event.preventDefault();
    let x1 = parseFloat(document.getElementById('root').value);
    let x2 = x1

    do{
        x1 = x2;
        x2 = x1-((6*x1**4 - 13*x1**3 - 18*x1**2 + 7*x1 +6)/(24*x1**3-39*x1**2-36*x1+7));  
    }while (Math.abs(x1-x2) > 0.001);
    document.getElementById('newton-result').value = x2.toFixed();
})

document.getElementById('polynomial-form').addEventListener('submit', (event) =>{
    event.preventDefault();

    
})

