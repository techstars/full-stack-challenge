Rails.application.routes.draw do
  resources :categories
  resources :founders
  resources :companies
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  if Rails.env.test?
    namespace :test do
      post 'reset_database', to: 'databases#reset_database'
    end
  end
end
