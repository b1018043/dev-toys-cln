import * as React from "react";
import { useState, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";

interface EditorProps {
    text: string;
    setText?: (text: string) => void;
    editable?: boolean;
};

const defaultSetText: (text: string) => void = (text: string) => { };

const Editor: React.FunctionComponent<EditorProps> = ({ text, setText = defaultSetText, editable = true }: EditorProps) => {
    return (
        <CodeMirror
            value={text}
            onChange={(v, _) => setText(v)}
            editable={editable}
            height="200px"
            theme="dark"
        />
    )
}

export default Editor;