// Type declarations for federated remote modules
declare module 'remote1/RemoteComponent' {
  const RemoteComponent: React.ComponentType<{
    title?: string;
    theme?: 'light' | 'dark';
  }>;
  export default RemoteComponent;
}

declare module 'remote2/RemoteComponent' {
  const RemoteComponent: React.ComponentType<{
    title?: string;
    theme?: 'light' | 'dark' | 'cyan';
    showAnimation?: boolean;
    variant?: 'default' | 'compact' | 'expanded';
  }>;
  export default RemoteComponent;
}
