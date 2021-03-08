require 'rails_helper'

RSpec.describe Api::V1::FoundersController, type: :request do
  let!(:state) { create(:state) }
  let!(:city) { create(:city, state_id: state.id) }
  let!(:company) { create(:company, city_id: city.id) }

  describe 'POST /api/v1/companies/{:company_id}/founders' do
    before do
      post "/api/v1/companies/#{company.id}/founders",
           params: {
             full_name: Faker::Name.name,
             email: Faker::Internet.email,
             title: Faker::Company.profession,
             company_id: company.id
           }
    end

    context 'Creates a new founder' do
      it 'returns the success response' do
        expect(response).to have_http_status(200)
        expect(response).to match_response_schema('founder')
      end
    end

    context 'Founder creation fails if invalid params are passed' do
      before do
        post "/api/v1/companies/#{company.id}/founders",
        params: {
          full_name: Faker::Name.name,
          title: Faker::Company.profession,
          company_id: company.id
        }
      end

      it 'returns the failure response' do
        expect(response).to have_http_status(422)
        expect(response.body).to eq('Record Invalid')
      end
    end
  end
end
