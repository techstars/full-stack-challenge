//React
import React from 'react'
import { render } from '@testing-library/react'

//Sinon
import sinon, { SinonSandbox } from 'sinon'

//Components
import FounderForm from '../FormComponents/FounderForm'

//Helpers
import _ from 'lodash'

describe('Create Founder Form Component', () => {
  let sandbox: SinonSandbox
  beforeEach(() => {
    localStorage.clear()
    sandbox = sinon.createSandbox()
  })
  afterEach(() => {
    sandbox.restore()
  })

  test(`It renders founder form`, async () => {
    render(<FounderForm companyID={1} handleNewFounders={() => console.log('hit')} />)
    expect(document.querySelector('.company-button--create.submit')).toBeVisible()
    const allPanels = document.querySelectorAll('.panel-component')
    expect(_.size(allPanels)).toEqual(2)
    const allInputs = document.querySelectorAll('.form-select')
    expect(_.size(allInputs)).toEqual(3)
  })
})
