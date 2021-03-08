# == Schema Information
#
# Table name: cities
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  state_id   :bigint           not null
#
# Indexes
#
#  index_cities_on_name_and_state_id  (name,state_id) UNIQUE
#  index_cities_on_state_id           (state_id)
#
require 'rails_helper'

RSpec.describe City, type: :model do
  context "associations" do
    it { is_expected.to belong_to(:state) }
  end

  context "validations" do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:state_id) }
  end

  context "methods" do
    context '.by_name_state' do
      it "state not matching" do
        state = create(:state)
        create(:city, name: "abcd")
        expect { City.by_name_state("abcd", state.name) }.to change {City.count}.by(1)
      end

      it "city name not matching" do
        state = create(:state)
        city = create(:city, name: "abcd", state_id: state.id)
        expect { City.by_name_state("abcd", state.name) }.to change {City.count}.by(1)
      end

      it "city and state match" do
        state = create(:state)
        city = create(:city, name: "Abcd", state_id: state.id)
        expect(City.by_name_state(city.name, state.name)).to eq(city)
      end
    end
  end
end
