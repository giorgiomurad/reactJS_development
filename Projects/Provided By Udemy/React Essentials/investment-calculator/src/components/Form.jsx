import PropTypes from 'prop-types';

import Input from "./Input";

function Form({ investment, onUpdateInvestment }) {
  const {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  } = investment;


  return <div id='form'>
    <div className='input-group'>
      <Input label='Initial Investment' name='initialInvestment' value={initialInvestment} onChange={onUpdateInvestment} />
      <Input label='Annual Investment' name='annualInvestment' value={annualInvestment} onChange={onUpdateInvestment} />
    </div>
    <div className='input-group'>
      <Input label='Expected Return' name='expectedReturn' value={expectedReturn} onChange={onUpdateInvestment} />
      <Input label='Duration' name='duration' value={duration} onChange={onUpdateInvestment} />
    </div>
    
  </div>
}

Form.propTypes = {
  investment: PropTypes.exact({
    initialInvestment:  PropTypes.number,
    annualInvestment:   PropTypes.number,
    expectedReturn:     PropTypes.number,
    duration:           PropTypes.number
  }),
  onUpdateInvestment: PropTypes.func
}

export default Form;