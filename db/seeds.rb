# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all 


demo_user = User.create({
    first_name: "Yelper", 
    last_name: "Y.", 
    email: "yelper@yepler.net", 
    password: "password", 
    zip_code: "10019" 
})

businesses = Business.create([
    {   
        business_name: "Central Park",
        address: "Park in New York City",
        city: "New York, ",
        state: "NY, ",
        zip_code: "10019",
        business_site: "https://www.centralparknyc.org/",
        phone_number: "2123106600" 
    },
    {
        business_name: "Times Square",
        address: "Times Square Manhattan",
        city: "New York, ",
        state: "NY, ",
        zip_code: "10036",
        business_site: "https://www.timessquarenyc.org/",
        phone_number: "2127681560" 
    },
    {
        business_name: "Empire State Building",
        address: "20 W 34th St",
        city: "New York, ",
        state: "NY, ",
        zip_code: "10001",
        business_site: "https://www.esbnyc.com/",
        phone_number: "2127363100" 
    },
    {
        business_name: "One World Trade Center",
        address: "285 Fulton St",
        city: "New York, ",
        state: "NY, ",
        zip_code: "10007",
        business_site: "https://www.onewtc.com/",
        phone_number: "2122576600" 
    },
])
