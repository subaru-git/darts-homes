describe('gaming Count Up', () => {
  it('fun gaming', () => {
    cy.clearLocalStorage();
    indexedDB.deleteDatabase('DartsHomes');
    cy.visit('/countup');
    cy.wait(100);
    cy.get('button[aria-label="setting"]').first().click({ force: true });
    cy.get('button[aria-label="new game"]').click();
    [...Array(7)].forEach(() => {
      cy.get('button[aria-label="one"]').first().click();
      cy.get('button[aria-label="four"]').first().click();
      cy.get('button[aria-label="zero"]').first().click();
      cy.get('button[aria-label="enter"]').first().click();
      cy.get('button[aria-label="round change"]').first().click();
    });
    cy.get('button[aria-label="one"]').first().click();
    cy.get('button[aria-label="four"]').first().click();
    cy.get('button[aria-label="zero"]').first().click();
    cy.get('button[aria-label="enter"]').first().click();
    cy.get('button[aria-label="round over"]').first().click();
    cy.get('button[aria-label="new game"]').first().click();
    [...Array(7)].forEach(() => {
      cy.get('button[aria-label="one"]').first().click();
      cy.get('button[aria-label="four"]').first().click();
      cy.get('button[aria-label="zero"]').first().click();
      cy.get('button[aria-label="enter"]').first().click();
      cy.get('button[aria-label="round change"]').first().click();
    });
    cy.get('button[aria-label="one"]').first().click();
    cy.get('button[aria-label="four"]').first().click();
    cy.get('button[aria-label="zero"]').first().click();
    cy.get('button[aria-label="enter"]').first().click();
    cy.get('button[aria-label="setting"]').first().click({ force: true });
    cy.get('button[aria-label="new game"]').click();
    cy.visit('/history');
    cy.get('button[aria-label="count up"]').click();
    cy.get('tr').should('have.length', 4);
    cy.get('tr').first().children('td').should('have.length', 3);
    cy.get('tr').first().children('td').eq(0).should('have.text', 'Count Up');
    cy.get('tr').last().children('td').should('have.length', 1);
    cy.get('tr').last().children('td').eq(0).should('have.text', 'Score: 1120');
    cy.get('button[aria-label="delete history"]').eq(1).click();
    cy.get('button[aria-label="delete"]').click();
    cy.get('button[aria-label="delete history"]').eq(0).click();
    cy.get('button[aria-label="delete"]').click();
    cy.get('tr').should('have.length', 0);
  });
});
export {};
