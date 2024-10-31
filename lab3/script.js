document.getElementById('tipForm').addEventListener('input', function() {
    const billTotal = parseFloat(document.getElementById('billTotal').value);
    const tipPercentage = parseFloat(document.getElementById('tipSlider').value);
    const currency = document.getElementById('currencySelect').value;
    const errorMessage = document.getElementById('error-message');

    const conversionRates = {
        USD: 1,
        INR: 84.07,
        JPY: 149.34
    };

    // Reset error message
    errorMessage.textContent = '';

    if (!isNaN(billTotal) && billTotal >= 0) {
        const tipAmount = (billTotal * (tipPercentage / 100)).toFixed(2);
        const totalWithTip = (billTotal + parseFloat(tipAmount)).toFixed(2);

        document.getElementById('tipPercentage').value = `${tipPercentage}%`;
        document.getElementById('tipAmount').value = (tipAmount * conversionRates[currency]).toFixed(2);
        document.getElementById('totalWithTip').value = (totalWithTip * conversionRates[currency]).toFixed(2);
    } else {
        errorMessage.textContent = "Please enter a valid positive number.";
        document.getElementById('tipPercentage').value = '';
        document.getElementById('tipAmount').value = '';
        document.getElementById('totalWithTip').value = '';
    }
});
