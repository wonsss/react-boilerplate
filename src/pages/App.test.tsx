import App from 'App';
import { renderWithProviders } from 'mocks/renderWithProviders';

import { screen } from '@testing-library/react';

describe('테스트', () => {
  test('Home', async () => {
    renderWithProviders(<App />, { route: '/home' });

    await screen.findByText(/HomePage/);
  });

  test('About', async () => {
    renderWithProviders(<App />, { route: '/about' });

    await screen.findByText(/AboutPage/);
  });
});
