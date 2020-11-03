//React
import React from 'react'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

//Sinon
import sinon, { SinonSandbox } from 'sinon'

//Components
import CompanyForm from './CompanyForm'

//Helpers
import _ from 'lodash'

describe('Create Company Form Component', () => {
  let sandbox: SinonSandbox
  beforeEach(() => {
    localStorage.clear()
    sandbox = sinon.createSandbox()
  })
  afterEach(() => {
    sandbox.restore()
  })
  test(`It renders without data as create form`, async () => {
    const history = createMemoryHistory()
    const route = 'https://tech-stars-challenge.web.app/companies/form/create'
    history.push(route)

    render(
      <Router history={history}>
        <CompanyForm />
      </Router>
    )
    expect(document.querySelector('.company__form--header-title')).toBeVisible()
    expect(screen.getByText(/Create Company/)).toBeInTheDocument()
    expect(document.querySelector('.company__form--submit-btn')).toBeVisible()
    const allPanels = document.querySelectorAll('.panel-component')
    expect(_.size(allPanels)).toEqual(5)
    const allINputs = document.querySelectorAll('.form-select')
    expect(_.size(allINputs)).toEqual(6)
  })
  test(`It renders with data as edit form`, async () => {
    const history = createMemoryHistory()
    const state = {
      company: {
        categories: [],
        city: 'Seattle',
        created_at: '2020-11-03T00:21:26.211Z',
        description: null,
        founded_date: '05/20/2014',
        founders: [],
        id: 1,
        name: 'Outreach',
        short_description: null,
        state: 'WA',
        updated_at: '2020-11-03T00:21:26.211Z',
      },
    }
    const route = 'https://tech-stars-challenge.web.app/companies/form/edit'
    history.push(route, state)

    const { debug } = render(
      <Router history={history}>
        <CompanyForm />
      </Router>
    )
    expect(document.querySelector('.company__form--header-title')).toBeVisible()
    expect(screen.getByText(/Update Company/)).toBeInTheDocument()
    expect(document.querySelector('.company__form--submit-btn')).toBeVisible()
    const allPanels = document.querySelectorAll('.panel-component')
    expect(_.size(allPanels)).toEqual(5)
    const allInputs = document.querySelectorAll('.form-select')
    expect(_.size(allInputs)).toEqual(6)
    expect(allInputs[0].getAttribute('value')).toEqual('Outreach')
    expect(allInputs[2].getAttribute('value')).toEqual('Seattle')
    expect(allInputs[3].getAttribute('value')).toEqual('WA')
    expect(allInputs[4].getAttribute('value')).toEqual('2014-04-20')
  })
})
