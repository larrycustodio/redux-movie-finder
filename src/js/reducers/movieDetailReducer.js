const defaultState = {
    "Title": "Harry Potter and the Sorcerer's Stone",
    "Year": "2001",
    "Rated": "PG",
    "Released": "16 Nov 2001",
    "Runtime": "152 min",
    "Genre": "Adventure, Family, Fantasy",
    "Director": "Chris Columbus",
    "Writer": "J.K. Rowling (novel), Steve Kloves (screenplay)",
    "Actors": "Richard Harris, Maggie Smith, Robbie Coltrane, Saunders Triplets",
    "Plot": "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School of Witchcraft and Wizardry.",
    "Language": "English",
    "Country": "UK, USA",
    "Awards": "Nominated for 3 Oscars. Another 17 wins & 62 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.5/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "80%"
        },
        {
            "Source": "Metacritic",
            "Value": "64/100"
        }
    ],
    "Metascore": "64",
    "imdbRating": "7.5",
    "imdbVotes": "500,024",
    "imdbID": "tt0241527",
    "Type": "movie",
    "DVD": "28 May 2002",
    "BoxOffice": "$317,557,891",
    "Production": "Warner Bros. Pictures",
    "Website": "http://movies.warnerbros.com/awards/harry.html",
    "Response": "True"
};

export default function MovieTitlesReducer(state = defaultState, { type,payload }){
    switch(type){
        case 'GET_MOVIE': {
            return {
                ...state
            }
        }

        case 'GET_MOVIE_SUCCESS': {
            return {
                ...payload
            }
        }

        case 'GET_MOVIE_ERROR': {
            return {
                ...state,
                error: payload,
            }
        }

        default: {
            return state;
        }
    }
}