import * as React from 'react';

type MinHeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const MinHeader: React.FunctionComponent<MinHeaderProps> = (props) =>{
    return <h6 className='text-gray-200 text-xl' children={props.children}/>
}

export default MinHeader;