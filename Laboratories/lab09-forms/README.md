# Lab 9: React Forms

In this lab, you will enhance the FilmLibrary application by adding interactive functionalities for creating and editing films. Optionally, you can also validate user inputs.

## Objectives

1. **Add a New Film**:
   - Allow users to dynamically add new films using a form.
   - Ensure the new film is added to the state and displayed immediately if it matches the active filter.

2. **Edit an Existing Film**:
   - Enable users to edit the properties of an existing film using the same form.
   - Pre-fill the form with the film's current properties and update the state upon submission.

3. **Optional: Validation**:
   - Validate the form inputs before submission.
   - Display error messages and highlight invalid fields if validation fails.

## Tasks

### 1. Add a New Film

- Add a `+` button to the interface. When clicked, display a form below the film list.
- Allow users to input all properties of a new film.
- Hide the `+` button while the form is displayed.
- Upon form submission:
  - Add the new film to the state.
  - Automatically display the film in the list if it matches the active filter.

### 2. Edit an Existing Film

- Add an edit icon (e.g., `!`) next to each film in the list.
- When clicked, display the same form used for adding a new film, pre-filled with the film's current properties.
- Update the film's properties in the state upon form submission.
- Automatically update the film in the list with the new values.

### 3. Optional: Validation

- Validate the form inputs during both add and edit operations:
  - Ensure the title is not empty.
  - Ensure the rating is between 0 and 5 (inclusive).
- If validation fails:
  - Prevent form submission.
  - Display error messages and highlight invalid fields.

## Hints

1. Use the [Bootstrap Icons](https://icons.getbootstrap.com) for the `+` and edit icons.
2. Leverage the solutions from previous labs as a starting point.
3. Properly design the state and props to ensure React automatically updates the UI.

## How to Test

1. Run the application using `npm start`.
2. Test the "Add a New Film" functionality:
   - Click the `+` button, fill out the form, and submit.
   - Verify the new film appears in the list if it matches the active filter.
3. Test the "Edit an Existing Film" functionality:
   - Click the edit icon next to a film, modify its properties, and save.
   - Verify the film's updated properties are displayed in the list.
4. Test the optional validation:
   - Submit the form with invalid inputs and verify error messages are displayed.
   - Correct the inputs and ensure the form submits successfully.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
