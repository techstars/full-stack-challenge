require "rails_helper"

RSpec.describe "Companies Index", type: :feature do
  it "User should be able to see all companies." do
    company = Company.create(name: "Looklist")
    

    visit "/"

    expect(page).to have_content(company.name)
  end
end