// It's about Age Calculator Project.


let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; //This is for to hide the future date.
let result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth();
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3; //These are for to store the calculated ones.

  y3 = y2 - y1; //y1 is birthYear of the person & y2 is currentYear.

  if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {//?
        m3 = 11;
        y3--;
    }


  result.innerHTML = `You are <span> ${y3} </span> years, <span> ${m3} </span> months &  <span> ${d3} </span> days old.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

//Which code is correct because I have checked both no one satisfied me:

/* 
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; // hide future date
let result = document.getElementById("result");

function calculateAge() {
  const birthDate = new Date(userInput.value);
  const today = new Date();

  // If birthDate is in the future, handle gracefully
  if (birthDate > today) {
    result.innerHTML = "Birth date cannot be in the future.";
    return;
  }

  // Start from birth date and today
  let y3 = today.getFullYear() - birthDate.getFullYear();
  let m3 = today.getMonth() - birthDate.getMonth(); // 0-based
  let d3 = today.getDate() - birthDate.getDate();

  // If current month/day is before birth month/day, adjust
  if (d3 < 0) {
    // borrow days from previous month
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0); // last day of previous month
    d3 += prevMonth.getDate();
    m3 -= 1;
  }

  if (m3 < 0) {
    m3 += 12;
    y3 -= 1;
  }

  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months &  <span>${d3}</span> days old.`;
}

function getDaysInMonth(year, month) {
  // month is 1-based when calling this helper (January = 1)
  return new Date(year, month, 0).getDate();
}
 */