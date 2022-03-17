import type { NextPage } from 'next';
import * as React from 'react';
import {useState,useEffect} from "react";
import TextConvertor from '../components/textconvertor';

const JSONFormatterEditor: NextPage = () => {
	const [inputText,setInputText] = useState<string>("");
    const [outputText,setOutputText] = useState<string>("");
    const [errorMessage,setErrorMessage] = useState<string>("");
    useEffect(()=>{
        try{
            const parsedText = JSON.parse(inputText);
            setOutputText(JSON.stringify(parsedText,null,4));
            setErrorMessage("");
        }catch(e:any){
            setErrorMessage(`${e.name}:${e.message}`);
            setOutputText("");
        }
    },[inputText]);

	return (
		<TextConvertor
			errorMessage={errorMessage}
			inputText={inputText}
			outputText={outputText}
			setInputText={setInputText}
		/>
	);
};

export default JSONFormatterEditor;
