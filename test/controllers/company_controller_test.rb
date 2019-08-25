require 'test_helper'

class CompanyControllerTest < ActionDispatch::IntegrationTest

	test "should send companies" do
		get '/api/v1/companies/980190962'
		assert_equal "show", @controller.action_name
	end
end
