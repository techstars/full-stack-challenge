require "test_helper"

class CompaniesControllerTest < ActionDispatch::IntegrationTest
  test "should get at least 28 entries for companies" do
    company = Company.all
    assert_equal company.length, 2
  end

  test "should not save a company without all necessary attrs" do
    company = Company.new
    assert_not company.save, "Saved the company without a necessary attrs"
  end
end
