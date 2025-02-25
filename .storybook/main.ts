// import type { StorybookConfig } from "@storybook/react-webpack5";

// const config: StorybookConfig = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//   addons: [
//     "@storybook/addon-webpack5-compiler-swc",
//     "@storybook/addon-onboarding",
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@chromatic-com/storybook",
//     "@storybook/addon-interactions",
//   ],
//   framework: {
//     name: "@storybook/react-webpack5",
//     options: {

//     },
//   },
//   docs: {
//     autodocs: "tag",
//   },
// };
// export default config;
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-webpack5-compiler-babel'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {},
};
export default config;
