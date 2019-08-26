class Founder < ApplicationRecord
  belongs_to :company
  validates_presence_of :full_name
end