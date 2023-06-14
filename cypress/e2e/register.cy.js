describe('Validar Registro', () => {
  beforeEach('Acessar a página de Registro', () => {
    cy.visit('http://localhost:3000/register')
    cy.url().should('contains', '/register')
  })

  it.skip('Devo visualizar o nome Registro', () => {
    cy.get(".css-qm7g5w > div > div > h3").should('be.visible').and('contain.text', 'Registro')
  })

  it.skip('Devo realizar um registro', () => {
    cy.get('#field-\:r3\:').type('Francisco')
    cy.get("#phone").type('988123456')
    cy.get("#email").type('fracisco123@gmail.com')
    cy.get("#field-\:rd\:").type('12345')
    cy.get("#field-\:rf\:").type('12345')
    cy.get(".chakra-stack.css-ahthbn > button").click()
    cy.get(".css-16y2m1w > div > h3").should('be.visible').and('contain.text', 'Login')
  })
})