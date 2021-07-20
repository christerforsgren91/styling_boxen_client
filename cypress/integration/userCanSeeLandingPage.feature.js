describe('User can see landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  it('shows the main landing page', () => {
    cy.get('[data-cy=title]').should('contain', 'STYLINGBOXEN')
    cy.get('[data-cy=welcome-text]').should(
      'contain',
      'VI GÖR DITT HEM REDO FÖR FÖRSÄLJNING'
    )
    cy.get('[data-cy=nav-bar]').within(() => {
      cy.get('[data-cy=home-nav]').should('contain', 'HEM')
      cy.get('[data-cy=concept-nav]').should('contain', 'KONCEPT')
      cy.get('[data-cy=services-nav]').should('contain', 'TJÄNSTER')
      cy.get('[data-cy=about-nav]').should('contain', 'OM OSS')
      cy.get('[data-cy=recommendation-nav]').should(
        'contain',
        'REKOMMENDATIONER'
      )
      cy.get('[data-cy=contact-nav]').should('contain', 'KONTAKT')
    })
  })
})
