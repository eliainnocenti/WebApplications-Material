# Lab 7: Getting Started with React  

**Web Applications [2024/2025]**

In this lab, you will start setting up a React-based front-end for a web-based Film Library. The appearance of the front-end must match the static HTML page developed in previous labs.  

## Objectives  

- Set up a React application using Vite.  
- Restructure the Film Library interface using React's component-based approach.  
- Divide the application into components and define the required props.  
- Implement the list of filters and display the filtered list of films.  

## Instructions  

### 1. Create and Configure the React Application  

- Create a new React app using Vite as explained in the slides.  
- Remove the default CSS rules in the generated code (`App.css` and `index.css`).  
- Use the React-enabled version of Bootstrap to structure the front-end.  
  - Use components such as `Container`, `Row`, `Col`, `Button`, `Table`, `Navbar`, `Nav`, `Form`, and `ListGroup`.  
  - Refer to the [React-Bootstrap documentation](https://react-bootstrap.github.io/) for details.  
- Organize the page using React functional components stored in different files.  
  - For example, create distinct components for the navigation bar, the sidebar with filters, and the list of films.  
- Add props to each component to manage the visualization of films and filters.  
  - Initialize the props for films using a statically imported array of films.  
  - Pass the props to the component handling the table of films.  
- **Note**: You do not need to implement any dynamic behavior (e.g., filters and favorite checkboxes should not work yet).  

### 2. Implement the List of Filters  

- Create a constant data structure containing an array of filters.  
  - Each filter should include its internal name, displayed name, and a function to filter the array of films.  
- Define a constant value for the current active filter.  
  - Highlight the active filter in the sidebar.  
  - Display the active filter name above the table of films.  
- Pass the list of filters and the active filter as props to the component handling the filter visualization.  
- Filter the list of films displayed in the table based on the active filter value.  
  - Pass only the relevant list of films as props to the component handling the table.  
- **Note**: The active filter value is not dynamic. To change the active filter, modify the source code and reload the page.  

## Hints  

1. Use [Day.js](https://day.js.org/) to handle dates.  
2. Use [Bootstrap Icons](https://icons.getbootstrap.com/) if needed.  

## Files Overview  

- **index.html**: The main HTML file for the React application.  
- **App.jsx**: The main React component that organizes the application.  
- **components/**: A folder containing React components for the navigation bar, sidebar, and film table.  
- **data/films.js**: Contains the array of films and filter functions.  
- **App.css**: Contains custom styles for the React application.  

## Expected Outcome  

By the end of this lab, you should have a React-based Film Library interface with:  

- A component-based structure.  
- A static list of films displayed in a table.  
- A sidebar with filters, highlighting the active filter.  
- A filtered list of films displayed based on the active filter.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
