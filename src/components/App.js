import React, { Component } from 'react';
import Results from './Results';
import ErrorMessage from './ErrorMessage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      interest: '',
      yearsToPay: '',
      totalMonthly: '',
      totalPayment: '',
      totalInterest: '',
      error: false,
    };
  }

  handleChange = (e) => {
    //get a reference to the name and value
    let { name, value} = e.target;
    console.log(name);
    console.log(value);
    //update the state for the name with the value input
    this.setState({[name]: value });
  }

  handleSubmit = (event) => {
    const { amount, interest, yearsToPay, error } = this.state;
    event.preventDefault();
    console.log('a submit request was sent');
    //handle submit to a blank form
    if (amount === '' || interest === '' || yearsToPay === '') {
      this.setState({
        error: !error,
      });
    } else {
      //calculate the total payments
      console.log(`before parse - amount${amount} - interest${interest} -yearstopay${yearsToPay}`);
      const principal = parseFloat(amount);
      const calculatedInterest = parseFloat(interest) / 100 / 12;
      const calculatedPayments = parseFloat(yearsToPay) * 12;
      console.log(principal);
      console.log(calculatedInterest);
      console.log(calculatedPayments);
      const total = this.monthlyPayment(principal, calculatedInterest, calculatedPayments);
      console.log(total);

    }
  }

  //compute monthly payment
  monthlyPayment = (principal, calculatedInterest, calculatedPayments) => {
    //calculate the 
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    //calculate total monthly payment
    const monthly = ((principal * x * calculatedInterest) / (x - 1)).toFixed(2);
    //calculate total interest
    const totalint = ((monthly * calculatedPayments) - principal).toFixed(2);
    //calculate total payment
    const totalpay = (monthly * calculatedPayments).toFixed(2);
    //update the state with the calculated monthly, interest and payment information
    this.setState({
      totalMonthly: monthly,
      totalInterest: totalint,
      totalPayment: totalpay,
      error: false,
    });
  };

  render() {
    const { amount, interest, yearsToPay, totalMonthly, totalInterest, totalPayment, error } = this.state;
    return (
      <div className="row">
        <div className="col-md-6 col-sm-12 mx-auto">
          <div className="card card-body textcenter mt-5">
            {!error ? null : <ErrorMessage />}
            <h1 className="heading display-5 pb-3">Loan Calculator</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$ Loan Amount</span>
                </div>
                <input
                  placeholder="Loan Amount" 
                  name="amount"
                  value={amount}
                  onChange={this.handleChange}
                  type="number"
                  className="form-control" />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">% Interest</span>
                </div>
                <input
                  name="interest"
                  value={interest}
                  onChange={this.handleChange}
                  type="number" 
                  className="form-control" 
                  placeholder="Interest" />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Years to repay</span>
                </div>
                <input 
                  name="yearsToPay"
                  value={yearsToPay}
                  onChange={this.handleChange}
                  type="number"
                  className="form-control"
                  placeholder="Years to repay" />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-dark btn-block" />
              </div>
            </form>
            <Results
              totalMonthly={totalMonthly}
              totalInterest={totalInterest}
              totalPayment={totalPayment} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
