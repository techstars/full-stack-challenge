require "application_system_test_case"

class FoundersTest < ApplicationSystemTestCase
  setup do
    @founder = founders(:one)
  end

  test "visiting the index" do
    visit founders_url
    assert_selector "h1", text: "Founders"
  end

  test "creating a Founder" do
    visit founders_url
    click_on "New Founder"

    fill_in "Businessid", with: @founder.businessid
    fill_in "Name", with: @founder.name
    click_on "Create Founder"

    assert_text "Founder was successfully created"
    click_on "Back"
  end

  test "updating a Founder" do
    visit founders_url
    click_on "Edit", match: :first

    fill_in "Businessid", with: @founder.businessid
    fill_in "Name", with: @founder.name
    click_on "Update Founder"

    assert_text "Founder was successfully updated"
    click_on "Back"
  end

  test "destroying a Founder" do
    visit founders_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Founder was successfully destroyed"
  end
end
