\echo 'Delete and recreate lifetrack db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE lifetrack;
CREATE DATABASE lifetrack;
\connect lifetrack

\i lifetrack-schema.sql
\i lifetrack-seed.sql

\echo 'Delete and recreate lifetrack_test db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE lifetrack_test;
CREATE DATABASE lifetrack_test;
\connect lifetrack_test

\i lifetrack-schema.sql
\i lifetrack-seed.sql
