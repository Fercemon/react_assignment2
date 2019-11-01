# This app is created with expo cli 
Assuming that you have Node 10 LTS or greater installed, you can use npm to install the Expo CLI command line utility

# expo cli installation and create new project

- npm install -g expo-cli
- expo init App_name

# to start a development server type the following

- expo start

this will start the Metro Bundler.

# to preview your app you can use one of the following options

- dowload expo app in your phone and scan the QR code you hace on your command line
- download android studio and creat and virtual device. type a in your command line and you will see your app in your virtual device
- you can also type w to preview on the browser

# when using expo we will need some package to code some things as navigation
To be ale to use this package we have to install them with the command line typing: npm install name-of-the-package

And then we have to import the component we want to use typing: import component from 'package';

Remember to import the package on each page you need it.

# Im using firebase as a database to get the content of the app

  Here you and example of how to creat a firebase realtime database

  https://medium.com/mindorks/firebase-realtime-database-with-react-native-5f357c6ee13b

# To use firebase authentication
  - Once you have created the project, the realtime database and you have the keys and connected your app with firebase, click on authentication tab.
  - In Methods enable email/password mettod and save.
  - Use firebase.auth().createUserWithEmailAndPassword(email, password) to add new users
  - Use firebase.auth().signInWithEmailAndPassword(email, password) to login user
  - Use firebase.auth().signOut() to sign out user

# App structure

- App.js
- screens
  - Loading.js
  - Login.js
  - SignUp.js
  - Main.js
  - Exercices
    - index.js
    - Home.js
    - Abbs.js
    - Back.js
  - Plans
    - index.js
    - MonthsBodybuilding3.js
  - Profile
    - index.js
    - Profile.js
    - UpdateProfile.js
- assets(empty, using dynamic content)

# About this app

This is an app for workouts.

The app has a switcher navigator to navigate withing the Login/SignUp screens.

 - The switcher load the Loading screen as initial screen. 
   This screen does not render anything but redirect you to either Login or Main screen, depending if you are already logged in or not
 - If you are logged out then you will get Login screen where you can log in or press sign Up to go to SignUp page.
 - The APP use firebase email and password authentication to creat the users

Once you signUp or Login you get to home screen where you can choose between exercises, plans or profile.

- The exercices are by groups depending the muscle you want to exercise.

  when you click on a muscle group you navigate to a page with a list of exercises for that specific muscle.

- Inside plans there are free plans and premium plans. You only have acces to the free plans if you are not premium

  Inside of each plan you can find the description of the plan, with information about the duration, goal, requirements, etc

- Inside profile you will get your information(default info first time) and buttons to eddit your info or logout.

When you click on eddit profile you navigate to the page where you can eddit your picture and info

- In the screen to update your info you can:
  - click on the image to acces your device camera roll,choose and crop the picture.
  - Add your Full name, height and width and save it.
  - When you click save, the image and info is storage in firebase realtime under your user id


# features used on the app

The app use 3 different types of navigation.

We have the switcherNavigator described before, a tabNavigator to navigate between the main pages (exercices and plans) and stackNavigator to navigate between the pages inside of each main page which we could called subpages.

the stackNavigator for the exercises pages use a transition fromLeft, while plan pages use a transition fromBottom

I decided to use different transition to show that there is different options when using transition.

you can also set different transition for a specific page but I rather to keep consistent navigation transition between subpages.
