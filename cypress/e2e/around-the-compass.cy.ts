describe('gaming Around The Compass', () => {
  it('fun gaming', () => {
    cy.clearLocalStorage();
    indexedDB.deleteDatabase('DartsHomes');
    cy.visit('/aroundthecompass');
    cy.wait(100);
    cy.get('button[aria-label="setting"]').first().click({ force: true });
    cy.get('button[aria-label="new game"]').click();
    [...Array(19)].forEach(() => {
      cy.get(`button[aria-label="12 double"]`).first().click();
      cy.get(`button[aria-label="12"]`).first().click();
      cy.get(`button[aria-label="6 double"]`).first().click();
      cy.get('button[aria-label="round change"]').first().click();
    });
    cy.get(`button[aria-label="12 double"]`).first().click();
    cy.get(`button[aria-label="12"]`).first().click();
    cy.get(`button[aria-label="6 double"]`).first().click();
    cy.get('button[aria-label="round over"]').first().click();
    cy.wait(1000);
    cy.get('button[aria-label="new game"]').first().click();
    cy.visit('/history');
    cy.get('button[aria-label="around the compass"]').click();
    cy.get('tr').should('have.length', 2);
    cy.get('tr').first().children('td').should('have.length', 4);
    cy.get('tr').first().children('td').eq(0).should('have.text', 'Around The Compass');
    cy.get('tr').last().children('td').should('have.length', 1);
    cy.get('tr').last().children('td').eq(0).should('have.text', 'Score: 200');
    cy.get('button[aria-label="delete history"]').click();
    cy.get('button[aria-label="delete"]').click();
    cy.get('tr').should('have.length', 0);
  });
});
export {};
