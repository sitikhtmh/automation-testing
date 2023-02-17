/// <reference types="cypress" />

describe('Home Page', () => {
    it('Visit the website', () => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.url().should('include', 'index.html');
    });

    it('Should click on the product category', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('.carousel-control-next').click();

        cy.get('a').contains('Phones').click();
        cy.get('a').contains('Laptops').click();
        cy.get('a').contains('Monitors').click();
      });

    it('Try previous and next product', () => {
        cy.visit('https://www.demoblaze.com/index.html#');
        cy.get('#next2').click()
        cy.get('#prev2').click()
    })

    it('Product', () => {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('a').contains('Samsung galaxy s6').click();

        cy.url().should('include', '/prod.html?idp_=1')

        //correct element on the pag
        cy.get('h2').should('have.text','Samsung galaxy s6');

        cy.get('.btn.btn-success.btn-lg').should('contain', 'Add to cart')
    });

    it('Cart Product', () => {
        cy.visit('https://www.demoblaze.com/cart.html')
        
        cy.get('.btn.btn-success').should('contain', 'Place Order')
    });


});