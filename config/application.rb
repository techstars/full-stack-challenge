require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"
# require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module TechstarsAsm
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers and assets when generating a new resource.
    config.api_only = true
    config.action_controller.action_on_unpermitted_parameters = :raise
    # Allow the app to be iframed
    config.action_dispatch.default_headers = {
      'Access-Control-Allow-Origin' => '*',
      'X-UA-Compatible' => 'IE=edge',
      'P3P' => 'CP="We do not have a P3P policy"',
      'Cache-Control' => 'no-cache, no-store, max-age=0, must-revalidate',
      'Pragma' => 'no-cache',
      'Expires' => 'Fri, 01 Jan 1990 00:00:00 GMT',
      'Server' => 'Not listed',
      'Content-Language' => I18n.locale.to_s
    }
    Rails.autoloaders.main.ignore(Rails.root.join('app/client/node_modules/'))
  end
end
