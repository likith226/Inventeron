# Task 3: Captcha Validation

## Overview

Building a sign-up form with captcha verification to prevent bot submissions.

## What I'm Doing

- Creating a form with name and email fields
- Generating a 6-character alphanumeric captcha (excluding confusing chars like 0, O, 1, l)
- Adding a refresh button to regenerate captcha
- Showing inline success/error messages instead of alerts
- Styling with a modern gradient theme

## Files

- `index.html` - Form structure
- `styles.css` - Modern styling with gradient background
- `script.js` - Captcha generation and validation logic

## Notes

- Captcha is case-sensitive
- Captcha auto-refreshes on wrong input
- Uses strikethrough text to make captcha harder to copy
