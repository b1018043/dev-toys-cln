import type { NextPage } from 'next';
import * as React from 'react';
import useYAML2JSON from '../hooks/useYAML2JSON';
import TextConvertor from '../components/textconvertor';

const JSON2YAMLEditor: NextPage = () => {
	const { inputText, setInputText, outputText, errorMessage } = useYAML2JSON();

	return (
		<TextConvertor
			errorMessage={errorMessage}
			inputText={inputText}
			outputText={outputText}
			setInputText={setInputText}
		/>
	);
};

export default JSON2YAMLEditor;
