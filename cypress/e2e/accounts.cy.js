describe('Validar Contas', () => {
  beforeEach('Acessar a página da contas', () => {
    cy.visit('http://localhost:3000/')
    cy.get("#email").type('admin@gmail.com')
    cy.get("#password").type('plms123!P')
    cy.get(".chakra-button.css-1r19sp").click()
    cy.get('[href="/accounts"] > .css-clelbj').click()
    cy.url().should('contains', '/accounts')
  })

  it.skip('Devo visualizar visualizar o nome Minhas Contas', () => {
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