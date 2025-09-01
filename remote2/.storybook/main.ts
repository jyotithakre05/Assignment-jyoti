import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  babel: async (options) => ({
    ...options,
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react',
      '@babel/preset-typescript'
    ]
  }),
  webpackFinal: async (config) => {
    // Ensure proper handling of TypeScript and TSX files
    config.resolve = config.resolve || {};
    config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

    return config;
  },
};

export default config;
