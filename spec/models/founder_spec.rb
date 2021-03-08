# == Schema Information
#
# Table name: founders
#
#  id         :bigint           not null, primary key
#  email      :string           not null
#  full_name  :string           not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  company_id :bigint           not null
#
# Indexes
#
#  index_founders_on_company_id            (company_id)
#  index_founders_on_email_and_company_id  (email,company_id) UNIQUE
#
require 'rails_helper'

RSpec.describe Founder, type: :model do
  context "associations" do
    it { is_expected.to belong_to(:company) }
  end

  context "validations" do
    it { is_expected.to validate_presence_of(:full_name) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:title) }

    it { is_expected.to validate_length_of(:full_name).is_at_least(2) }
    it { is_expected.to validate_length_of(:title).is_at_least(2) }
    it { is_expected.to validate_length_of(:email).is_at_least(4).is_at_most(254) }
  end
end
