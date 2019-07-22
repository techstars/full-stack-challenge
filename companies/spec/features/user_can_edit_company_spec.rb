require 'rails_helper'

RSpec.feature "A user can edit a company", type: :feature do
  describe "As a user" do
    describe "When I visit a company's show page" do
      describe "and click on the Edit button" do
        before :each do
          @company = create(:company)
          visit company_path(@company)
          click_button "Edit"
        end
        it "my current path is now the edit path" do
          expect(current_path).to eq(edit_company_path(@company))
        end
        it "takes me to a form to edit the company" do
          expect(page).to have_field("company[name]")
          expect(page).to have_field("City")
          expect(page).to have_field("State")
          expect(page).to have_field("Description")
          expect(page).to have_field("date-picker")
        end
        it "allows me to edit fields" do
          old_name = @company.name
          fill_in "company_name", with: "New Name"
          click_on "Save"

          expect(current_path).to eq(company_path(@company))
          expect(page).to have_content("New Name")
          expect(page).to_not have_content(old_name)
        end
        it "updates the company's information" do
          fill_in "company_name", with: "New Name"
          click_on "Save"
          expect(@company.reload.name).to eq("New Name")
        end
        it "does not update if fields are filled incorrectly" do
            fill_in "company_name", with: ""
            click_on "Save"

            expect(page).to have_content("Name can't be blank")

            fill_in "company_description", with: ""
            click_on "Save"

            expect(page).to have_content("Description can't be blank")
        end
      end
    end
  end
end