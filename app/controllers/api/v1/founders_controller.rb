module Api::V1
  class FoundersController < ApplicationController
    before_action :set_founder, only: [:show, :update, :destroy]
    before_action :set_company, only: [:index]

    wrap_parameters(false)
    # GET /founders
    def index
      if @company
        @founders = @company.founders
      else
        @founders = Founder.all
      end
      render json: @founders
    end

    # GET /founders/1
    def show
      render json: @founder
    end

    # POST /founders
    def create
      @founder = Founder.new(founder_params)

      if @founder.save
        render json: @founder, status: :created
      else
        render json: @founder.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /founders/1
    def update
      if @founder.update(founder_params)
        render json: @founder
      else
        render json: @founder.errors, status: :unprocessable_entity
      end
    end

    # DELETE /founders/1
    def destroy
      @founder.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_founder
        @founder = Founder.find(params[:id])
      end
      def set_company
        @company = Company.find(params[:company_id]) if params[:company_id].present?
      end
      
      # Only allow a trusted parameter "white list" through.
      def founder_params
        params.permit(:name, :title, :company_id)
      end
  end
end
