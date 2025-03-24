

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", () => {
    cy.get('#firstName').type('Romulo')
    cy.get('#lastName').type('Cintra')
    cy.get('#email').type('romulocintra1@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    /**/
    cy.get('.success').should('be.visible')
  });

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Romulo')
    cy.get('#lastName').type('Cintra')
    cy.get('#email').type('romulocintra1@invalido')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    
    
    cy.get('.error').should('be.visible');
  });

  it('valida que o campo telefone não aceita valores não numéricos', () => {
    cy.get('#phone').type('abc123!@#')
    cy.get('#phone').type('have.value', '123')
    cy.get('#phone').clear().type('abcd')
    cy.get('#phone').type('have value', '')
  });

});

/*Lesson 02*/
