/** valida a formatação de email corporativo
 * @module utils/validarEmail
 * @param {string} email - O email a ser validado
 * @returns {boolean} - Retorna true se o email for válido, caso contrário false
 */
export const validarEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Expressão regular para validar email
  const emailLimpo = email?.trim(); // Remove espaços em branco no início e fim
  return regex.test(emailLimpo); // Testa o email contra a expressão regular
};

// Teste manual
// console.log(validarEmail("guilherme@gmail.com")); // deve retornar true
// console.log(validarEmail("guilherme@empresa")); // deve retornar false
// console.log(validarEmail("com@espacos .com")); // deve retornar false
