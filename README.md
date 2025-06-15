# Expense Tracker App

A modern mobile application built with React Native and Expo that helps users track their expenses and manage their finances effectively.

## Features

- Track daily expenses with categories and tags
- Visualize spending patterns with charts and graphs
- Secure authentication using Firebase
- Offline support with local storage
- Modern and intuitive UI with smooth animations
- Dark/light theme support
- Expense categorization and filtering
- Monthly/weekly spending analysis

## Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router
- **UI Components**: React Native Elements, Phosphor Icons
- **Data Visualization**: React Native Gifted Charts
- **Backend**: Firebase
- **State Management**: Custom Contexts
- **Storage**: AsyncStorage
- **UI Effects**: Expo Blur, Haptics

## Project Structure

```
expense-tracker-app/
├── app/              # Main app routes and screens
├── components/       # Reusable UI components
├── config/          # Configuration files
├── constants/       # Application constants
├── contexts/        # React Context providers
├── services/        # Backend service integrations
├── utils/           # Utility functions
├── types.ts        # TypeScript type definitions
└── assets/         # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Expo CLI
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Create a `.env` file with your Firebase configuration
4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

### Running the App

- Run on Android:
  ```bash
  npm run android
  # or
  yarn android
  ```
- Run on iOS:
  ```bash
  npm run ios
  # or
  yarn ios
  ```
- Run on Web:
  ```bash
  npm run web
  # or
  yarn web
  ```

## Development

- Run tests:
  ```bash
  npm test
  # or
  yarn test
  ```
- Run linter:
  ```bash
  npm run lint
  # or
  yarn lint
  ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Expo Router for navigation
- Firebase for backend services
- React Native community for components and libraries
