describe('Prototype Testai', () => {
    
  beforeEach(() => {
cy.visit('https://testsheepnz.github.io/BasicCalculator')

})

it('Add 2+5', () => {
  cy.get('[data-testid="number1Field"]').type('2')
  cy.get('[data-testid="number2Field"]').type('5')
  cy.get('[data-testid="selectOperationDropdown"]').select('Add')
  cy.get('[data-testid="calculateButton"]').click()
  cy.get('[data-testid="numberAnswerField"]')
    .should('be.visible').should("have.value", "7")
})

it('Add 2-5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Subtract')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","-3")
})

it('Add 2*5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Multiply')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","10")
})

it('Add 2:5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","0.4")
})

it('Add 5:0', () => {
    cy.get('[data-testid="number1Field"]').type('5')
    cy.get('[data-testid="number2Field"]').type('0')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="errorMsgField"]').contains('Divide by zero error!')
})

it('Add 2,5,Concatenate', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Concatenate')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","25")
})

it('Add a,2,Concatenate', () => {
    cy.get('[data-testid="number1Field"]').type('a')
    cy.get('[data-testid="number2Field"]').type('2')
    cy.get('[data-testid="selectOperationDropdown"]').select('Concatenate')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","")
})

it('Add a+a', () => {
    cy.get('[data-testid="number1Field"]').type('a')
    cy.get('[data-testid="number2Field"]').type('a')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","")
})

it('Add 5+(-2)', () => {
    cy.get('[data-testid="number1Field"]').type('5')
    cy.get('[data-testid="number2Field"]').type('-2')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","3")
})

it('Add 2+5)', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","7")
})

it('Clear button)', () => {
    cy.get('[data-testid="clearButton"]').should('be.visible')
    cy.get('[data-testid="clearButton"]').click()

    })
  })
  
describe('1 Testai', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
    cy.get('[data-testid="selectBuild"]').select('1') 
    
})

it('Add 2+5', () => { 
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","7")
})

it('Add 2-5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Subtract')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","-3")
})

it('Add 2*5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Multiply')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","10")
})

it('Add 2:5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","0.4")
})

it('Add 5:0', () => {
    cy.get('[data-testid="number1Field"]').type('5')
    cy.get('[data-testid="number2Field"]').type('0')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="errorMsgField"]').contains('Divide by zero error!')
})

it('Add 2,5,Concatenate', () => { 
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Concatenate')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","25")
})

it('Add 5+(-2)', () => {
    cy.get('[data-testid="number1Field"]').type('5')
    cy.get('[data-testid="number2Field"]').type('-2')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","3")
    cy.get('[data-testid="clearButton"]').should('be.visible')
    cy.get('[data-testid="clearButton"]').click()
    })
  })

describe('2 Testai', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
    cy.get('[data-testid="selectBuild"]').select('2') 
    
})

it('Add 2+5', () => { 
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","7")
})

it('Add 2-5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Subtract')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","-3")
})

it('Add 2*5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Multiply')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","10")
})

it('Add 2:5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","0.4")
})

it('Add 5:0', () => {
    cy.get('[data-testid="number1Field"]').type('5')
    cy.get('[data-testid="number2Field"]').type('0')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="errorMsgField"]').contains('Divide by zero error!')
})

it('Add 2,5,Concatenate', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Concatenate')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
     .should('be.visible').should("have.value","25")
})

it('Add 5+(-2)', () => {
    cy.get('[data-testid="number1Field"]').type('5')
    cy.get('[data-testid="number2Field"]').type('-2')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
    .should('be.visible').should("have.value","3")
    cy.get('[data-testid="clearButton"]').should('be.visible')
    cy.get('[data-testid="clearButton"]').click()
    })
  })

describe('3 Testai', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
    cy.get('[data-testid="selectBuild"]').select('3')
    
})

it('Add 2+5', () => {  
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","7")
})

it('Add 2-5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Subtract')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","-3")
})

it('Add 2*5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Multiply')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","10")
})

it('Add 2:5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","0.4")
})

it('Add 5:0', () => {
    cy.get('[data-testid="number1Field"]').type('5')
    cy.get('[data-testid="number2Field"]').type('0')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="errorMsgField"]').contains('Divide by zero error!')
})

it('Add 2,5,Concatenate', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Concatenate')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","25")
})

it('Add 5+(-2)', () => {
    cy.get('[data-testid="number1Field"]').type('5')
    cy.get('[data-testid="number2Field"]').type('-2')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","3")
    cy.get('[data-testid="clearButton"]').should('be.visible')
    cy.get('[data-testid="clearButton"]').click()
})
})

describe('4 Testai', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
    cy.get('[data-testid="selectBuild"]').select('4') 
    
})

it('Add 2+5', () => { 
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","7")
})

it('Add 2-5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Subtract')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","-3")
})

it('Add 2*5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Multiply')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","10")
})

it('Add 2:5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","0.4")
})

it('Add 5:0', () => {
    cy.get('[data-testid="number1Field"]').type('5')
    cy.get('[data-testid="number2Field"]').type('0')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="errorMsgField"]').contains('Divide by zero error!')
})

it('Add 2,5,Concatenate', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Concatenate')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","25")
    cy.get('[data-testid="clearButton"]').should('be.visible')
    cy.get('[data-testid="clearButton"]').click()

})
})

describe('5 Testai', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
    cy.get('[data-testid="selectBuild"]').select('5')  
    
})

it('Add 2+5', () => { 
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","7")
})

it('Add 2-5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Subtract')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","-3")
})

it('Add 2*5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Multiply')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","10")
})

it('Add 2:5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","0.4")
})

