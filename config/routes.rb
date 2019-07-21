Rails.application.routes.draw do
  root 'fullstackapp#index'
  resources :businesses  
end