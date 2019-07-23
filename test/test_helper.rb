ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'

RSpec.configure do |config|
  ReactOnRails::TestHelper.configure_rspec_to_compile_assets(config)

ReactOnRails::TestHelper.configure_rspec_to_compile_assets(config, :requires_webpack_assets)
  config.define_derived_metadata(file_path: %r{spec/(features|requests)}) do |metadata|
    metadata[:requires_webpack_assets] = true
end

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
end
