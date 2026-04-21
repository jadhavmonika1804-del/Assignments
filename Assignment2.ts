// Given data
let customerName = "John Doe";
let creditScore = 720;
let income = 55000.0;
let isEmployed = true;
let debtToIncomeRatio = 35.0;

function checkLoanEligibility(
  customerName: string,
  creditScore: number,
  income: number,
  isEmployed: boolean,
  debtToIncomeRatio: number
): void {

  if (creditScore > 750) {
    console.log(`${customerName} is eligible for the loan (Auto Approved)`);
  } 
  else if (creditScore >= 650 && creditScore <= 750) {

    if (income >= 50000) {

      if (isEmployed) {

        if (debtToIncomeRatio < 40) {
          console.log(`${customerName} is eligible for the loan`);
        } else {
          console.log(`${customerName} is NOT eligible (High DTI ratio)`);
        }

      } else {
        console.log(`${customerName} is NOT eligible (Unemployed)`);
      }

    } else {
      console.log(`${customerName} is NOT eligible (Low income)`);
    }

  } 
  else {
    console.log(`${customerName} is NOT eligible (Low credit score)`);
  }
}
checkLoanEligibility(customerName, creditScore, income, isEmployed, debtToIncomeRatio);
