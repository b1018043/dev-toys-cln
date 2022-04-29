import React from "react";
import LinkCard from "./linkcard";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconView from "../atoms/iconview";
import { AiFillAlert } from "react-icons/ai";

export default {
    title: 'LinkCard',
    component: LinkCard
}as ComponentMeta<typeof LinkCard>;

const template: ComponentStory<typeof LinkCard> = (args) => <LinkCard {...args}/>

export const Primary = template.bind({});
Primary.args = {
    href: "sample", 
    title: "Hoge", 
    content:"Hello world!! hoge fuga foo bar..",
    icon: <IconView children={<AiFillAlert className='w-full h-full p-1 text-gray-200'/>}/>
};