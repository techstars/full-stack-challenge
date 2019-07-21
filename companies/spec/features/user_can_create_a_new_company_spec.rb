require 'rails_helper'
require 'faker'

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
        expect(page).to have_field("company[name]")
        expect(page).to have_field("City")
        expect(page).to have_field("State")
        expect(page).to have_field("Description")
        expect(page).to have_field("date-picker")
      end

      context "when all fields are filled correctly" do
        it 'can create a new company' do

          fill_in "company_name", with: "Test Name"
          fill_in "company_city", with: "Denver"
          fill_in "company_state", with: "CO"
          fill_in "company_description", with: Faker::Lorem.paragraphs(7).join
          fill_in "date-picker", with: Faker::Date.backward(14000)

          click_on "Save"

          company = Company.last
          expect(company.name).to eq("Test Name")
        end
      end

      context "when fields are not filled correctly" do
        it 'cannot create a new company' do
          fill_in "company_name", with: "Test Name"
          fill_in "company_city", with: "Denver"
          fill_in "company_state", with: "CO"

          click_on "Save"
          expect(Company.count).to eq(0)
        end

        it 'renders the new company form again' do
          fill_in "company_name", with: "Test Name"
          fill_in "company_city", with: "Denver"
          fill_in "company_state", with: "CO"

          click_on "Save"
          
          expect(page).to have_button('Save')
          expect(page).to have_field("Description", with: "")
          expect(page).to have_content("Description can't be blank")
          expect(page).to have_content("Founded date can't be blank")
        end
      end


    end
  end
end