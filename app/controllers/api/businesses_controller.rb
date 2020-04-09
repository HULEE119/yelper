class Api::BusinessesController < ApplicationController
    def index 
        @businesses = Business.all 
        render :index  
        # render "/api/businesses/index"
    end 

    def show
        @business = Business.find(params[:id])
    end 
end
