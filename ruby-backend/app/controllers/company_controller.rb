class CompanyController < ApplicationController
	def index
		render json: '{companies: []}'
	end
end
