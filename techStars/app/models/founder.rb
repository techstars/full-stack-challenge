class Founder < ApplicationRecord
  belongs_to :company

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :title, presence: true
  validates :company_id, presence: true
end
