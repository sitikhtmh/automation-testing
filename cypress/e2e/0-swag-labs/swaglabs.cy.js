/// <reference types="cypress" />



describe('Working with inputs', () => {
    it('Visit the website', () => {
      cy.visit('https://www.saucedemo.com/');
      
      cy.reload(true)
    });
  });