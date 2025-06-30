import { getCurrentDateTime } from '../helpers/date.helper';

describe('Criar conta no sistema e logar', () => {

  it('Realiza login no sistema e submete uma proposta', () => {
    cy.visit('https://novo-sig.homolog.ledes.net/login');

    cy.get('.css-x6edru-CreateLink').click(); 
    cy.get('[name="nome"]').type('João Neves'); 
    cy.get('.css-z8nrsm-CustomDatePicker').type('08/05/2000'); // Preenche a data de nascimento
    cy.get('#Email').type('joao.neves@cypress.com'); 
    cy.get('[name="senha"]').type('123@Joao');
    cy.get('[name="senhaConfirmar"]').type('123@Joao');
    cy.get('.MuiGrid-root > .MuiBox-root > .MuiButtonBase-root').click();
    cy.get('[type="checkbox"]').check();
    cy.get('[type="submit"]').click();

    cy.typelogin(
      'https://novo-sig.homolog.ledes.net/login',// [URL do sistema]
      'joao.neves@cypress.com', // [E-mail do usuário]
      '123@Joao', // [Senha do usuário]
    ); //Acessa a página de login usando as credenciais do usuário e senha.
  
  }); 
});