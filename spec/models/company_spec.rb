# == Schema Information
#
# Table name: companies
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  name        :string           not null
#  start_date  :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  city_id     :bigint           not null
#
# Indexes
#
#  index_companies_on_city_id  (city_id)
#
require 'rails_helper'

RSpec.describe Company, type: :model do
  context "associations" do
    it { is_expected.to belong_to(:city) }
    it { is_expected.to have_many(:founders) }
  end

  context "validations" do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:description) }
    it { is_expected.to validate_presence_of(:city_id) }
    it { is_expected.to validate_length_of(:name).is_at_least(2) }
    it { is_expected.to validate_length_of(:description).is_at_least(20) }
  end

  context '#methods' do
    context '#fetch_city_state' do
      it 'adds a new city to company if city name and state name are given' do
        company = Company.new(
          name: Faker::Name.name,
          description: Faker::Lorem.paragraph,
          city_name: Faker::Address.city,
          state_name: Faker::Address.state
        )

        expect{company.save}.to change{City.count}.by(1)
          .and change{Company.count}.by(1)
          .and change{State.count}.by(1)
      end

      it 'adds an existing city to company if city name and state name are given' do
        city = create(:city)

        company = Company.new(
          name: Faker::Name.name,
          description: Faker::Lorem.paragraph,
          city_name: city.name,
          state_name: city.state.name
        )

        expect{company.save}.to change{City.count}.by(0)
          .and change{Company.count}.by(1)
          .and change{State.count}.by(0)
      end

      it 'skips assigning city to company if city name and state name are not given' do
        company = Company.new(
          name: Faker::Name.name,
          description: Faker::Lorem.paragraph
        )

        expect{company.save}.to change{Company.count}.by(0)
        expect{company.save!}.to raise_error(ActiveRecord::RecordInvalid)
      end
    end
  end
end
