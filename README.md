#                                                    Mohammad Hmouda script description

## Filter goals (describe ('Filter goals')):
### In this describe I create beforeEach () to execute pre-condition of these test case:
#### In the precondition I’m try to log in the goals page in staff account with this input data 1- username (MohammadE), 2- password (ahmad123), 3- staff option select the go to the GOALS page in observe section to create all filter type successfully.
- In the test case #1 (it ('Filter all goals')) I’m check the all goals, topics, groups with all level (Low, High, Medium) and goals observed, not observed and expected by now only, then click to apply filter button to display these goals and then verify if the goals displayed successfully.
- In the test case #2 (it ('Filter all goals with low level')) I’m check the all goals under the low levels just, and after filter I verify if the goals under low level displayed successfully.
- In the test case #3 (it ('Filter specific goal, group and level')) I’m check the specific goal under one topic, specific group and medium level, and after filter I’m verify if the goals under this requirement displayed successfully.
- In the test case #4 (it ('Filter all goals not observed')) I’m check the all goals, topics, groups with all level (Low, High, Medium) under the goals not observed and then verify if the goals displayed successfully.
- In the test case #5 (it ('Filter without select any goal')) I’m try to filter goals without select any goals under specific topic and verify if no goals displayed and verify if the alert of (please select a goal) displayed successfully.
- In the test case #6 (It ('Filter all goals expected by now only')) I’m try to filter goals under other filter option (expected by now only) and then verify if the goals displayed successfully.
- In the test case #7 (it ('Filter all goals not observed and expected by now only')) I’m try to filter goals under other filter option (not observed and expected by now only) and then verify if the goals displayed successfully.

## Observe goals student (describe (Observe goals')):

### In this describe I create beforeEach () to execute pre-condition of these test case:
#### In the precondition I’m try to log in the goals page in staff account with this input data 1- username (MohammadE), 2- password (ahmad123), 3- staff option select the go to the GOALS page in observe section then select and filter all goals to observe and unobserved and grade student successfully.

- In the test case #8 (it ('Give grade to the whole student')) I’m try to give the grade to all goals student exist, I’m, give (5) grade to this student and then verify if the all-student goals observed with grade (5).
- In the test case #9 (it ('Unobserved all goals Observed')) I’m try unobserved all goals student observed, then verify if not goals observed.
- In the test case #10 (it ('Observe specific goal without grade')) I’m try to observe specific goals without ang grade and then verify if this goal observed successfully without ang grade.
- In the test case #11 (it ('Undo goal observed')) I’m try to observe goal then undo this goal operation of observe goal then verify if this goals undo observes successfully. 
