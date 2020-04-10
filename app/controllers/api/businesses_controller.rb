class Api::BusinessesController < ApplicationController
    def index 
        @businesses = Business.all 
        render "/api/businesses/index"
    end 

    def show
        @business = Business.find_by(id: params[:id])
        if @business
            render :show
        else
            render json: ['Business does not exist']
        end
    end 
end
