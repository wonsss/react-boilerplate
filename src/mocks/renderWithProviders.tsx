import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderResult } from '@testing-library/react';

export const generateTestQueryClient = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
      },
    },
  });

  return client;
};

export function renderWithProviders(
  Component: ReactElement,
  options: { route: string },
): RenderResult {
  return render(
    <RecoilRoot>
      <QueryClientProvider client={generateTestQueryClient()}>
        <MemoryRouter initialEntries={[options.route]}>
          {Component}
        </MemoryRouter>
      </QueryClientProvider>
    </RecoilRoot>,
  );
}
