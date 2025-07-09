# Full-Stack Item Management App (Flask + Next.js)

This is a full-stack web application designed to manage a list of items. It features a RESTful API backend built with Python (Flask) and a responsive frontend built with Next.js and Material-UI.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
  - [Backend (Flask API)](#backend-flask-api)
  - [Frontend (Next.js App)](#frontend-nextjs-app)
- [API Endpoints](#api-endpoints)
- [Running Tests](#running-tests)

## Features
-   **View All Items**: The homepage displays a list of all available items from the database.
![homepage](https://github.com/user-attachments/assets/66419cd3-e9ea-4879-87ab-5ec5f6dd70b1)

-   **View Item Details**: Click on an item to see its dedicated page with full details.
![view-item](https://github.com/user-attachments/assets/d0070ebd-17a0-4045-815b-a573731c8e82)

-   **Create New Items**: A user-friendly form allows for the creation of new items with validation.
![create-item](https://github.com/user-attachments/assets/fd5b5873-0bdd-4c74-a758-43ea4e15d158)

-   **Update Items**: Edit the details of an existing item.
![update-item](https://github.com/user-attachments/assets/d1ea1edd-d00f-4b27-ac8e-ccd1e3bf0d44)

-   **Delete Items**: Remove an item from the database.
![delete-item](https://github.com/user-attachments/assets/b0851f0b-8219-40ed-af9c-459853c8d6a2)


## Tech Stack

### Backend
-   **Python 3.11.9**
-   **Flask**: A micro web framework for Python.
-   **Flask-SQLAlchemy**: For database interaction with SQLite.
-   **Flask-Cors**: To handle Cross-Origin Resource Sharing (CORS) with the frontend.
-   **Pytest**: For unit testing the API endpoints.

### Frontend
-   **Next.js**: A React framework for production.
-   **React.js**: A JavaScript library for building user interfaces.
-   **Material-UI (MUI)**: For a clean and responsive component library.
-   **Fetch**: For making HTTP requests to the backend API.
-   **Zod**: For schema declaration and validation on the frontend.
-   **Jest**: For unit and component testing.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites
-   **Node.js & npm**
-   **Python & pip**
-   **Git**

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <project-folder-name>
    ```

2.  **Set up the Backend (Python/Flask):**

    *   Navigate to the backend directory:
        ```bash
        cd backend
        ```

    *   **Create and activate a virtual environment.** This creates an isolated environment for your Python packages so they don't interfere with other projects.

        *   **On macOS/Linux:**
            ```bash
            python3 -m venv venv
            source venv/bin/activate
            ```
        *   **On Windows:**
            ```bash
            python -m venv venv
            .\venv\Scripts\activate
            ```
        You'll know it's active when you see `(venv)` in your terminal prompt.

    *   **Install the Python dependencies** from the provided `requirements.txt` file:
        ```bash
        pip install -r requirements.txt
        ```

3.  **Set up the Frontend (Next.js):**

    *   Navigate to the frontend directory from the project root:
        ```bash
        cd frontend
        ```
        *(If you are already in the `backend` folder, use `cd ../frontend`)*

    *   **Install the Node.js dependencies:**
        ```bash
        npm install
        ```

## Running the Application

You will need two separate terminal windows to run both the backend and frontend servers simultaneously.

### Backend (Flask API)

1.  Open a terminal and navigate to the project's root directory.
2.  Activate the virtual environment if it's not already active (see setup steps above in the `backend` directory).
3.  Set the Flask application environment variable. This tells Flask where your application is located.
    *   **On macOS/Linux:**
        ```bash
        export FLASK_APP=backend
        export FLASK_DEBUG=1 # Optional: enables debug mode
        ```
    *   **On Windows (Command Prompt):**
        ```bash
        set FLASK_APP=backend
        set FLASK_DEBUG=1
        ```
    *   **On Windows (PowerShell):**
        ```bash
        $env:FLASK_APP = "backend"
        $env:FLASK_DEBUG = "1"
        ```
4.  **Initialize the database.** This command will create the SQLite database file and tables.
    ```bash
    flask init-db
    ```
5.  **Run the Flask server:**
    ```bash
    flask run
    ```
    The API is now running.

### Frontend (Next.js App)

1.  Open a **second** terminal and navigate to the `frontend` directory.
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
3.  Open your browser and go to `http://localhost:3000` to see the application in action.

## API Endpoints

The backend provides the following RESTful endpoints:

| Method | Endpoint              | Description                               |
| :----- | :-------------------- | :---------------------------------------- |
| `GET`  | `/api/items`          | Retrieves a list of all items.            |
| `POST` | `/api/items`          | Creates a new item.                       |
| `GET`  | `/api/items/<id>`     | Retrieves a single item by its ID.        |
| `PUT`  | `/api/items/<id>`     | Updates an existing item by its ID.       |
| `DELETE`| `/api/items/<id>`     | Deletes an item by its ID.                |

## Running Tests

### Backend Tests (Pytest)

1.  Navigate to the `backend` directory.
2.  Ensure your virtual environment is active.
3.  Run the tests using `pytest`:
    ```bash
    pytest tests
    ```

### Frontend Tests (Jest)

1.  Navigate to the `frontend` directory.
2.  Run the test script:
    ```bash
    npm test
    ```
