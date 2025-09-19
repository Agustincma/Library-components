import React from 'react';
import HeaderXL from './HeaderXL';

export default {
  title: 'Layout/Headers/HeaderXL',
  component: HeaderXL,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
    height: { control: 'text' },
    background: { control: 'color' },
    color: { control: 'color' },
  },
};

const Template = (args) => <HeaderXL {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Wheat',
  subtitle: 'Subtitle',
  description: 'Description',
  height: '100vh',
  background: '#fff',
  color: '#000',
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Dark Wheat',
  subtitle: 'Dark Subtitle',
  description: 'Descripción en modo oscuro',
  height: '60vh',
  background: '#222',
  color: '#fff',
};

export const Minimal = Template.bind({});
Minimal.args = {
  title: 'Minimal',
  subtitle: '',
  description: '',
  height: '40vh',
  background: '#f5f5f5',
  color: '#333',
};
