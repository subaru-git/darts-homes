describe('gaming Sweet 16', () => {
  it('fun gaming', () => {
    cy.clearLocalStorage();
    indexedDB.deleteDatabase('DartsHomes');
    cy.visit('/sweet16');
    cy.wait(100);
    cy.get('button[aria-label="setting"]').first().click({ force: true });
    cy.get('input[aria-label="round setting"]').clear().type('3');
    cy.get('button[aria-label="new game"]').click();
    [...Array(2)].forEach(() => {
      cy.get(`button[aria-label="16 double"]`).first().click();
      cy.get(`button[aria-label="16"]`).first().click();
      cy.get(`button[aria-label="8 double"]`).first().click();
      cy.get('button[aria-label="round change"]').first().click();
    });
    cy.get('button[aria-label="16 double"]').first().click();
    cy.get('button[aria-label="16 double"]').first().click();
    cy.get('button[aria-label="16 double"]').first().click();
    cy.get('button[aria-label="round over"]').first().click();
    cy.get('button[aria-label="new game"]').first().click();
    [...Array(2)].forEach(() => {
      cy.get(`button[aria-label="16 double"]`).first().click();
      cy.get(`button[aria-label="16"]`).first().click();
      cy.get(`button[aria-label="8 double"]`).first().click();
      cy.get('button[aria-label="round change"]').first().click();
    });
    cy.get('button[aria-label="16 double"]').first().click();
    cy.get('button[aria-label="16 double"]').first().click();
    cy.get('button[aria-label="16 double"]').first().click();
    cy.get('button[aria-label="setting"]').first().click({ force: true });
    cy.get('button[aria-label="new game"]').click();
    cy.visit('/history');
    cy.get('button[aria-label="sweet 16"]').click();
    cy.get('tr').should('have.length', 4);
    cy.get('tr').first().children('td').should('have.length', 4);
    cy.get('tr').first().children('td').eq(0).should('have.text', 'Sweet 16');
    cy.get('tr').last().children('td').should('have.length', 1);
    cy.get('tr').last().children('td').eq(0).should('have.text', 'Score: 35');
    cy.get('button[aria-label="delete history"]').eq(1).click();
    cy.get('button[aria-label="delete"]').click();
    cy.get('button[aria-label="delete history"]').eq(0).click();
    cy.get('button[aria-label="delete"]').click();
    cy.get('tr').should('have.length', 0);
  });
});
export {};
