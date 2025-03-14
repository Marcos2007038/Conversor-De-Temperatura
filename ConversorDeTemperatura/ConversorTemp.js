document.getElementById("tempEntrada").addEventListener("input", converter);
document.getElementById("unidadeEntrada").addEventListener("change", converter);

function converter() {
    const temp = parseFloat(document.getElementById("tempEntrada").value);
    const unidade = document.getElementById("unidadeEntrada").value;

    if (isNaN(temp)) {
        document.getElementById("tempFahrenheit").value = "";
        document.getElementById("tempKelvin").value = "";
        return;
    }

    let resultadoFahrenheit, resultadoKelvin, unidadeFahrenheit, unidadeKelvin;

    switch (unidade) {
        case "C":
            resultadoFahrenheit = (temp * 9/5) + 32; // Celsius para Fahrenheit
            resultadoKelvin = temp + 273.15;    // Celsius para Kelvin
            unidadeFahrenheit = "°F";
            unidadeKelvin = "K";
            break;
        case "F":
            resultadoFahrenheit = (temp - 32) * 5/9;         // Fahrenheit para Celsius
            resultadoKelvin = (temp - 32) * 5/9 + 273.15; // Fahrenheit para Kelvin
            unidadeFahrenheit = "°C";
            unidadeKelvin = "K";
            break;
        case "K":
            resultadoFahrenheit = temp - 273.15;               // Kelvin para Celsius
            resultadoKelvin = (temp - 273.15) * 9/5 + 32;  // Kelvin para Fahrenheit
            unidadeFahrenheit = "°C";
            unidadeKelvin = "°F";
            break;
        default:
            alert("Unidade inválida!");
            return;
    }

    document.getElementById("tempFahrenheit").value = resultadoFahrenheit.toFixed(2);
    document.getElementById("tempKelvin").value = resultadoKelvin.toFixed(2);

    document.getElementById("unidadeFahrenheit").innerHTML = `<option>${unidadeFahrenheit}</option>`;
    document.getElementById("unidadeKelvin").innerHTML = `<option>${unidadeKelvin}</option>`;
}
