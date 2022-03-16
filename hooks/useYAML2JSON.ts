import * as React from 'react';
import { useState, useEffect } from 'react';
import YAML from 'yaml';

const useYAML2JSON = () => {
	const [inputText, setInputText] = useState<string>('');
	const [outputText, setOutputText] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string>('');
	useEffect(() => {
		try {
			const parsedInput: any = JSON.parse(inputText);
			setOutputText(YAML.stringify(parsedInput));
			setErrorMessage('');
		} catch (e: any) {
			// NOTE: JSON.parse時に発生するsyntaxerrorを処理
			setErrorMessage(`${e.name}:${e.message}`);
			setOutputText('');
		}
	}, [inputText]);

	return {
		inputText,
		setInputText,
		outputText,
		errorMessage,
	};
};

export default useYAML2JSON;
