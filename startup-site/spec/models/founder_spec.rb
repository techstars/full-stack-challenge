require 'rails_helper'

describe Founder, type: :model do
  describe "validations" do
    it { should validate_presence_of :full_name }
  end
end