describe('Login Page', () => {

  beforeEach(() => {
    cy.visit('https://goal-dev.mdx.ac.uk')
  })

  it('Check login form exist', () => {
    cy.get('form[action="/login/"]').should('exist');
  })
})