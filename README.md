## The StudySpot

## Project Description

**StudySpot** is a web application designed to provide users with an interactive platform for discovering and contributing articles on various topics. The application features user authentication, article publishing, and editing functionalities, built using modern web technologies.

### Application Features

- **User Authentication:** Allows users to sign up, log in, and manage their accounts.
- **Article Management:** Enables users to view, publish, and edit articles across categories such as Technology, Latest News, Sports, Research, Programming Languages, Gaming, Social Media, and History.
- **Dynamic Routing:** Utilizes React Router for smooth navigation between different components and pages.
- **Secure API:** Provides a secure backend API for handling user authentication, article data, and other server-side logic.

## Screenshots

### Login-form
![Screenshot 2](https://github.com/javid679/the_study_spot/blob/main/the_study_spot_MERN/screenshots/Login_form.png)


### Sign-up form:
![Screenshot 3](https://github.com/javid679/the_study_spot/blob/main/the_study_spot_MERN/screenshots/sign-up_form.png)

### Home-page:
![Screenshot 1](https://github.com/javid679/the_study_spot/blob/main/the_study_spot_MERN/screenshots/Home-page.png)


### articles:
![Screenshot 3](https://github.com/javid679/the_study_spot/blob/main/the_study_spot_MERN/screenshots/article-page.png)


### article publishing:
![Screenshot 3](https://github.com/javid679/the_study_spot/blob/main/the_study_spot_MERN/screenshots/article-publishing.png)



### Technologies Used

#### Client-Side

- **React:** Selected for its component-based architecture, which facilitates the creation of a responsive and interactive user interface.
- **React Router:** Used for client-side routing to ensure seamless navigation between pages and components.
- **Axios:** Employed for making HTTP requests to the server for authentication and data operations.
- **CSS Modules:** Applied for modular CSS styling, preventing style conflicts and improving maintainability.

**Client-Side Dependencies:**

- `axios`: For handling HTTP requests.
- `react-router-dom`: For routing and navigation.
- `cypress`: For end-to-end testing.

#### Backend-Side

- **Node.js:** Used as the runtime environment to build the server-side application.
- **Express.js:** A web application framework used to set up the API endpoints and middleware.
- **MongoDB & Mongoose:** MongoDB serves as the database for storing user information and articles, while Mongoose is used to interact with MongoDB.
- **JWT (JSON Web Tokens):** Implemented for secure user authentication and session management.
- **Bcrypt:** Used for hashing passwords before storing them in the database.
- **Cors:** To allow cross-origin requests between the client and server.
- **Dotenv:** For managing environment variables like database URIs and secret keys.

**Server-Side Dependencies:**

- `express`: Framework for building the RESTful API.
- `mongoose`: For interacting with MongoDB.
- `jsonwebtoken`: For managing authentication tokens.
- `bcrypt`: For hashing passwords.
- `dotenv`: For managing environment variables.
- `cors`: To enable cross-origin requests.
- `joi` & `joi-password-complexity`: For validating user inputs during registration and login.

### Challenges and Future Enhancements

**Challenges:**

- **Responsive Design:** Ensuring that the application layout adapts effectively to different screen sizes and zoom levels.
- **State Management:** Managing authentication and user state dynamically across various components.
- **API Security:** Ensuring that all API endpoints are secure, preventing unauthorized access.

**Future Enhancements:**

- **Enhanced User Profiles:** Introduce features to allow users to customize their profiles and track their contributions.
- **Comment System:** Implement functionality for users to comment on articles.
- **Advanced Search and Filtering:** Improve search capabilities for more precise article discovery.
- **Notification System:** Add real-time notifications for user interactions such as article updates or new comments.

## Setup Instructions

### Client-Side Setup

1. **Clone the Repository:**
   
   ```bash
   git clone <repository-url>
   
2. **Navigate to the Client Directory:**
   
   ```bash
   npm install
   
3. **Start the Client:**
   
   ```bash
   npm start   
### Server-Side Setup
1. **Navigate to the Server Directory:**

   ```bash
   cd server    
2. **Install Server-Side Dependencies:**
   
   ```bash
   npm install
3. **Set Up Environment Variables:** <br>

   - Create a `.env` file in the server directory with the following content:
   
     ```bash
     MONGO_URI=mongodb://localhost:27017/studyspot
     JWT_SECRET=your_jwt_secret
    
   - Replace your_jwt_secret with a secure key.
4. **Start the Server:**
     ```bash
     npm start
5. **Access the Server:**<br>
    The server will be accessible at http://localhost:8081.
## Notes:
- Ensure MongoDB is running before starting the server.
- For production deployment, consider using a process manager like PM2 and securing environment variables






