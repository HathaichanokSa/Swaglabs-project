describe ('SWAGLABS Test', () => {

  it('Sign in ACC 1' , () => {
 
    cy.visit('/')
    cy.get('[id="user-name"]').type('standard_user')
    cy.get('[id="password"]').type('secret_sauce')
    cy.get('[name="login-button"]').click()

    cy.get('[id="react-burger-menu-btn"]').click()

  })
})