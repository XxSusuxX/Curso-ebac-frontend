/// <reference types="cypress" />

describe('Teste para a Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })
    it('Adicionar um contato', () => {
        cy.get('[type="text"]').type("gabriel")
        cy.get('[type="email"]').type("ga@gma.co")
        cy.get('[type="tel"]').type("44")
        cy.get('.adicionar').click()
        cy.wait(2000)
    })
    it('Editar um contatos', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type("alterado")
        cy.get('[type="email"]').clear().type("alterado@gma.co")
        cy.get('[type="tel"]').clear().type("00000")
        cy.get('.alterar').click()
        cy.wait(2000)
    })
    it('Deletar um contato', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
    })
})