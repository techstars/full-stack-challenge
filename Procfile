web: bundle exec puma -C config/puma.rb
webpack: bin/webpack-dev-server
client: sh -c 'rm -rf public/webpack/production/* || true && bundle install && cd client && bundle exec rake react_on_rails:locale && npm install && yarn run build:production'