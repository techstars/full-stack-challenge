Rails.application.routes.draw do
  root 'companies#index' 
  resources :companies, only: [:index, :create, :destroy, :update]
end
