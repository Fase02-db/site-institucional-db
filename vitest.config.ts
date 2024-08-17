import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Configura o ambiente de teste para jsdom
    globals: true, // Permite usar `expect` e outras funções globais sem importar
    setupFiles: './setupTests.ts', // Arquivo para configuração global dos testes
    include: ['**/*.test.{ts,tsx}'], // Inclui arquivos de teste com as extensões especificadas
  },
})
