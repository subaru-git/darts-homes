describe('gaming Tons Up', () => {
  it('fun gaming', () => {
    cy.clearLocalStorage();
    indexedDB.deleteDatabase('DartsHomes');
    cy.visit('/tonsup');
    cy.wait(100);
    cy.get('button[aria-label="setting"]').first().click({ force: true });
    cy.get('button[aria-label="ok"]').click();
    [...Array(19)].forEach(() => {
      cy.get(`button[aria-label="20 triple"]`).first().click();
      cy.get(`button[aria-label="20 double"]`).first().click();
      cy.get('button[aria-label="round change"]').first().click();
    });
    cy.get('button[aria-label="20 triple"]').first().click();
    cy.get('button[aria-label="20 double"]').first().click();
    cy.get('button[aria-label="round over"]').first().click();
    cy.wait(1000);
    cy.get('button[aria-label="new game"]').first().click();
    cy.visit('/history');
    cy.get('button[aria-label="tons up"]').click();
    cy.get('tr').should('have.length', 2);
    cy.get('tr').first().children('td').should('have.length', 3);
    cy.get('tr').first().children('td').eq(0).should('have.text', 'Tons Up');
    cy.get('tr').last().children('td').should('have.length', 1);
    cy.get('tr').last().children('td').eq(0).should('have.text', 'Score: 400');
    cy.get('button[aria-label="delete history"]').click();
    cy.get('button[aria-label="delete"]').click();
    cy.get('tr').should('have.length', 0);
  });
});
export {};