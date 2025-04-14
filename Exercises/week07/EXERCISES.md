# Exercise 7: React + Vite

This week focuses on React components, state management, and integration with Bootstrap. Below are exercises based on the provided files.

## 1. React Components and Props

### Files:
- `slide_examples/example_button.js`
- `slide_examples/Button_props_only.js`
- `slide_examples/Button.jsx`

### Exercises:
1. Implement a React button component that accepts `label` and `onClick` as props.
2. Modify the button to include a `disabled` prop and test its behavior.
3. Refactor the button to use TypeScript (if applicable).

## 2. State Management in React

### Files:
- `slide_examples/example_button_state.js`
- `react-qa-state/src/QAModels.js`
- `react-qa-state/src/App.jsx`
- `react-qa-state/src/components/QuestionComponents.jsx`
- `react-qa-state/src/components/AnswerComponents.jsx`

### Exercises:
1. Create a React component that toggles between two states (e.g., "ON" and "OFF").
2. Use the `QAModels.js` file to implement a question-answering app. Display questions and allow users to submit answers.
3. Add state to track the number of answers submitted and display it in the UI.

## 3. Bootstrap Integration

### Files:
- `slide_examples/bootstrap_example_Button_stato.js`
- `slide_examples/bootstrap_App.js`
- `my-app/src/Button.jsx`
- `my-app/src/App.jsx`

### Exercises:
1. Create a Bootstrap-styled button using `react-bootstrap`. Customize its appearance using props.
2. Build a simple app that uses Bootstrap components for layout and styling.
3. Add a Bootstrap modal to your app and manage its visibility using React state.

## 4. Vite and Project Configuration

### Files:
- `my-app/index.html`
- `my-app/eslint.config.js`
- `my-app/.gitignore`

### Exercises:
1. Modify the `index.html` file to include a custom favicon and meta description.
2. Update the ESLint configuration to enforce stricter rules for React hooks.

## 5. Advanced Topics

### Files:
- `react-qa-state/vite.config.js`
- `my-app/vite.config.js`

### Exercises:
1. Explore the Vite configuration files and add an alias for easier imports.
2. Enable hot module replacement (HMR) in the Vite configuration.
3. Optimize the build process by adding a custom plugin to the Vite config.
