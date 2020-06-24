# == Schema Information
#
# Table name: businesses
#
#  id            :bigint           not null, primary key
#  business_name :string           not null
#  address       :string           not null
#  city          :string           not null
#  state         :string           not null
#  zip_code      :integer          not null
#  business_site :string           not null
#  phone_number  :bigint           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  price_range   :string           not null
#  opening_hours :string           not null
#  lat           :float            not null
#  lng           :float            not null
#
class Business < ApplicationRecord
    validates :business_name, :address, :city, :state, :zip_code, :business_site, :phone_number, presence: true

    has_many :business_categories,
        class_name: :BusinessCategory,
        foreign_key: :business_id

    has_many :categories,
        through: :business_categories,
        source: :category

    has_many :reviews,
        class_name: :Review,
        foreign_key: :business_id

    has_many_attached :photos

    def average_rating
        reviews.average(:rating)
    end

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])

    end

    # def self.search(query)
    #     if query 
    #         where("(lower(categories.category) LIKE :query OR lower(businesses.name) LIKE :query)", query: "%#{query.downcase}%")
    #     else 
    #         @businesses = Business.all 
    #     end   
    # end
end
