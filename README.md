# React Landing Page

This project is a React-based landing page that includes various features such as two-factor authentication, Google Analytics, Hotjar integration, SEO optimizations, and Progressive Web App (PWA) capabilities. The application is designed to provide a user-friendly experience while allowing users to manage their profiles effectively.

## Features

- **Two-Factor Authentication**: Enhances security during user login and registration.
- **Google Analytics**: Tracks user interactions and provides insights into user behavior.
- **Hotjar**: Analyzes user behavior through heatmaps and session recordings.
- **SEO Optimization**: Implements best practices for search engine optimization.
- **Progressive Web App (PWA)**: Provides offline capabilities and a native app-like experience.
- **Profile Management**: Users can manage their profiles, including:
  - Avatar
  - Biography
  - Social Links
  - Skills
  - Experience
  - Certifications
  - Education
  - Projects
  - Publications
  - Blog Posts

## Project Structure

```
react-landing-page
├── public
│   ├── index.html
│   ├── manifest.json
│   └── service-worker.js
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── TwoFactorAuth.jsx
│   │   ├── Analytics
│   │   │   ├── GoogleAnalytics.jsx
│   │   │   └── Hotjar.jsx
│   │   ├── Profile
│   │   │   ├── Avatar.jsx
│   │   │   ├── Bio.jsx
│   │   │   ├── SocialLinks.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Publications.jsx
│   │   │   └── BlogPosts.jsx
│   │   ├── SEO.jsx
│   │   └── PWA.jsx
│   ├── context
│   │   └── AuthContext.js
│   ├── hooks
│   │   └── useAnalytics.js
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Profile.jsx
│   │   └── LoginRegister.jsx
│   ├── services
│   │   ├── api.js
│   │   └── authService.js
│   ├── styles
│   │   ├── App.css
│   │   └── Profile.css
│   ├── App.jsx
│   ├── index.js
│   └── setupTests.js
├── .env
├── package.json
├── README.md
└── tsconfig.json
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd react-landing-page
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.