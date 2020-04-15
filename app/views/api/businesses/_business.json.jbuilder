json.extract! business, :id, :business_name, :address, :city, :state, :zip_code, :business_site, :phone_number, :price_range, :opening_hours, :categories, :review_ids

if business.photos.attached?
    json.photos business.photos.map { |file| url_for(file) }
end