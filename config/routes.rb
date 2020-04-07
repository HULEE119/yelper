Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :show]
    resources :reviews, only: [:create]
  end
end

