/* DDL de la base de datos*/


/* Users todos los campos requeridos*/
CREATE TABLE IF NOT EXISTS Users (
	user_id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT UNIQUE NOT NULL,
	email TEXT UNIQUE NOT NULL,
	password TEXT NOT NULL
);

/* Books todos los campos de libros solo tittle es requerido*/
CREATE TABLE IF NOT EXISTS Books (
	book_id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT NOT NULL,
	description TEXT,
	published TEXT,
	cover TEXT,
	pages INTEGER,
	isbn TEXT UNIQUE
);

/* Shelves estanterias de los libros, user_id, name requeridos*/
CREATE TABLE IF NOT EXISTS Shelves (
	shelf_id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	user_id INTEGER NOT NULL,
	FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

/* Wirters escritores name requerido*/
CREATE TABLE IF NOT EXISTS Writers (
	writer_id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL
);

/* realacion Users Books*/
CREATE TABLE IF NOT EXISTS Users_Books(
	user_id INTEGER NOT NULL,
	book_id INTEGER NOT NULL,
	PRIMARY KEY (user_id, book_id),
	FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
	FOREIGN KEY (book_id) REFERENCES Books(book_id) ON DELETE CASCADE
);

/* realacion Books Writers*/
CREATE TABLE IF NOT EXISTS Books_Writers (
	book_id INTEGER NOT NULL,
	writer_id INTEGER NOT NULL,
	PRIMARY KEY (book_id, writer_id),
	FOREIGN KEY (book_id) REFERENCES Books(book_id) ON DELETE CASCADE,
	FOREIGN KEY (writer_id) REFERENCES Writers(writer_id) ON DELETE CASCADE
);

/* realacion Books Shelves*/
CREATE TABLE IF NOT EXISTS Books_Shelves (
	book_id INTEGER NOT NULL,
	shelf_id INTEGER NOT NULL,
	PRIMARY KEY (book_id, shelf_id),
	FOREIGN KEY (book_id) REFERENCES Books(book_id) ON DELETE CASCADE,
	FOREIGN KEY (shelf_id) REFERENCES Shelves(shelf_id) ON DELETE CASCADE
);

/* status de lectura del libro*/
CREATE TABLE IF NOT EXISTS BookStatus (
	user_id INTEGER NOT NULL,
	book_id INTEGER NOT NULL,
	progress INTEGER,
	status TEXT NOT NULL,
	rating INTEGER,
	start_reading TEXT,
	end_reading TEXT,
	PRIMARY KEY (user_id, book_id),
	FOREIGN KEY (book_id) REFERENCES Books(book_id) ON DELETE CASCADE,
	FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

/* notas del ususario sobre el libro*/
CREATE TABLE IF NOT EXISTS Notes (
	note_id INTEGER PRIMARY KEY AUTOINCREMENT,
	text TEXT,
	created TEXT,
	book_id INTEGER NOT NULL,
	user_id INTEGER NOT NULL,
	FOREIGN KEY (book_id) REFERENCES Books(book_id) ON DELETE CASCADE
	FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);
