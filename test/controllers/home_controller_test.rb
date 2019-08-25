require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest

	test "should send status" do
		get '/api/v1'
		assert_match "{\"online\": \"true\"}", @response.body
	end

end
