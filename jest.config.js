module.exports = {
  roots: ["<rootDir>/src"],
  testEnviroment: "node",
  transform: {
    '.*\\.ts$': 'ts-jest' // Converte qualquer teste do TypeScript para o JavaScript
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}