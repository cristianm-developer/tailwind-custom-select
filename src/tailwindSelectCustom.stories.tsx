import type { Meta, StoryObj} from '@storybook/react';
import { TailwindSelect } from './tailwindSelectCustom';
import { Option, Prefix, Value } from '@cristianmpx/react-custom-select';

const meta: Meta<typeof TailwindSelect> = {
    title: 'TailwindSelect',
    component: TailwindSelect,
    tags: ["autodocs"],
    argTypes: {

    }
}

export default meta;
type Story = StoryObj<typeof TailwindSelect>;

export const Basic: Story = {

    render: () => {
        return (
            <TailwindSelect                
            >   
                <Prefix>User: </Prefix>
                <Option>Apple</Option>
                <Option>Apple2</Option>
                <Option>Apple3</Option>
                <Option>Apple4</Option>
                <Option>Apple5</Option>
                <Option>Apple6</Option>
                <Option>Apple7</Option>
                <Option>Apple8</Option>
                <Option>Apple9</Option>
                <Option>Apple10</Option>
                <Option>Apple11</Option>
                <Option>Apple12</Option>
                <Option>Apple13</Option>
                <Option>Apple14</Option>
                <Option>Apple15</Option>
                <Option>Apple16</Option>
                <Option>Apple17</Option>
            </TailwindSelect>
        )
    }
}