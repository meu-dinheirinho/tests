describe('Validar Login', () => {
  beforeEach('Acessar a página de login', () => {
    cy.visit('http://localhost:3000/login')
    cy.url().should('contains', '/login')
  })

  it.skip('Devo visualizar o nome Login', () => {
    cy.get(".css-16y2m1w > div > h3").should('be.visible').and('contain.text', 'Login')
  })

  it('Devo realizar o login e visualizar a dashboard', () => {
    cy.get("#email").type('admin@gmail.com')
    cy.get("#password").type('plms123!P')
    cy.get(".chakra-button.css-1r19sp").click()
    cy.url().should('contains', '/dashboard')
    cy.get(".chakra-text.styles_title__EUTE3.css-11oh35").should('be.visible').and('contain.text', 'Dashboard')
  })

})