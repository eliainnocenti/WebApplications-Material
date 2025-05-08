# Lab 8: Using React State

In this lab, you will enhance the web application developed in the previous lab by implementing filters and a delete functionality using React state.

## Objectives

1. **Make the UI Filters Work**:
   - Implement filters to display films based on specific criteria.
   - Ensure the selected filter is stored in the state and does not modify the original list of films.

2. **Allow Deleting Films**:
   - Add a delete button to remove films from the list permanently.
   - Manage the film list as a state and update it dynamically.

## Tasks

### 1. Make the UI Filters Work

- Decide where to store the information about the currently selected filter.
- Create callbacks to implement the following filters:
  - **All**: Display all films (default filter).
  - **Favorite**: Display only films marked as favorite.
  - **Best Rated**: Display only films with a score of 5/5.
  - **Seen Last Month**: Display only films watched in the last 30 days.
  - **Unseen**: Display only films without a watch date.
- Ensure filtering only affects the visualization, not the original list of films.

### 2. Allow Deleting Films

- Add a delete button (e.g., a trash icon) to each film row.
- When the button is clicked, remove the film from the list permanently.
- Store the film list in a state and define callbacks to update the state when a film is deleted.

## Hints

1. Use React to update the visualization dynamically. Pass callbacks through props to modify the state.
2. When updating an array in the state, use a callback in the `setState` function if the new state depends on the previous one. Ensure all references to modified arrays and objects are updated.

## How to Test

1. Run the application using `npm start`.
2. Test the filters by clicking on the sidebar options and verifying the displayed films match the selected criteria.
3. Test the delete functionality by clicking the delete button for a film and ensuring it is removed from all filters.
4. Reload the application to reset the film list.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
