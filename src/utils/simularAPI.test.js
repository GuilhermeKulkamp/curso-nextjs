import { buscarPostsRecentes } from "./simularAPI.js";
// TODO: criar mais testes para cobrir todos os casos de uso e erros
// TODO: incluir testes para quando o acesso à API real for implementado
test("Deve buscar posts dos últimos 12 dias", async () => {
  const posts = await buscarPostsRecentes("guilhermepm", 12);
  const datas = posts.map((p) => p.data);
  expect(datas).toContain("2025-12-09");
  expect(datas).not.toContain("2023-12-01");
});
