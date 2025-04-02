"use strict";
const employeeList = document.querySelector("ul");
function sortList(list) {
    const listItems = [
        ...list.querySelectorAll("li")
    ];
    function getSalary(li) {
        return Number(li.dataset.salary.replace(/[$,]/g, ""));
    }
    listItems.sort((a, b)=>getSalary(b) - getSalary(a));
    list.innerHTML = "";
    listItems.forEach((li)=>list.appendChild(li));
}
sortList(employeeList);

//# sourceMappingURL=index.f75de5e1.js.map
