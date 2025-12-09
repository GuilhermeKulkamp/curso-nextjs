import { processarLeads } from "./processarLeads.js";

test("Deve filtrar e agrupar apenas profissionais de TI", () => {
  const leads = [
    { nome: "Ana", area: "TI", redeSocial: "linkedin" },
    { nome: "Bruno", area: "RH", redeSocial: "instagram" },
    { nome: "Carla", area: "TI", redeSocial: "linkedin" },
    { nome: "Diego", area: "TI", redeSocial: "github" },
    { nome: "Eva", redeSocial: "instagram" }, // Sem área definida não deve ser contabilizado
    // TODO: adicionar mais casos de teste para áreas similares a TI
    // TODO: adicionar casos de areas que tenham "ti" mas que não sejam de TI. Ex: "Marketing", "Artista", etc.
  ];
  const resultado = processarLeads(leads);
  expect(resultado.totalTI).toBe(3);
  expect(resultado.porRede.linkedin).toEqual(["ANA", "CARLA"]);
  expect(resultado.porRede.github).toEqual(["DIEGO"]);
  expect(resultado.porRede.instagram).toBeUndefined();
});
