document
  .getElementById("currency-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    const rates = {
      USD: { INR: 82.5, EUR: 0.93, AUD: 1.5, CAD: 1.35, HKD: 7.85, SGD: 1.37 },
      INR: {
        USD: 0.012,
        EUR: 0.011,
        AUD: 0.018,
        CAD: 0.016,
        HKD: 0.095,
        SGD: 0.017,
      },
      EUR: { USD: 1.08, INR: 90.67, AUD: 1.6, CAD: 1.45, HKD: 8.44, SGD: 1.47 },
      AUD: {
        USD: 0.67,
        INR: 54.83,
        EUR: 0.62,
        CAD: 0.91,
        HKD: 5.28,
        SGD: 0.92,
      },
      CAD: { USD: 0.74, INR: 60.82, EUR: 0.69, AUD: 1.1, HKD: 5.81, SGD: 0.95 },
      HKD: { USD: 0.13, INR: 10.5, EUR: 0.12, AUD: 0.19, CAD: 0.17, SGD: 0.17 },
      SGD: {
        USD: 0.73,
        INR: 59.05,
        EUR: 0.68,
        AUD: 1.09,
        CAD: 1.05,
        HKD: 5.95,
      },
    };

    let convertedAmount = null;
    if (rates[fromCurrency] && rates[fromCurrency][toCurrency]) {
      convertedAmount = (amount * rates[fromCurrency][toCurrency]).toFixed(2);
    } else if (fromCurrency === toCurrency) {
      convertedAmount = amount.toFixed(2);
    }

    const resultDiv = document.getElementById("result");
    if (convertedAmount !== null) {
      resultDiv.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
      resultDiv.innerHTML = "Conversion rate not available.";
    }
  });
