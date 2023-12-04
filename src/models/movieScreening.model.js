const {connection} = require('../configs/db')

const film = {
    getAllMovieScreening:function(callback) {
        return connection.query("CALL GetAllMovieScreening()", callback);
    },
    addMovieScreening:function(sinhvien,callback){
		return connection.query("Insert into sinhvien(name,class,dob) values(?,?,?)",[sinhvien.name,sinhvien.class,sinhvien.dob],callback);
	},
	deleteMovieScreening:function(id,callback){
		return connection.query("delete from sinhvien where Id=?",[id],callback);
	},
	updateMovieScreening:function(id,sinhvien,callback){
		return connection.query("update sinhvien set name=?,class=?,dob=? where Id=?",[sinhvien.name,sinhvien.class,sinhvien.dob,id],callback);
	},
    getMovieById:function(id, callback) {
        return connection.query(`CALL GetMovieScreeningById(${id})`, callback);
    }
}

module.exports = film;