/** @type { import('@storybook/react-vite').StorybookConfig } */

import { mergeConfig } from 'vite';

const config = {
    stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-docs",
        "storybook-addon-preview",
        "@storybook/addon-a11y"
    ],
    core: {
        builder: '@storybook/builder-vite',
    },
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    // async viteFinal (config, { configType }) {
    //     if (configType === 'PRODUCTION') {
    //         config.base = '/design-system-ignite/'
    //     }

    //     return mergeConfig(config);
    // }
};
export default config;
