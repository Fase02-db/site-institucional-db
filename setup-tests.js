import '@testing-library/jest-dom'
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
  