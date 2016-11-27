# code-samples

Full Stack Code Samples by Samantha Ortiz - Full Stack Engineer.

*NOTE: This repository is for code demonstration only. This is not a fully functioning appliction, as it contains only portions of the original application.* 

### JS and Frontend
The frontend and JavaScript folder contains portions of a larger React/Redux application, Here We Go. Below are the files with explainations of their functionalities.

- **main.js** uses React Router to connect various paths to their respective components.

- **store.js** holds the default state for each reducer, and applies Thunk middleware to enable the action creators to complete their state-changing functionality.

- The **actionsAndReducers** folder contains the following files:
    - **hotelItinAction**, the action creator file that executes a post request via Axios, a promised-based HTTP client, then hydrates the application with the response object data containing hotel itinerary information.
    - **hotelItinReducer**, the reducer file that is triggered by the above action creator. It updates the state for the hotel itinerary.
    - **rootReducer** combines all reducers for the application, including the above hotelItinReducer, and allows them to route their data via React Router Redux.

- The **components** folder contains the following files:
    - **AppComponent**, the main entry point for the application.
    - **ReactReduxMasterComponent**, the main connection to map state to props and map dispatch to props via the action creators throughout the entire applicaiton.
    - **DashboardComponent**, a higher level component that structures the entire application.
    - **ItineraryComponent** is rendered in the above Dashboard Component. It structures the entire itinerary. It contains a method to move flights, hotels, car rentals and activities from saved to booked, and vice versa. It then updates the state of the application by calling the action creators, including postHotelItin, which is contained in the hotelItinAction file.
    - **HotelItinComponent** is rendered within the above Itinerary component for every instance of a hotel reservation. This component contains methods to change the booked/saved status of each item, as well as a change date function to manipulate how the date is displayed to the user. 

### DB and Backend
The db and backend folder contains portions of Here We Go on the server-side. Below are the files with explainations of their functionalities.

- **server.js** is a simplified version of the main app's main express server file.

- **fullDBSchema** utilizes Knex, an SQL query and schema builder for node.js applicaitons. This file contains the full schemas for the entire application.

- The **models** folder contains the hotel and itinerary database model structures.

- The **collections** folder contains the hotels and itineraries collection structures.

- The **routes** folder contains the following files:
    - **dbRoutes.js** contains two methods using Knex to manipulate the hotel itinerary data in the database. These functions are triggered by the client on the front end using the actions defined in the above Frontend files.
    - **router.js** is a simplified version of the main app's express router file. It calls post requests using the above methods.