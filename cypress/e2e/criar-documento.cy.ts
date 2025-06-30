import { getCurrentDateTime } from '../helpers/date.helper';

describe('Criar conta no sistema e logar', () => {

  it('Realiza login no sistema e cria documentos requeridos no sistema.', () => {
    cy.typelogin(
      'https://novo-sig.homolog.ledes.net/login',// [URL do sistema]
      'admin@sig.com', // [E-mail do usuário]
      'dev123', // [Senha do usuário]
    ); //Acessa a página de login usando as credenciais do usuário e senha.
  
    cy.get('[data-cy="nav-group-pessoas"]').click();
    cy.get('[data-cy="nav-item-documentos-pessoais"]').click(); 
    cy.get('[data-cy="add-documentos-pessoais"]').click();
    cy.get('[data-cy="nome"]').type('CPF PDF Cypress');
    cy.get('[data-cy="descricao"]').type('Documento CPF em formato PDF criado via Cypress');
    cy.get('[data-cy="formatoArquivo"]').click(); 
    cy.get('[data-cy="pdf"]').click();
    cy.get('[data-cy="tamanhoArquivo"]').type('5');
    cy.get('[data-testid="DoneIcon"]').click(); 

    cy.get('[data-cy="nav-group-pessoas"]').click();
    cy.get('[data-cy="nav-item-documentos-pessoais"]').click(); 
    cy.get('[data-cy="add-documentos-pessoais"]').click();
    cy.get('[data-cy="nome"]').type('RG JPG Cypress');
    cy.get('[data-cy="descricao"]').type('Documento RG em formato JPG criado via Cypress');
    cy.get('[data-cy="formatoArquivo"]').click(); 
    cy.get('[data-cy="jpg"]').click();
    cy.get('[data-cy="tamanhoArquivo"]').type('5');
    cy.get('[data-testid="DoneIcon"]').click(); 
}); 
});