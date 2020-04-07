# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  zip_code        :integer          not null
#  birthday        :date
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :first_name, :last_name, :email, :zip_code, :password_digest, :session_token, presence: true 
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_many :reviews,
        class_name: :Review,
        foreign_key: :author_id
    
    after_initialize :ensure_session_token 
    attr_reader :password 
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        # debugger
        return nil unless user && user.is_password?(password)
        user 
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def self.generate_session_token 
        SecureRandom::urlsafe_base64 
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password) 
    end 

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token 
    end
end
