Rails.application.routes.draw do
  root to: redirect('/companies') 
  get 'companies', to: 'site#index'

    namespace :api do
        resources :companies, only: [:index, :show, :create, :destroy, :update]
          resources :founders, only: [:index, :show, :create, :destroy, :update]
    end
end
