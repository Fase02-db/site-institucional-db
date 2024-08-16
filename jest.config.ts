import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],

  transform: {
    '^.+\\.tsx?$': 'babel-jest', // Transformação para TypeScript
  },

  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',

    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.ts',
  },
};

export default config;
