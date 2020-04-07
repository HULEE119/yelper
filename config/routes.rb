Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:new, :create, :show, :index] do 
      resources :reviews, only: [:create, :update]
    end

    resource :session, only: [:create, :destroy]

    resources :businesses, only: [:index, :show] do 
      resources :reviews, only: [:create, :update]
    end
    
  end

end

