# Task 2: API Loading Indicator

## Overview

Fetching user data from an API using async/await and displaying a loading indicator while the data is being fetched.

## What I'm Doing

- Using the JSONPlaceholder API to fetch user data
- Showing a "Loading..." message while the fetch is in progress
- Displaying user details (name, email, phone) once the data is loaded
- Hiding the loader and showing the content after fetch completes

## Files

- `index.html` - Page structure with loader and user data sections
- `styles.css` - Basic styling
- `script.js` - Async fetch logic with loader handling

## Notes

- Using async/await for cleaner asynchronous code
- API endpoint: `https://jsonplaceholder.typicode.com/users/1`
