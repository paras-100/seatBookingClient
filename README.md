# Seat Booking Application

A full-stack Next.js application for booking train seats with specific booking rules and real-time seat availability.

## Features

- **User Authentication**

  - Sign up with name, email, and password
  - Login with email and password
  - Protected routes for authenticated users

- **Seat Booking System**

  - Visual representation of 80 seats (7 seats per row, last row with 3 seats)
  - Real-time seat availability status
  - Maximum 7 seats per booking
  - Smart seat allocation:
    - Priority booking in the same row
    - Nearby seat allocation if same row is unavailable
  - Special handling for the last row (3 seats only)

- **Interactive UI**
  - Responsive design for all screen sizes
  - Loading states and animations
  - Color-coded seat status
  - Real-time booking updates

## Tech Stack

### Frontend

- Next.js 15.3.0
- React 19.0.0
- Redux Toolkit for state management
- TailwindCSS for styling
- Axios for API calls

### Backend

- Node.js with Express
- PostgreSQL with Sequelize ORM
- JWT for authentication

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database server running
- Git (optional)

### Environment Setup

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd sde-1
   \`\`\`

2. Frontend Setup (client folder):
   \`\`\`bash
   cd client
   npm install
   \`\`\`

Create a .env file in the client directory:
\`\`\`env
NEXT_PUBLIC_SERVER_CON=http://localhost:5000
\`\`\`

3. Backend Setup (server folder):
   \`\`\`bash
   cd ../server
   npm install
   \`\`\`

Create a .env file in the server directory:
\`\`\`env
PORT=5000
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret
\`\`\`

### Running the Application

1. Start the backend server:
   \`\`\`bash
   cd server
   npm run dev
   \`\`\`

2. Start the frontend development server:
   \`\`\`bash
   cd client
   npm run dev
   \`\`\`

The application will be available at [http://localhost:3000](http://localhost:3000)

## Usage

1. **Authentication**

   - Create a new account using the Sign Up page
   - Login with your credentials
   - You'll be automatically redirected to the booking page

2. **Booking Seats**

   - Enter the number of seats you want to book (max 7)
   - Click "Book" to automatically allocate seats
   - The system will try to book seats in the same row
   - If not possible, it will allocate nearby seats
   - Last row is limited to 3 seats only

3. **Seat Legend**
   - Green: Available seats
   - Blue: Selected seats
   - Yellow: Last row seats (limited to 3)

## Deployment

### Frontend

The frontend can be deployed on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy

### Backend

The backend can be deployed on any Node.js hosting platform:

1. Set up your PostgreSQL database
2. Configure environment variables
3. Deploy the Node.js application

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
