/**
 * Recebe objeto com identificadores de rede social e retorna links completos
 * @module formatarLinks
 * @param {Object} redes - Objeto como { whatsapp, linkedin, github, instagram }
 * @returns {Array} Array de objetos { nome, url }
 */
export const formatarLinks = ({ whatsapp, linkedin, github, instagram }) => {
  const links = []; // Array para armazenar os links formatados

  if (whatsapp)
    links.push({
      nome: "WhatsApp",
      url: `https://wa.me/${whatsapp.replace(/\D/g, "")}`, // Remove caracteres não numéricos
    });
  if (linkedin)
    links.push({
      nome: "LinkedIn",
      url: `https://linkedin.com/in/${linkedin}`,
    });
  if (github)
    links.push({ nome: "GitHub", url: `https://github.com/${github}` });
  if (instagram)
    links.push({
      nome: "Instagram",
      url: `https://instagram.com/${instagram}`,
    });

  return links;
};

// Teste manual:
// console.log(
//   formatarLinks({ whatsapp: "+55(11)998765432", instagram: "nome-linkedin" })
// );
