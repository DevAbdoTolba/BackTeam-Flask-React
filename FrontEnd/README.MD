# Bugs

    seonced login in data dosen't do the "Nope" effect

# TODO

-[ ] Number of likes increases in the database when clicked

-[ ] Notfication when a new event is out, and email message

# CAN'T DO

-[ ] Cookies ID session

# DONE

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
