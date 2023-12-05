## Testing searching, editing, filtering, and sorting functionality.

 - Search by Valid Name, Should Display the rows contains the name: This test case verifies that when searching by a valid name, the rows containing the name are displayed correctly. -Passed-
 - Search by Valid Email, Should Display the rows contains the email: This test case ensures that when searching by a valid email, the rows containing the email are displayed correctly. -Passed-
 - Search by invalid data, should display no rows when searching with invalid data: This test case validates that when searching with invalid data, no rows should be displayed. -Passed-
 - Try to Edit a Staff UserName, Should Editing the user name when there's an existing email: This test case verifies that the user name can be successfully edited when there's an existing email. -Passed-
 - Try to Edit a Staff UserName, Should Editing the user name when there's no existing email: This test case ensures that the user name can be edited when there's no existing email. -Passed-
 - Observer ascending sort on click: This test case verifies that the observer column can be sorted in ascending order by clicking on the column header. -Passed-
 - Observer descending sort on click: This test case ensures that the observer column can be sorted in descending order by clicking on the column header. -Passed-
 - Staff ascending sort on click: This test case validates that the staff column can be sorted in ascending order by clicking on the column header. -Passed-
 - Staff descending sort on click: This test case ensures that the staff column can be sorted in descending order by clicking on the column header. -Passed-
 - Student ascending sort on click: This test case verifies that the student column can be sorted in ascending order by clicking on the column header. -Passed-
 - Student descending sort on click: This test case ensures that the student column can be sorted in descending order by clicking on the column header. -Passed-

  - Filter without selecting any goal in the observe page: This test case checks that an alert message is displayed when trying to filter without selecting any goal. -Passed-

 script description:
    
 in this describe i create beforeach to execute pre condition of these test cases   
 
 in pre condition im try to log in a stuff page o stuff account with the input data : userame:MayaE passowrd : ahmad123 stuff option select to go to stuff page
 
 
Test Case 1  :(Verify that the UI exists) : i checked the presence of the table , the presence of the (Add Stuff) button , the presence of the toolbar(userame,email,firstname,lastame,observe,stuff,goal,student,academic,notification) if they exist.(susccessful)

Test Case 2 : (Add invalid Stuff button) i checked if the Add stuff button is working by click to button and must add the stuff in the stuff table(susccessful)

Test Case 3 : (Add valid Stuff button) i checked if the Add stuff button is working  by click to button and must add the stuff in the stuff table(susccessful)

Test Case 4 : (Remove the existig Stuff ) i checked if the Remove button is working by click to button and must remove the stuff from the stuff table (susccessful)

Test Case 5 :( Sort STAFF Results On (Email) Clicked (ascending)) i checked if the sort ascending in Email by click to up arrow button and must sort the email ascending (susccessful)

Test Case 6 :( Sort STAFF Results On (Email) Clicked (descending)) i checked if the sort descending in Email by click to down arrow button and must sort the email descending (susccessful)

Test Case 7 :( Sort STAFF Results On (Userame) Clicked (ascending)) i checked if the sort ascending in Userame by click to up arrow button and must sort the username ascending (susccessful)

Test Case 8 :( Sort STAFF Results On (Userame) Clicked (descending)) i checked if the sort descending in Userame  by click to down arrow button and must sort the userame descending (susccessful)

Test Case 9 :( Sort STAFF Results On (firstame) Clicked (ascending)) i checked if the sort ascending in firstame by click to up arrow button and must sort the firstame ascending (susccessful)

Test Case 10 :( Sort STAFF Results On (firstame) Clicked (descending)) i checked if the sort descending in firstame by click to down arrow button and must sort the firstname descending (susccessful)

Test Case 11 :( Sort STAFF Results On (goal) Clicked (ascending)) i checked if the sort ascending in goal by click to up arrow button and must sort the goal ascending (susccessful)

Test Case 12 :( Sort STAFF Results On (goal) Clicked (descending)) i checked if the sort descending in goal by click to down arrow button and must sort the goal descending (susccessful)