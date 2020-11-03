//React
import React from 'react'
import { act, render, waitFor, screen, fireEvent } from '@testing-library/react'

//Components
import Companies from './Companies'

//Sinon
import sinon, { SinonSandbox } from 'sinon'

//Helpers
import axios from 'axios'
import _ from 'lodash'

describe('Companies Component', () => {
  let sandbox: SinonSandbox
  beforeEach(() => {
    localStorage.clear()
    sandbox = sinon.createSandbox()
  })
  afterEach(() => {
    sandbox.restore()
  })
  test(`It renders without data`, async () => {
    const { container } = render(<Companies />)
    expect(container).toMatchSnapshot()
  })
  test(`It render with data`, async () => {
    const company_mock = [
      {
        categories: [],
        city: 'Seattle',
        created_at: '2020-11-03T00:21:26.211Z',
        description:
          'Outreach, a platform that helps sales reps optimize their client engagement and track performance, plans to grow its team to 450 employees by the end of this year, helped by its $114 million funding round in April (which also helped vault it to Unicorn status). The startup has doubled its revenue growth every year since 2016 and boasts 3,500 customers, including Adobe, DocuSign and eBay.',
        founded_date: '05/20/2014',
        founders: [
          {
            company_id: 1,
            created_at: '2020-11-03T00:21:26.465Z',
            first_name: 'Manuel',
            id: 1,
            last_name: 'Medina',
            title: 'Founder',
            updated_at: '2020-11-03T00:21:26.465Z',
          },
        ],
        id: 1,
        name: 'Outreach',
        short_description:
          'A platform that helps sales reps optimize their client engagement and track performance.',
        state: 'WA',
        updated_at: '2020-11-03T00:21:26.211Z',
      },
      {
        categories: [],
        city: 'Seattle',
        created_at: '2020-11-03T00:21:26.211Z',
        description:
          'Outreach, a platform that helps sales reps optimize their client engagement and track performance, plans to grow its team to 450 employees by the end of this year, helped by its $114 million funding round in April (which also helped vault it to Unicorn status). The startup has doubled its revenue growth every year since 2016 and boasts 3,500 customers, including Adobe, DocuSign and eBay.',
        founded_date: '05/20/2014',
        founders: [
          {
            company_id: 1,
            created_at: '2020-11-03T00:21:26.465Z',
            first_name: 'Manuel',
            id: 1,
            last_name: 'Medina',
            title: 'Founder',
            updated_at: '2020-11-03T00:21:26.465Z',
          },
        ],
        id: 1,
        name: 'Outreach',
        short_description:
          'A platform that helps sales reps optimize their client engagement and track performance.',
        state: 'WA',
        updated_at: '2020-11-03T00:21:26.211Z',
      },
    ]

    const resolved = new Promise((r) => r({ data: company_mock }))
    sandbox.stub(axios, 'get').returns(resolved)

    await act(async () => {
      render(<Companies />)
    })

    await waitFor(() => {
      expect(document.body.querySelector('.ag-theme-alpine skeleton')).toBeNull()
      expect(document.body.querySelector('.company-button--create')).toBeInTheDocument()
      expect(document.body.querySelector('.company__search-bar')).toBeInTheDocument()
      expect(document.body.querySelector('.ag-theme-alpine')).toBeInTheDocument()
      expect(screen.getByText(/NEW COMPANY/)).toBeInTheDocument()
    })
  })
  test(`It renders with data and opens modal`, async () => {
    const company_mock = [
      {
        categories: [],
        city: 'Seattle',
        created_at: '2020-11-03T00:21:26.211Z',
        description:
          'Outreach, a platform that helps sales reps optimize their client engagement and track performance, plans to grow its team to 450 employees by the end of this year, helped by its $114 million funding round in April (which also helped vault it to Unicorn status). The startup has doubled its revenue growth every year since 2016 and boasts 3,500 customers, including Adobe, DocuSign and eBay.',
        founded_date: '05/20/2014',
        founders: [
          {
            company_id: 1,
            created_at: '2020-11-03T00:21:26.465Z',
            first_name: 'Manuel',
            id: 1,
            last_name: 'Medina',
            title: 'Founder',
            updated_at: '2020-11-03T00:21:26.465Z',
          },
        ],
        id: 1,
        name: 'Outreach',
        short_description:
          'A platform that helps sales reps optimize their client engagement and track performance.',
        state: 'WA',
        updated_at: '2020-11-03T00:21:26.211Z',
      },
      {
        categories: [],
        city: 'Seattle',
        created_at: '2020-11-03T00:21:26.211Z',
        description:
          'Outreach, a platform that helps sales reps optimize their client engagement and track performance, plans to grow its team to 450 employees by the end of this year, helped by its $114 million funding round in April (which also helped vault it to Unicorn status). The startup has doubled its revenue growth every year since 2016 and boasts 3,500 customers, including Adobe, DocuSign and eBay.',
        founded_date: '05/20/2014',
        founders: [
          {
            company_id: 1,
            created_at: '2020-11-03T00:21:26.465Z',
            first_name: 'Manuel',
            id: 1,
            last_name: 'Medina',
            title: 'Founder',
            updated_at: '2020-11-03T00:21:26.465Z',
          },
        ],
        id: 1,
        name: 'Outreach',
        short_description:
          'A platform that helps sales reps optimize their client engagement and track performance.',
        state: 'WA',
        updated_at: '2020-11-03T00:21:26.211Z',
      },
    ]

    const resolved = new Promise((r) => r({ data: company_mock }))
    sandbox.stub(axios, 'get').returns(resolved)

    await act(async () => {
      render(<Companies />)
    })

    await waitFor(() => {
      expect(document.body.querySelector('.ag-theme-alpine skeleton')).toBeNull()
      document.querySelectorAll('.id-link')
    })
    await waitFor(() => {
      const linkID = document.querySelectorAll('.id-link')
      linkID && fireEvent.click(linkID[0])
      expect(document.body.querySelector('.modal__header-wrapper')).toBeInTheDocument()
      expect(document.body.querySelector('.company-button--update')).toBeInTheDocument()
      expect(document.body.querySelector('.company-button--delete')).toBeInTheDocument()
      const selectedTab = document.body.querySelector('.react-tabs__tab.react-tabs__tab--selected')
      expect(_.includes(selectedTab?.innerHTML, 'Company Details')).toBeTruthy()
      expect(screen.getByText(/Manuel Medina/)).toBeInTheDocument()
      expect(screen.getByText(/NO CATEGORIES/)).toBeInTheDocument()
      waitFor(() => {
        const foundersTab = document.body.querySelectorAll('.modal__tab-marker')
        fireEvent.click(foundersTab[1])
        expect(document.body.querySelector('.company-button--create founder')).toBeInTheDocument()
      })
      waitFor(() => {
        const foundersTab = document.body.querySelectorAll('.modal__tab-marker')
        fireEvent.click(foundersTab[2])
        expect(screen.getByText(/NO CATEGORIES/)).toBeInTheDocument()
      })
    })
  })
})
