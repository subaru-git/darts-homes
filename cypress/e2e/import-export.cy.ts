describe('import-export', () => {
  it('export empty history', () => {
    cy.clearLocalStorage();
    indexedDB.deleteDatabase('DartsHomes');
    cy.visit('/history');
    cy.get('button[aria-label="export"]').click();
    [
      'cricketmarkup',
      'eagleseye',
      'doubletrouble',
      'sweet16',
      'topsandtens',
      'twodartcombinations',
      'aroundthecompass',
      'tonsup',
      'route64',
      'eightythrew',
      'shanghainights',
      'switchhitter',
      'bullybully',
      'treblesforshow',
    ].forEach((key) => {
      cy.readFile('cypress/downloads/darts-homes-history.json', 'utf8').its(key).should('be.empty');
    });
  });
  it('import history', () => {
    cy.clearLocalStorage();
    indexedDB.deleteDatabase('DartsHomes');
    cy.visit('/history');
    cy.get('input[type=file]').selectFile('cypress/fixtures/darts-homes-history.json', {
      force: true,
    });
    cy.get('button[aria-label="overwrite"]').click();
    cy.get('button[aria-label="cricket mark up"]').click();
    cy.get('[aria-label="cricket mark up history"] tr').should('have.length', 12);
    cy.get('button[aria-label="eagle\'s eye"]').click();
    cy.get('[aria-label="eagle\'s eye history"] tr').should('have.length', 2);
    cy.get('button[aria-label="double trouble"]').click();
    cy.get('[aria-label="double trouble history"] tr').should('have.length', 2);
    cy.get('button[aria-label="sweet 16"]').click();
    cy.get('[aria-label="sweet 16 history"] tr').should('have.length', 6);
    cy.get('button[aria-label="tops and tens"]').click();
    cy.get('[aria-label="tops and tens history"] tr').should('have.length', 8);
    cy.get('button[aria-label="two dart combinations"]').click();
    cy.get('[aria-label="two dart combinations history"] tr').should('have.length', 2);
    cy.get('button[aria-label="around the compass"]').click();
    cy.get('[aria-label="around the compass history"] tr').should('have.length', 8);
    cy.get('button[aria-label="tons up"]').click();
    cy.get('[aria-label="tons up history"] tr').should('have.length', 2);
    cy.get('button[aria-label="route 64"]').click();
    cy.get('[aria-label="route 64 history"] tr').should('have.length', 2);
    cy.get('button[aria-label="eighty threw"]').click();
    cy.get('[aria-label="eighty threw history"] tr').should('have.length', 2);
    cy.get('button[aria-label="shanghai nights"]').click();
    cy.get('[aria-label="shanghai nights history"] tr').should('have.length', 2);
    cy.get('button[aria-label="switch hitter"]').click();
    cy.get('[aria-label="switch hitter history"] tr').should('have.length', 2);
    cy.get('button[aria-label="bully bully"]').click();
    cy.get('[aria-label="bully bully history"] tr').should('have.length', 12);
    cy.get('button[aria-label="trebles for show"]').click();
    cy.get('[aria-label="trebles for show history"] tr').should('have.length', 2);
  });
});
