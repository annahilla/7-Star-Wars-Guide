# Star Wars API Data Fetching App

## Introduction

This project is a Star Wars data fetching app built with React, Redux and Tailwind CSS. The app fetches and displays information about various Star Wars ships from the Star Wars API. It features an interactive interface where users can view a list of starships and click on each to see more detailed information. The app also supports lazy loading of data, improving the performance by loading more starships only when the user scrolls to the bottom of the list.

In addition, the app includes user authentication with Firebase to allow users to log in and features protected routes, ensuring that only authenticated users can access certain pages. It also uses Storybook for developing and testing components in isolation.

## Tecnologies used

- **React:** For building the app’s interactive user interface and managing state.
- **Tailwind CSS:** For styling the components and ensuring responsive design.
- **React Router:** For handling routing between pages (e.g., list of starships and detailed view)..
- **Vercel:** For hosting and deploying the app.
- **Firebase:** For user authentication (login).
- **Storybook:** For developing, testing, and documenting UI components in isolation.

## Features

- **Starship List:** Displays a list of Star Wars ships fetched from the API.
- **Starship Detail Page:** Users can click on a starship to view detailed information about it.
- **Lazy Loading (Infinite Scroll):** More starships are loaded dynamically as the user scrolls to the bottom of the page.
- **User Login:** Firebase authentication is used to enable users to log in and save preferences.
- **Protected Routes:** Certain routes, such as user-specific pages, are protected and require the user to be logged in to access.
- **Loading Indicators:** A loading spinner is displayed while new data is being fetched.
- **Error Handling:** The app displays an error message if there’s an issue with fetching the data.
- **Responsive Design:** The app adjusts its layout to fit various screen sizes, ensuring a seamless experience across devices.
- **Storybook for Components:** All UI components are developed and tested using Storybook.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/annahilla/7-Star-Wars-Guide
   ```

2. Open folder on your code editor:

   ```bash
   cd 7-Star-Wars-Guide && code .
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

## Usage

- **View Starships:** The main page lists various starships from the Star Wars universe.
- **Click on a Starship:** Clicking on a starship name will redirect you to a detailed view page, displaying more information about the ship.
- **Scroll for More:** As you scroll down, the app will automatically fetch more starships using lazy loading.
- **Loading Indicator:** A loading spinner is shown when the app is fetching new starships.
- **Error Handling:** If there’s an issue with the API, an error message will be displayed.
