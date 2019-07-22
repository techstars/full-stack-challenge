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

          accept_alert do
            click_on "Delete"
          end

        end
      end
    end
  end
end