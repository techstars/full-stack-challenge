require 'rails_helper'

RSpec.describe Founder, type: :model do
  describe "validations" do
      it { should validate_presence_of :name }
      it { should validate_presence_of :title}
  end
  describe "associations" do
    it {should belong_to :company}
  end
end
