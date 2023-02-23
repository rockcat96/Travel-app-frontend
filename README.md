 # Travel Bucket List

This app allows the user to keep a running a list of all the countries they want to visit. The app help users remember which country they want to visit and capture the basic info of a destination such as the best month to visit, number of days to visit, etc to help them plan their travels for the year. Users will be able to add, edit, update and delete countries from their database as they see fit.


 ### Tech Stack

| Tech used | Description |
|-----|------|
| Database | PostgreSQL|
| Backend | Django|
| Frontend | React |
| Deployment | Render and Netlify |
| Wireframe | Mockflow |


 ### Frontend Wireframe

 ![wireframe1](https://i.imgur.com/NnbAKcB.png)
 ![wireframe2](https://i.imgur.com/LVj83bt.png)

 ### App Images
 Coming soon...
 <!-- ![app screenshots 1](https://i.imgur.com/ndwzPiR.png)
 ![app screenshots 2](https://i.imgur.com/rJRVrtr.png)
 ![app screenshots 3](https://i.imgur.com/s2YfoZa.png)
 ![app screenshots 4](https://i.imgur.com/OYWUwFx.png)
 ![app screenshots 5](https://i.imgur.com/0pF80aw.png) -->

### Backend Schema
| Schema | Data Type   | Defintion   |
|-----|------|-----|
| name | varchar | Name of the country   |
| cities | varchar | Name of the city  |
| month | varchar | Best month to visit the destination    |
| days | int | Number of days to visit   |
| url | URL | Url of the country image |


### Backend Route Table


| Name | URL | HTTP Verb | Description |  
|-----|------|-----|------|
| Index | /countries/ | Get | Display a list of countries|
| Show | /countries/:id/ | Get | Display a specific country|
| Create | /countries | POST | Add a new country|
| Update | /countries/:id | PUT | Update a country |
| Delete | /countries/:id | DELETE | Delete a country |


#### Link to Frontend
[Project Website](https://charming-creponne-cea4b6.netlify.app/)

#### Link to Backend
[Backend Api](https://travel-app-backend-v9eb.onrender.com/countries/)

#### Link to Planning Trello Board
[TRELLO BOARD](https://trello.com/invite/b/9WKqFaBN/ATTIb532bebbf1162c5d4822f09258beb444B83DF217/travel-bucket-list-app)

####  Getting Started
Coming soon...

<!-- - Click on "create new menu items" button to add new menu items to your menu!
- To learn more about an item, tap on the image of the item.
- To delete an item, click on the item and then tap the delete button.
- To edit an item, click on the item and then tap the edit button. This will navigate you to the edit page. Then edit the item and click the update button to make changes to the menu item. -->