require 'rails_helper'

describe Company, type: :model do
  describe "validations" do
    it { should validate_presence_of :name }
  end

  describe "validations" do
    it { should validate_presence_of :short_description }
  end

  describe "validations" do
    it { should validate_presence_of :city }
  end

  describe "validations" do
    it { should validate_presence_of :state }
  end

  describe "relationships" do 
    it { should have_many :founders }
  end 

end

