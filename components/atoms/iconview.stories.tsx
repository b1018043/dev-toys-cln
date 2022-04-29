import React from "react";
import IconView from "./iconview";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {AiFillAlert} from 'react-icons/ai';

export default {
    title: 'IconView',
    component: IconView
}as ComponentMeta<typeof IconView>;

const template: ComponentStory<typeof IconView> = (args) => <IconView {...args}/>

export const Primary = template.bind({});
Primary.args = { children: <AiFillAlert className='w-full h-full p-1 text-gray-200'/>, className: 'rounded-xl bg-gray-700 w-12 h-12'};