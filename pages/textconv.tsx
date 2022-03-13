import type { NextPage } from 'next';
import * as React from "react";
import { useState, useEffect } from 'react';
import Editor from "../components/editor";
import {toUpperCamelCase} from "../utils/textconv"; 

const TextConv: NextPage = () => {
    const [inputText, setInputText] = useState<string>("");
    const [convText, setConvText] = useState<string>("");
    useEffect(() => {
        setConvText(toUpperCamelCase(inputText));
    }, [inputText]);
    return (
        <div className="h-96 flex flex-row">
            <Editor
                className="h-96 basis-1/2 m-4"
                text={inputText}
                setText={setInputText}
            />
            <Editor
                className="h-96 basis-1/2 m-4"
                text={convText}
                editable={false}
            />
        </div>
    )
}

export default TextConv;