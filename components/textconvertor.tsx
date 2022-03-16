import type { NextPage } from 'next';
import * as React from 'react';
import Editor from './editor';

interface TextConvertorProps {
	errorMessage: string;
	className?: string;
	inputText: string;
	setInputText: (a: string) => void;
	outputText: string;
}

const TextConvertor: React.FunctionComponent<TextConvertorProps> = ({
	errorMessage,
	className,
	inputText,
	setInputText,
	outputText,
}: TextConvertorProps) => {
	return (
		<div>
			{errorMessage && <p className='text-red-600'>{errorMessage}</p>}
			<div className={className || 'h-screen flex flex-row'}>
				<Editor className='basis-1/2 m-4' text={inputText} setText={setInputText} />
				<Editor className='basis-1/2 m-4' text={outputText} editable={false} />
			</div>
		</div>
	);
};

export default TextConvertor;
