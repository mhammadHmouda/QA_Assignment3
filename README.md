## Filter goals (describe ('Filter goals')):
### In this describe I create beforeEach () to execute pre-condition of these test case:
#### In the precondition I’m try to log in the goals page in staff account with this input data 1- username (MohammadE), 2- password (ahmad123), 3- staff option select the go to the GOALS page in observe section to create all filter type successfully.
# Notes: The test case #6 is fail because the goals displayed is wrong
- In the test case #1 (it ('Filter all goals')) I’m check the all goals, topics, groups with all level (Low, High, Medium) and goals observed, not observed and expected by now only, then click to apply filter button to display these goals and then verify if the goals displayed successfully.
- In the test case #2 (it ('Filter all goals with low level')) I’m check the all goals under the low levels just, and after filter I verify if the goals under low level displayed successfully.
- In the test case #3 (it ('Filter specific goal, group and level')) I’m check the specific goal under one topic, specific group and medium level, and after filter I’m verify if the goals under this requirement displayed successfully.
- In the test case #4 (it ('Filter all goals not observed')) I’m check the all goals, topics, groups with all level (Low, High, Medium) under the goals not observed and then verify if the goals displayed successfully.
- In the test case #5 (it ('Filter without select any goal')) I’m try to filter goals without select any goals under specific topic and verify if no goals displayed and verify if the alert of (please select a goal) displayed successfully.
- (FAIL) In the test case #6 (It ('Filter all goals expected by now only')) I’m try to filter goals under other filter option (expected by now only) and then verify if the goals displayed successfully but this fail because the number of goals expected should be (21) but the goal displayed is (28) and this is wrong.
- In the test case #7 (it ('Filter all goals not observed and expected by now only')) I’m try to filter goals under other filter option (not observed and expected by now only) and then verify if the goals displayed successfully.

## Observe goals student (describe (Observe goals')):

### In this describe I create beforeEach () to execute pre-condition of these test case:
#### In the precondition I’m try to log in the goals page in staff account with this input data 1- username (MohammadE), 2- password (ahmad123), 3- staff option select the go to the GOALS page in observe section then select and filter all goals to observe and unobserved and grade student successfully.

- In the test case #8 (it ('Give grade to the whole student')) I’m try to give the grade to all goals student exist, I’m, give (5) grade to this student and then verify if the all-student goals observed with grade (5).
- In the test case #9 (it ('Unobserved all goals Observed')) I’m try unobserved all goals student observed, then verify if not goals observed.
- In the test case #10 (it ('Observe specific goal without grade')) I’m try to observe specific goals without ang grade and then verify if this goal observed successfully without ang grade.
- In the test case #11 (it ('Undo goal observed')) I’m try to observe goal then undo this goal operation of observe goal then verify if this goals undo observes successfully. 



# Link of videos:

## Filter goals: 
https://github.com/mhammadHmouda/QA_Assignment3/assets/96300680/ca3b53f6-1e7d-4449-973a-e6000d120715

## Observe goals:

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
