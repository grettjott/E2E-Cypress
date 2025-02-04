describe('DuckDuckGo Search Engine', () => {
  it('Test Case #1', () => {
    cy.visit('https://duckduckgo.com/')
    cy.get('#searchbox_input').type('microsoft word cheat sheet')
    cy.get('.searchbox_searchButton__F5Bwq').click()
    cy.get('.c-base__title')
      .should('be.visible')
      .should(
        "have.text",
        "Microsoft Word 2010"
      )

    cy.get('.feedback-btn__send').click()
    cy.get('.feedback-btn__icon--love').click()
    cy.get('.js-feedback-dropdown').select('other')
    cy.get('.frm__text').type('This is just a test')
    cy.get('[data-testid="feedback-form-submit"]')
      .should('be.visible')
      .should('not.have.class', 'is-disabled')
  })

  it('Test Case #2', () => {
    cy.visit('https://duckduckgo.com/')
    cy.get('#searchbox_input').type('shorten duckduckgo.com/about')
    cy.get('.searchbox_searchButton__F5Bwq').click()
    cy.get('#shorten-url')
      .should('have.value','https://is.gd/OnnE8s')
  })

  it('Test Case #3_5', () => {
    cy.visit('https://duckduckgo.com/')
    cy.get('#searchbox_input').type( '!wiki')
    cy.get('.searchbox_searchButton__F5Bwq').click()

    const redirect = 'https://en.wikipedia.org/wiki/Main_Page'
    cy.origin(redirect, { args: {redirect} }, ({redirect}) => {
      cy.location('href').should('eq', redirect)
    })
  })

  it('Test Case #3_6', () => {
    cy.visit('https://duckduckgo.com/')
    cy.get('#searchbox_input').type( 'stopwatch{enter}')
    cy.get('.start').click()
    cy.wait(1123)
    cy.get('.stop').click()
  })
})