# Bugs

    seonced login in data dosen't do the "Nope" effect

    If admin, and clicked on home... it resets admin state to false! but data is still accesiple


# TODO

-[ ] Number of likes increases in the database when clicked

-[ ] Notfication when a new event is out, and email message

-[ ] If password or regnum is wrong, send an error messege for the form

# CAN'T DO

-[ ] Cookies ID session

# DONE
-[X] Loading with none stop when there is error entering values in form

-[X] Like button makes the accordion opens

-[X] Header link on hover, hovers on all of the header

-[X] custom made user auth using cookies

-[X] Safe from editing cookies to admin user (no data page will be aple to be accessed)

# Applities

- #### You can't enter data route, there is only one way which is to login with tolba's account

  - changing cookies? Nope, must wait for confirmation from the server side that was clipped with the entered password!
  - just entering /data? Nope, must be tolba him self (also there is a tricky easter egg :3)
  - fetching it simply? yeah... that works... there is no CORS resteritction until

- #### Auth works using cookies
  - Storing the regnum in cookies with 3 hours expiretion
- #### Backend is all hardcoded using Flask, and using some CloudFlare workers to scrape discord images for users

- #### Images src linkes are stored in localStorage

  - every logged in account gets it's pfp src link stored in local storage to maintain server load

- #### RegNum and Password check process are sepreted
  - The server first checks for the existance of the user, then it checks if the password is correct or not, which makes SQL payload injection almost impossible

# Easter Eggs

- #### Type "backteam" in the main page /

- #### click 9 times on any heart at /events, and then click 11 times and then 11 times

- #### click 9 times on "slide in" at login form in /dashboard, wait 5s and do it again
