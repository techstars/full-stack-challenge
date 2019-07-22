require "rails_helper"

RSpec.describe "Companies API", type: :request do
  # Initialize test data:
  let!(:companies) { create_list(:company, 12) }
  let(:company_id) { companies.first.id }

  # Suite for GET /companies
  describe "GET /companies" do
    before { get "/companies" }

    it "returns all companies" do
      expect(json).not_to be_empty
      expect(json.size).to eq(12)
    end

    it "returns status code 200" do
      expect(response).to have_http_status(200)
    end
  end

  # Suite for GET /companies/:id
  describe "GET /companies/:id" do
    before { get "/companies/#{company_id}" }

    context "when the record exists" do
      it "returns the company" do
        expect(json).not_to be_empty
        expect(json["id"]).to eq(company_id)
      end

      it "returns status code 200" do
        expect(response).to have_http_status(200)
      end
    end

    context "when the record does not exist" do
      let(:company_id) { 100 }

      it "returns a status code 404" do
        expect(response).to have_http_status(404)
      end

      it "returns a not found message" do
        expect(response.body).to match(/Couldn't find Company/)
      end
    end
  end

  # Suite for POST /companies
  describe "POST /companies" do
    # valid payload
    let(:valid_attributes) {
      { name: "Faceback",
        city: "Boulder",
        state: "CO",
        description: "Faceback has breakthrough tech that can render an
        image of the back of someones head from a picture of their face",
        date_founded: "01-01-2001" }
    }

    context "when the request is valid" do
      before { post "/companies", params: valid_attributes }

      it "adds a new company" do
        expect(json["name"]).to eq("Faceback")
        expect(json["city"]).to eq("Boulder")
        expect(json["state"]).to eq("CO")
        expect(json["description"]).to eq("Faceback has breakthrough tech that can render an
        image of the back of someones head from a picture of their face")
        expect(json["date_founded"]).to eq("2001-01-01")
      end

      it "returns a status code 201" do
        expect(response).to have_http_status(201)
      end
    end

    context "when the request is invalid" do
      before {
        post "/companies",
             params: {
               name: "Faceback",
               city: "Boulder",
               state: "CO",
               date_founded: "2001-01-01",
             }
      }

      it "returns status code 422" do
        expect(response).to have_http_status(422)
      end

      it "returns a validation failure message" do
        expect(response.body).to match(/Validation failed: Description can't be blank/)
      end
    end
  end

  # Suite for PUT /companies/:id
  describe "PUT /companies/:id" do
    let(:valid_attributes) { { name: "BackFace" } }

    context "when the record exists" do
      before { put "/companies/#{company_id}", params: valid_attributes }

      it "updates the record" do
        expect(response.body).to be_empty
      end

      it "returns a status code 204" do
        expect(response).to have_http_status(204)
      end
    end
  end

  # Suite for DELETE /companies/:id
  describe "DELETE /companies/:id" do
    before { delete "/companies/#{company_id}" }

    it "returns status code 204" do
      expect(response).to have_http_status(204)
    end
  end
end
