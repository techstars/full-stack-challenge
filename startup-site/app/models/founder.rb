class Founder < ApplicationRecord
  belongs_to :artist
  validates_presence_of :full_name
end