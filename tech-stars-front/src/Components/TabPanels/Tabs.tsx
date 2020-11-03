//React
import React from 'react'

//Components
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { CategoriesPanel } from './CategoriesPanel'
import { CompanyDetailsPanel } from './CompanyDetailsPanel'
import { FoundersPanel } from './FoundersPanel'

//Types
import { Company } from '../../types'

interface Props {
  company: Company
  handleNewFounders: any
  toggleFounderForm: () => void
  founderFormShowing: any
}

export const TabComponent: React.FC<Props> = ({
  company,
  handleNewFounders,
  toggleFounderForm,
  founderFormShowing,
}) => {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <div className="modal__tab-marker">Company Details</div>
        </Tab>
        <Tab>
          <div className="modal__tab-marker">Founders</div>
        </Tab>
        <Tab>
          <div className="modal__tab-marker">Categories</div>
        </Tab>
      </TabList>
      <TabPanel>
        <CompanyDetailsPanel company={company} />
      </TabPanel>
      <TabPanel>
        <FoundersPanel
          company={company}
          founderFormShowing={founderFormShowing}
          toggleFounderForm={toggleFounderForm}
          handleNewFounders={handleNewFounders}
        />
      </TabPanel>
      <TabPanel>
        <CategoriesPanel company={company} />
      </TabPanel>
    </Tabs>
  )
}
