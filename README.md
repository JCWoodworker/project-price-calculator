# Welcome to the Woodworking Project Management App!

Lets get started ..

## Home Page
![Home Page](https://i.imgur.com/Xu3dRQe.png)

* You will find a sponsor logo in the top-left of the app.  Clicking it will take you to the sponsor's website.  The app can be configured to any business who wishes to sponsor a version that gets distributed among their customers.
* You will also find links for "login" and "register"

![Login and Register](https://i.imgur.com/FPwOw2z.jpg)

* You can use the following test usernames to see a pre-seeded list of projects, or you can sign up and start from scratch on your own:

  | username | password |
  | --- | --- |
  | user1@test.com | test |
  | user2@test.com | test |
  | user3@test.com | test |

  * There is also an admin login:

  | username | password |
  | --- | --- |
  | admin@test.com | test |

  * [Skip to **Admin Portal**](#-admin-portal)

* After loggin in you will be taken to the **User Home Page**

## User Home Page
![User Home Page](https://i.imgur.com/BW7abJT.jpg)
### Here's what you'll see:
| Element | Description |
| --- | --- |
| [**Top Links**](#-top-links) | Takes you back to projects list, lets you edit this project's settings, or lets you delete this project |
| **Main Heading** | Shows the project name, destination (either a customer name or "website/store"), and the quantity ordered |
| **Description** | Your description of the project.  May include dimensions, woods, quotes, engravings, notes, etc... |
| [**Metrics**](#-metrics) | Auto calculations based on user settings (see METRICS table below this one for further detail) |
| **Added Wood Tiles** | These are individual tiles with woods you've added to your project including the boardfeet you need.  Boardfeet calculations change based on user settings.  Click the "X" on a tile to delete it from your project. |
| **Add Wood Section** | This is where you can choose from a list of hardwoods, enter the boardfeet you need, and add them to your project |
| **Project Images Section** | Here you can add images of your project's progress and final product.  Hovering over an image will blow it up by 2x for quick viewing. |

### Top Links:
| User Home Page Links | Description |
| --- | --- |
| **New Project** | Opens a form for adding a new project |
| **User Settings** | Links to "User Settings" page |
| **Hardwood Info** | Links to page with information on all different hardwoods |
| **Developer Info** | Links to page with info on the developer ... that's me!! |

* Under the links are all of your active projects - you can click on any one of them to go to their **Project Page**
### Metrics:
| Metric | Description |
| --- | --- |
| **Wood Cost** | Takes the cost of each hardwood, multiplies that by the boardfeet needed, and adds all hardwoods you've added together.  Boardfeet needed is automatically increased on each individual hardwood by the percentage you chose for *Wood Waste* in your *User Settings* |
| **Labor** | Shows the *Estimated Hours* you entered in the *Project Settings*, and your *Labor Rate* from your *User Settings*.  Estimated Hours is an educated guess at how many hours the entire project will take to complete. |
| **Suggested Sale Price** | ((*Wood Cost* times your *Markup*) plus (*Estimated Hours* times *Labor Rate*)) divided by the *Quantity*.  This gives you a suggested sale price for each item within the entirety of the project. |

> NOTE:  Lumber retailers use "boardfeet" when selling hardwoods.  One boardfoot = 12" x 12" x 4/4.  We describe wood thickness by the quarter, so 1" = 4 quarter (4/4), 1.5" = 6 quarter (6/4), and so on.  Boardfeet is a measure of VOLUME (length x width x height) ... for example; 6" x 12" x 8/4 is also 1bdft (One Boardfoot)

## Adding a new Project and Adjusting User Settings
![Add Project, Adjust User Settings](https://i.imgur.com/6UPaVX5.jpg)

## New Project Form Elements:
| Element | Required? | Description |
| --- | --- | --- |
| **** |  |
| **** |  |
| **** |  |
| **** |  |
| **** |  |
| **** |  |

## User Settings:
| Setting | Description |
| --- | --- |
| **Wood Waste** | Wood needs to be milled down to it's final dimensions before assembly of a project.  30% is the typical percentage of wood that is lost in this process.  If you need use 1bdft of wood in your project, you really need to order 1.3bdft.  This settings auto-increases the boardfeet needed for each wood added to a project for a more accurate representation of what you'll need to purchase, |
| **Retail Markup** | This is a percentage of markup from your total wood cost (excludes labor costs). |
| **Labor Rate** | This is the hourly rate you charge for your services |

- User settings are universal to all of your projects, but you can adjust the *Estimated Hours* on a project to increase or decrease the price without changing these settings.

## Adding Wood To A Project
![Add Wood To A Project](https://i.imgur.com/MtDDPl4.jpg)

1. Choose a hardwood from the dropdown list (you may also type the name of a wood to search for it).
2. Enter how many boardfeet you need for that specific wood in the **Bdft Needed** field.
3. Click **Add Selected ->** to add it to the staging list labeled **To Be Added**
4. You can keep adding woods to this staging list, and you may also delete woods by clicking the "X" next to each one.
5. Once you are satisfied with your additions click **Save List To Project** and your woods will be added to the project!
6. You may repeat this process whenever needed.  You cannot edit a hardwood's boardfeet once it has been added ... instead you'll just have to delete it and re-add it with your updated boardfeet.

### Some notes on adding wood:
- You'll notice that the total boardfeet needed for each wood automatically increases by the *Wood Waste* percentage you set in your *User Settings*.
- Adding and deleting hardwoods automatically updates the data in your **Metrics** section.
- An error will pop up if you click *Add Selected* and that wood is already in your *To Be Added List*.  Click "OK" to continue adding.
- A different error will pop up if you click *Save List To Project* and that wood has already been added to your project.  Click "OK" to continue adding.


## Adding Pictures To A Project
![Add Pictures to a Project](https://i.imgur.com/Y7vdSX7.jpg)
  
**From here you can sign out, and sign back in under another test user to see different projects for that specific user (or sign up for yourself and start adding your projects!!)**

## Admin Portal
![Admin Portal](https://i.imgur.com/PhXytCV.jpg)

### Admin Features

| Feature | Description |
| --- | --- |
| **Add Wood** | Add a new hardwood and bdft price to the current list |
| **Edit/Delete Wood** | Edit the pricing and/or name of a hardwood already in your list.  Delete a hardwood from the list (admin cannot delete a wood if ANY user has already added it to a project) |
| **Show Metrics** |  |
| **Email Campaign** |  |

Add Wood
  - When admin clicks "Add Wood" a box appears below with options to type a wood name and price.  Price is per boardfoot (ex .. entering "12.95"  would set the price at $12.95 per boardfoot)
  - Upon submitting the box disappears and a message appears telling you that you've successfully added the wood, and to refresh the screen.  Some refactoring is still needed until a refresh will not be necessary.
Edit/Delete Wood
  - When admin clicks "Edit/Delete Wood" a list of all woods in the hardwood database appears below
  - Each wood has a gray "x" and an "Edit" button to the left of the wood name
  - Clicking the "x" will cause a confirm box to pop up stating that you cannot delete woods that have been added to active projects by users.
    - If you click confirm the wood will either be deleted, or another pop up will tell you that it cannot be deleted since it is part of an active project
    - (This is in place so customer's won't just randomly lose woods they've added to their projects.  There will be a future feature that allows the mark these woods as "unavailable" instead)
  - Clicking "Edit" will open a form below that wood pre-filled with the name and price.
    - Admin can now edit either the name or the price of the wood.
    - Clicking "submit" instantly adds that wood to the end of the list (it does not re-alphabetize the list yet, but a refresh will re-fetch an ordered list)
Show Metrics
  - When admin clicks "Show Metrics" a list of metrics will appear below.
    - "Non-Admin Users" =  this number represents the total number of users who have signed up and have admin set to false
      - All users who sign up automatically have admin set to false.  Dev must designate a user as admin for now.
    - "Active Projects" = This number represents the total number of active projects between all users
    - "Top Woods Needed" = This shows a chart with that takes all the woods that have been added to projects and adds up the total boardfeet needed for each type of hardwood.  Admin now has a visualization of what woods their customers need most, and can be use it when deciding what to order.  Another future feature will include weekly charts so admins can see how customers' needs are changing week to week!
  

UPCOMING FEATURES!!!
* Admin will be able to do the following:
  - View a weekly chart of woods added to projects to better predict ordering needs (rather than the current chart which shows woods added from all-time data)
  - Instant message with online users who have questions
  - Post messages to their users' home page.  This can be used for updated on pricing, deliveries, events, etc...
  
          



