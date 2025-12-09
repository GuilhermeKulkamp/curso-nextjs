// const { validarEmail } = require('./validarEmail');

// Por esta (ES6):
import { validarEmail } from "./validarEmail.js";

test("Deve validar email correto", () => {
  expect(validarEmail("guilherme@gmail.com")).toBe(true);
});

test("Deve invalidar email sem domínio", () => {
  expect(validarEmail("guilherme@empresa")).toBe(false);
});

test("Deve invalidar email com espaços", () => {
  expect(validarEmail("com@espacos .com")).toBe(false);
});
