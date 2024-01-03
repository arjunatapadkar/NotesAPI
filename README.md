# Simple Note-Taking API

This is a RESTful API for a simple note-taking application developed using Node.js, Express.js, and MongoDB.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Overview
The Simple Note-Taking API allows users to perform CRUD operations on text notes. Each note has a title, content, and timestamps for creation and last modification.

## Features

- **Create Note:** Add a new note with a title, content, and timestamps.
- **Retrieve Notes:** Get a list of all notes or retrieve a single note by its ID.
- **Update Note:** Modify the content of an existing note.
- **Delete Note:** Remove a note from the database.
- **Data Validation:** Ensure proper validation for note creation and updating.
- **Error Handling:** Comprehensive error handling for various scenarios.
- **Documentation:** Clearly documented API endpoints with request and response details.

## Prerequisites

Before you begin, ensure you have the following:

- Node.js and npm installed.
- MongoDB server running (locally or using a cloud service like MongoDB Atlas).


## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/simple-note-taking-api.git
   cd simple-note-taking-api

2. Install dependencies:
    ```bash
    npm install

## Configuration
1. MongoDB Setup:

    - Ensure your MongoDB server is running.
    - Update the MongoDB connection string in server.js or use environment variables.

## Usage

1. start the server:
    ```bash
    npm start

2. The API will be available at http://localhost:4000 (or the specified port)


## API Endpoints

### Version 1

1. Create Note:
    - Endpoint: `POST /api/v1/createnote`
    - Request Body: `{ "title": "Note Title", "content": "Note Content" }`

2. Retrieve Notes:
    - Endpoint: `GET /api/v1/notes`
    - Optional Endpoint: `GET /notes/:id`

3. Update Note:
    - Endpoint: `PUT /api/v1/update/:id`
    - Request Body: `{ "title": "Updated Title", "content": "Updated Content" }`

4. Delete Note:
    - Endpoint: `DELETE /api/v1/delete/:id`

## Deployed Link

The API is deployed and accessible at [Your Deployed API URL](https://notes-api-one-xi.vercel.app/).



## Data Validation
Ensure that the title and content fields are provided and are of appropriate lengths.

## Error Handling
Comprehensive error handling for scenarios like invalid input, accessing or modifying non-existent notes, etc.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

