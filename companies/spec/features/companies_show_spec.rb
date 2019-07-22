require 'rails_helper'

RSpec.feature "Company show page", type: :feature do
  describe 'As a visitor' do

    describe 'When I click on more... for a company' do
      before :each do
        @company = build(:company)
        @company.save
        visit '/'
        within "#company-#{@company.id}" do
          click_on "more..."
        end
      end
      it "takes me to the company's show page" do
        expect(current_path).to eq(company_path(@company))
      end
      it 'shows the name of the company' do
        expect(page).to have_content(@company.name)
      end
      it "shows the company's description" do
        expect(page).to have_content(@company.description)
      end
      it 'shows the founded date' do
        expect(page).to have_content(@company.founded_date)
      end
      it 'shows the city and state' do
        expect(page).to have_content(@company.city)
        expect(page).to have_content(@company.state)
      end
      it 'shows a button to edit' do
        expect(page).to have_button("Edit")
      end
      it 'shows a button to delete' do
        expect(page).to have_button("Delete")
      end
    end
  end
end