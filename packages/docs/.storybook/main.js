/** @type { import('@storybook/react-vite').StorybookConfig } */
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
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    viteFinal: (config, { configType }) => {
        if (configType === 'PRODUCTION') {
            config.base = '/design-system-ignite/'
        }

        return config
    }
};
export default config;
