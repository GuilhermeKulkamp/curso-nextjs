/**
 * Extrai e formata dados de perfil social
 * @module utils/formataperfil
 * @param {Object} perfil - Objeto com dados do perfil
 * @returns {Object} Perfil formatado
 */
const formatarPerfil = ({ nome, linkedin, github, cargo = "Gerente" }) => {
  // Destructuring com default
  return {
    nomeCompleto: nome,
    links: {
      linkedin: `https://linkedin.com/in/${linkedin}`,
      github: `https://github.com/${github}`,
    },
    titulo: `${cargo} de Projetos`,
  };
};

// Uso com objeto mock
const perfilRaw = {
  nome: "Guilherme",
  linkedin: "guilherme-pm",
  github: "guilherme-dev",
};
console.log(formatarPerfil(perfilRaw));
// Saída: { nomeCompleto: 'Guilherme', links: {...}, titulo: 'Gerente de Projetos' }
