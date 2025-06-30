import { getCurrentDateTime } from "../helpers/date.helper";
const firstRun = false; // Variável para controlar a execução do primeiro teste

describe("Sistema Integrado de Gestão para Fundações de Amparo a Pesquisas", () => {
  beforeEach(() => {
    // Gancho em nível raíz
    // executa antes de realizar cada teste(it)
    cy.typelogin(
      "https://novo-sig.homolog.ledes.net/login", // [URL do sistema]
      "admin@sig.com", // [E-mail do usuário]
      "dev123" // [Senha do usuário]
    ); //Acessa a página de login usando as credenciais do usuário e senha.
  });
  it.only("Realiza login no sistema e cria um edital simples", () => {
    //Teste edital simples, se houver mais de um teste, o it.only executa apenas esse teste.
    cy.get('[data-cy="breadcrumb-home"]').click(); //Clica no breadcrumb "Home" para voltar à página inicial do sistema
    cy.get(".css-vrbkqi-MenuButton-ConditionalMenuButton").click(); //Clica no botão de menu para abrir o menu lateral
    cy.get('[data-cy="nav-group-edital"]').click(); //Clica na aba Editais
    cy.get('[data-cy="nav-item-publicar-edital"]').click(); //Clica na opção Editais para acessar da página de Editais
    cy.get(".css-l00e1f-NavIcon-CloseIconButton").click(); //Clica no botão de fechar o menu lateral
    if (firstRun) {
      cy.get('[data-cy="add-publicar-edital"]').click(); //Clica no botão "Adicionar" para criação de um novo Edital
      cy.get('[data-cy="nome"]').type(
        "Edital 555/2025 - Teste de Publicação de Edital Completo Cypress", //Edite essa linha para preencher o nome do Edital
        { delay: 0 }
      ); //Preenche o campo "Nome" do Edital
    } else {
      cy.wait(1000);
      cy.get(
        ':nth-child(2) > .ezzcdse5 > .ezzcdse4 > [aria-label="Editar"]'
      ).click();
      cy.wait(1000);
    }
    if (firstRun) {
      cy.get('[data-cy="restricoes"]').click(); //Clica na aba Restrições para seguir para a página de Restrições
      cy.restricoes({
        definirDuracaoProjetoEmMeses: true,
        duracaoProjetoEmMeses: 12,
        pesquisadorSubmeterVariasPropostas: true,
        possuiNivelAcademicoMinimoCoordenador: true,
        nivelAcademicoMinimoCoordenadorId: "Ensino Superior",
        obrigatorioLinkLattesCoordenador: true,
      }); //Chama o comando restrições para preencher as informações de Restrições do Edital
      cy.get('[data-cy="termoDeAceite"]').click();
      cy.realPress(["Control", "a"]);
      cy.realType(
        "* Termo de Aceite:\n\nAo submeter minha proposta ao Edital mencionado, declaro, de forma expressa, que li integralmente, compreendi e aceito todas...",
        { delay: 0 }
      );
      cy.get('[data-cy="texto-do-edital"]').click();
      cy.get('[data-cy="texto"]').click();
      cy.realPress(["Control", "a"]);
      cy.realType(
        "* Objetivo:\n\nEste edital tem como objetivo selecionar projetos de pesquisa que contribuam para o desenvolvimento...",
        { delay: 0 }
      );
      cy.get('[data-cy="abrangencia"]').click();
      cy.abrangencias({
        estados: [
          "São Paulo",
          "Goiás",
          "Paraná",
          "Mato Grosso",
          "Mato Grosso do Sul",
        ],
      });
      cy.get('[data-cy="informacoes-complementares"]').click();
      cy.get('[data-cy="perguntaInfoId"]').click();
      cy.get('[data-cy="objetivos-de-des"]').click();
      cy.get('[data-cy="anexos"]').click();
      cy.get('[data-cy="editalAnexo-procure"]').selectFile(
        "cypress/downloads/lorem-ipsum.pdf"
      );

      cy.get('[data-cy="cronograma"]').click();
      cy.get('[data-cy="periodo-de-submissao"]').click();
      cy.get('[data-cy="add-button"]').click();
      cy.get('[data-cy="chamadaUnsaved.inicio"]').type(getCurrentDateTime());
      cy.get('[data-cy="chamadaUnsaved.termino"]').type(
        getCurrentDateTime({ addMonths: 1, addDays: 11 })
      );
      cy.get(
        '[data-cy="chamadaUnsaved.inicioReconsideracaoEnquadramento"]'
      ).type(getCurrentDateTime({ addMonths: 2, addDays: 22 }));
      cy.get(
        '[data-cy="chamadaUnsaved.terminoReconsideracaoEnquadramento"]'
      ).type(getCurrentDateTime({ addMonths: 2, addDays: 24 }));
      cy.get('[data-cy="chamadaUnsaved.inicioReconsideracaoAprovacao"]').type(
        getCurrentDateTime({ addMonths: 2, addDays: 25 })
      );
      cy.get('[data-cy="chamadaUnsaved.terminoReconsideracaoAprovacao"]').type(
        getCurrentDateTime({ addMonths: 2, addDays: 29 })
      );
      cy.get('[data-cy="chamada-confirmar"]').click();
      cy.get('[data-cy="periodo-de-requisicao-de-bolsista"]').click();
      cy.get('[data-cy="add-button"]').click();
      cy.get('[data-cy="requisicaoBolsistaUnsaved.inicio"]').type(
        getCurrentDateTime({ addMonths: 2, addDays: 30 })
      );
      cy.get('[data-cy="requisicaoBolsistaUnsaved.termino"]').type(
        getCurrentDateTime({ addMonths: 2, addDays: 35 })
      );
      cy.get('[data-cy="requisicaoBolsista-confirmar"]').click();
      cy.get('[data-cy="orcamento"]').click();
      //Orcamento -> Programa
      //cy.get('[data-cy="programa"]').click();
      //cy.get('[data-cy="programaId"]').click();
      //TODO -> Criar um programa pelo cypress e chamar neste teste[16 primeiros caracteres] cy.get('[data-cy="anderson-heidenr"]')
      //Orcamento -> Rubricas
      cy.get('[data-cy="rubricas"]').click();
      cy.rubricas({
        tipoRubrica: "Bolsa",
        naturezaDespesa: "Auxílio a Pesquisador",
        justificativaObrigatoria: true,
      });
      cy.rubricas({
        tipoRubrica: "Material Permanente",
        naturezaDespesa: "Auxílio a Pesquisador",
        justificativaGlobal: true,
        moedaEstrangeira: true,
        tipoMoedaEstrangeira: ["Dólar"],
      });
      cy.get('[data-cy="faixas-de-financiamento"]').click();
      cy.faixasFinanciamento({
        nomeFaixa: "Faixa A",
        valorMinimo: 5000000,
        valorMaximo: 100000000,
        observacao: "Faixa de financiamento para projetos iniciais",
      });
      cy.get('[data-cy="documentos"]').click();
      cy.get('[data-cy="documentos-da-proposta"]').click();
      cy.wait(1000);
      cy.documentosProposta({
        nomeDocumento: "Carta de Apresentação",
        descricaoDocumento:
          "Uma carta formal que apresenta o projeto e os seus objetivos, geralmente dirigida ao órgão de avaliação.",
        formatoArquivo: "PDF",
        tamanhoArquivo: 5, // 5 MB
        submissaoObrigatoria: true,
      });
      cy.get('[data-cy="documentos-pessoais"]').click();
      //TODO -> Precisa de um fluxo de criação de documentos pessoais para ter um exemplo para este teste
      cy.get('[data-cy="perguntas"]').click();
      cy.get('[data-cy="descricao-do-projeto"]').click();
      cy.descricaoProjetoPreset({
        perguntasPreset: [
          "Metodologia",
          "Objetivo Geral",
          "Riscos e Atividades",
          //TODO -> verificar como o teste se comporta com "Impactos Esperados" estao com mesmo data-cy
        ],
      });
      cy.get('[data-cy="indicadores-de-producao"]').click();
      cy.indicadoresProducao({
        indicadores: ["Produção Técnica ou Tecnológica"],
      });
      cy.get('[data-cy="bolsas-do-edital"]').click();
      cy.get('[data-cy="bolsas"]').click();
      cy.bolsasEdital({
        modalidadeBolsa: "AT",
        nivelBolsa: "NM R$ 560,00)", // Tranformar para nm-r-560-00
      });
      cy.get('[data-cy="menu-finalizar"]').click();
    } else {
      //cy.get('[data-cy="orcamento"]').click();
      //Orcamento -> Programa
      //cy.get('[data-cy="programa"]').click();

      //cy.get('[data-cy="menu-finalizar"]').click();
      cy.visit("https://novo-sig.homolog.ledes.net/modalidade-bolsa");
      cy.get('[data-cy="add-modalidade-de-bolsa"]').click();
    }
  });
});
