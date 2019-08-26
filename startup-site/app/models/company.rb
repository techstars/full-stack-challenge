class Company < ApplicationRecord
  has_many :founders, dependent: :delete_all
  validates_presence_of :name, :city, :state, :short_description
  validates :name, uniqueness: true
end