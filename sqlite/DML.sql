INSERT INTO Books (title, description,  published, categories, cover, pages, isbn)
VALUES ('libro1', 'descricion del libro',  '2023', 'ciencia ficcion', 'cover url', 100, '01234567891');
INSERT INTO Books (title, description,  published, categories, cover, pages, isbn)
VALUES ('libro2', 'descricion del libro','2023', 'Romance',  'cover url', 100, '01234567892');
INSERT INTO Books (title, description,  published, categories, cover, pages, isbn)
VALUES ('libro3', 'descricion del libro','2023', 'Fantasia',  'cover url', 100, '01234567893');
INSERT INTO Books (title, description,  published, categories, cover, pages, isbn)
VALUES ('libro4', 'descricion del libro',  '2023', 'Ficcion', 'cover url', 100, '01234567894');
INSERT INTO Books (title, description,  published, categories, cover, pages, isbn)
VALUES ('libro5', 'descricion del libro', '2023', 'Juvenil',  'cover url', 100, '01234567895');


INSERT INTO Writers (name) VALUES ('escritor1');
INSERT INTO Writers (name) VALUES ('escritor2');
INSERT INTO Writers (name) VALUES ('escritor3');
INSERT INTO Writers (name) VALUES ('escritor4');
INSERT INTO Writers (name) VALUES ('escritor5');

INSERT INTO Books_Writers (bookID, writerID) VALUES (1,1);
INSERT INTO Books_Writers (bookID, writerID) VALUES (2,2);
INSERT INTO Books_Writers (bookID, writerID) VALUES (3,3);
INSERT INTO Books_Writers (bookID, writerID) VALUES (4,4);
INSERT INTO Books_Writers (bookID, writerID) VALUES (5,5);

INSERT INTO Shelves (name) VALUES ('Favoritos');
INSERT INTO Shelves (name) VALUES ('Ciencia Ficción');
INSERT INTO Shelves (name) VALUES ('Fantasía');

INSERT INTO Books_Shelves (bookID, shelvesID) VALUES (1,1);
INSERT INTO Books_Shelves (bookID, shelvesID) VALUES (2,2);
INSERT INTO Books_Shelves (bookID, shelvesID) VALUES (3,3);

INSERT INTO BookStatus (bookID, progress, status, rating, startReading, endReading)
VALUES (1, 80, 'READ', 5, '2026-01-11', date('now'));
INSERT INTO BookStatus (bookID, progress, status, rating, startReading, endReading)
VALUES (2, 80, 'READ', 5, '2026-01-11', date('now'));
INSERT INTO BookStatus (bookID, progress, status, rating, startReading, endReading)
VALUES (3, 80, 'READING', 5, '2026-01-11', date('now'));
INSERT INTO BookStatus (bookID, progress, status, rating, startReading, endReading)
VALUES (4, 80, 'READ', 5, '2026-01-11', date('now'));
INSERT INTO BookStatus (bookID, progress, status, rating, startReading, endReading)
VALUES (5, 80, 'TO READ', 5, '2026-01-11', date('now'));


INSERT INTO Notes (text, created, bookID) 
VALUES ('nota sobre libro', date('now'), 2);
INSERT INTO Notes (text, created, bookID) 
VALUES ('nota sobre libro', date('now'), 3);
INSERT INTO Notes (text, created, bookID) 
VALUES ('nota sobre libro', date('now'), 5);

