describe('Dashboard', () => {
  beforeEach('Visit', () => {
    cy.visit('localhost:3000')
  })

  it('Should have three tabs in its appointment block', () => {
    cy.get('.appt-block').within(()=> {
      cy.get('appt-card').should('have.length', 3)
      cy.get('appt-card').eq(0).contains('Hardware')
      cy.get('appt-card').eq(1).contains('Software')
      cy.get('appt-card').eq(2).contains('Building')
    })
  })

  it('Should be able to click on one of the service options and have it change to the form tab', () => {
      cy.get('.appt-block').within(()=> {
        cy.get('appt-card').eq(0).click()
        cy.get('form').should('have.id', 'hardware-form')
    })
      cy.visit('localhost:3000')
      cy.get('.appt-block').within(()=> {
        cy.get('appt-card').eq(1).click()
        cy.get('form').should('have.id', 'software-form')
    })
      cy.visit('localhost:3000')
      cy.get('.appt-block').within(()=> {
        cy.get('appt-card').eq(2).click()
        cy.get('form').should('have.id', 'building-form')
    })
})

  it('Should be able to go back to the initial tab and change services', () => {
    cy.get('.appt-block').within(() => {
      cy.get('appt-card').eq(2).click()
      cy.get('form-nav').find('Select Service').click()
      cy.get('appt-card').should('have.length', 3)
    })
  })

  it('Should have a different form based on the service clicked by user', () => {

  })

  it('Should automatically go to the consult/contact form if the user does not pick a service option', () => {

  })

  it('Should be able to fill out form', () => {

  })

  it('Should switch to the confirmation tab when they hit submit on the form', () => {

  })
})
