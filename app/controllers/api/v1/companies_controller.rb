module Api
  module V1
    class CompaniesController < ApplicationController
      before_action :set_company, only: [:show, :update, :destroy]

      # POST companies
      def create
        company = Company.create!(company_params)
        render json: company
      end

      # GET companies
      def index
        ## Notes: put pagination here. gems like kaminari/pagy
        companies = Company.includes(:founders, { city: :state }).all
        render json: companies
      end

      # GET companies/:id
      def show
        render json: @company
      end

      # PUT companies/:id
      def update
        @company.update!(company_params)

        render json: @company, status: 200
      end

      # DELETE companies/:id
      def destroy
        @company.destroy

        render json: 'Company deleted successfully', status: 204
      end

      private

      def company_params
        params.permit(:name,
                      :start_date,
                      :description,
                      :city_name,
                      :state_name)
      end

      def set_company
        @company = Company.find(params[:id])
      end
    end
  end
end
