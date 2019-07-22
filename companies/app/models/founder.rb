class Founder < ApplicationRecord
  validates :name, presence: true
  validates :title, presence: true
  belongs_to :company
end
