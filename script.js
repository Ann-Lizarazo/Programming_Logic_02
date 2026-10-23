
const entrada = document.getElementById('celsius');
const boton = document.getElementById('convertir');
const resultado = document.getElementById('resultado');
const error = document.getElementById('error');

boton.addEventListener('click', function () {
    const texto = entrada.value;
    const celsius = Number(texto);

    if (texto.trim() === '' || !Number.isFinite(celsius)) {
        error.textContent = 'Error: ingresa una temperatura válida.';
        resultado.textContent = '';
        return;
    }

    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 1.8) + 32;

    resultado.textContent =
        'Grados Kelvin: ' + kelvin + '°' +
        ' | Grados Fahrenheit: ' + fahrenheit + '°';

    error.textContent = '';
});
