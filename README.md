# Movie Cruiser App - The Starter Code

The Movie Cruiser app helps you search movies over the Internet and save your favorite movies in a watchlist. The Movie app is built using the following Tech Stack:
- Angular.io + Bootstrap as the Front end
- Java + Spring Boot as the Backend
- MySQL as a data store

You can familiarize yourself with the working app through the following set of [screenshots and instructions.](https://docs.google.com/presentation/d/1ggbzCo04QSb8obLSJp7OtiQFlwgirgUnElHp-ERKC50)

This source code of this app is not complete and need some functionaility to be implemented as described in [ PROBLEM.md ](/PROBLEM.md) in this repository. 


## Pre-requisites  
1. Git  
2. Angular.io (v4 > ), with Angular CLI (v1.3 >)  
3. Bootstrap 4  
4. Open JDK v8  
5. Spring Boot  
6. Maven v3.3  
7. MySQL 5.7  
8. HTML 5 supported browser needed  
9. Source code editors (Sublime Text, Eclipse(STS))  

To start working using the source code provided, you first need to download the code in your machine.
Download the source code by running the following command:

```git clone https://gitlab-dev.stackroute.in/<yourusername>/movie-cruiser.git```

Once the above repository (refer to the repository structure given below) is cloned on your local machine, perform the following steps to configure the same on your machine.


## Setting up the project in your machine

1. Ensure you have MySQL Server installed and running on your machine
2. Create a schema ( with no tables ) in MySQL to be used by this application along with a user account through which our application can connect to that schema (table and data will be generated as you run the application).  
3. Update ```env-variables.sh``` with the schema name, username, password you created in Step 2 for MySQL.  
4. To start the backend, open terminal from root directory and run following commands in same terminal -  
    a. For Ubuntu - `. ./env-variables.sh` and Windows - `env-variables.sh` to set necessary the environment variables as these would be required in your backend server application code  
    b. `mvn package`  
    c. `npm run spring-boot:run`  
5. This application is fetching data from `The Movie Database API` (https://api.themoviedb.org/3). You need to register for an API key here and update property `tmdbApiKey` of the Angular [ Search service ](/src/app/services/search.service.ts). To get the API key -  
	a. Sign up [ here ](https://www.themoviedb.org/)  
	b. Follow [ instructions ](https://developers.themoviedb.org/3/getting-started)  
6. To start the frontend, open a new terminal from root directory and run following commands -  
    a. `npm install`  
    b. `npm run start`  

Navigate to `http://localhost:4200/` to view the running application which should look as shown in the [screenshots](https://docs.google.com/presentation/d/1ggbzCo04QSb8obLSJp7OtiQFlwgirgUnElHp-ERKC50) shared above as well.

## Repository structure

The stucture of folders and files you see in this repository must be maintained and should be exactly the same while submitting for evaluation:

	Project
	|
	├── moviecruiserserver 			// All the backend application specific files and folders should be stored here including their test cases
	|	|__ src/main 
	|	|   | 								
	|	|	|__ com.stackroute.moviecruiser.config
	|	|	|		|
	|	|	|		|__ DataBaseConfig.java 		// 	this class contains database configuration for the application
	|	|	|		|
	|	|	|		|__ SwaggerConfig.java 			// this class integrates Swagger for tha RESTful APIs documentation 				 
	|	|	|
	|	|	|
	|	|	|__ com.stackroute.moviecruiser.controllers
	|	|	|		|
	|	|	|	    |__ MovieController.java 		// this class maps the RESTful APIs with services     
	|	|	|
	|	|	|
	|	|	|__ com.stackroute.moviecruiser.domain
	|	|	|		|
	|	|	|		|__ Movie.java                 // this class will be acting as data model for 'movie' table in the database
	|	|	|
	|	|	|
	|	|	|__ com.stackroute.moviecruiser.exceptions
	|	|	|		|
	|	|	|		|__ MovieNotFoundException.java                 // this class will handle the specific exception when requested movie was not found
	|	|	|
	|	|	|
	|	|	|__ com.stackroute.moviecruiser.repositories
	|	|	|		|
	|	|	|		|__ MovieDAO.java                 // interface that provides access to the underlying 'movie' table of database
	|	|	|		|
	|	|	|		|__ MovieDAOImpl.java 			// this is implementation of MovieDAO interface
	|	|	|
	|	|	|__ com.stackroute.moviecruiser.services
	|	|			|
	|	|			|__ MovieService.java                 // interface that declare the services of the application
	|	|			|
	|	|			|__ MovieServiceImpl.java 			// this is implementation of MovieService interface
	|	|
	|	|
	|	|
	|	|__ src/resources
	|	|	|__application.properties 					// this is configuration file for database connectivity
	|	|
	|	|
	|	|__ src/test          
	|	|	|__ com.stackroute.moviecruiser.controllers
	|	|	|		|__ MovieControllerTest.java 		// this contains all test cases for MovieController
	|	|	|
	|	|	|__ com.stackroute.moviecruiser.repository
	|	|			|__MovieDAOImplTest.java 			// this contains all test cases for MovieDAOImpl
	|	|
	|	|
	|	|__ pom.xml                                    // this contains all the dependencies required by the project
	├── e2e
	|	|
	|	|__ e2e-spec.ts           // This has end to end test cases of the project covering both frontend and backend, backend should be running for these tests		
	|	|
	|	|__ tsconfig.e2e.json    // specifies the root files and the compiler options required to compile the project.
	|
	|
	├── src
	|	|
	|	|__ app/app.module.ts 		//  the root module that tells Angular how to assemble the application
	|	|
	|	|__ app/app.component.ts    // the root component of the application
	|	|
	|	|__ app/**/*.component.ts   // all the other components of the application
	|	|
	|	|__ app/services			// all the services of the application should stay here
	|	|
	|	|__ app/app-routing 		// defines all the routes
	|	|
	|	|__ karma-tests				// includes all the unit tests of components
	|	|
	|	|__ index.html 		// the main HTML page that is served when someone visits your site
	|
	|
	├── env-variables.sh    // sets the environment variables which /MovieCruiserServer/src/main/resources/application.properties is dependant on
	|
	|
	├── karma.conf.js       // specifies configuration for running unit cases of angular components using karma
	|
	|
	├── package.json 		// includes all the dependencies the solution requires, this shall include all scripts like `npm run build`, `npm run lint`, `npm run test`, `npm run start`, `npm run e2e`, `npm run spring-boot:run`
	|
	|
	├── pom.xml            // this points to the backend application so that it could be run from root directory
	|
	|
	├── PROBLEM.md         // Describe about the problem of the assignment/project that you have to accompalish
	|
	├── protractor.conf.js // specifies configuration for running end to end test cases using protractor
	|
	├── README.md        // includes all the steps required to run the application on local machine
	|
	|
	├── tsconfig.json    // specifies the root files and the compiler options required to compile the project.
	|
	|
	├── tslint.json      // specifies the tslint rules to run
	|
	|
	├── .gitignore		// specifies intentionally untracked files to ignore during git operations
	

## Running lint checks

Run `npm run lint`  

## Running unit tests

Run `npm run test` to execute the karma unit tests.  

## Running end-to-end tests

Run `npm run e2e` to execute the protractor end-to-end tests.


> # Submitting your work for Evaluation

1. When you are ready for submission and pushed your code into your Gitlab repository, you need to open our Automated Evaluation System by navigating to the following URL:
 hobbes-cts.stackroute.in
2. Click the Login icon and provide your Gitlab credentials.
3. For ```Assignment repository```, provide the Assignment name by typing ```movie``` in the drop down for assignment to be visible and select it.
4. For ```Your solution repository```, provide your completed assignment repository for evaluation - select same from the list of repositories being shown in the drop down.
5. ```submit``` your solution.
6. Select the icon on the the top right and select ***Feedback***
7. You can see the status of your submission - it may take a while to bring the evaluation results (approx 7-10 min) for which you need to do a browser refresh.
8. Check all the evaluated sections for any failing test cases or project build failure, fix them in your code and re-submit (you can do this several times).