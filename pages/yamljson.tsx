import type { NextPage } from 'next';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Editor from '../components/editor';
import YAML from 'yaml';

const JSON2YAMLEditor: NextPage = () => {
	const [inputText, setInputText] = useState<string>('');
	const [outputText, setOutputText] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string>('');
	useEffect(() => {
		try {
			const parsedInput: any = JSON.parse(inputText);
			setOutputText(YAML.stringify(parsedInput));
			setErrorMessage('');
		} catch (e: any) {
			setErrorMessage(`${e.name}:${e.message}`);
			setOutputText('');
		}
	}, [inputText]);

	return (
		<div className=''>
			{errorMessage && <p className='text-red-600'>{errorMessage}</p>}
			<div className='h-screen flex flex-row'>
				<Editor className='basis-1/2 m-4' text={inputText} setText={setInputText} />
				<Editor className='basis-1/2 m-4' text={outputText} />
			</div>
		</div>
	);
};

export default JSON2YAMLEditor;
