// Deal with uncaught exceptions error
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Bigbox task', () => {
    before(() => {
        cy.visit('https://bigbox.lt')
        cy.clearCookies();
        cy.clearLocalStorage();
        Cypress.session.clearAllSavedSessions();
    })
    
    beforeEach(() => {
        cy.session('userSession', () => {
            cy.visit('https://bigbox.lt');
            cy.get('.header-user-info-image').click()
            cy.get('#email').type('vardenis@pavardenis.com')
            cy.get('#passwd').type('testtest')
            cy.get('.login-button').click();
            cy.wait(2000);
            cy.contains('Mano paskyra').should('be.visible');
        })
    })

    it('Add item', () => {
        cy.visit('https://www.bigbox.lt');
        cy.get('input.lupa-search-box-input-field').type('telefonas')  
        cy.wait(2000)
        cy.get('.lupa-search-box-product').first().click();
        cy.get('#buy_block > .ajax_add_to_cart_button').click();
        cy.get('a > .btn').click();
        cy.contains('Jūsų krepšelis').should('be.visible');
    })

    it('View cart', () => {
        cy.visit('https://bigbox.lt/greitas_uzsakymas');
        cy.contains('Jūsų krepšelis').should('be.visible');
        cy.get('#cart-summary-next-step').click();
        cy.get('.address-next-step-block > .bb-primary-button').click();
        cy.get('#carrier-next-step').click();
        cy.get(':nth-child(2) > .payment-item-2 > .radio-wrapper > .radio-container > label').click();
        cy.get('#checkbox-terms').click();
        cy.get('#submit-payment-method').should('not.be.disabled').and('be.visible');
    })
})
