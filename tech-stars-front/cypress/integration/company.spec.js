describe('User can', () => {
  beforeEach(() => {})

  afterEach(() => {})

  it('visits home page mocks single company', () => {
    cy.server()
    cy.fixture('companies.json').as('allCompanies')
    cy.route({
      method: 'GET',
      url: '/companies',
      response: '@allCompanies',
    }).as('getCompanies')

    cy.visit('localhost:3001/companies')
  })

  it('visits home page and see list of companies', () => {
    cy.visit('localhost:3001/companies')
    cy.get('.ag-theme-alpine').should('be.visible')
    cy.get('[role="row"]').should('have.length', '12')
  })

  it('visits home page fills out create company form (mocks success though it DOES work)', () => {
    cy.visit('localhost:3001/companies')

    cy.get('.company-button--create')
      .should('be.visible')
      .click({ force: true })
      .then(() => {
        cy.location('pathname').should('eq', '/companies/form/create')
        cy.get('input[placeholder="TechStars"]').type('New Company', { force: true })
        cy.get('textarea[placeholder="Brief 1 sentence overview"]').type(
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          {
            force: true,
          }
        )
        cy.get('input[placeholder="Boulder"]').type('Chicago', { force: true })
        cy.get('input[placeholder="CO"]').type('IL', { force: true })
        cy.get('input[name="founded_date"]').type('1994-11-12', { force: true })
        cy.get(
          'textarea[placeholder="Full Description"]'
        ).type(
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          { force: true }
        )

        cy.server()
        cy.fixture('company.json').as('company')
        cy.route({
          method: 'POST',
          url: '/companies',
          response: '@company',
        }).as('getCompany')

        cy.get('.company__form--submit-btn').click({ force: true })
      })
  })

  it('visits home page and opens modal, briefly checks tabs, and closes modal', () => {
    cy.visit('localhost:3001/companies')
    cy.get('.ag-theme-alpine').should('be.visible')
    cy.get('.id-link')
      .first()
      .click({ force: true })
      .then(() => {
        cy.get('.side-drawer.open').should('be.visible')
        cy.get('.company-button--update').should('be.visible')
        cy.get('.react-tabs__tab').should('have.length', '3')
        cy.get('.modal__tab-body--description').should('be.visible')
        cy.get('.modal__tab-tag-wrapper').should('be.visible')
        cy.get('.modal__tab-founder-wrapper').should('be.visible')
      })
    cy.get('#react-tabs-2')
      .click({ force: true })
      .then(() => {
        cy.get('.company-button--create.founder').should('be.visible')
        cy.get('.modal__tab-founder-card').should('have.length', '4')
      })
    cy.get('#react-tabs-4')
      .click({ force: true })
      .then(() => {
        cy.get('.modal__tab-tag.tab').should('be.visible')
        cy.contains('NO CATEGORIES')
      })
    cy.get('.fas.fa-arrow-circle-left').click({ force: true })
  })

  it('visits home page, opens modal, and fills out edit company form (mocks response)', () => {
    cy.visit('localhost:3001/companies')
    cy.get('.ag-theme-alpine').should('be.visible')
    cy.get('.id-link')
      .first()
      .click({ force: true })
      .then(() => {
        cy.get('.side-drawer.open').should('be.visible')
      })
    cy.get('.company-button--update')
      .should('be.visible')
      .click({ force: true })
      .then(() => {
        cy.location('pathname').should('eq', '/companies/form/edit')
        cy.get('input[placeholder="Boulder"]').clear().type('Olympia', { force: true })
        cy.get('input[placeholder="CO"]').clear().type('NY', { force: true })

        cy.server()
        cy.fixture('companyUpdate.json').as('updateCompany')
        cy.route({
          method: 'PATCH',
          url: '/companies/1',
          response: '@updateCompany',
        }).as('getUpdatedCompany')

        cy.get('.company__form--submit-btn').click({ force: true })
      })
  })

  it('visits home page, opens modal, and fills out add founder form (mocks response)', () => {
    cy.visit('localhost:3001/companies')
    cy.get('.ag-theme-alpine').should('be.visible')
    cy.get('.id-link').first().click({ force: true })

    cy.get('#react-tabs-2').click({ force: true })
    cy.get('.company-button--create.founder')
      .should('be.visible')
      .click({ force: true })
      .then(() => {
        cy.get('input[placeholder="Steve"]').type('Alexandr', { force: true })
        cy.get('input[placeholder="Jobs"]').type('Wang', { force: true })
        cy.get('input[placeholder="CEO/Founder"]').type('CTO/Co-Founder', { force: true })
      })

    cy.server()
    cy.fixture('founder.json').as('founder')
    cy.route({
      method: 'POST',
      url: '/founders',
      response: '@founder',
    }).as('getFounder')

    cy.get('.company-button--create.submit').click({ force: true })
    cy.visit('localhost:3001/companies')
  })
})
