import * as plannerTypes from "./types";
import shortid from "shortid";

export const enterBudget = amount => {
  return {
    type: plannerTypes.ADD_BUDGET,
    payload: {
      amount: Number(amount)
    }
  };
};

// export const enterExpanseName = name => {
//   return {
//     type: plannerTypes.NAME_EXPENSE,
//     payload: {
//       name
//     }
//   };
// };

// export const enterExpenseAmount = expenseAmount => {
//   return {
//     type: plannerTypes.ADD_EXPENSE_AMOUNT,
//     payload: {
//       expenseAmount
//     }
//   };
// };

export const addExpense = (name, expenseAmount) => {
  return {
    type: plannerTypes.ADD_EXPENSE,
    payload: {
      expense: {
        id: shortid.generate(),
        expenseAmount: expenseAmount,
        name
      }
    }
  };
};

export const removeExpanse = id => {
  return {
    type: plannerTypes.REMOVE_EXPENSE,
    payload: {
      id
    }
  };
};
