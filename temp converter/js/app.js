function getInputValue(){
    // Selecting the input element and get its value 
    let inputVal = document.getElementById("myInput").value;
    
    alert('The temperature is ' + (inputVal*9/5 + 32) + ' degrees Farenheit.' )
}