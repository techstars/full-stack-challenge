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
FactoryBot.define do
  factory :company do
    description { Faker::Lorem.paragraph }
    name { Faker::Company.name }
    city { create(:city) }
  end
end
