FactoryBot.define do
  factory :company do
    name { Faker::Company.name }
    city { Faker::Address.city }
    state { Faker::Address.state_abbr }
    description { Faker::Lorem.paragraphs }
    date_founded { Faker::Date.backward(365) }
  end
end


