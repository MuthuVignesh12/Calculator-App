import React, {useState} from 'react';
import {evaluate, string} from "mathjs";
import './Body.scss';
import styled from "styled-components";


const btnValues = [
    "C", "+/-", "%", "/",
    7, 8, 9, "X",
    4, 5, 6, "-",
    1, 2, 3, "+",
    0, ".", "=",
];

//Styled Class
const Answer = styled.div`
      padding: 22px;
      font-size: 18px;
      text-align: left;
      color: #ffffff85;
    `;

const Result = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    `;

const Equation = styled.div`
      font-size: 34px;
      text-align: right;
      padding: 6px;
    `;

const ResultValue = styled.div`
      font-size: 70px;
      text-align: right;
      padding: 6px;
    `;


const Body = () => {
    const [value, setValue] = useState({res : '', exp: ''});

    const printValue = (btnValue: any) => {
        console.log(btnValue);
        if (btnValue === 'C') {
            console.log(btnValue);
            setValue({ exp: '' , res: value.res});
        } else if (btnValue === '+/-') {
            console.log(value);
            if (value) {
                setValue({ exp:  evaluate(value.exp +'* -1') , res: value.res});
            }
        } else if (btnValue === '%') {
            setValue({ exp: value.exp + '%' , res: value.res});
        } else if (btnValue === '=') {
            console.log(value , evaluate(value.exp));
            setValue({ exp: evaluate(value.exp) , res: evaluate(value.exp)});
        } else if (btnValue === 'X') {
            setValue({ exp: value.exp + '*' , res: value.res});
        } else {
            const n = evaluate("1.2 * (2 + 4.5)");
            console.log(btnValue, n);
            setValue({exp:(String(value.exp) + btnValue ), res: value.res});
        }
    }

    return (
        <div className="Body">
            <div className="Display">
                <Result>
                    <Answer>Ans</Answer>
                    <ResultValue>{value.res}</ResultValue>
                </Result>
                <Equation>{value.exp}</Equation>
            </div>
            <div className="ButtonBox">
                {
                    btnValues.map((btn, i) => {
                    return (
                        <button key={i} className={ 'Button' + (btn === '=' ? ' ButtonEquals' : '')} onClick={()=> {printValue(btn)}}>
                            {btn}
                        </button>
                    );
                })
                }
            </div>
        </div>
    );
}

export default Body;
