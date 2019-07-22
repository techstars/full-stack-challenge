require 'test_helper'

class FoundersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @founder = founders(:one)
  end

  test "should get index" do
    get founders_url
    assert_response :success
  end

  test "should get new" do
    get new_founder_url
    assert_response :success
  end

  test "should create founder" do
    assert_difference('Founder.count') do
      post founders_url, params: { founder: { businessid: @founder.businessid, name: @founder.name } }
    end

    assert_redirected_to founder_url(Founder.last)
  end

  test "should show founder" do
    get founder_url(@founder)
    assert_response :success
  end

  test "should get edit" do
    get edit_founder_url(@founder)
    assert_response :success
  end

  test "should update founder" do
    patch founder_url(@founder), params: { founder: { businessid: @founder.businessid, name: @founder.name } }
    assert_redirected_to founder_url(@founder)
  end

  test "should destroy founder" do
    assert_difference('Founder.count', -1) do
      delete founder_url(@founder)
    end

    assert_redirected_to founders_url
  end
end
