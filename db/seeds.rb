# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all
Category.destroy_all
BusinessCategory.destroy_all


u1 = User.create!({first_name: "Yelper", last_name: "Y.", email: "yelper@yepler.net", password: "password", zip_code: "10019" })
u2 = User.create!({first_name: "Sarah", last_name: "Lee", email: "sl1990@yepler.net", password: "password", zip_code: "11365" })
u3 = User.create!({first_name: "Donald", last_name: "Yen", email: "dy1990@yepler.net", password: "password", zip_code: "10286" })
u4 = User.create!({first_name: "Raingarda", last_name: "Pérez", email: "rp1990@yepler.net", password: "password", zip_code: "11001" })

c1 = Category.create!({business_type: "Asian Fusion"})
c2 = Category.create!({business_type: "Chinese"})
c3 = Category.create!({business_type: "Japanese"})
c4 = Category.create!({business_type: "Korean"})
c5 = Category.create!({business_type: "Thai"})
c6 = Category.create!({business_type: "Vietnamese"})
c7 = Category.create!({business_type: "Bars"})
c8 = Category.create!({business_type: "Coffee & Tea"})
c9 = Category.create!({business_type: "Sandwiches"})
c10 = Category.create!({business_type: "Desserts"})
c11 = Category.create!({business_type: "Noodles"})
c12 = Category.create!({business_type: "Bakeries"})
c13 = Category.create!({business_type: "Bagels"})
c14 = Category.create!({business_type: "Steakhouses"})



b1 = Business.create!({
    business_name: "Utopia Bagels", 
    address: "1909 Utopia Pkwy", 
    city: "Whitestone, ", 
    state: "NY, ", 
    zip_code: "11357", 
    business_site: "utopiabagelsofnewyork.com", 
    phone_number: "7183522586", 
    price_range: "$", 
    opening_hours: "4:00am - 7:00pm",
    lat: "40.780120",
    lng: "-73.793670"
})
b2 = Business.create!({
    business_name: "Thai Market", 
    address: "960 Amsterdam Ave", 
    city: "New York, ", 
    state: "NY, ", 
    zip_code: "10025", 
    business_site: "thaimarketny.net", 
    phone_number: "2122804575", 
    price_range: "$$", 
    opening_hours: "11:00am - 11:00pm",
    lat: "40.801370",
    lng: "-73.965430"
})
b3 = Business.create!({
    business_name: "Spot Dessert Bar", 
    address: "39-16 Prince St", 
    city: "Flushing, ", 
    state: "NY, ", 
    zip_code: "11354", 
    business_site: "spotdessertbar.com", 
    phone_number: "9172852278", 
    price_range: "$$", 
    opening_hours: "12:00pm - 12:00am",
    lat: "40.762360",
    lng: "-73.833190"
})
b4 = Business.create!({
    business_name: "JoJu", 
    address: "83-25 Broadway", 
    city: "Elmhurst, ", 
    state: "NY, ", 
    zip_code: "11373", 
    business_site: "jojuny.com", 
    phone_number: "3478080887", 
    price_range: "$", 
    opening_hours: "11:00am - 11:00pm",
    lat: "40.736800",
    lng: "-73.877640"
})
b5 = Business.create!({
    business_name: "Peter Luger Steak House", 
    address: "255 Northern Blvd", 
    city: "Great Neck, ", 
    state: "NY, ", 
    zip_code: "11021", 
    business_site: "peterluger.com", 
    phone_number: "5164878800", 
    price_range: "$$$$", 
    opening_hours: "11:30am - 10:00pm",
    lat: "40.781020",
    lng: "-73.718720"
})
b6 = Business.create!({
    business_name: "Izakaya Toribar", 
    address: "164 E 56th St", 
    city: "New York, ", 
    state: "NY, ", 
    zip_code: "10022", 
    business_site: "izakayatoribar.com", 
    phone_number: "6467670029", 
    price_range: "$$", 
    opening_hours: "12:00pm - 10:30pm",
    lat: "40.759869",
    lng: "-73.968577"
})
b7 = Business.create!({
    business_name: "Málà Project", 
    address: "41 W 46th St", 
    city: "New York, ", 
    state: "NY, ", 
    zip_code: "10036", 
    business_site: "malaproject.nyc", 
    phone_number: "9172617520", 
    price_range: "$$", 
    opening_hours: "11:00am - 9:30pm",
    lat: "40.757130",
    lng: "-73.980553"
})
b8 = Business.create!({
    business_name: "Her Name Is Han", 
    address: "17 E 31st St", 
    city: "New York, ", 
    state: "NY, ", 
    zip_code: "10016", 
    business_site: "hernameishan.com", 
    phone_number: "2127799990", 
    price_range: "$$", 
    opening_hours: "11:30am - 10:00pm",
    lat: "40.746360",
    lng: "-73.984822"
})

bc1 = BusinessCategory.create!({business_id: b1.id, category_id:c12.id})
bc2 = BusinessCategory.create!({business_id: b1.id, category_id:c13.id})
bc3 = BusinessCategory.create!({business_id: b1.id, category_id:c9.id})

bc4 = BusinessCategory.create!({business_id: b2.id, category_id:c5.id})
bc5 = BusinessCategory.create!({business_id: b2.id, category_id:c11.id})
bc6 = BusinessCategory.create!({business_id: b2.id, category_id:c1.id})

bc7 = BusinessCategory.create!({business_id: b3.id, category_id:c10.id})
bc8 = BusinessCategory.create!({business_id: b3.id, category_id:c8.id})
bc9 = BusinessCategory.create!({business_id: b3.id, category_id:c12.id})

bc10 = BusinessCategory.create!({business_id: b4.id, category_id:c9.id})
bc11 = BusinessCategory.create!({business_id: b4.id, category_id:c6.id})
bc12 = BusinessCategory.create!({business_id: b4.id, category_id:c1.id})

bc13 = BusinessCategory.create!({business_id: b5.id, category_id:c14.id})

bc14 = BusinessCategory.create!({business_id: b6.id, category_id:c3.id})
bc15 = BusinessCategory.create!({business_id: b6.id, category_id:c7.id})

bc16 = BusinessCategory.create!({business_id: b7.id, category_id:c2.id})
bc17 = BusinessCategory.create!({business_id: b7.id, category_id:c11.id})

bc18 = BusinessCategory.create!({business_id: b8.id, category_id:c4.id})
bc19 = BusinessCategory.create!({business_id: b8.id, category_id:c7.id})
bc20 = BusinessCategory.create!({business_id: b8.id, category_id:c1.id})