# LFL Employee Directory code challenge

For this assignment you will be building an online employee directory, using only vanilla JS (**no jQuery**).

Please fork this repository for your work, you should spend no more than 4-6h on this, please make sure to document your process in the `Dev Notes` section of this `README`

Feel free to reach out to with any questions or for clarification.

## Setup
- No dependencies needed
- Task runners are okay
- `SASS/SCSS` is okay, your choice
- `dom.js` contains some helper functions

## Requirements
#### Sidebar / main content layout is honored per screenshots

#### A `View` option that displays all employees & their info

![view](images/print.png)

#### An `Add` option that allows users to input a name, an office number, and a phone number

![add](images/add.png)

#### A `Verify` option that allows users to input a name and returns a success/error state to the UI

![verify](images/verify.png)

#### An `Update` option that allows the user to input name, office number, and phone number -- updating only the office number and phone number upon a name match

#### A `Delete` option that deletes the employee with the matching name

## Bonus
- Style all/any of the aforementioned interactions however you see fit, this is an opportunity to show off your creativity!
- MVC JS architecture

## Dev notes
1) Determine objective: create a mini CRUD application (Create, Read, Update, Delete) using Vanilla JS, HTML, CSS
2) Implement basic styling. Create a "nav" menu using HTML/CSS flex. I styled radio buttons to create a "tab effect" when the user clicks.
3) Implement functionality (5 Parts)
-VIEW module: 
  -Export and log employeeList.js data to app.js
  -Map out employee data using forEach
-ADD module:
  -Load data from employeeList array
  -On click, handle input values and insert them into HTML, render onto DOM
-VERIFY module:
  -Using forEach, create a click event that filters through employeeList data to see if there's a name match. Render to DOM.
-UPDATE module:
  -I ran out of time (unfortunately). I wrote code that exemplified my approach. If name input value matches the data, then the object updates.
-DELETE module:
  -I ran out of time for this module. I wrote out the code: If criteria DO NOT match, filter (or keep) all items in the state / UI.

  ** Thanks for the opportunity to show off my skillset! I made sure to implement my artistic flair :) I look forward to hearing back **
