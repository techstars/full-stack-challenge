class CompanyController < ApplicationController
	def index
		#some fake data for now:
		#render json: '{"companies": [{"name": "Company1"}, {"name": "Company2"}]}'
		render json: Company.all
	end

	def show
		render json: Company.find(params[:id])
	end

	def create
		company = Company.create(company_params)
		render json: company
	end

	def delete
		Company.destroy(params[:id])
		render json: '{"success": "true"}'
	end

	def update
		company = Company.find(params[:id])
		company.update_attributes(company_params)
		render json: company
	end

	def company_params
		params.permit(:id, :name, :description, :city, :state)
	end
end
