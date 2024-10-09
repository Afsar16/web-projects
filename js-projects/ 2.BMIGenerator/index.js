const form = document.querySelector('form')

form.addEventListener('submit', function(e) { 
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results'); 
    console.log(height);
    
    if(height < 0 || height === '' || isNaN(height) ) {
        result.innerHTML = `please enter a valid height ${height}`
    } 
    else if(weight < 0 || weight === '' || isNaN(weight)) {
        result.innerHTML = `please enter a valid weight ${weight}`
    }
    else {
        const val = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${val}</span>`; 
    }

})