/**
 * Simula fetch assíncrono de posts do Instagram via Promise
 * @module utils/simularAPI
 * @param {string} usuario - nome de usuário (ex: 'guilhermepm')
 * @param {number} diasMax - máximos dias de antiguidade dos posts a retornar (default: 7)
 * @returns {Promise<Array>} Lista de posts recentes [{ data, conteudo }]
 */

// TODO: incluir lógica para buscar posts reais via API do Instagram (quando disponível)
// https://developers.facebook.com/docs/instagram-api/
// TODO: incluir tratamento de erros e casos de usuário inexistente
// TODO: incluir opção de limitar número máximo de posts retornados
// TODO: inclir opção de filtrar por hashtags ou menções
// TODO: incluir cache para evitar múltiplas requisições para o mesmo usuário em curto período
// TODO: incluir opção de desconsiderar data e retornar uma quantidade fixa de posts recentes

export const buscarPostsRecentes = async (usuario, diasMax = 7) => {
  // Simula resposta da API do Instagram (mock)
  const mockPosts = [
    { data: "2025-12-01", conteudo: "Lançamento do site!" },
    { data: "2025-12-09", conteudo: "Novo depoimento de cliente." },
    { data: "2025-12-04", conteudo: "Parceria fechada." },
    { data: "2025-11-20", conteudo: "Curiosidade sobre Next.js" },
    { data: "2025-12-05", conteudo: "Dica de produtividade." },
    { data: "2025-11-30", conteudo: "Evento online anunciado." },
  ];

  // Simula latência de rede (200ms)
  await new Promise((res) => setTimeout(res, 200));

  // Filtra posts dos últimos X dias
  const hoje = new Date();
  return mockPosts.filter((post) => {
    const diffDias = (hoje - new Date(post.data)) / 1000 / 60 / 60 / 24;
    return diffDias <= diasMax;
  });
};

// Teste manual:
(async () => {
  const recentes = await buscarPostsRecentes("guilhermepm", 10);
  console.log(recentes);
})();
/*
Saída esperada (se hoje é ~15/12/2023, retorna os de 10 e 14/12):
[
  { data: '2023-12-10', conteudo: 'Novo depoimento de cliente.' },
  { data: '2023-12-14', conteudo: 'Parceria fechada.' }
]
*/
