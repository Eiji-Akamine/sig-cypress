import { getCurrentDateTime } from "../helpers/date.helper";

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
    cy.wait(1000);
    cy.get(
      ':nth-child(4) > .ezzcdse5 > .ezzcdse4 > [aria-label="Editar"] > [data-testid="EditIcon"]'
    ).click(); //Clica no botão de editar o edital já existente

    cy.get('[data-cy="restricoes"]').click();
    /*
    cy.restricoes({
      definirDuracaoProjetoEmMeses: true,
      duracaoProjetoEmMeses: 12,
      pesquisadorSubmeterVariasPropostas: true,
      possuiNivelAcademicoMinimoCoordenador: true,
      nivelAcademicoMinimoCoordenadorId: "Ensino Superior",
      obrigatorioLinkLattesCoordenador: true,
    }); //Chama o comando restrições para preencher as informações de Restrições do Edital
*/
    cy.get('[data-cy="termo-de-aceite"]').click();
    cy.get('[data-cy="texto-do-edital"]').click();
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
    cy.get('[data-cy="chamadaUnsaved.inicioReconsideracaoEnquadramento"]').type(
      getCurrentDateTime({ addMonths: 2, addDays: 22 })
    );
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
  });
});
