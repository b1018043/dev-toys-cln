import React from "react";
import MinHeader from "./minheader";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'MinHeader',
    component: MinHeader
}as ComponentMeta<typeof MinHeader>;

const template: ComponentStory<typeof MinHeader> = (args) => <MinHeader {...args}/>

export const Primary = template.bind({});
Primary.args = { children: 'Hello' };