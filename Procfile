web: bundle exec puma -C config/puma.rb
client: sh -c 'rm -rf public/webpack/production/* || true && cd client && bundle exec rake react_on_rails:locale && yarn run build:production'