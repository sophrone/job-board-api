# Job Board API

## Overview

The Job Board API is a RESTful API designed to facilitate job postings and user management for a job board application. It allows users to register, log in, and manage job listings.

## Features

- User registration and authentication
- Job posting and management
- User role management
- Secure token-based authentication

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Drizzle ORM
- Jest (for testing)

## Installation

1. **Clone the repository:**

   git clone `https://github.com/sophrone/job-board-api.git`

2. **Navigate to the project directory:**

   cd job-board-api

3. **Install dependencies:**

   npm install

4. **Set up the database:**

   - Create a PostgreSQL database and update the database connection configuration in `db.js`.

5. **Run migrations (if applicable):**

   # Add migration commands here, if using a migration tool

6. **Start the server:**

   npm start

## API Endpoints

### User Registration

- **POST** `/api/register`
  - Request Body:
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string"
    }
    ```

### User Login

- **POST** `/api/login`
  - Request Body:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

### Job Management

- **POST** `/api/jobs`

  - Request Body:
    ```json
    {
      "title": "string",
      "description": "string",
      "company": "string",
      "location": "string"
    }
    ```

- **GET** `/api/jobs`
  - Returns a list of all job postings.

## Testing

Run tests using Jest:

npm test

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or inquiries, please contact [Sophrone](mailto:victordev73@gmail.com).

### Customization Notes

- **Repository Link**: `https://github.com/sophrone/job-board-api.git`
