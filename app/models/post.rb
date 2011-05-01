require 'carrierwave/orm/mongoid'

class Post
  include Mongoid::Document
  field :title
  field :description
  mount_uploader :image, ImageUploader
end
