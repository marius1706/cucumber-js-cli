Feature: Verify addition of two numbers

  @tid:222222
  Scenario: Addition of two numbers
    Given I have first number 6
    And I have second number 4
    When I make the sum of those two numbers
    Then result should be 10
