import type { Meta, StoryObj } from '@storybook/react';
import RemoteComponent from './RemoteComponent';

const meta: Meta<typeof RemoteComponent> = {
  title: 'Components/RemoteComponent',
  component: RemoteComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A federated component that can be consumed by container applications. Features include theme switching, counter functionality, input handling, and loading states.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed in the component header',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark', 'cyan'],
      description: 'The visual theme of the component',
    },
    showAnimation: {
      control: 'boolean',
      description: 'Whether to show the pulse animation',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact', 'expanded'],
      description: 'The size variant of the component',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    title: 'Remote Component 2',
    theme: 'light',
    showAnimation: false,
    variant: 'default',
  },
};

// Light theme story
export const LightTheme: Story = {
  args: {
    title: 'Light Theme Component',
    theme: 'light',
    showAnimation: false,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Component with light theme featuring blue gradient background.',
      },
    },
  },
};

// Dark theme story
export const DarkTheme: Story = {
  args: {
    title: 'Dark Theme Component',
    theme: 'dark',
    showAnimation: false,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Component with dark theme featuring slate gradient background.',
      },
    },
  },
};

// Cyan theme story
export const CyanTheme: Story = {
  args: {
    title: 'Cyan Theme Component',
    theme: 'cyan',
    showAnimation: false,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Component with cyan theme featuring teal gradient background.',
      },
    },
  },
};

// Animated story
export const Animated: Story = {
  args: {
    title: 'Animated Component',
    theme: 'light',
    showAnimation: true,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Component with pulse animation enabled.',
      },
    },
  },
};

// Compact variant story
export const Compact: Story = {
  args: {
    title: 'Compact Component',
    theme: 'light',
    showAnimation: false,
    variant: 'compact',
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact variant with reduced padding and spacing.',
      },
    },
  },
};

// Expanded variant story
export const Expanded: Story = {
  args: {
    title: 'Expanded Component',
    theme: 'light',
    showAnimation: false,
    variant: 'expanded',
  },
  parameters: {
    docs: {
      description: {
        story: 'Expanded variant with increased padding and spacing.',
      },
    },
  },
};

// Custom title story
export const CustomTitle: Story = {
  args: {
    title: 'My Custom Component',
    theme: 'light',
    showAnimation: false,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Component with a custom title.',
      },
    },
  },
};

// Interactive demo story
export const InteractiveDemo: Story = {
  args: {
    title: 'Interactive Demo',
    theme: 'light',
    showAnimation: false,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive component where you can test all the functionality including counter, input, theme switching, and loading states.',
      },
    },
  },
};
