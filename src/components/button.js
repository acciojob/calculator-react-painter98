import React from 'react';
import '../styles/App.css';

function Button({value,input,element}){
    console.log(value); //usestate variable


    function operation(){ //final result
        let val = value!=''?eval(value):'';
        input(val);
    }
    function clearing(){ //clear input value
        input('');
    }
    function inputting(){
        value===''
        ?(element==='/'||element==='+'||element==='-'||element==='*'||element==='')
          ?input('')
          :input(value+element)
        :input(value+element);
    }

    return (
        <button 
            onClick={element!=='='?element==='c'?clearing:inputting:operation} 
            id={element==='+'?'plus':element==='='?'equals':null}
            >
                {element}
        </button>
    )
}
export default Button;