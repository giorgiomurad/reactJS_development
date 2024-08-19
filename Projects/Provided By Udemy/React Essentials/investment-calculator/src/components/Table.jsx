import PropTypes from 'prop-types';

function Table({ investment }) {
  const {
    initialInvestment, annualInvestment,
    expectedReturn, duration
  } = investment;


  let year = 0;
  let investmentValue = initialInvestment;
  let annualInterest  = annualInvestment;
  let totalInterest   = annualInvestment;
  let investedCapital = initialInvestment+annualInvestment;

  const years = []
  for(let i = 1; i <= duration; i++) {

    year = i;
    investmentValue = investedCapital + totalInterest;

    years.push({
      year,
      investmentValue,
      annualInterest,
      totalInterest,
      investedCapital
    })

    investedCapital += annualInterest;
    annualInterest = investmentValue * (expectedReturn / 100);
    totalInterest += annualInterest;
  }


  const formatter = new Intl.NumberFormat('en-US', {
    style:    'currency',
    currency: 'USD',
    maximumFractionDigits:  0,
    minimumFractionDigits:  0
  })


  return <>
  {
    duration <= 0 ?
    <p id='message'>No Investment Added!</p>
    :
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
      </tr>
      </thead>
      <tbody>
        {
          years.map(investedYear => {
            const {
              year, investmentValue,
              annualInterest, totalInterest,
              investedCapital
            } = investedYear

            return <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(investmentValue)}</td>
              <td>{formatter.format(annualInterest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          })
        }
      </tbody>
    </table>
  }
    
  </>
}

Table.propTypes = {
  investment: PropTypes.exact({
    initialInvestment:  PropTypes.number,
    annualInvestment:   PropTypes.number,
    expectedReturn:     PropTypes.number,
    duration:           PropTypes.number,
  })
}

export default Table;