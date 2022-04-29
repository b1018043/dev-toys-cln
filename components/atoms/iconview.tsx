import * as React from 'react';
import type {IconType} from 'react-icons';

interface IconViewProps{
    className?: string;
    iconClassName?: string;
}

const IconView: React.FunctionComponent<IconViewProps> = (props) =>{
    return (
        <div className={props.className||'rounded-xl bg-gray-700 relative'}>
            {props.children}
        </div>
    )
}

export default IconView;