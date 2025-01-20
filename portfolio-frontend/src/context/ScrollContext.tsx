import React, { createContext, useContext, useRef, useCallback, ReactNode } from 'react';
import {IScrollContextValue} from '../types';

// Create the context with a default value (use null and handle it in the provider)
const ScrollContext = createContext<IScrollContextValue | null>(null);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const refs = useRef<Record<string, HTMLElement | null>>({});

  const setRef = useCallback((key: string, element: HTMLElement) => {
    refs.current[key] = element;
  }, []);

  const scrollTo = useCallback((key: string) => {
    const element = refs.current[key];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ setRef, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = (): IScrollContextValue => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
