# Authentication Project Deployment Guide

Follow these steps to ensure your frontend and backend communicate correctly after deployment.

## Backend setup
1.  **CORS**: Already added to `app.js`. It allows the frontend to make requests.
2.  **Database**: Ensure your `DB_HOST`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME` are set in your production environment variables.

## Frontend setup
1.  **Environment Variables**: Create a `.env` file in the `Frontend` directory (locally) or add it to Vercel Settings.
2.  **API URL**: Set `VITE_API_URL` to your backend's live URL.
    - Example: `VITE_API_URL=https://your-backend.up.railway.app`
3.  **Code usage**: The app automatically uses this variable in `Login.jsx` and `SignUp.jsx`.

## Deployment on Vercel
Your `vercel.json` is configured to handle both Frontend and Backend. If you deploy this entire folder to Vercel, it will:
- Routes starting with `/api` will be handled by `Backend/app.js`.
- Other routes will serve the React app.

In this "Full Stack on Vercel" setup, you can leave `VITE_API_URL` empty in the Vercel dashboard, and it will use relative paths automatically.
