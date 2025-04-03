# Lab 6: JavaScript in the Browser  

**Web Applications [2024/2025]**

In this lab, you will add dynamic behaviors to the Film Library interface that you implemented in the previous lab.  

## Objectives  

- Dynamically populate the Film Library interface using JavaScript.  
- Implement filtering functionality for the Film Library.  
- (Optional) Add the ability to delete films from the Film Library.  

## Instructions  

### 1. Populate the Film Library  

Replace the hard-coded films displayed in the main content area with a dynamically populated list of films.  

- Use the `FilmLibrary` object, declared in the `films.js` file, to store the films and their corresponding data.  
- Import the `films.js` file into the HTML using the `<script>` tag.  
- Modify the GUI to dynamically display the films in the list.  
- Ensure that changes to the `FILMS` array in `films.js` are reflected in the webpage when reloaded.  

### 2. Let’s Make the Filters Work!  

Implement filtering functionality by associating the sidebar items with the following filters:  

- **All**: Displays all the films in the Film Library.  
- **Favorite**: Displays only films marked as favorite.  
- **Best Rated**: Displays only films with a score of 5 out of 5.  
- **Seen Last Month**: Displays films watched between today and the last 30 days.  
- **Unseen**: Displays films that have not been watched yet.  

#### Requirements:  

- Use DOM manipulation methods (e.g., `getElementById`, `createElement`) to update the displayed list of films dynamically.  
- When a filter is applied:  
  - Delete the current list of films.  
  - Create and display a new list based on the applied filter.  
- Ensure that the filtering function does not modify the original `FILMS` array.  
- Highlight the currently active filter in the sidebar.  
- Display the name of the active filter at the top of the main content area.  
- By default, the "All" filter is active when the page is loaded.  

**Note**: The checkboxes for the "Favorite" attribute do not need to work at this stage.  

### 3. Optional: Add the Functionality to Delete Films  

Enable users to delete specific films from the Film Library.  

- Add a trash icon at the end of each film row.  
- Link the trash icon to a JavaScript function that removes the corresponding film from the `FILMS` array.  
- Automatically update the displayed list of films after a film is deleted, maintaining the current filter.  

**Note**: Deleted films cannot be restored. To reload the full list of films, refresh the page.  

## Hints  

1. Use the [Bootstrap framework (v. 5.3)](https://getbootstrap.com/docs/5.3/getting-started/introduction/) for styling and layout.  
2. Use DOM manipulation methods to dynamically populate the list of films (e.g., `getElementById`, `createElement`). Add `id` attributes in the HTML where necessary.  
3. Include the `dayjs` library in your HTML by adding the following code to the `<head>` section:  
   ```html
   <script defer src="https://unpkg.com/dayjs@1.11.10/dayjs.min.js"
           integrity="sha384-DpVxUeeBWjUvUV1czyIHJAjh+jYUZFu2lLakbdua5vbwOrBGi1UgaKCHjTC+x3Ky"
           crossorigin="anonymous">
   </script>
   ```
   Use the `defer` attribute to postpone the loading of the script.  
4. Do not execute your JavaScript application using Node.js. Include the JavaScript in the HTML using the `<script>` tag. Use `console.log()` for debugging in the browser's developer console (press `F12` or open developer tools in the browser menu).  
5. Use the solution from the HTML/CSS lab as a starting point.  

## Files Overview  

- **index.html**: The main HTML file for the Film Library interface.  
- **films.js**: Contains the `FILMS` array and emulates a database of movies.  
- **app.js**: Implements the dynamic behaviors of the Film Library, including filters and deletion functionality.  
- **custom.css**: Contains custom styles for the Film Library interface.  

## Expected Outcome  

By the end of this lab, you should have a fully functional Film Library interface with dynamic behaviors, including:  

- A dynamically populated list of films.  
- Working filters for the sidebar.  
- (Optional) The ability to delete films from the library.
