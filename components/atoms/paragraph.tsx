import * as React from 'react';

type ParagraphProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

const Paragraph: React.FC<ParagraphProps> = (props) =>{
    return (
        <p className='text-sm text-gray-400' {...props}/>
    )
}

export default Paragraph;