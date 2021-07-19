describe('User can see landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  it('shows the main landing page', () => {
    cy.get('[data-cy=title]').should('contain', 'STYLINGBOXEN')
    cy.get('[data-cy=header]').within(() => {
      cy.get('[data-cy=concept-header]').should('contain', 'KONCEPT')
      cy.get('[data-cy=services-header]').should('contain', 'TJÄNSTER')
      cy.get('[data-cy=about-header]').should('contain', 'OM OSS')
      cy.get('[data-cy=recommendation-header]').should(
        'contain',
        'REKOMMENDATIONER'
      )
    })
    cy.get('[data-cy=hero-image]').should('exist')
    cy.get('[data-cy=welcome-text]').should(
      'contain',
      'STYLA DIN BOSTAD INFÖR FÖRSÄLJNING OCH FÅ ETT HÖGRE SLUTPRIS MED HJÄLP AV VÅR ERFARENHET! VI VET VAD SOM KRÄVS FÖR ATT FRAMHÄVA JUST DITT HEM PÅ BÄSTA SÄTT!'
    )
  })
})
