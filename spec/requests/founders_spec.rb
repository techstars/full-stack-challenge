require 'rails_helper'

RSpec.describe 'Founders API', type: :request do
  # initialize test data 
  let!(:company) { create(:company)}
  let!(:founders) { create_list(:founder, 4, company_id: company.id) }
  let(:company_id) { company.id }
  let(:founder_id) { founders.first.id }

  describe 'GET /companies/:id/founders' do
      before { get "/api/v1/companies/#{company_id}/founders" }

      context 'when the record exists' do
        it 'returns the founders' do
          json = JSON.parse(response.body)
          expect(json).not_to be_empty
          expect(json.size).to eq(4)
        end
        it 'returns status code 200' do
          expect(response).to have_http_status(200)
        end
      end
     context 'when the record does not exist' do
        let(:company_id) { 34 }

        it 'returns status code 404' do
          expect(response).to have_http_status(404)
        end

        it 'returns a not found message' do
          expect(response.body).to match(/Couldn't find Company with/)
        end
      end
   end

  describe 'POST /founders' do
     # valid payload
     let(:valid_attributes) { { name: 'test', title: 'test', company_id: company_id}}

    context 'when the request is valid' do
      before { post "/api/v1/founders", params: valid_attributes }

      it 'adds a founder' do
        json = JSON.parse(response.body)
        expect(json['name']).to eq('test')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/api/v1/companies/', params: { name: 'test' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/can't be blank/)
      end
    end
  end
end