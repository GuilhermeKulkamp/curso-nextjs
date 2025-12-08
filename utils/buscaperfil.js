/**
 * Simula fetch de perfil GitHub (substitua por fetch real depois)
 * @module utils/buscaperfil
 * @param {string} username - Username do GitHub
 * @returns {Promise<Object>} Perfil ou erro
 */
const buscarPerfilGitHub = async (username) => {
  try {
    // Simulação (em módulos futuros: const response = await fetch(`https://api.github.com/users/${username}`))
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(1000); // Simula rede
    return { nome: "Usuário Mock", repos: 42, bio: "Desenvolvedor Fullstack" };
  } catch (error) {
    console.error("Erro ao buscar perfil:", error.message);
    throw new Error("Falha na API GitHub");
  }
};

// Uso async
(async () => {
  const perfil = await buscarPerfilGitHub("guilherme-dev");
  console.log(perfil);
})();
