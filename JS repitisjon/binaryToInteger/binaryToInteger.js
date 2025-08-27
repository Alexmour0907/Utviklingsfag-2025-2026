function convertBinary() {
	const v = document.getElementById('binaryInput').value;
	document.getElementById('result').textContent =
		/^[01]+$/.test(v) ? `Desimalverdien er: ${parseInt(v, 2)}` : 'Ugyldig: bruk bare 0 og 1.';
}
