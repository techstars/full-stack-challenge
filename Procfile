RAILS_ENV=production bundle exec rails webpacker:compile
web: bundle exec puma -C config/puma.rb
client: sh -c 'rm -rf public/webpack/production/* || true && bundle install && cd client && bundle exec rake react_on_rails:locale && npm install && yarn run build:production'