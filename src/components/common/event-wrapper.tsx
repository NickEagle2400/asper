'use client';

import { ReactNode } from 'react';

type EventWrapperProps = {
  event: string;
  params?: Record<string, any>;
  children: ReactNode;
};

export const EventWrapper = ({ event, params, children }: EventWrapperProps) => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, params || {});
    }
  };

  return <div onClick={handleClick}>{children}</div>;
};
