# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

companies = Company.create([{name: "Company 1", description: "description one", city: "Denver", state: "Colorado", founders: '[{"id": 1, "title": "Founder and CEO"}]'}])
members = Member.create([{name: "Collin Brockway", companies: '[1]'}])