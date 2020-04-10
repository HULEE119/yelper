# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_09_200732) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "business_categories", force: :cascade do |t|
    t.integer "business_id", null: false
    t.integer "category_id", null: false
  end

  create_table "businesses", force: :cascade do |t|
    t.string "business_name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.integer "zip_code", null: false
    t.string "business_site", null: false
    t.integer "phone_number", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_name"], name: "index_businesses_on_business_name", unique: true
  end

  create_table "categories", force: :cascade do |t|
    t.string "business_type", null: false
    t.index ["business_type"], name: "index_categories_on_business_type", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating", null: false
    t.string "body", null: false
    t.integer "author_id", null: false
    t.integer "business_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id", "business_id"], name: "index_reviews_on_author_id_and_business_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.integer "zip_code", null: false
    t.date "birthday"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
