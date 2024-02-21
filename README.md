# React---6
User Management Application
---------------------------

This is a simple User Management Application built using React.js. It allows users to perform CRUD (Create, Read, Update, Delete) operations on user data stored in a mock API.

### Features:

*   **View Users**: Displays a list of users including their name, gender, phone number, and actions to edit or delete.
*   **Add User**: Enables users to add new users with details including name, gender, phone number, email, and avatar.
*   **Edit User**: Allows users to edit existing user details.
*   **Delete User**: Enables users to delete user records from the system.

### Components:

1.  **NavBar Component**:
    
    *   Navigation bar for easy navigation across the application.
    *   Provides links to the Home page and Add User page.
    *   Stylishly designed using Bootstrap classes.
2.  **UserDetail Component**:
    
    *   Displays a table of users fetched from the mock API.
    *   Allows users to edit or delete individual user records.
    *   Utilizes Axios for HTTP requests and React Hooks for state management.
3.  **Add Component**:
    
    *   Provides a form to add a new user to the system.
    *   Users can input details including name, gender, phone number, email, and upload an avatar image.
    *   Implements form validation and submits the data to the mock API using Axios.
4.  **Edit Component**:
    
    *   Allows users to edit existing user details.
    *   Fetches the user data based on the user ID and pre-populates the form fields.
    *   Users can update the details and submit the changes to the mock API.

### Technologies Used:

*   React.js: JavaScript library for building user interfaces.
*   Axios: Promise-based HTTP client for making requests to the API.
*   React Router: Provides routing capabilities for navigation within the application.
*   Bootstrap: Front-end framework for styling and layout.
*   React Toastify: Library for displaying notification messages.

### How to Run:

1.  Clone the repository to your local machine.
2.  Navigate to the project directory in your terminal.
3.  Install dependencies using `npm install`.
4.  Start the development server with `npm start`.
5.  Access the application in your web browser at `http://localhost:5173`.
