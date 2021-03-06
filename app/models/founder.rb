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
class Founder < ApplicationRecord
  belongs_to :company

  validates :full_name, :email, :title, presence: true
  validates :full_name, :title, length: { minimum: 2 }

  validates :email,
    format: { with: /^(.+)@(.+)$/, message: "Invalid Email" },
              uniqueness: { case_sensitive: false },
              length: { minimum: 4, maximum: 254 }
end
