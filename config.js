// CONFIGURAÇÃO ÚNICA da agenda do supervisor e do painel gerencial — edite só aqui.
// As duas telas leem este arquivo, e o dados/gerar_arquivo_supervisor.py o embute no arquivo dos supervisores.
// Sem este arquivo as telas abrem em "Modo de teste" (não enviam nada à planilha).
window.AGENDA_CONFIG = {
  // Prazo exibido ao supervisor (só texto, sem trava). "" esconde.
  prazo: "Prazo para gravar: até DIA-DA-SEMANA, dd/mm",

  // Nome do conceito de loja destaque (INCO contém "GOLDEN" ou coluna DESTAQUE = SIM).
  // Se a carteira não tiver nenhuma loja destaque, o bloco some sozinho.
  destaqueNome: "Golden Store",

  // Planilha Google. syncUrl = Apps Script implantado como App da Web (termina em /exec):
  // grava (POST) e lê (GET ?callback=). Os CSV publicados das abas são a reserva de leitura.
  syncUrl: "https://script.google.com/macros/s/AKfycbzSRL62avTKZ8NWp2cagqMlr_9yXoOLkTAexLBEGqsPW19fgltCDqIE9bhq4EJUXxEI/exec",
  detalheCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS7L_hSsYQYqCAf7xREakLd5UCpLVqzv5MJPo8I1jL0WrA9vuCgWKIBY7iWe9CY418FrrisHhaaVW8A/pub?gid=979993841&single=true&output=csv",
  statusCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vS7L_hSsYQYqCAf7xREakLd5UCpLVqzv5MJPo8I1jL0WrA9vuCgWKIBY7iWe9CY418FrrisHhaaVW8A/pub?gid=741357542&single=true&output=csv"
};
