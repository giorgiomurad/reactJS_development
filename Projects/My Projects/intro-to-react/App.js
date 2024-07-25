import './App.css';

import Header from './components/Header';
import Table from './components/Table';
import table from './table.json';

function App() {

  return (
    <div id="app">
      <Header />
      <Table list={table.list} />
    </div>
  );
}

export default App;
