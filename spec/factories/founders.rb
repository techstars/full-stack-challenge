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
FactoryBot.define do
  factory :founder do
    
  end
end
