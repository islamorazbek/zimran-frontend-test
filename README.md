This Adaptive React App was written by Islam Orazbek as a response to test task from Zimran Company.

Folder structures:
  src/
    components/ --- Here we have reusable components
      Header
      CustomButton
      Footer
      Typography (which commonly used text in the project)
    routes/ --- Here we have routes/pages which are main routes used in React Router for navigation.
                Each route contains page data with its own unique components and images, icons
      Home
      Payment
      
All of the large sized images are stored in public/images folder.

In order to successfully run the app you must have Node.js or Docker installed in your computer.

In order to Run with Docker, you can:

### `docker build -t zimran-frontend .`

After succesfull build:

### `docker run --rm -p 3000:3000 zimran-frontend`

After successfull start:
  You can open the browser at url: [http://localhost:3000](http://localhost:3000) to see the result

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
