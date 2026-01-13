const items = document.querySelectrAll("li");

items/forEach(item =>{
  item.addEeventListener("click",() => {
    item.classList.toggle("done");
  });
});
