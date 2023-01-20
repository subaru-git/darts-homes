describe('gaming Bully Bully', () => {
  it('fun gaming', () => {
    cy.clearLocalStorage();
    indexedDB.deleteDatabase('DartsHomes');
    cy.visit('/bullybully');
    cy.wait(100);
    cy.get('button[aria-label="setting"]').first().click({ force: true });
    cy.get('input[aria-label="round setting"]').clear().type('3');
    cy.get('button[aria-label="new game"]').click();
    [...Array(2)].forEach(() => {
      cy.get(`button[aria-label="inner bull"]`).first().click();
      cy.get(`button[aria-label="outer bull"]`).first().click({ force: true });
      cy.get(`button[aria-label="non bull"]`).first().click({ force: true });
      cy.get('button[aria-label="round change"]').first().click();
    });
    cy.get(`button[aria-label="inner bull"]`).first().click();
    cy.get(`button[aria-label="outer bull"]`).first().click({ force: true });
    cy.get(`button[aria-label="non bull"]`).first().click({ force: true });
    cy.get('button[aria-label="round over"]').first().click();
    cy.get('button[aria-label="new game"]').first().click();
    [...Array(2)].forEach(() => {
      cy.get(`button[aria-label="inner bull"]`).first().click();
      cy.get(`button[aria-label="outer bull"]`).first().click({ force: true });
      cy.get(`button[aria-label="non bull"]`).first().click({ force: true });
      cy.get('button[aria-label="round change"]').first().click();
    });
    cy.get(`button[aria-label="inner bull"]`).first().click();
    cy.get(`button[aria-label="outer bull"]`).first().click({ force: true });
    cy.get(`button[aria-label="non bull"]`).first().click({ force: true });
    cy.get('button[aria-label="setting"]').first().click({ force: true });
    cy.get('button[aria-label="new game"]').click();
    cy.visit('/history');
    cy.get('button[aria-label="bully bully"]').click();
    cy.get('tr').should('have.length', 4);
    cy.get('tr').first().children('td').should('have.length', 4);
    cy.get('tr').first().children('td').eq(0).should('have.text', 'Bully Bully');
    cy.get('tr').last().children('td').should('have.length', 1);
    cy.get('tr').last().children('td').eq(0).should('have.text', 'Score: 21');
    cy.get('button[aria-label="delete history"]').eq(1).click();
    cy.get('button[aria-label="delete"]').click();
    cy.get('button[aria-label="delete history"]').eq(0).click();
    cy.get('button[aria-label="delete"]').click();
    cy.get('tr').should('have.length', 0);
  });
});
export {};
