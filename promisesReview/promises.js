let loanPaid = true;

// promise in variable
const promiseToPayLoan = new Promise((resolve, reject) => {
  if (!loanPaid) {
    reject("Haven't paid the debt");
  } else {
    resolve("Debt has been paid");
  }
});

// promise in function
/*
const promiseToPayLoan = () => {
  return new Promise((resolve, reject) => {
    if (!loanPaid) {
      reject("Haven't paid the debt");
    } else {
      resolve("Debt has been paid");
    }
}
*/

// loan
//   .then((ans) => {
//     console.log(ans)
//   })
//   .catch((poop) => {
//     console.log(poop)
//   });


async function checkIfPaid() {
  let paid = await promiseToPayLoan;
  try {
    console.log(paid);
  } catch (error) {
    console.log(error);
  }
}

// annonymous / fat arrow / lambda functions
const example = () => {
  console.log("This is an example")
}

const checkIfPaid2 = async () => {
  let paid = await promiseToPayLoan;
  try {
    console.log(paid);
  } catch (error) {
    console.log(error);
  }
}

checkIfPaid();