import * as React from 'react';
import type {IconType} from 'react-icons';

interface IconViewProps{
    children: IconType;
    className?: string;
    iconClassName?: string;
}

const IconView: React.FunctionComponent<IconViewProps> = (props) =>{
    const Icon = props.children
    return (
        <div className={props.className||'rounded-xl bg-gray-700 relative'}>
            <Icon className={props.iconClassName||'text-gray-200'}/>
        </div>
    )
}

export default IconView;