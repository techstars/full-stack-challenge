require 'rails_helper'

RSpec.describe Company, type: :model do
  describe 'validations' do
    it { should validate_presence_of :name }
    it { should validate_presence_of :city}
    it { should validate_presence_of :state }
    it { should validate_presence_of :founded_date }
  end

  describe "associations" do
    it {should have_many :founders}
  end
end
