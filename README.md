# Travlr Getaways - Full Stack Web Application (SNHU-CS465)
 
# This is a full stack travel booking web application developed as part of the CS-465 Full Stack Development course at Southern New Hampshire University (SNHU). The application allows users to view available trip packages on a customer-facing site and includes a secure, admin-only single-page application (SPA) for managing trips.
 
## Technologies Used
 
- **Frontend (Customer Side):**
  - Express.js with Handlebars (HBS)
  - HTML, CSS, JavaScript
 
- **Frontend (Admin Side):**
  - Angular SPA
  - Bootstrap CSS
 
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (NoSQL)
  - Mongoose (ODM)
  - JSON Web Tokens (JWT) for authentication
 
---
 
## Architecture
 
The project uses two types of frontends:
 
- **Express HTML with Handlebars** for the static, customer-facing site. This renders pages server-side and serves content to users directly.
- **Angular SPA** for the dynamic admin interface. This client-side application offers a smoother user experience with reusable components, routing, and in-browser interactivity.
 
Using MongoDB as a NoSQL database provides schema flexibility, which is ideal for storing documents such as trip data that may change over time or require rapid iteration during development.
 
---
 
## Functionality
 
- **Customer Side:**
  - View a list of travel packages
  - Access trip details
 
- **Admin Side (SPA):**
  - Secure login with JWT authentication
  - View, edit, add, and delete trips
  - Responsive UI with reusable Angular components
 
- **JSON Integration:**
  - JSON is used for backend API responses and for frontend services to consume and render dynamic content.
  - JSON serves as the data bridge between frontend (Angular) and backend (Node/Express).
 
Throughout development, multiple components were refactored to improve performance and maintainability, especially within Angular. Reusable UI components (like trip cards and forms) increased code reusability and reduced duplication.
 
---
 
## Testing
 
API endpoints were tested using **Postman** to verify correct request/response behavior for `GET`, `POST`, `PUT`, and `DELETE` operations. Special attention was paid to authenticated routes requiring JWT tokens.
 
Front-end testing was done manually by logging into the SPA, verifying CRUD functionality, and inspecting API responses. Angular’s route guards and HTTP interceptors were used to protect secure routes and attach tokens automatically.
 
---
 
## Reflection
 
This project has significantly strengthened my understanding of full stack development and the MEAN stack. I’ve gained hands-on experience designing application architecture, working with MongoDB schemas, building REST APIs, integrating Angular SPAs, and implementing secure authentication with JWTs.
 
I now feel more confident building full stack applications professionally and look forward to leveraging these skills in future software engineering roles.
 
---
 
## How to Run Locally
 
1. Clone the repository
2. Navigate into the `travlr/` directory
3. Run `npm install` to install backend dependencies
4. Start MongoDB on your local machine
5. Run `npm start` to launch the Express server
6. Navigate to `travlr/admin` to use the Angular SPA (served from `dist/` after Angular build)
