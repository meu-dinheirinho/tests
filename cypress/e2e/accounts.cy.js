describe('Validar Contas', () => {
  beforeEach('Acessar a página da contas', () => {
    cy.visit('http://localhost:3000/accounts')
    cy.url().should('contains', '/accounts')
  })

  it('Devo visualizar visualizar o nome Minhas Contas', () => {
    cy.get(".chakra-text.styles_title__EUTE3.css-11oh35").should('be.visible').and('contain.text', 'Minhas Contas')
  })

  it('Devo visualizar a barra lateral de menus', () => {
    cy.get("div.css-1iet4io").should('be.visible')
  })

  it.skip('Devo criar uma nova conta', () => {
    cy.get(".css-o44is > button").should('be.visible').click()
    cy.get("#chakra-modal--header-\:r13\:").should('be.visible').and('contain.text', 'Novo Cartão')    
  })
})