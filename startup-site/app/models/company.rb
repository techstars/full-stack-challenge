class Company < ApplicationRecord
  has_many :founders
  validates_presence_of :name, :city, :state, :short_description
end