import './Table.css';

function Table(props) {
    let value = props.value;
    let answers = [];

    for (let i = 1; i <= 10; i++) {
        answers.push(i*value);
    }

    return (
        <div className='main'>
            <h3>Table {value}:</h3>
            <div className='sub'>
                {
                    answers.map((i, index) => {
                        return <p>{index+1} x {value} = {i}</p>
                    })
                }
            </div>
            
        </div>
    );
}

export default Table;