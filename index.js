const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const { years, months, days } = getAge(birthdayValue);
    resultEl.innerText = `You are ${years} ${years > 1 ? "years" : "year"}, ${months} ${months > 1 ? "months" : "month"}, and ${days} ${days > 1 ? "days" : "day"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  const day = currentDate.getDate() - birthdayDate.getDate();

  if (day < 0) {
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, birthdayDate.getDate());
    const diff = currentDate - lastMonth;
    const daysInMonth = diff / (1000 * 60 * 60 * 24);
    age -= 1;
    day = Math.floor(daysInMonth);
  }

  if (month < 0) {
    age--;
    month += 12;
  }

  return { years: age, months: month, days: day };
}

btnEl.addEventListener("click", calculateAge);
