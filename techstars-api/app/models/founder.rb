class Founder < ApplicationRecord
  belongs_to :company

  # Validation
  validates_presence_of :name, :title
end
