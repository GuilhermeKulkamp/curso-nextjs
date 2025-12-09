import { formatarLinks } from "./formatarLinks.js";

test("Deve retornar todos os links corretos", () => {
  const redes = {
    whatsapp: "+55 (11) 99876-5432",
    linkedin: "guilhermekulkamp",
    github: "GuilhermeKulkamp",
    instagram: "guilhermekulkamp",
  };
  const esperado = [
    { nome: "WhatsApp", url: "https://wa.me/5511998765432" },
    { nome: "LinkedIn", url: "https://linkedin.com/in/guilhermekulkamp" },
    { nome: "GitHub", url: "https://github.com/GuilhermeKulkamp" },
    { nome: "Instagram", url: "https://instagram.com/guilhermekulkamp" },
  ];
  expect(formatarLinks(redes)).toEqual(esperado);
});

test("Deve funcionar se passar só WhatsApp", () => {
  expect(formatarLinks({ whatsapp: "+55 (11) 22233-3444" })[0].url).toBe(
    "https://wa.me/5511222333444"
  );
});
