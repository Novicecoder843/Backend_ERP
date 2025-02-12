# Backend_ERP
ERP Backend Project In node

Task 1 -
Objective:
Develop a User Management API with full CRUD (Create, Read, Update, Delete) functionality using Node.js, Sequelize ORM, and MySQL/PostgreSQL as the database.

Requirements
1. Project Setup
Initialize a Node.js project using npm init -y
Set up Express.js as the web framework
Configure Sequelize ORM with either MySQL or PostgreSQL
Use dotenv for environment variables
2. Database & ORM Configuration
Configure Sequelize to connect with MySQL/PostgreSQL
Set up Sequelize models and migrations for the User entity
3. API Endpoints
Develop the following 5 APIs for User CRUD Operations:

Create User (POST /users)

Accepts user data (name, email, password, etc.)
Validates input before storing
Hashes passwords before saving (use bcrypt)
Returns the created user
Get All Users (GET /users)

Fetches and returns a list of all users
Supports pagination (optional)
Filters based on query parameters (optional)
Get User by ID (GET /users/:id)

Fetches details of a single user
Returns user data if found, otherwise returns a 404 error
Update User (PUT /users/:id)

Updates user information (except password)
Validates input before updating
Returns the updated user data
Delete User (DELETE /users/:id)

Soft delete the user (optional) or hard delete
Returns success response upon deletion