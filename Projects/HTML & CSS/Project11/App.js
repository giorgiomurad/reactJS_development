import './App.css';

function App() {
    const rates = [
        14, 13, 12, 11, 10, 9, 8,
        7, 6, 5, 4, 3, 2, 1, 0
    ]

    return <div>
        <h1>pH Scale</h1>
        {
            rates.map((i, index) => {
                let add = '';

                if(i === 14.0)
                    add = 'VERY ALKALINE';
                
                else if(i === 7.0)
                    add = 'NEUTRAL';

                else if(i === 0.0)
                    add = 'VERY ACID';

                
                return <p className={'p'+i}>{i}.0 {add}</p>
            })
        }
    </div>
}


export default App;