import { useState } from "react"

import Header from "./components/Header"
import Form from "./components/Form"
import Table from "./components/Table"

const DEFAULT_INVESTMENT = {
  initialInvestment:  0,
  annualInvestment:   0,
  expectedReturn:     0,
  duration:           0
}

function App() {
  const [investment, setInvestment] = useState(DEFAULT_INVESTMENT);


  function updateInvestment(event) {
    const { name, value } = event.target;

    setInvestment(prevInvestment => {

      return {...prevInvestment, [name]: Number(value)}
    });
  }

  return (
    <div id="container">
      <Header />
      <Form investment={investment} onUpdateInvestment={updateInvestment}/>
      <Table investment={investment} />
    </div>
  )
}

export default App
