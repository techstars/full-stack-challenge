require 'rails_helper'
RSpec.describe Company, type: :model do
  it { should have_many(:founders).dependent(:destroy) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:city) }
  it { should validate_presence_of(:state) }
  it { should validate_presence_of(:founded_date) }
end