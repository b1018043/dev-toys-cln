// import React from "react";
// import LinkCard from "./linkcard";
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import IconView from "../atoms/iconview";
// import { AiFillAlert } from "react-icons/ai";

// export default {
//     title: 'LinkCard',
//     component: LinkCard
// }as ComponentMeta<typeof LinkCard>;

// const template: ComponentStory<typeof LinkCard> = (args) => <LinkCard {...args}/>

// export const Primary = template.bind({});
// Primary.args = {
//     href: "sample", 
//     title: "Hoge", 
//     content:"Hello world!! hoge fuga foo bar..",
//     icon: <IconView children={<AiFillAlert className='w-full h-full p-1 text-gray-200'/>}/>
// };

import * as React from "react";
import LinkCardList from "./LinkCardList";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconView from "../atoms/iconview";
import * as IconAi from "react-icons/ai";

export default {
    title: 'LinkCardList',
    component: LinkCardList
}as ComponentMeta<typeof LinkCardList>;

const template: ComponentStory<typeof LinkCardList> = (args) => <LinkCardList {...args}/>

export const Primary = template.bind({});

const {AiFillAlert, AiFillAccountBook} = IconAi;

Primary.args = {
    list: [
        {
            href: "sample", 
            title: "Hoge", 
            content:"Hello world!! hoge fuga foo bar..",
            icon: <IconView children={<AiFillAlert className='w-full h-full p-1 text-gray-200'/>}/>
        },
        {
            href: "sample1", 
            title: "Fuga", 
            content:"Hello world!! hoge fuga foo bar..",
            icon: <IconView children={<AiFillAccountBook className='w-full h-full p-1 text-gray-200'/>}/>
        },
        {
            href: "sample2", 
            title: "Fuga", 
            content:"Hello world!! hoge fuga foo bar..",
            icon: <IconView children={<AiFillAccountBook className='w-full h-full p-1 text-gray-200'/>}/>
        },
        {
            href: "sample3", 
            title: "Fuga", 
            content:"Hello world!! hoge fuga foo bar..",
            icon: <IconView children={<AiFillAccountBook className='w-full h-full p-1 text-gray-200'/>}/>
        },
        {
            href: "sample4", 
            title: "Fuga", 
            content:"Hello world!! hoge fuga foo bar..",
            icon: <IconView children={<AiFillAccountBook className='w-full h-full p-1 text-gray-200'/>}/>
        },
        {
            href: "sample5", 
            title: "Fuga", 
            content:"Hello world!! hoge fuga foo bar..",
            icon: <IconView children={<AiFillAccountBook className='w-full h-full p-1 text-gray-200'/>}/>
        },
        {
            href: "sample6", 
            title: "Fuga", 
            content:"Hello world!! hoge fuga foo bar..",
            icon: <IconView children={<AiFillAccountBook className='w-full h-full p-1 text-gray-200'/>}/>
        },
    ]
}