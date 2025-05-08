# Lab 10: Multiple Pages in React

In this lab, you will enhance the FilmLibrary application by adding support for multiple pages using React Router. Additionally, you will implement inline editing for some film properties.

## Objectives

1. **Enable Routing through React Router**:
   - Add multiple routes to the FilmLibrary application.
   - Use React Router to manage navigation between pages.

2. **Manipulate Film Properties Inline**:
   - Allow users to modify specific film properties directly from the main page.

## Tasks

### 1. Enable Routing through React Router

- Update the FilmLibrary application to include the following routes:
  - **Add Film Route**: Display the form for adding a new film in a separate route.
  - **Edit Film Route**: Display the form for editing an existing film in a separate route (reuse the form component).
  - **Filter Routes**: Implement each filter as a separate route.
- Ensure the application detects the current filter from the URL and applies it automatically when the page loads.
- Maintain the main graphical components (navigation bar, sidebar with filters, and main content) across all routes.
- Hide the `+` button for adding new films in the routes for adding or editing a film.

### 2. Manipulate Film Properties Inline

- Implement inline editing for the following film properties:
  - **Favorite Status**: Allow users to toggle a film's favorite status by clicking a checkbox.
  - **Rating**: Allow users to change a film's rating by clicking on a specific star (e.g., clicking the fourth star sets the rating to 4/5).

## Hints

1. Refer to the [React Router documentation](https://reactrouter.com/) for guidance on implementing routes.
2. Use the existing functions for updating films to handle inline edits.

## How to Test

1. Run the application using `npm start`.
2. Test the routing:
   - Navigate to the add film and edit film routes and verify the forms are displayed correctly.
   - Test the filter routes by navigating to each filter and ensuring the correct films are displayed.
   - Reload the page on a filter route and verify the application applies the filter automatically.
3. Test inline editing:
   - Toggle the favorite status of a film and verify the change is reflected immediately.
   - Change a film's rating by clicking on a star and verify the new rating is applied.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
