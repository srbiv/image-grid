require 'carrierwave/orm/mongoid'

class Post
  include Mongoid::Document
  include Mongoid::Timestamps

  ##################
  ### Attributes ###
  ##################
  field :title
  field :description

  ##############
  ### Mixins ###
  ##############
  mount_uploader :image, ImageUploader

  ###################
  ### Validations ###
  ###################
  validates_presence_of :title, :image

  ##############
  ### Scopes ###
  ##############
  scope :newest_first, desc("created_at")
end
