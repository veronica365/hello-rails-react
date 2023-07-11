# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Message.destroy_all
greetings = ['Hello', 'Hi', 'Hey', 'Jambo', 'Habari']
greeting_objects = []

greetings.each do |greeting|
    greeting_objects << {greeting: "#{greeting} Ruby and React in one", created_at: Time.now, updated_at: Time.now}
end

Message.create!(greeting_objects)
