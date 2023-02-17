describe('Working with inputs', () => {

    it('Sign Up website', () => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('a').contains('Sign up').click();

        cy.get('#sign-username').clear()
        cy.get('#sign-username').type('sitikhtmh')

        cy.get('#sign-password').clear()
        cy.get('#sign-password').type('sitikhtmh')
  
        cy.get('.btn.btn-primary').should('contain', 'Sign up')
    });

    it('Login website', () => {
      cy.visit('https://www.demoblaze.com/index.html')
      cy.get('a').contains('Log in').click();

      cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password
  
        cy.get('#loginusername').clear()
        cy.get('#loginusername').type(username)
   
        //cy.get('input[name="password').clear()
        //cy.get('input[name="password').type(password)
        cy.get('#loginpassword').clear()
        cy.get('#loginpassword').type(password)

        //cy.get('.btn.btn-primary').click()
  
        //cy.get('[type="button"]').contains('Close').click()

        cy.get('.btn.btn-primary').should('contain', 'Log in')

        })
    })
});