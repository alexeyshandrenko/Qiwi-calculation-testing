# Qiwi-calculation-testing application

Our application provides you with a convenient way to perform addition operations with multiple numbers. We hope that our application will help you to easily perform addition operations with numbers. Enjoy using it!

## Folder Structure (Top Level)

- `dist/`: This folder contains the optimized and minified version of your application's code, ready for deployment.
- `node_modules/`: This folder contains the installed dependencies of the project.
- `public/`: This folder contains static files that are accessible on the build server.
- `src/`: This folder contains the source files of the application.
- `.gitignore`: This file specifies which files and folders should be ignored by the Git version control system.
- `index.html`: The main HTML file that will be rendered in the browser.
- `package.json`: The file that contains information about the project, its dependencies, and scripts for building and running the application.
- `README.md`: The file that contains the project description and build/run instructions.
- `vite.config.js`: The configuration file for Vite.

## Build and Run Instructions

1. Make sure you have Node.js installed on your computer (recommended version 14.x or higher).
2. Clone the repository or create a new directory and navigate into it:

- https://github.com/alexeyshandrenko/Qiwi-calculation-testing.git
- cd qiwi

3. Install the dependencies by running the following command:

- npm install

4. Build the application by running:

- npm run build

This command will compile the application into the `dist/` directory. The `dist/` directory will contain the optimized and minified version of your application's code, ready for deployment.

Note: The contents of the `dist/` directory should not be modified directly, as it will be overwritten every time you run a new build.

5. Start the development server:
   npm run dev
