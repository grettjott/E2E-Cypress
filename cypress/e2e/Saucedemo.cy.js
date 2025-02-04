describe('Saucedemo task', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('User story #1', () => {
    // Product list
    cy.get('[data-test="product-sort-container"]').should('be.visible')
    cy.get('[data-test="product-sort-container"]').select('Name (A to Z)')
    cy.get('[data-test="product-sort-container"]').select('Name (Z to A)')
    cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
    cy.get('[data-test="product-sort-container"]').select('Price (high to low)')

    // Drop down arrow(check if visible if active)
    // cy.get('span.select-container::after')
    // .should('be.visible')
  })

  it('User story #2, Add to cart in product list', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible').click()
  })

  it('User story #3', () => {
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="remove"]').should('be.visible').click()
  })
})