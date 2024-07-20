
---

# TeachCart Hub

This project is an eCommerce website built using the MERN stack (MongoDB, Express.js, React, and Node.js).

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (latest version)
- [npm](https://www.npmjs.com/) (latest version)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ecommerce-website.git
   cd ecommerce-website
   ```

2. Install the dependencies for both the server and client:

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Set up MongoDB:

   - Install MongoDB and start the MongoDB server.
   - Create a new database for the project.

## Configuration

Create a `.env` file in the root directory of the `server` folder and add the following environment variables:

```env
# Server
PORT=5000
MONGO_URI=<YOUR_MONGODB_URI>
JWT_SECRET=<YOUR_JWT_SECRET>
```

## Usage

1. Start the server:

   ```bash
   cd server
   npm start
   ```

2. Start the client:

   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Folder Structure

```plaintext
ecommerce-website/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── utils/
│   ├── .env
│   ├── package.json
│   └── README.md
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── README.md
├── .gitignore
├── README.md
└── package.json
```

- `client/`: React frontend application.
  - `public/`: Static assets such as images, fonts, etc.
  - `src/components/`: React components.
  - `src/pages/`: React pages.
  - `src/services/`: API service functions.
  - `src/styles/`: CSS and styling files.
  - `src/utils/`: Utility functions and helpers.
- `server/`: Node.js backend application.
  - `config/`: Configuration files.
  - `controllers/`: Express route controllers.
  - `models/`: Mongoose models.
  - `routes/`: Express routes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, feature requests, or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
