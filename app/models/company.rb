class Company < ApplicationRecord
  has_many :founders, dependent: :destroy
end
