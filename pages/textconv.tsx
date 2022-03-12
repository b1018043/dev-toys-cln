import type { NextPage } from 'next';
import * as React from "react";
import { useState, useEffect } from 'react';
import Editor from "../components/editor";

const TextConv: NextPage = () => {
    const [inputText, setInputText] = useState<string>("");
    const [convText, setConvText] = useState<string>("");
    useEffect(() => {
        const snakedInput = inputText.replaceAll(" ", "_");
        setConvText(snakedInput.toUpperCase());
    }, [inputText]);
    return (
        <div className="">
            <Editor
                text={inputText}
                setText={setInputText}
            />
            <Editor
                text={convText}
                editable={false}
            />
        </div>
    )
}

export default TextConv;