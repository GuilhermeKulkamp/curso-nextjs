/**
 * Processa um array de leads, filtrando profissionais de TI e agrupando nomes por rede social.
 * @module processarLeads
 * @param {Array} leads - Array de objetos { nome, area, redeSocial }
 * @returns {Object} Relatório resumo (total, por rede, nomes formatados)
 */
export const processarLeads = (leads) => {
  // Só profissionais de TI
  // TODO: melhorar a verificação de área (ex.: "Tecnologia da Informação", "Desenvolvimento TI", etc.)
  // TODO: impedir que áreas como "Marketing" ou "Artista" sejam consideradas TI
  const tiLeads = leads.filter(
    (lead) => lead.area && lead.area.toLowerCase().includes("ti")
  );

  // Nomes maiúsculos e agrupados por redeSocial
  const resumoPorRede = tiLeads.reduce((resumo, lead) => {
    const rede = lead.redeSocial;
    resumo[rede] = resumo[rede] || [];
    resumo[rede].push(lead.nome.toUpperCase());
    return resumo;
  }, {});

  // Monta o objeto resumo
  return {
    totalTI: tiLeads.length,
    porRede: resumoPorRede,
  };
};

// Teste manual

const mockLeads = [
  { nome: "Ana", area: "TI", redeSocial: "linkedin" },
  { nome: "Bruno", area: "RH", redeSocial: "instagram" },
  { nome: "Carla", area: "TI", redeSocial: "linkedin" },
  { nome: "Diego", area: "TI", redeSocial: "github" },
  { nome: "Eva", redeSocial: "instagram" },
];

console.log(processarLeads(mockLeads));

/* Saída esperada:
{
  totalTI: 3,
  porRede: {
    linkedin: ['ANA', 'CARLA'],
    github: ['DIEGO']
  }
}
*/
