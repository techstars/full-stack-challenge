Rails.application.routes.draw do
  get 'companies/index'
  root to: 'companies#index'

end
