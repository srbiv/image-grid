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
end
