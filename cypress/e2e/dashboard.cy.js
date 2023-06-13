describe('Validar Dashboard', () => {
  beforeEach('Acessar a página da dashboard', () => {
    cy.visit('http://localhost:3000/dashboard')
    cy.url().should('contains', '/dashboard')
  })

  it('Devo visualizar visualizar o nome Dashboard', () => {
    cy.get(".chakra-text.styles_title__EUTE3.css-11oh35").should('be.visible').and('contain.text', 'Dashboard')
  })

  it('Devo visualizar a barra lateral de menus', () => {
    cy.get("div.css-1iet4io").should('be.visible')
  })
})