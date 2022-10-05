describe('Travel all pages', () => {
  it('by URL', () => {
    cy.visit('/')
    cy.get('div[data-cy="home-main"]').should('be.visible')
    cy.visit('/n01')
    cy.get('div[data-cy="n01-main"]').should('be.visible')
    cy.visit('/eagleseye')
    cy.get('div[data-cy="eagles-eye-main"]').should('be.visible')
    cy.visit('/cricketnumbercount')
    cy.get('div[data-cy="cricket-number-count-main"]').should('be.visible')
  })
})
export {}
