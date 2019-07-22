require 'faker'

FactoryBot.define do

 factory :company, class: Company do
   name {Faker::Company.name}
   city { Faker::Address.city}
   state {Faker::Address.state_abbr}
   description {Faker::Lorem.paragraphs(7).join}
   founded_date {Faker::Date.backward(14000)}

   factory :company_with_founders do
     transient do
       founders_count { 5 }
     end

     after(:create) do |company, evaluator|
       create_list(:founder, evaluator.founders_count, company: company)
     end
   end
 end 
end
