FactoryBot.define do
  factory :founder do
    name { Faker::Lorem.word }
    title { Faker::Lorem.word }
  end
end