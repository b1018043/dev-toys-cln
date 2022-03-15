import type { NextPage } from 'next';
import * as React from "react";
import { useState } from 'react';
import Editor from '../components/editor';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styles from "../styles/Markdown.module.css";

const Markdown: NextPage = () => {
    const [inputText,setInputText] = useState<string>("");
  return (
    <div className="h-screen flex flex-row">
                <Editor
                    className="basis-1/2 m-4"
                    text={inputText}
                    setText={setInputText}
                />
            <div className="markdown basis-1/2 m-4 overflow-auto">
                <ReactMarkdown>{inputText}</ReactMarkdown>
            </div>
            </div>
  )
}

export default Markdown