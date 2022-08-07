/// <reference types="Cypress" />

describe('REST API Test with Cypress', () => {
    it('API Test - Validate Status Code', () => {
        cy.request('https://api.chucknorris.io/jokes/random').as('jokes')
        cy.get('@jokes')
        .its('status').should('equal',200)
    })
    it('API test - Validate Negative Status Code',()=>{
        cy.request({
            method:'GET',
            url:'https://api.chucknorris.io/jokes/random/10',
            failOnStatusCode:false
        }).as('pokemon')
        cy.get('@pokemon').its('status').should('equal',404)
    })

})