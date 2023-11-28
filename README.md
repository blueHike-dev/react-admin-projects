# Project Title

JWT Authentication with CrptoJS

## Overview

This project is a full-stack application that utilizes JWT-based authentication for secure user access.

### Technologies Used

- Backend: Node.js, Express, MongoDB
- Frontend: React, Redux, Axios

## Backend

### Installation

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies using `npm install`.
4. Set up environment variables (e.g., PORT, MongoDB connection URL).

### Configuration

- Create a `.env` file and specify variables like `PORT`, `DB_URL`.

### Usage

- Run `npm start` to start the backend server.
- Access endpoints like `/login`, `/register`, `/data` to interact with the API.

### Authentication

- JWT tokens are generated upon successful login and used for subsequent requests.

## Frontend

### Installation

1. Navigate to the `frontend` directory.
2. Install dependencies using `npm install`.

### Configuration

- Update API endpoints in the configuration file (e.g., `src/config.js`).

### Usage

- Run `npm run dev` to launch the frontend application.
- Navigate through the UI to access various features.
- Login/register functionalities interact with the backend API.

### Authentication

- Frontend stores JWT tokens locally and sends them in requests to access protected routes.

## Additional Information

- For contributions, please follow the CONTRIBUTING.md guidelines.
- Troubleshooting tips can be found in TROUBLESHOOTING.md.

### License

This project is licensed under the [blueHike] - see the LICENSE.md file for details.
