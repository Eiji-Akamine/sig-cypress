import { getCurrentDateTime } from '../helpers/date.helper';

describe('Criar conta no sistema e logar', () => {

  it('Realiza login no sistema e completa cadastro no sistema.', () => {
    cy.typelogin(
      'https://novo-sig.homolog.ledes.net/login',// [URL do sistema]
      'joao.neves@cypress.com', // [E-mail do usuário]
      '123@Joao', // [Senha do usuário]
    ); //Acessa a página de login usando as credenciais do usuário e senha.
  
    cy.get('[data-cy="user-menu"]').click();
    cy.get('[data-cy="nomeSocial"]').type('John Snow');
    cy.get('[data-cy="racaCorId"]').click();
    cy.get('[data-cy="pardo-a"]').click();
    cy.get('[data-cy="paisId"]').click();
    cy.get('[data-cy="brasil"]').click();
    cy.get('[data-cy="documento"]').type('84568628008'); // Preenche o campo de documento
    cy.get('.ex40wuf1').click();

    cy.get('[data-cy="endereco.cep"]').type('17023490');
    //17023-490
    //Rua Mauro de Martino
    //Jardim Ivone
    //Bauru
    //SP
    cy.get('[data-cy="endereco.numero"]').type('123');
    cy.get('.ex40wuf1').click();

    //TODO
    //cy.get('[data-cy="instituicaoId"]').click();
    //cy.get('[data-cy="funda-fundacao"]').click();
    //cy.get('[data-cy="unidadeId"]').click();
    //cy.get('[data-cy="facom-faculdade"]').click();
    //cy.get('[data-cy="nivelAcademicoId"]').click();
    //cy.get('[data-cy="ensino-superior"]').click();
    cy.get('[data-cy="lattes"]').type('http://lattes.cnpq.br/1234567890123456');
    cy.get('[data-cy="linkedin"]').type('https://www.linkedin.com/in/joao-neves-cypress/');
    //TODO: Adicionar campos de conhecimento, como área de conhecimento, grande área, etc.
    //cy.get('[data-cy="areaDeConhecimento-adicionar"]').click();
    //cy.get('[data-testid="ExpandMoreIcon"] > path').click();
    //cy.get('[data-cy="areaDeConhecimento.0.grandeAreaId"]').click();
    //cy.get('[data-cy="areaDeConhecimento.0.areaId"]').click();
    cy.get('.ex40wuf1').click();

    //TODO: Adicionar campos de vinculo institucional, como possui vinculo institucional, tipo de vinculo, etc.
    //cy.get('[data-cy="possuiVinculoInstitucional"]').check();
    cy.wait(500);
    cy.get('.ex40wuf1').click();
    //cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json')
    cy.get('[id="select-categories"]').click();
    cy.wait(1000);
    cy.get('[data-cy="usuarioAnexo-item-cpf-pdf-cypress"]').click();
    cy.get('[data-cy="usuarioAnexo-procure"]').selectFile('cypress/downloads/lorem-ipsum.pdf');


    cy.get('[id="select-categories"]').click();
    cy.wait(1000);
    cy.get('[data-cy="usuarioAnexo-item-rg-jpg-cypress"]').click();
    cy.get('[data-cy="usuarioAnexo-procure"]').selectFile('cypress/downloads/lorem_image.jpg');
    cy.wait(500);
    cy.get('.ex40wuf1').click();
}); 
});