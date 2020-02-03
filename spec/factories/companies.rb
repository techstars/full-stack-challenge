FactoryBot.define do
  factory :company do
    name { Faker::Lorem.word }
    city { Faker::Lorem.word }
    state { Faker::Lorem.word }
    description { Faker::Lorem.word }
    founded_date { Faker::Date.between(from: 2.days.ago, to: Date.today) }
  end
end