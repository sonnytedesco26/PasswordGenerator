# PasswordGenerator
LINK:
https://sonnytedesco26.github.io/PasswordGenerator/

For this project, the goal was to create a password generator where the users could specify the criteria of which characters to inclue in the randomly generated password (whether to include lowercase, uppercase, numbers, and/or special characters)

## Page

![Page](/assets/images/page.png)

The page presents the user with checkboxes they can check depending on what type(s) of characters to include in the randomly generated password. Next to the checkboxes is the password length field, which is a number input field. The placeholder in it lets the user know that the length must be between 8 and 128 characters.

![MediaPage](/assets/images/mediapage.png)

The css has been adjusted so that the box will present the input fields in a column like fashion, so that it will always be usable/readable regardless of window size.

## Javascript and error handling

The first issue with the javascript specifically was the fact that the length would always be 1 character longer than what was specified by the user. This is because the for loop used to randomly generate the password from the chars string (which is generated based on which checkboxes are checked) is written such that the randomNumber variable would always be #1. This was fixed when the passwordLength variable initialization was adjusted to make it - 1 from the get-go.

The next issue came when the user would not put anything into the length input. If a checkbox was checked without the length being specified, it would default to 1 (again, because of the for loop). The user ALSO had the ability to simply type in any number of their choice despite a min/max field being in the html for said input box. Both of these issues however, were fixed with the additions of an if/if else statement in the js script.

![errorhandle](/assets/images/errorhandle.png)

If using case when chars was an empty string before the other if statements checking the checkboxes, it would always give an alert regardless. By placing it at the end right before the for loop, it gives the checkboxes priority. The if else afterwards is for when the user screws up the length input (the fact it checks for less than 7 is because of the -1 on the passwordLength variable). They are then given alert forcing them to put in the right length, while the password length is reset to -1, in order to account for the +1 in the for loop.

![alert](/assets/images/alert.png)