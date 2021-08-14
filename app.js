// Your work here
import { employeeList } from './employee-list.js';

const employeeData = employeeList;
console.log(employeeData);

// Selectors
const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const tab4 = document.querySelector(".tab4");
const tab5 = document.querySelector(".tab5")
const viewTab = document.querySelector(".tabone");
const addTab = document.querySelector(".tabtwo");
const verifyTab = document.querySelector(".tabthree");
const updateTab = document.querySelector(".tabfour");
const deleteTab = document.querySelector(".tabfive")
const addBtn = document.querySelector(".add-button");

// Event Listeners
viewTab.addEventListener("click", showAll);
addTab.addEventListener("click", addEmployees);
verifyTab.addEventListener("click", verifyEmployees);
updateTab.addEventListener("click", updateEmployees);
deleteTab.addEventListener("click", deleteEmployees)

// Functions
function showAll() {
// 1) VIEW -- Renders all data
  // Map out data into employee components
  employeeData.forEach(employee => {
    tab1.insertAdjacentHTML('beforeend', `
    <ul class="employees-list">
      <li class="employee">
        <span class="employee-name">${employee.name}</span><br><br>
        <span class="employee-office-num">${employee.officeNum}</span><br><br>
        <span class="employee-phone-num">${employee.phoneNum}</span>
      </li>
    </ul>
    `);
    });
  };

  // 2) ADD -- User can input name, office #, phone #
  function addEmployees(e) {
    // Map out same data from above
    employeeData.forEach(employee => {
      tab2.insertAdjacentHTML('beforeend', `
      <ul class="employees-list">
        <li class="employee">
          <span class="employee-name">${employee.name}</span><br><br>
          <span class="employee-office-num">${employee.officeNum}</span><br><br>
          <span class="employee-phone-num">${employee.phoneNum}</span>
        </li>
      </ul>
      `);
    });

    // Add employee info
    addBtn.addEventListener("click", (e) => {
      const nameValue = document.querySelector(".name-input");
      const officeNumValue = document.querySelector(".office-num-input");
      const phoneNumValue = document.querySelector(".phone-number-input");
       
      addBtn.insertAdjacentHTML('afterend', `
        <ul class="employees-list">
          <li class="employee">
            <span class="employee-name">${nameValue.value}</span><br><br>
            <span class="employee-office-num">${officeNumValue.value}</span><br><br>
            <span class="employee-phone-num">${phoneNumValue.value}</span>
          </li>
        </ul>
        `);
      nameValue.value = "";
      officeNumValue.value = "";
      phoneNumValue.value = "";
      });
  };

  // 3) Verify Employees - name match using filter
  function verifyEmployees (e) {
    const verifyBtn = document.querySelector(".verify-button");
    const verifyNameinput = document.querySelector(".verify-name-input");
      verifyBtn.addEventListener("click", (e) => {
      employeeData.forEach(employee => {
        //console.log(employee)
        if (employee.name == verifyNameinput.value) {
        //console.log('Match!');
        tab3.insertAdjacentHTML('beforeend', `
        <div class="match">
          <h1 class="match-text">There's a match for ${verifyNameinput.value}!</h1>
        </div>
        `);
        return;
        } else {
       // error message
        return;
        };
       });
      verifyNameinput.value = "";
    });
  };

  // 4) Update Employees
  function updateEmployees (e) {
    const updateBtn = document.querySelector(".update-button");
    const nameInput = document.querySelector(".update-name-input");
    const officeNumInput = document.querySelector(".office-num-input");
    const phoneNumInput = document.querySelector(".phone-num-input");

    updateBtn.addEventListener("click", (e) => {
      console.log(e.target);
      employeeData.forEach(employee => {
        if (employee.name === nameInput.value) {
          // Update the office number and phone number upon a name match
          tab4.insertAdjacentHTML('afterend', `
          <ul class="employees-list">
            <li class="employee">
              <span class="employee-name">${employee.name}</span><br><br>
              <span class="employee-office-num">${officeNumInput.value}</span><br><br>
              <span class="employee-phone-num">${phoneNumInput.value}</span>
            </li>
          </ul>
          `);
        };
      });
    });
  };

  // 5) Delete Employees if there's a match
  function deleteEmployees (e) {
    // Map out data into employee components
    employeeData.forEach(employee => {
      tab5.insertAdjacentHTML('beforeend', `
      <ul class="employees-list">
        <li class="employee">
          <span class="employee-name">${employee.name}</span><br><br>
          <span class="employee-office-num">${employee.officeNum}</span><br><br>
          <span class="employee-phone-num">${employee.phoneNum}</span>
        </li>
      </ul>
      `);
      });
    
    const deleteBtn = document.querySelector(".delete-button");
    const deleteMatchInput = document.querySelector(".delete-name-input");
      deleteBtn.addEventListener("click", (e) => {
      employeeData.filter(employee => {
        employee.name !== deleteMatchInput.value;
      });
      console.log(employeeData);
      deleteMatchInput.value = "";
      });
  };