CREATE DATABASE IF NOT EXISTS personal ;
CREATE USER 'root'@'%' IDENTIFIED BY 'personal@123';
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'antech-20xx';
GRANT ALL ON *.* TO 'root'@'%';
GRANT ALL ON *.* TO 'root'@'localhost';
FLUSH PRIVILEGES;