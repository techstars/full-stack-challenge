require 'rails_helper'

RSpec.describe FoundersController, :type => :controller do

  describe "GET index" do
    it "has a 200 status code" do
      get :index
      expect(response.status).to eq(200)
    end
  end

 describe "GET index" do
    it "assigns @founder" do
      founder = Founder.create
      get :index
      expect(assigns(:founders)).to eq([founder])
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end
  end

  context "GET new" do

    it "assigns a blank founder to the view" do
      get :new
      expect(assigns(:founder)).to be_a_new(Founder)
    end

  end

  context "POST create" do

    it "calls Founder.create" do
      expect(Founder).to receive(:params)
        .with(name: String, businessid: Integer)
      
      post :create, { founder: { name: "Example Exampleton", businessid: 1 } }
    end

    it "raises an error if missing params businessid" do
      params = { founder: { name: 'Arturo' } }

      expect do
        post :create, params
      end.to raise_error ActiveRecord::RecordInvalid
    end

  end

  

end
