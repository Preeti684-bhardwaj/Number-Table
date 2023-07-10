import React,{useState} from 'react'

function NumberTable(){
    const [num ,setNum]=useState('');
    const handleNumberChange =(e)=>{
        const inputValue = e.target.value;
        const parsedValue = parseInt(inputValue);
        
        if (isNaN(parsedValue)) {
          setNum(''); // Set num to empty string if input is not a number
        } else {
          setNum(parsedValue); // Set num to parsed value if input is a number
        }
    }
    
  const createTable = () => {
    if (num === '') {
        return <p>Please enter a number.</p>;
      }
  
      if (num === 0) {
        return null; // Return null if input value is 0
      }
  
    const rows = [];
    for (let i = 1; i <=10; i++) {
            rows.push(
                <tr key={i}>
                <td>{num*i}</td>
                </tr>
            );
          }
      

    return rows
  };

    return(
        <div className='container'>
         <h1 className='label'>Generate a table for the given number</h1>
        <label className='enter'> Enter the Number: </label>
        <input className='input' type="number" value={num} onChange={handleNumberChange}/>
        <table className='table'>
          <thead>
            <tr>
             <th>Table</th>               
            </tr>
          </thead>
            <tbody>
             {createTable()}
            </tbody>
        </table>
        </div>
    )
    
}


export default NumberTable;













