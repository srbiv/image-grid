require 'carrierwave/orm/mongoid'

class Post
  include Mongoid::Document

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
  validates_presence_of :title

  ##############
  ### Scopes ###
  ##############

end
