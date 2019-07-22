require "rails_helper"

RSpec.describe "Founders API" do
  # Init Test Data:
  let!(:company) { create(:company) }
  let!(:founders) { create_list(:founder, 20, company_id: company.id) }
  let(:company_id) { company.id }
  let(:id) { founders.first.id }

  # Suite for GET /companies/:company_id/founders
  describe "GET /companies/:company_id/founders" do
    before { get "/companies/#{company_id}/founders" }

    context "when founders exist" do
      it "returns status code 200" do
        expect(response).to have_http_status(200)
      end

      it "returns all founders" do
        expect(json.size).to eq(20)
      end
    end

    context "when founders do not exist" do
      let(:company_id) { 0 }

      it "returns status code 404" do
        expect(response).to have_http_status(404)
      end

      it "returns a not found message" do
        expect(response.body).to match(/Couldn't find Company with 'id'=0/)
      end
    end
  end

  # Suite for POST /companies/:company_id/founders
  describe "POST /companies/:company_id/founders" do
    let(:valid_attributes) { { name: "Joe Montana", title: "CEO" } }

    context "when request attributes are valid" do
      before { post "/companies/#{company_id}/founders", params: valid_attributes }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context "when an invalid request is made" do
      before { post "/companies/#{company_id}/founders", params: {} }

      it "returns a status code 422" do
        expect(response).to have_http_status(422)
      end

      it "returns a failure message" do
        expect(response.body).to match(/Validation failed: Name can't be blank/)
      end
    end
  end

end
