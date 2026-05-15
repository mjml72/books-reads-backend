
API REST con Node.js, Express, SQLite
API RESTful construida con Node.js Express. Utiliza SQLite como motor de base de datos mediante consultas SQL puras, implementando prácticas de seguridad contra inyecciones SQL.

Tecnologías Utilizadas

* Entorno: Node.js
* Framework: Express.js
* Base de Datos: SQLite3
* Consultas: SQL Puro (Sin ORM)
* Seguridad: Consultas preparadas

Seguridad contra SQL Injection

Este proyecto no utiliza ORMs por diseño. Para evitar vulnerabilidades de SQL Injection (SQLi), 
se utilizan consultas preparadas y marcadores de posición para separar el código SQL de los datos.

Diagrama Entidad Relacion de la Base de Datos
[Diagrama Entidad Relacion](./database-design/DER.png)

Modelo Relacional
[Modelo Relacional](./database-design/MODELO_RELACIONAL.txt)


