import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lazyPage = <T extends React.ComponentType<any>>(
  importComponent: Promise<{ default: T }>,
  timer = 1000
) =>
  React.lazy(async () => {
    const [moduleExports] = await Promise.all([
      importComponent,
      new Promise((resolve) => setTimeout(resolve, timer)),
    ]);
    return moduleExports;
  });
