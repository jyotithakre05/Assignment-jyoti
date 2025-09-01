declare global {
  declare module 'remote1/RemoteComponent' {
    import { ComponentType } from 'react';

    interface RemoteComponentProps {
      title?: string;
      theme?: 'light' | 'dark';
    }

    const RemoteComponent: ComponentType<RemoteComponentProps>;
    export default RemoteComponent;
  }

  declare module 'remote2/RemoteComponent' {
    import { ComponentType } from 'react';

    interface RemoteComponentProps {
      title?: string;
      theme?: 'light' | 'dark' | 'cyan';
      showAnimation?: boolean;
      variant?: 'default' | 'compact' | 'expanded';
    }

    const RemoteComponent: ComponentType<RemoteComponentProps>;
    export default RemoteComponent;
  }
}

export { };

