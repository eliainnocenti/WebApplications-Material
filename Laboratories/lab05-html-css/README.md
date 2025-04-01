# Lab 5: Getting Started with HTML and CSS

**Web Applications [2024/2025]**

In this lab, you will implement the graphical user interface (GUI) of the web-based version of the Film Library using HTML, CSS, and the Bootstrap framework.

## Objectives

- Develop a static webpage to display the Film Library's list of films.
- Use the Bootstrap framework to structure and style the components.
- Populate the webpage with a few dummy films (4-5) for demonstration purposes.
- Optionally, implement a responsive version of the webpage.

## Instructions

### 1. Implement the Web-Based GUI
- Create a static webpage with the following structure:
  - **Navigation Bar**: Includes a Film Library logo, a search box, and a user profile icon.
  - **Two Columns**:
    - **Left Sidebar**: Contains filter buttons ("All," "Favorite," "Best Rated," "Seen Last Month," "Unseen").
    - **Main Content**: Displays:
      - The title of the current filter.
      - A list of films with the following details:
        - Title (favorite films in red).
        - Favorite status (checkbox).
        - Watch date (e.g., "March 24, 2023").
        - Rating (1-5 stars, filled or empty).
      - A "+" button to add a new film.
- Use Bootstrap classes for layout and styling.

### 2. Optional: Responsive Design
- Make the webpage responsive using Bootstrap's features:
  - Collapse the left sidebar and search box on smaller screens.
  - Add a "hamburger" button to toggle the sidebar visibility.

### Hints
1. Use [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/) for layout and styling.
2. Keep the design simple and rely on Bootstrap classes.
3. Use a separate CSS file (`custom.css`) for minor customizations (e.g., colors).
4. Use [Bootstrap Icons](https://icons.getbootstrap.com) for icons.

### Example Screenshots
- **Desktop View**: Two-column layout with a navigation bar, sidebar, and main content.
- **Responsive View**: Collapsible sidebar and search box for smaller screens.
