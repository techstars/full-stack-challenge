require 'rails_helper'
RSpec.describe Founder, type: :model do
  it { should belong_to(:company) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:title) }
end