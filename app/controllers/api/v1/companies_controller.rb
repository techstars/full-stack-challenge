module Api::V1
  class CompaniesController < ApplicationController
    before_action :set_company, only: [:show, :update, :destroy]
    wrap_parameters(false)
    # GET /companies
    def index
      @companies = Company.all.order(updated_at: :desc)
      render json: @companies.as_json(methods: ['founders'])
    end

    # GET /companies/1
    def show
      render json: @company
    end

    # POST /companies
    def create
      @company = Company.new(company_params)
      if @company.save
        render json: @company, status: :created
      else
        render json: @company.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /companies/1
    def update
      if @company.update(company_params)
        render json: @company, status: :ok
      else
        render json: @company.errors, status: :unprocessable_entity
      end
    end

    # DELETE /companies/1
    def destroy
      if @company.destroy
        render json: {response: "successfully deleted"}, status: :ok
      else
        render json: @company.errors, status: :unprocessable_entity
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_company
        @company = Company.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def company_params
        params.permit(:id, :name, :city, :state, :founded_date, :description)
      end
  end
end
