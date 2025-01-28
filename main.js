function convertDateToArray() {
  const input = document.getElementById("dateInput").value; 
  
  if (input) {
    const dateArray = input.split(""); 
    
    const filteredArray = dateArray.filter(element => element !== "-");

    const sum = filteredArray.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0);

    console.log(sum);
    document.getElementById("output").textContent = `Mi número es el: ${sum}`;
    
  } else {
    document.getElementById("output").textContent = "Por favor, selecciona una fecha.";
  }
}