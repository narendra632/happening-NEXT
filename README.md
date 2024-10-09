# Codement-next

You can view the current test hosted version at [https://cvevents.vercel.app/](https://cvevents.vercel.app/).

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn or pnpm or bun

### Setup

1. Fork and clone the repository:

   ```bash
   git clone https://github.com/your-username/cvevents.git
   cd cvevents
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following environment variables:

   ```
   # MongoDB
   MONGODB_URI=your_mongodb_connection_string

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   WEBHOOK_SECRET=your_clerk_webhook_secret

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   # Uploadthing
   UPLOADTHING_SECRET=your_uploadthing_secret
   UPLOADTHING_APP_ID=your_uploadthing_app_id
   ```

   Replace the placeholder values with your actual credentials.

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

- `MONGODB_URI`: Connection string for your MongoDB database.
- Clerk Authentication keys:
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Public key for Clerk authentication.
  - `CLERK_SECRET_KEY`: Secret key for Clerk authentication.
  - `WEBHOOK_SECRET`: Webhook secret for Clerk events.
- Uploadthing keys:
  - `UPLOADTHING_SECRET`: Secret key for Uploadthing file uploads.
  - `UPLOADTHING_APP_ID`: App ID for Uploadthing.

These keys are essential for connecting to the database, setting up authentication, and enabling file uploads in the application.

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) - UI component library with native Tailwind CSS support
- [uploadthing](https://uploadthing.com/) - File uploads for Next.js projects
- [Clerk](https://clerk.com/) - Authentication and user management
- [MongoDB](https://www.mongodb.com/) - Database

## Additional Setup

### shadcn/ui Components

The project uses the following shadcn/ui components:

- Button: `npx shadcn-ui@latest add button`
- Sheet: `npx shadcn-ui@latest add sheet`
- Separator: `npx shadcn-ui@latest add separator`

### Clerk Authentication

Clerk is used for easy signup/login using Google. The setup includes:

1. Wrapping the HTML layout with ClerkProvider
2. Creating the `middleware.ts` file
3. Installing svix: `npm install svix` (used for Clerk webhook)

## Learn More

To learn more about the technologies used in this project, please refer to their official documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Uploadthing Documentation](https://docs.uploadthing.com/)
- [Clerk Documentation](https://clerk.com/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)

## Deployment

The project is currently deployed on Vercel. For more information on deploying Next.js apps, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).