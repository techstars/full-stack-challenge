require 'rails_helper'
Capybara.javascript_driver = :webkit


RSpec.feature "A user can edit a company", type: :feature do
  describe "As a user" do
    describe "When I visit a company's show page" do
      describe "and click on the Delete button", js: true do
        before :each do
          @company = build(:company)
          @company.save
          visit company_path(@company)
        end
        it "I see a confimation alert" do
          message = accept_confirm do
            click_on "Delete"
          end

          expect(message).to eq("Are you sure?")
        end
        describe "when I accept the alert" do
          it "redirects me to the homepage" do
            accept_confirm do
              click_on "Delete"
            end
            expect(current_path).to eq(companies_path)
          end
          it "deletes the company" do
            accept_confirm do
              click_on "Delete"
            end
            expect(Company.count).to eq(0)

            expect {@company.reload}.to raise_error ActiveRecord::RecordNotFound
          end
        end
        describe "When I dismiss the alert" do
          it "stays on the company's show page" do
            dismiss_confirm do
              click_on "Delete"
            end
            expect(current_path).to eq(company_path(@company))
          end
          it "does not delete the company" do
            dismiss_confirm do
              click_on "Delete"
            end
            expect(Company.count).to eq(1)

            expect {@company.reload}.to_not raise_error ActiveRecord::RecordNotFound
          end
        end
      end
    end
  end
end