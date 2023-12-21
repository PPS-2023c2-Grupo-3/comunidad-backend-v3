-- ./docker/postgres/init/init.sql
-- Crear un usuario
CREATE USER admin WITH PASSWORD 'admin2024' SUPERUSER;

-- Crear la base de datos y asignar al usuario
CREATE DATABASE empleabilidad WITH OWNER admin;

-- Otorgar privilegios al usuario en la base de datos
GRANT ALL PRIVILEGES ON DATABASE empleabilidad TO admin;

-- Otorgar privilegios específicos en las tablas (ejemplo)
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO admin;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO admin;

-- Otorgar privilegios de conexión (si es necesario)
ALTER USER admin WITH CONNECTION LIMIT -1;

-- Inserta los valores precargados
INSERT INTO grupos (descripcion)
VALUES ('postulante'),
       ('empresa'),
       ('admin')