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

DELIMITER //

CREATE PROCEDURE GetAllRooms()
BEGIN
    SELECT * FROM room;
END //

DELIMITER ;
#call GetAllMovies();

DELIMITER //
CREATE PROCEDURE GetRoomById (IN roomId char(4))
BEGIN
    SELECT *
    FROM room
    WHERE RNUMBER = roomId;
END //

DELIMITER ;

#call GetRoomById('B003');
DELIMITER //

CREATE PROCEDURE GetAllMovieScreening()
BEGIN
    SELECT * FROM movieScreening;
END //

DELIMITER ;

#call GetAllMovieScreening();

DELIMITER //

CREATE PROCEDURE getAMovieScreening (
  IN inputId CHAR(9),
  IN inputRNumber CHAR(4),
  IN inputMDURATION DATETIME
)
BEGIN
    SELECT *
    FROM movieScreening
    WHERE ID = inputId AND RNUMBER = inputRNumber AND MDURATION = inputMDURATION;
END //

DELIMITER ;

#call getAMovieScreening(111111124, 'A002', '2023-12-01 08:30:00');
#select * from moviescreening;
#2023-12-01T01:30:00.000Z

DELIMITER //

DELIMITER //

CREATE PROCEDURE GetAllCustomer()
BEGIN
    SELECT * FROM customer;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetCustomerById(IN inputCustomerId char(9))
BEGIN
    SELECT * FROM customer WHERE CID = inputCustomerId;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE getAllTicketofMovie (
  IN inputId INT,
  IN inputRNumber CHAR(4),
  IN inputMDURATION DATETIME
)
BEGIN
    SELECT *
    FROM ticket
    WHERE ID = inputId AND RNUMBER = inputRNumber AND MDURATION = inputMDURATION;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE getTicketById (IN inputId char(9))
BEGIN
    SELECT *
    FROM ticket
    WHERE TID = inputId;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE UpdateTicket(IN inputTID CHAR(9), IN newPrice INT)
BEGIN
    UPDATE ticket
    SET T_PRICE = newPrice
    WHERE TID = inputTID;
END //

DELIMITER ;