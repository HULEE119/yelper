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

    def search
        if params[:query]
            @businesses = Business.where('business_name ILIKE ?', "%#{params[:query]}%" )
        # else params[:location]
        #     @businesses = Business.where('city ILIKE ?', "%#{params[:location]}%" )
        end


        render :index 
    end

end
