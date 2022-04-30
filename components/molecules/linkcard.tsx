import Link from 'next/link';
import * as React from 'react';
import IconView from '../atoms/iconview';
import MinHeader from '../atoms/minheader';
import Paragraph from '../atoms/paragraph';

export interface LinkCardProps{
    href: string;
    icon: React.ReactNode;
    title: string;
    content: string;
};

const LinkCard: React.FunctionComponent<LinkCardProps> = (props)=>{
    return (
        <Link href={props.href}>
            <div className='m-2 w-1/6 bg-gray-800 p-8 rounded-sm'>
                <IconView>
                    {props.icon}
                </IconView>
                <MinHeader>
                    {props.title}
                </MinHeader>
                <Paragraph>
                    {props.content}
                </Paragraph>
            </div>
        </Link>
    )
}

export default LinkCard;