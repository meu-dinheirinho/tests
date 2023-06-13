describe('Validar Minha Carteira', () => {
  beforeEach('Acessar a página Minha Carteira', () => {
    cy.visit('http://localhost:3000/my-wallet')
    cy.url().should('contains', '/my-wallet')
  })

  it('Devo visualizar visualizar o nome Minha Carteira', () => {
    cy.get(".chakra-text.styles_title__EUTE3.css-11oh35").should('be.visible').and('contain.text', 'Minha Carteira')
  })

  it('Devo visualizar a barra lateral de menus', () => {
    cy.get("div.css-1iet4io").should('be.visible')
  })

  it.skip('Devo criar um novo cartão', () => {
    cy.get(".chakra-stack.css-1igwmid > button").should('be.visible').click()
    cy.get("#chakra-modal--header-\:r13\:").should('be.visible').and('contain.text', 'Novo Cartão')    
  })
})