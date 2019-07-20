require 'rails_helper'

RSpec.feature "Index of companies", type: :feature do
  context 'when visitor visits companies index' do
    it 'can see all companies' do
      company_1 = Company.create(name: "Company 1 Name", location: "Denver,CO", description:"Long description here")
      company_2 = Company.create(name: "Company 2 Name", location: "Boulder,CO", description:"Long description here")
      visit '/'
      expect(page).to have_content(company_1.name)
      expect(page).to have_content(company_2.name)
    end
  end
end
