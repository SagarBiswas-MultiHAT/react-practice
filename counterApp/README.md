# Counter App

A simple React counter application that demonstrates the use of React hooks, event handling, and conditional rendering.

## Features

- **Counter Display**: Shows the current count value
- **Increment/Decrement**: Buttons to increase or decrease the count
- **Reset Functionality**: Reset the counter back to zero
- **Smart Button Disabling**:
  - Increment button disables when count reaches 5
  - Decrement button disables when count reaches -5

## Technologies Used

- React.js
- CSS3
- useState Hook

## Getting Started

### Prerequisites

- Node.js (version 12.0 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SagarBiswas-MultiHAT/counterApp.git
   ```

2. Navigate to the project directory:

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Usage

The Counter App provides a simple interface with three buttons:

1. **Increment Button (Green)**

   - Increases the count by 1
   - Disabled when count reaches 5

2. **Reset Button (Red)**

   - Sets the count back to 0
   - Always enabled

3. **Decrement Button (Blue)**
   - Decreases the count by 1
   - Disabled when count reaches -5

## Implementation Details

The app demonstrates the following React concepts:

- **useState Hook**: Managing the counter state
- **Event Handlers**: Handling button clicks
- **Conditional Rendering**: Disabling buttons based on conditions
- **CSS Styling**: Modern and responsive design

## Project Structure

```
assignment_3/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js        # Main component with counter logic
│   ├── App.css       # Styling for the counter
│   └── index.js      # Entry point
├── package.json
└── README.md
```

## Learning Objectives

This project was created to demonstrate proficiency in:

- Using the useState() hook for state management
- Implementing event handlers in React
- Applying conditional rendering
- Creating a responsive and user-friendly interface

## License

This project is part of a React learning assignment and is available for educational purposes.
