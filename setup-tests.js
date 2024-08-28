/* eslint-env jest */

import '@testing-library/jest-dom'
// Mock para window.matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});
// jest.setup.js

window.matchMedia = jest.fn().mockImplementation(() => ({
  matches: false,
  media: '',
  onchange: null,
  addListener: jest.fn(), // Obsoleto
  removeListener: jest.fn(), // Obsoleto
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));
