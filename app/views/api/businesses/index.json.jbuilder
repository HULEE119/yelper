@businesses.each do |biz|
    json.set! biz.id do 
        json.partial! 'business', business: biz 
    end
end