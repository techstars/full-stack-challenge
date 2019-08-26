json.companies Company.all.order('updated_at DESC') do |company|
  json.id company.id
  json.name company.name
  json.city company.city
  json.state company.state
  json.founded_date company.founded_date
  json.short_description company.short_description
  json.long_description company.long_description
  json.founders company.founders
  json.logo_url company.logo_url
end 



json.path companies_path()