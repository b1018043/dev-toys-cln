import type { NextPage } from 'next';
import * as React from "react";
import { useState, useEffect } from 'react';
import Editor from "../components/editor";
import type { TextConvertFunc } from "../utils/textconv";
import {toConstant, toLowerCase, toSnakeCase, toUpperCamelCase,} from "../utils/textconv"; 

const radioButtonLabelStyle: string = "flex py-2 px-5 bg-gray-900 border border-gray-300 rounded-lg text-slate-300 cursor-pointer focus:outline-none hover:bg-gray-800 peer-checked:bg-gray-700 peer-checked:border-transparent";

type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>void;

interface RadioButtonProps{
    value: string;
    name: string;
    id: string;
    label: string;
    checked: boolean;
    onChange: InputChangeHandler;
}

const RadioButton: React.FunctionComponent<RadioButtonProps> = ({value,name,id,label,checked,onChange}:RadioButtonProps)=>{
    return (
        <div className="mx-4">
            <input 
                className="sr-only peer" type="radio" value={value} 
                name={name} id={id} checked={checked}
                onChange={onChange}
            />
            <label className={radioButtonLabelStyle} htmlFor={id}>
                {label}
            </label>
        </div>
    );
}

const emptyTextConv: TextConvertFunc = (a:string)=>a;

const nameFuncList: [string,TextConvertFunc][] = [
    ["none",emptyTextConv],
    ["UPPER CASE",toConstant],
    ["lower case",toLowerCase],
    ["snake_case",toSnakeCase],
    ["CamelCase",toUpperCamelCase],
];

const TextConv: NextPage = () => {
    const [inputText, setInputText] = useState<string>("");
    const [convText, setConvText] = useState<string>("");
    const [funcIndex,setFuncIndex] = useState<number>(0);

    const handleRadioChange: InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const tmp = nameFuncList.findIndex((item)=>item[0]===e.target.value);
        const tarFunc = tmp>=0?tmp:0;
        setFuncIndex(tarFunc);
    }

    useEffect(() => {
        setConvText(nameFuncList[funcIndex][1](inputText));
    }, [inputText,funcIndex]);
    return (
        <div>
            <div className="m-4 h-10 flex flex-row">
                {nameFuncList.map(([name],index)=>(
                    <RadioButton 
                    onChange={handleRadioChange}
                    key={index} id={index.toString()} value={name} checked={name=== nameFuncList[funcIndex][0]}
                    name={name} label={name}
                />
                ))}
            </div>
            <div className="h-80 flex flex-row">
                <Editor
                    className="basis-1/2 m-4"
                    text={inputText}
                    setText={setInputText}
                />
                <Editor
                    className="basis-1/2 m-4"
                    text={convText}
                    editable={false}
                />
            </div>
        </div>
    )
}

export default TextConv;