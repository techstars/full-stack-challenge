Rails.application.routes.draw do
  root 'companies#index' 
  post '/founders', to: 'founders#create', as: 'founder'
  resources :companies, only: [:index, :create, :destroy, :update]
end
