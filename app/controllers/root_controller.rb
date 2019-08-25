class RootController < ApplicationController
	def status
		render json: '{"online": "true"}'
	end
end
