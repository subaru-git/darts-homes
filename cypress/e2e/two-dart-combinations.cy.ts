const arrange = [
  ['17', '12 double'],
  ['10', '16 double'],
  ['3', '20 double'],
  ['4', '20 double'],
  ['13', '16 double'],
  ['6', '20 double'],
  ['7', '20 double'],
  ['16', '16 double'],
  ['9', '20 double'],
  ['18', '16 double'],
  ['11', '20 double'],
  ['12', '20 double'],
  ['13', '20 double'],
  ['14', '20 double'],
  ['15', '20 double'],
  ['16', '20 double'],
  ['17', '20 double'],
  ['18', '20 double'],
  ['19', '20 double'],
  ['20', '20 double'],
];

describe('gaming Sweet 16', () => {
  it('fun gaming', () => {
    cy.clearLocalStorage();
    indexedDB.deleteDatabase('DartsHomes');
    cy.visit('/twodartcombinations');
    cy.get('button[aria-label="setting"]').first().click({ force: true });
    cy.get('button[aria-label="ok"]').click();
    arrange.forEach((target, i) => {
      cy.get(`button[aria-label="${target[0]}"]`).first().click({ force: true });
      cy.get(`button[aria-label="${target[1]}"]`).first().click({ force: true });
      if (i === arrange.length - 1) {
        cy.get('button[aria-label="round over"]').first().click({ force: true });
        return;
      }
      cy.get('button[aria-label="round change"]').first().click({ force: true });
    });
    cy.get('button[aria-label="new game"]').click();
    cy.visit('/history');
    cy.wait(1000);
    cy.get('button[aria-label="two dart combinations"]').click();
    cy.get('tr').should('have.length', 2);
    cy.get('tr').first().children('td').should('have.length', 3);
    cy.get('tr').first().children('td').eq(0).should('have.text', 'Two-Dart Combinations');
    cy.get('tr').last().children('td').should('have.length', 1);
    cy.get('tr').last().children('td').eq(0).should('have.text', 'Score: 300');
    cy.get('button[aria-label="delete history"]').click();
    cy.get('button[aria-label="delete"]').click();
    cy.get('tr').should('have.length', 0);
  });
});
export {};
