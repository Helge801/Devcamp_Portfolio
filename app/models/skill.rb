class Skill < ApplicationRecord
  has_and_belongs_to_many :portfolio
  validates_presence_of :title, :percent_utilized
end
