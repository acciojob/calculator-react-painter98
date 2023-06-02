import React,{useState} from 'react';
import Button from './button.js';
import '../styles/App.css';

function App(){
    let [value,setValue] = useState('');//dynamic variable
    let keys = ['c','/','*','-','7','8','9','4','5','6','+','1','2','3','0','.','','=']

    return (
        <div id='main'>
            <h1>Calculator</h1>
            <input type='text' value={value} className="box"/>
            <br></br>
            <br/>
            <div className='container'>
                {keys.map((key)=>{ //map the keys in the array and arrange it in the calculator box form
                    return <Button value={value} input={setValue} element={key} />
                })
                    
                }           
            </div>
        </div>
    )
}

export default App;
