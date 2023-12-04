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

DELIMITER //

CREATE PROCEDURE GetAllRooms()
BEGIN
    SELECT * FROM room;
END //

DELIMITER ;
call GetAllMovies();

DELIMITER //
CREATE PROCEDURE GetRoomById (IN roomId char(4))
BEGIN
    SELECT *
    FROM room
    WHERE RNUMBER = roomId;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetAllMovieScreening()
BEGIN
    SELECT * FROM movieScreening;
END //

DELIMITER ;

call GetAllMovieScreening();