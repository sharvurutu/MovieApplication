Our Movie Cruiser application enables an end user to search for movies from a third party database (The Movie DB - https://api.themoviedb.org), add them to a common watchlist. The End user can add comments on movies listed in the watchlist. In addition, allows the end user to remove a movie from the watchlist.
But voila! we don't have a way to view the list of watchlisted movies. We need your help here!
Also, there is a bug in the application which you need to fix as described below:


## Bug
If you search for a movie title two times, the page doesn't refresh with the new results second time.  
Expected : Search results should be displayed for every search made.  



For the Watchlist feature, we are giving you following requirements according to which you have to add the same to our Movie Cruiser app.


## Backend (Technologies used are Spring boot, Hibernate, Java and Mysql as the data store)

The following are required to factored as part of the backend tasks:

1. Define ```getAllMovies()``` method in the DAO and Service layer of the application, which returns list of movies. Your DAO method should use query (and not criteria) while fetching the data.

2. Define ```fetchAllMovies()``` in controller which calls the `getAllMovies()` method of the service layer. 
   This method shall support restful behaviour and must map to the following api:

    URL - http://localhost:8080/v1.0/movieservice/movie
    
    METHOD - GET
    
    RESPONSE STATUS - 200 OK
    
    RESPONSE JSON (example) -
            [{
                "id": 284053,
                "name": "Thor: Ragnarok",
                "comments": "this is my favourite",
                "posterPath": "/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
                "releaseDate": "2017-10-25",
                "voteAverage": 7.7,
                "voteCount": 1422
            }]

As part of the above tasks, you must also write the JUnit test cases (so write one for controller and one for DAO) for the methods that we just added. 

## Frontend (Angular.io)

The following are required to factored as part of the frontend tasks:

1. Create a new component ```watchlist``` (class-name: ```WatchlistComponent```) in the application at path ```src/app/watchlist```

2. Bind the Component's template to the list of watchlisted movies fetched from server with the help of ```MoviesService```

3. Though you are free to demonstrate your creativity while building this view but we would be looking for some specific elements for every movie item listed on this view:  
	- Movie poster to be shown using an image element with css class selector ```moviePoster```. Clicking on the image shall lead the user to movie details page using route ```movie/:id```.  
	- Movie description to be shown inside a div element with css class selector ```movieDescription``` and text ```{{name}} ({{year of release}})```, for example ```PK (2015)```.  
	- Movie ratings to be shown in a div element with css class selector ```movieRating``` and text ```Rating: {{vote average}} ({{vote count}})```, for example ```Rating: 4.4 (120)```.  
	- Enable posting comment on a movie. Add an input box with css class selector ```movieCommentsInpt``` and a button with css class selector ```movieUpdateCommentsBtn``` which shall call the service of updating movie comments. The input box should display the already set comments for the movie, if there are any.  
	- Enable removing movie from the watchlist. Add a button with css class selector ```movieRemoveBtn``` which shall call the service of removing movie from watchlist.  
    
    Ensure that all the css class names are exactly as specified in the instructions above.

4. Add a new route ```watchlist``` triggering which the ```watchlist``` component should get loaded in the ```<router-outlet>```

5. Add a new link with text ```Your Watchlist``` in the NavBar of the page, which invokes ```watchlist``` route.

6. Must write few unit and e2e test cases for your new component

7. Ensure following commands pass before submitting your assignments:
	- `npm run lint` - to check for all lint rules
	- `npm run test` - to check for unit test cases
	- `npm run e2e` - to check for end to end test cases
