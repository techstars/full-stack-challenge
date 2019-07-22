Rails.application.routes.draw do
  resources :companies do
    resources :founders
  end
end
