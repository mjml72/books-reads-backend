
/* DML simular datos para tests*/
INSERT INTO Books (title, description,  published, cover, pages, isbn)
VALUES ('libro1', 'descricion del libro',  '2023', 'cover url', 100, '01234567891');
INSERT INTO Books (title, description,  published, cover, pages, isbn)
VALUES ('libro2', 'descricion del libro','2023',  'cover url', 100, '01234567892');
INSERT INTO Books (title, description,  published, cover, pages, isbn)
VALUES ('libro3', 'descricion del libro','2023',  'cover url', 100, '01234567893');
INSERT INTO Books (title, description,  published, cover, pages, isbn)
VALUES ('libro4', 'descricion del libro',  '2023',   'cover url', 100, '01234567894');
INSERT INTO Books (title, description,  published, cover, pages, isbn)
VALUES ('libro5', 'descricion del libro', '2023',   'cover url', 100, '01234567895');


INSERT INTO Users (name, email, password) VALUES ('user1', 'user1@email.com', '123456789');
INSERT INTO Users (name, email, password) VALUES ('user2', 'user2@email.com', '123456789');
INSERT INTO Users (name, email, password) VALUES ('user3', 'user3@email.com', '123456789');
INSERT INTO Users (name, email, password) VALUES ('user4', 'user4@email.com', '123456789');
INSERT INTO Users (name, email, password) VALUES ('user5', 'user5@email.com', '123456789');


INSERT INTO Writers (name) VALUES ('escritor1');
INSERT INTO Writers (name) VALUES ('escritor2');
INSERT INTO Writers (name) VALUES ('escritor3');
INSERT INTO Writers (name) VALUES ('escritor4');
INSERT INTO Writers (name) VALUES ('escritor5');


INSERT INTO Books_Writers (book_id, writer_id) VALUES (1,1);
INSERT INTO Books_Writers (book_id, writer_id) VALUES (2,2);
INSERT INTO Books_Writers (book_id, writer_id) VALUES (3,3);
INSERT INTO Books_Writers (book_id, writer_id) VALUES (4,4);
INSERT INTO Books_Writers (book_id, writer_id) VALUES (5,5);

INSERT INTO Users_Books (user_id, book_id) VALUES (1,1);
INSERT INTO Users_Books (user_id, book_id) VALUES (2,2);
INSERT INTO Users_Books (user_id, book_id) VALUES (3,3);
INSERT INTO Users_Books (user_id, book_id) VALUES (4,4);
INSERT INTO Users_Books (user_id, book_id) VALUES (5,5);

INSERT INTO Shelves (name, user_id) VALUES ('shelf1', 1);
INSERT INTO Shelves (name, user_id) VALUES ('shelf2', 2);
INSERT INTO Shelves (name, user_id) VALUES ('shelf3', 3);
INSERT INTO Shelves (name, user_id) VALUES ('shelf4', 4);
INSERT INTO Shelves (name, user_id) VALUES ('shelf5', 5);


INSERT INTO Books_Shelves (book_id, shelf_id) VALUES (1,1);
INSERT INTO Books_Shelves (book_id, shelf_id) VALUES (2,2);
INSERT INTO Books_Shelves (book_id, shelf_id) VALUES (3,3);
INSERT INTO Books_Shelves (book_id, shelf_id) VALUES (4,4);
INSERT INTO Books_Shelves (book_id, shelf_id) VALUES (5,5);



INSERT INTO BookStatus (user_id, book_id, progress, status, rating, start_reading, end_reading)
VALUES (1, 1, 80, 'READ', 5, '2026-01-11', date('now'));
INSERT INTO BookStatus (user_id, book_id, progress, status, rating, start_reading, end_reading)
VALUES (2, 2, 80, 'READ', 5, '2026-01-11', date('now'));
INSERT INTO BookStatus (user_id, book_id, progress, status, rating, start_reading, end_reading)
VALUES (3, 3, 80, 'READING', 5, '2026-01-11', date('now'));
INSERT INTO BookStatus (user_id, book_id, progress, status, rating, start_reading, end_reading)
VALUES (4, 4, 80, 'READ', 5, '2026-01-11', date('now'));
INSERT INTO BookStatus (user_id, book_id, progress, status, rating, start_reading, end_reading)
VALUES (5, 5, 80, 'TO READ', 5, '2026-01-11', date('now'));


INSERT INTO Notes (text, created, book_id, user_id) 
VALUES ('nota sobre libro', date('now'), 2, 2);
INSERT INTO Notes (text, created, book_id, user_id) 
VALUES ('nota sobre libro', date('now'), 3, 3);
INSERT INTO Notes (text, created, book_id, user_id) 
VALUES ('nota sobre libro', date('now'), 5, 5);