it('Add 5:0', () => {
    cy.get('[data-testid="number2Field"]').type('0')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="errorMsgField"]').contains('Divide by zero error!')
})

it('Add 2,5,Concatenate', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Concatenate')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","25")
})

it.only('Clear button)', () => {
    cy.get('[data-testid="clearButton"]').should('be.visible')
    cy.get('[data-testid="clearButton"]').click()

})
})

describe('6 Testai', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
    cy.get('[data-testid="selectBuild"]').select('6')  
    
})

it('Add 2+5', () => { 
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","7")
})

it('Add 2-5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Subtract')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","-3")
})

it('Add 2*5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Multiply')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","10")
})

it('Add 2:5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","0.4")
})

it('Add 5:0', () => {
    cy.get('[data-testid="number1Field"]').type('5')
    cy.get('[data-testid="number2Field"]').type('0')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="errorMsgField"]').contains('Divide by zero error!')
})

it('Add 2,5,Concatenate', () => { 
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Concatenate')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","25")
    cy.get('[data-testid="clearButton"]').should('be.visible')
    cy.get('[data-testid="clearButton"]').click()

})
})

describe('7 Testai', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
    cy.get('[data-testid="selectBuild"]').select('7')
    
})
    
it('Add 2+5', () => {  
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","7")
})

it('Add 2-5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Subtract')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","-3")
})

it('Add 2*5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Multiply')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","10")
})

it('Add 2:5', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","0.4")
})

it('Add 5:0', () => {
    cy.get('[data-testid="number1Field"]').type('5')
    cy.get('[data-testid="number2Field"]').type('0')
    cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="errorMsgField"]').contains('Divide by zero error!')
})

it('Add 2,5,Concatenate', () => {
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Concatenate')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","25")
    cy.get('[data-testid="clearButton"]').should('be.visible')
    cy.get('[data-testid="clearButton"]').click()

})
})

describe('8 Testai', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
    cy.get('[data-testid="selectBuild"]').select('8') 
    
})

it('Add 2+5', () => { 
    cy.get('[data-testid="number1Field"]').type('2')
    cy.get('[data-testid="number2Field"]').type('5')
    cy.get('[data-testid="selectOperationDropdown"]').select('Add')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","7")
})

it('Add 2-5', () => {
      cy.get('[data-testid="number1Field"]').type('2')
      cy.get('[data-testid="number2Field"]').type('5')
      cy.get('[data-testid="selectOperationDropdown"]').select('Subtract')
      cy.get('[data-testid="calculateButton"]').click()
      cy.get('[data-testid="numberAnswerField"]')
        .should('be.visible').should("have.value","-3")
})

it('Add 2*5', () => {
      cy.get('[data-testid="number1Field"]').type('2')
      cy.get('[data-testid="number2Field"]').type('5')
      cy.get('[data-testid="selectOperationDropdown"]').select('Multiply')
      cy.get('[data-testid="calculateButton"]').click()
      cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","10")
})

it('Add 2:5', () => {
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]')
        .should('be.visible').should("have.value","0.4")
    })

    it('Add 5:0', () => {
      cy.get('[data-testid="number1Field"]').type('5')
      cy.get('[data-testid="number2Field"]').type('0')
      cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
      cy.get('[data-testid="calculateButton"]').click()
      cy.get('[data-testid="errorMsgField"]').contains('Divide by zero error!')
    })

    it('Add 2,5,Concatenate', () => {
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select('Concatenate')
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]')
        .should('be.visible').should("have.value","25")
        cy.get('[data-testid="clearButton"]').should('be.visible')
      cy.get('[data-testid="clearButton"]').click()

})
})
describe('9 Testai', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
    cy.get('[data-testid="selectBuild"]').select('9') 
    
    })

    it('Add 2+2', () => { 
      cy.get('[data-testid="number1Field"]').type('2')
      cy.get('[data-testid="number2Field"]').type('2')
      cy.get('[data-testid="selectOperationDropdown"]').select('Add')
      cy.get('[data-testid="calculateButton"]').click()
      cy.get('[data-testid="numberAnswerField"]')
      .should('be.visible').should("have.value","4")
    })

    it('Add 2-2', () => {
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('2')
        cy.get('[data-testid="selectOperationDropdown"]').select('Subtract')
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]')
        .should('be.visible').should("have.value","0")
    })

    it('Add 2*2', () => {
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('2')
        cy.get('[data-testid="selectOperationDropdown"]').select('Multiply')
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]')
        .should('be.visible').should("have.value","4")
    })

    it('Add 2:2', () => {
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('2')
        cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]')
        .should('be.visible').should("have.value","1")
    })

    it('Add 5:0', () => {
      cy.get('[data-testid="number1Field"]').type('5')
      cy.get('[data-testid="number2Field"]').type('0')
      cy.get('[data-testid="selectOperationDropdown"]').select('Divide')
      cy.get('[data-testid="calculateButton"]').click()
      cy.get('[data-testid="errorMsgField"]').contains('Divide by zero error!')
    })

    it('Add 2,2,Concatenate', () => {
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('2')
        cy.get('[data-testid="selectOperationDropdown"]').select('Concatenate')
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]')
        .should('be.visible').should("have.value","22")
})

it('Add a,2,Concatenate', () => {
    cy.get('[data-testid="number1Field"]').type('a')
    cy.get('[data-testid="number2Field"]').type('2')
    cy.get('[data-testid="selectOperationDropdown"]').select('Concatenate')
    cy.get('[data-testid="calculateButton"]').click()
    cy.get('[data-testid="numberAnswerField"]')
    .should('be.visible').should("have.value","")
})
})
        
    