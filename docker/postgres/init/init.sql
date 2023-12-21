-- ./docker/postgres/init/init.sql
CREATE TABLE public.abm (
    id_abm_usuario integer NOT NULL,
    fk_id_usuario integer,
    id_usuario_mod integer,
    motivo character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);

CREATE TABLE public.carreras (
    id integer NOT NULL,
    nombre_carrera character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);

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


COPY public.carreras (id, nombre_carrera, "createdAt", "updatedAt") FROM stdin;
1	Tecnicatura en informatica	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
2	Licenciatura en informatica	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
3	Tecnicatura en laboratorio	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
4	Licenciatura en biotecnologia	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
5	Tecnicatura universitaria en gestion ambiental	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
6	Tecnicatura universitaria en tecnologia de los alimentos	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
7	Tecnicatura universitaria en viverismo	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
8	Profesorado universitario de letras	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
9	Profesorado universitario en educacion fisica	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
10	Profesorado universitario de ingles	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
11	Profesorado universitario de matematica	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
12	Profesorado universitario de biologia	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
13	Tecnicatura universitaria en programacion	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
14	Tecnicatura universitaria en redes y operaciones informaticas	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
15	Tecnicatura universitaria en diseño industrial	2022-06-05 12:00:00+00	2022-06-05 12:00:00+00
