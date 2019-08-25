class Company < ApplicationRecord
  has_many :founders
  validates_presence_of :name
end