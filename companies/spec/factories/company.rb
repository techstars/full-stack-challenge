require 'faker'

FactoryBot.define do
  factory :company, class: Company do
    name {Faker::Company.name}
    location { "#{Faker::Address.city}, #{Faker::Address.state_abbr}"}
    description {Faker::Lorem.paragraphs(7).join}

  end
end
