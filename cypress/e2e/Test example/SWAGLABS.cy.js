describe ('SWAGLABS Test', () => {

  it('Log in ACC standard with 1 product' , () => {
 
    cy.visit('/')
    cy.get('[id="user-name"]')
      .type('standard_user')
    cy.get('[id="password"]')
      .type('secret_sauce')
    cy.get('[name="login-button"]')
      .click()

    // sort by
    cy.get('[class="select_container"]').click()

    cy.get('[class="product_sort_container"]')
      .select('za')
    cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]')
      .contains('Add to cart')
      .click()
    cy.get('[class="shopping_cart_badge"]')
      .should('have.text', '1')

  })
})