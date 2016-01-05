class Badge < ActiveRecord::Base
  has_many :votes
  belongs_to :student
  validates :name, presence: true
end
