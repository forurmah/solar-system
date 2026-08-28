# Solar System Weight Calculator

A simple, responsive web app that calculates how much an object would weigh on 
different planets in the Solar System (plus Pluto), based on its mass and each 
body's surface gravity.

## Features
- Input an object's mass (in kg)
- Select a planet from a dropdown menu
- Instantly calculates and displays the equivalent weight on that planet
- Responsive layout that adapts to mobile screens
- Space-themed UI with a full-screen animated galaxy background

## Tech Stack
- HTML5
- CSS3 (Flexbox, media queries, backdrop-filter)
- Vanilla JavaScript

## How It Works
The app multiplies the entered mass by the selected planet's gravitational 
acceleration (relative to Earth's) to calculate the object's weight on that 
planet's surface.

## Project Structure
├── index.html
├── style.css
├── scripts/
│ └── main.js
└── images/
└── galaxy.gif
