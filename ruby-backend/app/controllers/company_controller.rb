class CompanyController < ApplicationController
	def index
		#some fake data for now:
		#render json: '{"companies": [{"name": "Company1"}, {"name": "Company2"}]}'
		render json: Company.all
	end
end
