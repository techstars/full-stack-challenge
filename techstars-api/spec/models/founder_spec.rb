require 'rails_helper'

RSpec.describe Founder, type: :model do
  # Association Test:
  it { should belong_to(:company) }

  # Validation Tests:
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:title) }
end
