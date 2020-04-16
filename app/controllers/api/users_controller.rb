class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
          login!(@user)
          render "/api/users/show"
        else
          # render json: @user.errors.full_messages, status: 422
          render json: ["Sorry, you are not eligible to sign up for Yelper"], status: 401
        end
    end
    
    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :zip_code, :password)
    end
end
