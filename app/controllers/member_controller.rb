class MemberController < ApplicationController
	def index
		render json: Member.all
	end

	def show
		render json: Member.find(params[:id])
	end

	def create
		member = Member.create(member_params)
		render json: member
	end

	def delete
		Member.destroy(params[:id])
		render json: '{"success": "true"}'
	end

	def update
		member = Member.find(params[:id])
		member.update_attributes(member_params)
		render json: member
	end

	def member_params
		params.permit(:id, :name)
	end
end
