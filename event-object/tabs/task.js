const tabs = Array.from(document.getElementsByClassName("tab"));
const tabContent = document.getElementsByClassName("tab__content");

function changeActiveElements() {
  for (const tab of tabs) {
    //console.log(tab);
    tab.className = "tab";
  }

  for (const cont of tabContent) {
    //console.log(cont);
    cont.className = "tab__content";
  }

  let index = tabs.indexOf(this);
  // console.log(index, tabs[index]);

  tabs[index].className = "tab tab_active";
  tabContent[index].className = "tab__content tab__content_active";
}

for (const tbs of tabs) {
  tbs.onclick = changeActiveElements;
}
