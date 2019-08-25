class MemberController < ApplicationController
	def index
		render json: Member.all
	end

	def show
		render json: Member.find(params[:id])
	end

	def member_params
		params.permit(:id)
	end
end
