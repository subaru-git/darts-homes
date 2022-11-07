describe('gaming Sweet 16', () => {
  it('fun gaming', () => {
    cy.clearLocalStorage();
    indexedDB.deleteDatabase('DartsHomes');
    cy.visit('/sweet16');
    cy.get('button[aria-label="setting"]').first().click({ force: true });
    cy.get('button[aria-label="ok"]').click();
    [...Array(19)].forEach(() => {
      cy.get(`button[aria-label="16 double"]`).first().click({ force: true });
      cy.get(`button[aria-label="16"]`).first().click({ force: true });
      cy.get(`button[aria-label="8 double"]`).first().click({ force: true });
      cy.get('button[aria-label="round change"]').first().click({ force: true });
    });
    cy.get('button[aria-label="16 double"]').first().click({ force: true });
    cy.get('button[aria-label="16 double"]').first().click({ force: true });
    cy.get('button[aria-label="16 double"]').first().click({ force: true });
    cy.get('button[aria-label="round over"]').first().click({ force: true });
    cy.wait(1000);
    cy.get('button[aria-label="new game"]').first().click();
    cy.visit('/history');
    cy.get('button[aria-label="sweet 16"]').click();
    cy.get('tr').should('have.length', 2);
    cy.get('tr').first().children('td').should('have.length', 3);
    cy.get('tr').first().children('td').eq(0).should('have.text', 'Sweet 16');
    cy.get('tr').last().children('td').should('have.length', 1);
    cy.get('tr').last().children('td').eq(0).should('have.text', 'Score: 205');
    cy.get('button[aria-label="delete history"]').click();
    cy.get('button[aria-label="delete"]').click();
    cy.get('tr').should('have.length', 0);
  });
});
export {};
