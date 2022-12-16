/* eslint-disable no-undef */
import { server } from 'mocks/node';

import '@testing-library/jest-dom';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'bypass' });
});

afterAll(() => {
  server.close();
});
