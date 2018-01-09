class Portfolio < ApplicationRecord
  validates_presence_of :title, :body

  mount_uploader :thumb_image, PortfolioUploader
  mount_uploader :main_image, PortfolioUploader

  def self.angular
    where(subtitle:'Angular')
  end

  def self.by_position
    order("position ASC")
  end

  scope :ruby_on_rails, -> {where(subtitle:'Ruby on rails')}
end


