INSERT INTO Libro (titulo, description, published, cover, pages, isbn)
VALUES ('libro1', 'descricion del libro', '2023', 'cover url', 100, '01234567891');
INSERT INTO Libro (titulo, description, published, cover, pages, isbn)
VALUES ('libro2', 'descricion del libro', '2023', 'cover url', 100, '01234567892');
INSERT INTO Libro (titulo, description, published, cover, pages, isbn)
VALUES ('libro3', 'descricion del libro', '2023', 'cover url', 100, '01234567893');
INSERT INTO Libro (titulo, description, published, cover, pages, isbn)
VALUES ('libro4', 'descricion del libro', '2023', 'cover url', 100, '01234567894');
INSERT INTO Libro (titulo, description, published, cover, pages, isbn)
VALUES ('libro5', 'descricion del libro', '2023', 'cover url', 100, '01234567895');


INSERT INTO Escritor (nombre) VALUES ('escritor1');
INSERT INTO Escritor (nombre) VALUES ('escritor2');
INSERT INTO Escritor (nombre) VALUES ('escritor3');
INSERT INTO Escritor (nombre) VALUES ('escritor4');
INSERT INTO Escritor (nombre) VALUES ('escritor5');

INSERT INTO Libro_Escritor (libroID, escritorID) VALUES (1,1);
INSERT INTO Libro_Escritor (libroID, escritorID) VALUES (2,2);
INSERT INTO Libro_Escritor (libroID, escritorID) VALUES (3,3);
INSERT INTO Libro_Escritor (libroID, escritorID) VALUES (4,4);
INSERT INTO Libro_Escritor (libroID, escritorID) VALUES (5,5);

INSERT INTO Shelves (nombre) VALUES ('Favoritos');
INSERT INTO Shelves (nombre) VALUES ('Ciencia Ficción');
INSERT INTO Shelves (nombre) VALUES ('Fanatasía');

INSERT INTO Libro_Shelves (libroID, shelvesID) VALUES (1,1);
INSERT INTO Libro_Shelves (libroID, shelvesID) VALUES (2,2);
INSERT INTO Libro_Shelves (libroID, shelvesID) VALUES (3,3);

INSERT INTO BookStatus (libroID, progress, status, rating, startDate, endDate)
VALUES (1, 80, 'READ', 5, '2026-01-11', date('now'));
INSERT INTO BookStatus (libroID, progress, status, rating, startDate, endDate)
VALUES (2, 80, 'READ', 5, '2026-01-11', date('now'));
INSERT INTO BookStatus (libroID, progress, status, rating, startDate, endDate)
VALUES (3, 80, 'READING', 5, '2026-01-11', date('now'));
INSERT INTO BookStatus (libroID, progress, status, rating, startDate, endDate)
VALUES (4, 80, 'READ', 5, '2026-01-11', date('now'));
INSERT INTO BookStatus (libroID, progress, status, rating, startDate, endDate)
VALUES (5, 80, 'TO READ', 5, '2026-01-11', date('now'));


INSERT INTO Notas (texto, createdDate, libroID) 
VALUES ('nota sobre libro', date('now'), 2);
INSERT INTO Notas (texto, createdDate, libroID) 
VALUES ('nota sobre libro', date('now'), 3);
INSERT INTO Notas (texto, createdDate, libroID) 
VALUES ('nota sobre libro', date('now'), 5);

