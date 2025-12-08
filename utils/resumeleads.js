/**
 * Filtra e soma leads por rede social
 * @module utils/resumeleads
 * @param {Array} leads - Lista de leads com redeSocial
 * @returns {Object} Resumo por rede
 */
const resumirLeads = (leads) => {
  return leads
    .filter(
      ({ redeSocial }) =>
        redeSocial === "linkedin" || redeSocial === "instagram"
    ) // Filter: só redes relevantes
    .reduce(
      (acumulado, { nome, redeSocial }) => {
        // Reduce: agrupa e conta
        acumulado[redeSocial] = (acumulado[redeSocial] || 0) + 1;
        acumulado.nomes[redeSocial] = [
          ...(acumulado.nomes[redeSocial] || []),
          nome,
        ];
        return acumulado;
      },
      { linkedin: 0, instagram: 0, nomes: { linkedin: [], instagram: [] } }
    );
};

// Uso
const leadsMock = [
  { nome: "Ana", redeSocial: "linkedin" },
  { nome: "Pedro", redeSocial: "instagram" },
  { nome: "Maria", redeSocial: "linkedin" },
  { nome: "guilherme", redeSocial: "GitHub" },
];
console.log(resumirLeads(leadsMock));
// Saída: { linkedin: 2, instagram: 1, nomes: { linkedin: ['Ana', 'Maria'], instagram: ['Pedro'] } }
