# Tailwind Custom Select

This is an extended version of the original [`@cristianmpx/react-custom-select`](https://www.npmjs.com/package/@cristianmpx/react-custom-select) component. It enhances the original by integrating Tailwind CSS intrinsic styles to provide a native-like appearance for select elements.

## Features

- Uses Tailwind CSS intrinsic styles to mimic the native select element appearance more closely.
- Highly customizable using Tailwind's `@apply` directive on native classes, allowing you to extend and override styles easily.
- Retains all the functionality and usage patterns of the original `@cristianmpx/react-custom-select` package.

## Installation

Install the package with npm:

```bash
npm install @cristianmpx/tailwind-custom-select
```

## Usage

You can use this package just like the original `@cristianmpx/react-custom-select`. Below is an example of how to import and use the `TailwindSelect` component in a React project with TypeScript and Storybook:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { TailwindSelect } from './tailwindSelectCustom';
import { Option, Prefix, Value } from '@cristianmpx/react-custom-select';

const meta: Meta<typeof TailwindSelect> = {
  title: 'TailwindSelect',
  component: TailwindSelect,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TailwindSelect>;

export const Basic: Story = {
  render: () => {
    return (
      <TailwindSelect>
        <Prefix>User: </Prefix>
        <Option>Apple</Option>
        <Option>Apple2</Option>
        <Option>Apple3</Option>
        <Option>Apple4</Option>

      </TailwindSelect>
    );
  },
};
```

## Preview

You can see a live preview of this component and its behavior at:  
[https://cristianm-developer.github.io/tailwind-custom-select/](https://cristianm-developer.github.io/tailwind-custom-select/)

## Customizing Appearance

This extended version leverages Tailwind CSS intrinsic styles to provide a more native look and feel. You can customize the appearance further by using Tailwind's `@apply` directive on the native classes used within the component.

For example, to customize the select element's appearance, you can add styles in your CSS like:

```css
.custom-select {
  @apply bg-white border border-gray-300 rounded-md shadow-sm;
}

.custom-select:focus {
  @apply outline-none ring-2 ring-blue-500;
}
```

Adjust the classes as needed to fit your design requirements.

## Contributing

Contributions and suggestions are welcome. Please refer to the original repository for contribution guidelines.

## License

This project inherits the license of the original `@cristianmpx/react-custom-select` package.