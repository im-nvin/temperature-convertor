const calculateTemp = () => {
    const inputValue = document.getElementById('temp').value;
    const conversionSelected = document.getElementById('tempDiff');
    const valueSelected = tempDiff.options[conversionSelected.selectedIndex].value;

    const celsiusToFahrenheit = (value) => {
        const Fahrenheit = (value * 9) / 5 + 32;
        return Fahrenheit.toFixed(2)

    }

    const FahrenheitTocelsius = (value) => {
        const celsius = (value - 32) * 5 / 9;
        return celsius.toFixed(2);
    }

    let result;
    if (valueSelected == 'cel') {
        result = celsiusToFahrenheit(inputValue);
        document.getElementById('result').innerHTML = `= ${result} °fahrenheit`
    } else {
        result = FahrenheitTocelsius(inputValue);
        document.getElementById('result').innerHTML = `= ${result} °celsius`
    }

}