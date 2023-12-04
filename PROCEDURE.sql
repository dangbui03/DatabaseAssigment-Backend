use cinema;
DELIMITER //

CREATE PROCEDURE GetAllMovies()
BEGIN
    SELECT * FROM movie;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetMovieById (IN movieId INT)
BEGIN
    SELECT *
    FROM movie
    WHERE ID = movieId;
END //

DELIMITER ;