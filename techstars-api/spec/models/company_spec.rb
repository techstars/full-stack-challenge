require 'rails_helper'

RSpec.describe Company, type: :model do
  # Association Test
  it { should have_many(:founders).dependent(:destroy) }

  # Validation tests
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:city) }
  it { should validate_presence_of(:state) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:date_founded) }
  it { should validate_presence_of(:location) }
end
