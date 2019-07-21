require 'rails_helper'

RSpec.feature "Company Create", type: :feature do
  describe 'As a visitor' do
    before :each do
      visit '/'
      click_on("Add Company")
    end

    describe 'when I click on Add Company' do
      it 'takes me to the create a company form' do
        expect(current_path).to eq(new_company_path)
      end

      it 'I can see all the fields needed to create a Company' do
        expect(page).to have_field("Name")
        expect(page).to have_field("City")
        expect(page).to have_field("State")
        expect(page).to have_field("Description")
        expect(page).to have_field("date-picker")
      end
    end
  end
end