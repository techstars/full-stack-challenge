require "test_helper"

class FoundersControllerTest < ActionDispatch::IntegrationTest
  test "should not save a founder without all necessary attrs" do
    founder = Founder.new
    assert_not founder.save, "Saved the company without a necessary attrs"
  end
end
