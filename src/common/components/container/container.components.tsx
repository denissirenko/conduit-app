import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
};
