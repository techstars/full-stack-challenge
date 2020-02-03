require 'rails_helper'

RSpec.describe 'Companies API', type: :request do
  # initialize test data 
  let!(:companies) { create_list(:company, 20) }
  let(:company_id) { companies.first.id }

  describe 'GET /companies' do
    # make HTTP get request before each example
    before { get '/api/v1/companies/' }

    it 'returns companies' do
      json = JSON.parse(response.body)
      expect(json).not_to be_empty
      expect(json.size).to eq(20)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /companies/:id' do
      before { get "/api/v1/companies/#{company_id}" }

      context 'when the record exists' do
        it 'returns the company' do
          json = JSON.parse(response.body)
          expect(json).not_to be_empty
          expect(json['id']).to eq(company_id)
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

  describe 'POST /companies' do
     # valid payload
     let(:valid_attributes) { { name: 'test', city: 'test',state: 'test', founded_date: "2020-02-19" }}

    context 'when the request is valid' do
      before { post '/api/v1/companies/', params: valid_attributes }

      it 'creates a company' do
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
  describe 'PUT /company/:id' do
    let(:valid_attributes) { { name: 'test_name' } }

    context 'when the record exists' do
      before { put "/api/v1/companies/#{company_id}", params: valid_attributes }

      it 'updates the record' do
        json = JSON.parse(response.body)
        expect(json['name']).to eq('test_name')
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'DELETE /companies/:id' do
    before { delete "/api/v1/companies/#{company_id}" }

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

end