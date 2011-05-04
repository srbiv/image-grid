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
  def self.in_groups_of group_size
    grouped = []
    [(count/group_size.to_f).ceil, 1].max.times do |page|
      grouped << skip(page).limit(4)
    end

    grouped
  end
end
