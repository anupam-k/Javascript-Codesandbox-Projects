function insert(num) {
  document.querySelector(".textview").value += num;
  console.log(num);
  return num;
}

function equals() {
  let x = document.querySelector(".textview").value;
  let y = eval(x);

  document.querySelector(".textview").value = y;
  return y;
}

function clean() {
  document.querySelector(".textview").value = "";
}

function back() {
  let info = document.querySelector(".textview").value;
  document.querySelector(".textview").value = info.slice(0, -1);
}
