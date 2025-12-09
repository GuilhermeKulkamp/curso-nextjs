import { validarEmail } from "./validarEmail.js";
import { formatarLinks } from "./formatarLinks.js";
import { processarLeads } from "./processarLeads.js";
import { buscarPostsRecentes } from "./simularAPI.js";

/**
 * Gerenciador de contatos profissionais
 * @module gerenciadorContatos
 * @param {Object} contato - Objeto de contato { nome, email, whatsapp, linkedin, github }
 * @returns {Object} Contato formatado e validado
 */
export const gerenciarContato = async (contato) => {
  // Valida email
  if (!validarEmail(contato.email)) {
    throw new Error("Email inválido");
  }

  // Formata links sociais
  const links = formatarLinks(contato);

  // Processa leads
  const leads = processarLeads([contato]);

  // Simula consumo de API
  const postsRecentes = await buscarPostsRecentes("guilhermepm");

  return {
    contato,
    links,
    leads,
    postsRecentes,
  };
};

// Teste manual:
(async () => {
  const contato = {
    nome: "Guilherme",
    email: "guilherme@empresa.com",
    whatsapp: "5511998765432",
    linkedin: "guilhermepm",
    github: "guilherme-dev",
  };
  try {
    const resultado = await gerenciarContato(contato);
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
})();
