require 'rails_helper'

RSpec.feature "Index of companies", type: :feature do
  context 'when visitor visits companies index' do
    before :each do
      @companies = create_list(:company, 3)
      visit '/'
    end
    it 'can see all companies' do
      expect(page).to have_content(@companies[0].name)
      expect(page).to have_content(@companies[1].name)
      expect(page).to have_content(@companies[2].name)
    end

    it "can see each company's name, location and description" do
      @companies.each do |company|
        within "#company-#{company.id}" do
          expect(page).to have_content(company.name)
          expect(page).to have_content(company.description)
          expect(page).to have_content(company.city)
        end
      end

    end

    it 'can see a button to add a new company' do
      expect(page).to have_selector(:link_or_button, 'Add Company')
    end

    it 'can click on the add a new company button' do
      click_on("Add Company")
      expect(current_path).to eq(new_company_path)
    end

  end
end
