const items =
  document.querySelectorAll("#schedule li");
const toggleBtn =
  document.getElementById("toggleTheme");

items.forEach((item,index) => {
  if(localStorage.getItem("task-"+ index)==="done"){
    item.classList.add("done");
  }
  item.addEventListener("click", () => {
    item.classList.toggle("done");

    if(item.classList.contains("done")) {
      localStorage.setItem("task-" + index, "done");
    } else{
      localStorage.removeItem("task-" + index);
    }
  });
});

if(localStorage.getItem("theme") === "dark"){
  document.body.vlassList.add("darl");
  toggleBtn.textContent = "Light Mode";
}
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if(document.body.classlIst.contains("dark"))
  {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "Dark Mode";
  }
});
