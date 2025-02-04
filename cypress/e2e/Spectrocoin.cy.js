function assertPriceChange24h(expectedResult) {
    cy.get(':nth-child(2) > .CryptoStatistics_label__01pp5').should('be.visible').contains('Price change 24h')
    cy.get(':nth-child(2) > .CryptoStatistics_value__Qp66A').should('be.visible').contains(expectedResult)
}

describe('Spectro task', () => {
    beforeEach(() => {
        cy.visit('https://spectrocoin.com/en/bitcoin-price-rates.html')
        cy.get('[data-cy="accept-btn"]').click()
    })
  
    it('BTC', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .MobileTable_currencyIconWrapper__9D91B').click()
        assertPriceChange24h('+')
    })

    it('ETH', () => {
        cy.get('tbody > :nth-child(2)').click()
        assertPriceChange24h('+')
    })
})
    