require 'rails_helper'

RSpec.describe Api::V1::CompaniesController, type: :request do
  let!(:state) { create(:state) }
  let!(:city) { create(:city, state_id: state.id) }

  describe 'POST /api/v1/companies' do
    before do
      post '/api/v1/companies',
           params: {
             name: Faker::Company.name,
             description: Faker::Lorem.paragraph,
             city_name: city.name,
             state_name: state.name
           }
    end

    context 'Creates a new company' do
      it 'returns the success response' do
        expect(response).to have_http_status(200)
        expect(response).to match_response_schema('company')
      end
    end

    context 'Company creation fails if invalid params are passed' do
      before do
        post '/api/v1/companies',
        params: {
          name: Faker::Company.name,
          description: Faker::Lorem.paragraph
        }
      end

      it 'returns the failure response' do
        expect(response).to have_http_status(422)
        expect(response.body).to eq('Record Invalid')
      end
    end
  end

  describe 'GET /api/v1/companies/{:id}' do
    context 'Renders the company details' do
      before do
        @company = create(:company, city: city)
        get "/api/v1/companies/#{@company.id}"
      end

      it 'returns the success response' do
        expect(response).to have_http_status(200)
        expect(response).to match_response_schema('company')
      end
    end

    context 'Rendering fails if company is not present' do
      before do
        get '/api/v1/companies/111141'
      end

      it 'returns the failure response' do
        expect(response).to have_http_status(404)
        expect(response.body).to eq('Record Not Found')
      end
    end
  end

  describe 'PUT /api/v1/companies/{:id}' do
    context 'Company is updated' do
      let(:company) do
        create(:company, city: city)
      end

      before do
        put "/api/v1/companies/#{company.id}",
              params: {
                name: "company"
              }
      end

      it 'returns success response' do
        expect(response).to have_http_status(200)
        expect(response).to match_response_schema('company')

        company.reload
        expect(company.name).to eq('company')
      end
    end
  end

  describe 'GET /api/v1/companies' do
    let!(:companies) { create_list :company, 3 }

    context 'Renders the companies' do
      before do
        get "/api/v1/companies"
      end

      it 'returns the success response' do
        expect(response).to have_http_status(200)
        expect(json.pluck('id')).to eq(companies.pluck(:id))
        expect(response).to match_response_schema('companies')
      end
    end
  end

  describe 'DELETE /api/v1/companies/{:id}' do
    let!(:company) do
      create(:company)
    end

    context 'Deletes the company' do
      before do
        delete "/api/v1/companies/#{company.id}"
      end

      it 'returns the success response' do
        expect(response).to have_http_status(204)
        expect { Company.find(company.id) }.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
  end
end
