-- SEED File
-- Create mock users
-- Create mock listings

INSERT INTO users (username, first_name, last_name, email, password, is_admin)
VALUES (
  'jlo',
  'Jennifer',
  'Lopez',
  'jennifer@lopez.io',
  '$2b$12$ME4TAfZ5kXAm18cBGeulDu5YCEHuq93V3ZAW5qGQf90jLglEb.tje',
  FALSE  
), (
  'lebron',
  'LeBron',
  'James',
  'lebron@james.io',
  '$2b$12$2cDHtwQgH.TFm51.xixIpOf9wEZZ66IusgMK937nB/L2AxODiGMJS',
  FALSE  
), (
  'serena',
  'Serena',
  'Williams',
  'serena@williams.io',
  '$2b$12$LA1KAGAZHzUKGkxraRoClOsZ46xnmT6YxWuyYEJg5k7Iu29.uzrLW',
  TRUE  
);

INSERT INTO exercises (user_id, title, duration, intensity)
VALUES (
  1,
  'running',
  50,
  5
), (
  1,
  'running',
  30,
  7
), (
  2,
  'running',
  30,
  5
), (
  2,
  'running',
  10,
  10
), (
  2,
  'backflips',
  10,
  5
); 
