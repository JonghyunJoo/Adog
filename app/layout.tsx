'use client'

import React, { ReactNode } from 'react';
import 'styles/globals.scss';
import Providers from './providers';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

interface LayoutProps {
  children?: ReactNode;
  modal: any;
}
const RootLayout = (props: LayoutProps) => {
  const segment = useSelectedLayoutSegment();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <Providers>
        <body>
          <QueryClientProvider client={queryClient}>
            {props.children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
          {props.modal}
        </body>
      </Providers>
    </html>
  );
};

export default RootLayout;
