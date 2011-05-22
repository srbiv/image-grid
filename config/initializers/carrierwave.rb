CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',
    :aws_access_key_id      => '14505GZVWGC88M3A8TR2',
    :aws_secret_access_key  => 'uDE+Om8DPaM0NUEVTbyIc1KU5LdLje+sEGPKQ9rG',
    :region                 => 'us-east-1'
  }
  config.fog_directory  = 'image-grid'
  config.fog_host       = 'https://s3.amazonaws.com/image-grid'
  config.fog_public     = true
  config.fog_attributes = {'Cache-Control' => 'max-age=315576000'}
end
