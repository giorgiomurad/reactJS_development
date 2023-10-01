import './App.css';

import Table from './components/Table.js';
const image = require('./images/bullseye.png');

function App() {
    let tables = [];

    for (let i = 0; i < 12; i++)
        tables.push(i+1);

    return <div>
        <img src={image} alt='' />
        <br />
        {
            tables.map(i => {
                return <Table value={i} />;
            })
        }
    </div>
}


export default App;