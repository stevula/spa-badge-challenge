class Student < ActiveRecord::Base
  has_many :badges
  has_many :votes
  validates :name, presence: true
end
