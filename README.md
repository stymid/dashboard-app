# Dashboard App

A **Dashboard App** where users can create accounts (using credentials or OAuth providers), manage customers, and assign invoices to them. Invoices are summarized on the **Dashboard** page. This project is based on the **Next.js Learn Course**, the official Next.js 14 tutorial by Vercel, and serves as a showcase of developer skills.

**[Visit the official tutorial page](https://nextjs.org/learn)**.

Check out the live version of the project by clicking **[here](#)**.

## Features

This project is a **Single Page Application (SPA)** with **client-side navigation** and includes the following pages:

- **Dashboard**: Displays a summary of all invoices.
- **Invoices**: Provides a detailed list of invoices with search, create, edit, and delete functionalities. Includes pagination.
- **Customers**: Lists all customers with a search bar. Pagination is available in the latest version.
- **Dark Theme**: Automatically adapts to the user's browser theme using Tailwind CSS.

### Key Highlights (Version 2.0)

- **Multi-user system**: Supports multiple user accounts for managing invoices and customers.
- **OAuth Authentication**: Enables sign-in with credentials or third-party OAuth providers.
- **Pagination**: Improves scalability by adding pagination to the customers' list.
- **Dark Theme**: Automatically switches between light and dark modes based on browser settings.

## Technologies Used

- **Next.js**: Framework for building React-based applications.
- **NextAuth.js**: Handles authentication with credentials and OAuth providers.
- **Tailwind CSS**: Provides styling with dark mode support.
- **PostgreSQL**: Database for storing user data, invoices, and customers.
- **bcrypt**: Hashes passwords securely before storage.
- **Zod**: Validates server-side input.
- **React**: Front-end library for creating dynamic user interfaces.

## Setup Instructions

### Prerequisites

- **Node.js** (v16+ recommended)
- **PostgreSQL**: A running PostgreSQL instance (local or cloud-based, e.g., Heroku, AWS, or Supabase).

### Step 1: Install Dependencies

Run the following command to install the required packages:

```bash
pnpm install
```

### Step 2: Configure Environment Variables

Create a `.env` file in the project root and add the following variables:

```bash
POSTGRES_URL=<Your PostgreSQL Connection String>
AUTH_SECRET=<Your JWT Secret Key>
```

You can generate a JWT secret using a tool like [jwt.io](https://jwt.io).

### Step 3: Seed the Database

Seed the database with sample users, invoices, customers, and revenue data:

```bash
pnpm run seed
```

### Step 4: Run the Development Server

Start the development server:

```bash
pnpm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to access the app.

## Directory Structure

- `/app`: Contains the main application files and API routes.
- `/seed`: Contains the logic for seeding the database with sample data.
- `/auth`: Contains authentication logic and configuration.
- `/dashboard`: A protected route that users can access once logged in.

## License

This project is based on the official Next.js 14 tutorial by Vercel and is intended for educational purposes. It is not open source and is not meant for commercial use.
