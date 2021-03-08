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
FactoryBot.define do
  factory :city do
    name { Faker::Address.city }
    state
  end
end
