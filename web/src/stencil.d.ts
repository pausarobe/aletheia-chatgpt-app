import type { JSX as StencilJSX } from '@aletheia2/core/components';

type WithChildren<T> = T & { children?: any };

type StencilIntrinsicWithChildren = {
  [K in keyof StencilJSX.IntrinsicElements]: WithChildren<StencilJSX.IntrinsicElements[K]>;
};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends StencilIntrinsicWithChildren {}
  }
}

export {};
