import type { StorybookConfig } from '@storybook/react-webpack5';
import postcss from 'postcss';

const config: StorybookConfig = {
  "stories": [
    "../**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1
        },
        postcssLoaderOptions: {
          implementation: postcss
        }
      }
    }
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
};
export default config;
