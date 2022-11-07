describe('gaming Cricket Mark-Up', () => {
  it('fun gaming', () => {
    cy.clearLocalStorage();
    indexedDB.deleteDatabase('DartsHomes');
    cy.visit('/cricketmarkup');
    cy.wait(100);
    cy.get('button[aria-label="setting"]').first().click();
    cy.get('input[aria-label="target count"]').clear().type('3');
    cy.get('button[aria-label="new game"]').click();
    cy.get('button[aria-label="ok"]').click();
    cy.get('button[aria-label="20 triple"]').first().click();
    cy.get('button[aria-label="19 triple"]').first().click();
    cy.get('button[aria-label="18 triple"]').first().click();
    cy.get('button[aria-label="round change"]').first().click();
    cy.get('button[aria-label="17 triple"]').first().click();
    cy.get('button[aria-label="16 triple"]').first().click();
    cy.get('button[aria-label="15 triple"]').first().click();
    cy.get('button[aria-label="round change"]').first().click();
    cy.get('button[aria-label="outer bull"]').first().click();
    cy.get('button[aria-label="inner bull"]').first().click();
    cy.get('button[aria-label="round over"]').first().click();
    cy.wait(1000);
    cy.get('button[aria-label="new game"]').first().click();
    cy.visit('/history');
    cy.get('tr').should('have.length', 2);
    cy.get('tr').first().children('td').should('have.length', 4);
    cy.get('tr').first().children('td').eq(0).should('have.text', 'Cricket Mark-Up');
    cy.get('tr').first().children('td').eq(1).should('have.text', 'Target: 3');
    cy.get('tr').last().children('td').should('have.length', 8);
    cy.get('tr').last().children('td').eq(0).should('have.text', 'Total: 8');
    cy.get('tr').last().children('td').eq(1).should('have.text', '20: 1');
    cy.get('tr').last().children('td').eq(2).should('have.text', '19: 1');
    cy.get('tr').last().children('td').eq(3).should('have.text', '18: 1');
    cy.get('tr').last().children('td').eq(4).should('have.text', '17: 1');
    cy.get('tr').last().children('td').eq(5).should('have.text', '16: 1');
    cy.get('tr').last().children('td').eq(6).should('have.text', '15: 1');
    cy.get('tr').last().children('td').eq(7).should('have.text', 'BULL: 2');
    cy.get('button[aria-label="delete history"]').click();
    cy.get('button[aria-label="delete"]').click();
    cy.get('tr').should('have.length', 0);
  });
});
export {};
