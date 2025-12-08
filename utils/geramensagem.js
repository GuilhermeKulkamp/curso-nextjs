/**
 * Gera mensagem personalizada para Whatsapp
 * @module utils/geramensagem
 * @param {string} nome - Nome do contato
 * @param {string} servico - Serviço oferecido
 * @returns {string} Mensagem formatada
 */
const gerarMensagemWhatsApp = (nome, servico) => {
  const mensagem = `Olá, ${nome}! Sou gerente de projetos e gostaria de discutir ${servico}. Podemos agendar?`;
  return mensagem;
};

// Uso
console.log(gerarMensagemWhatsApp("João ninguém", "desenvolvimento web"));
// Saída: "Olá, João ninguém! Sou gerente de projetos e gostaria de discutir desenvolvimento web. Podemos agendar?"
