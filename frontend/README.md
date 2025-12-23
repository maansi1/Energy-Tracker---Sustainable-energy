# Energy Tracker Frontend

A simple and clean React frontend for the Sustainable Energy Usage Tracker application, built with Tailwind CSS.

## Features

- 🏠 **Homepage** - Landing page with feature overview
- 👤 **User Registration & Login** - Support for Homeowners, Providers, and Admins
- 📊 **User Dashboard** - Track energy consumption, link devices, view stats
- 👨‍💼 **Admin Panel** - Validate and manage user registrations
- 🏢 **Provider Dashboard** - Create and manage energy-saving recommendations
- 📈 **Energy Reports** - View detailed monthly energy consumption reports
- 🔍 **Services** - Browse and filter energy services by location and sustainability level

## Setup Instructions

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── Homepage.jsx          # Landing page
│   │   ├── Login.jsx              # Login page
│   │   ├── Register.jsx           # Registration page
│   │   ├── UserDashboard.jsx     # Homeowner dashboard
│   │   ├── AdminPanel.jsx         # Admin user validation
│   │   ├── ProviderDashboard.jsx  # Energy provider dashboard
│   │   ├── EnergyReports.jsx      # Energy consumption reports
│   │   └── Services.jsx           # Service browsing with filters
│   ├── App.jsx                    # Main app with routing
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Tailwind CSS imports
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Technologies Used

- **React 18** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## User Types

1. **Homeowner** - Can track energy usage, view reports, and browse services
2. **Energy Provider** - Can create and send energy-saving recommendations
3. **Admin** - Can validate and approve user registrations

## Notes

- This is a frontend-only implementation with mock data
- No backend integration is included
- All routing and navigation is handled client-side
- Simple state management using React hooks

