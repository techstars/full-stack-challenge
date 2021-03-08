module Api
  module V1
    class FoundersController < ApplicationController
      # POST founders
      def create
        founder = Founder.create!(founder_params)
        render json: founder
      end

      private

      def founder_params
        params.permit(:full_name, :email, :title, :company_id)
      end
    end
  end
end