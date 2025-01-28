function convertDateToArray() {
  const input = document.getElementById("dateInput").value; // Obtiene la fecha en formato "YYYY-MM-DD"
  if (input) {
    const dateArray = input.split(""); // Divide la fecha en [YYYY, MM, DD] y convierte cada parte a número
    const filteredArray = dateArray.filter(element => element !== "-");

    const sum = filteredArray.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0);

    console.log(sum);
    document.getElementById("output").textContent = `Mi número es el: ${sum}`;
    
  } else {
    document.getElementById("output").textContent = "Por favor, selecciona una fecha.";
  }
}