import { gerenciarContato } from "./gerenciadorContatos.js";

test("Deve gerenciar contato com sucesso", async () => {
  const contato = {
    nome: "Guilherme",
    email: "guilherme@empresa.com",
    whatsapp: "5511998765432",
    linkedin: "guilhermepm",
    github: "guilherme-dev",
  };
  const resultado = await gerenciarContato(contato);
  expect(resultado.contato).toEqual(contato);
  expect(resultado.links.length).toBeGreaterThan(0);
  expect(resultado.leads.totalTI).toBe(0); // Sem área de TI
  expect(resultado.postsRecentes.length).toBeGreaterThan(0);
});
