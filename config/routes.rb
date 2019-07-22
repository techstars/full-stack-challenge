Rails.application.routes.draw do
  resources :founders
  root 'fullstackapp#index'
  resources :businesses  
end