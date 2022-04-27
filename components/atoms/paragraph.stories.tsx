import React from "react";
import Paragraph from "./paragraph";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Paragraph',
    component: Paragraph
}as ComponentMeta<typeof Paragraph>;

const template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args}/>

export const Primary = template.bind({});
Primary.args = { style: {"width":"30vw"}, children: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna." };