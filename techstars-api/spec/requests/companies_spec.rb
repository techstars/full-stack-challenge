require 'rails_helper'

RSpec.describe 'Techstars Assessment API', type: :request do
  # Initialize test data:
  let!(:companies) { create_list(:company, 12) }
  let(:company_id) { companies.first.id }

  # Suite for GET /companies
  describe 'GET /companies' do
    before { get '/companies' }

    it 'returns all companies' do
      expect(json).not_to be_empty
      expect(json.size).to eq(12)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Suite for GET /companies/:id
  describe 'GET /companies/:id' do
    before { get "companies/#{company_id}" }

    context 'when the record exists' do
      it 'returns the company' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(company_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:company_id) { 100 }

      it 'returns a status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Company/)
      end
    end
  end



end