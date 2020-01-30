Feature: Verify difference of two numbers

  @tid:111111
  Scenario: Difference of two numbers
    Given I have first number 6
    And I have second number 4
    When I make the difference of those two numbers
    Then result should be 2
