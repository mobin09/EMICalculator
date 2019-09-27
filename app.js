document.getElementById('loan-form').addEventListener('submit', function (e) {
  // results

  document.getElementById('results').style.display = 'none';


  // loading
  document.getElementById('loader').style.display = 'block';

  setTimeout(calculateResult, 2000);

  e.preventDefault();
});


function calculateResult() {

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');


  const priciple = parseFloat(amount.value);

  const calculatedIntersest = parseFloat(interest.value) / (100 * 12);
  const calculatedPayment = parseFloat(years.value) * 12;

  // complete monthly payment

  const x = Math.pow(1 + calculatedIntersest, calculatedPayment);

  const monthly = (priciple * x * calculatedIntersest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayment) - priciple).toFixed(2);
    document.getElementById('results').style.display = 'block';
    document.getElementById('loader').style.display = 'none';
  }
  else {

    showError('please check your number');


  }

}
// show error
function showError(error) {


  document.getElementById('results').style.display = 'none';
    document.getElementById('loader').style.display = 'none';
  const errorDIV = document.createElement('div');
  errorDIV.className = 'alert alert-danger';
  errorDIV.appendChild(document.createTextNode(error));

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  card.insertBefore(errorDIV, heading);
  // clear error after 4 sec
  setTimeout(clearError, 4000);
}
function clearError() {
  document.querySelector('.alert').remove();
}