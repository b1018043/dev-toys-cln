import Link from 'next/link';
import * as React from 'react';
import { useState, useRef } from 'react';
import IconView from '../atoms/iconview';
import MinHeader from '../atoms/minheader';
import Paragraph from '../atoms/paragraph';

interface LinkCardProps{
    href: string;
    icon: React.ReactNode;
    title: string;
    content: string;
};

const LinkCard: React.FunctionComponent<LinkCardProps> = (props)=>{
    return (
        <Link href={props.href}>
            <div>
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