USING 'ucode_web'

CREATE TABLE if NOT EXIST heros(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL UNIQUE,
    descriptoin TEXT NOT NULL,
    race VARCHAR(20) NOT NULL DEFAULT 'human',
    class_role ENUM('tankman', 'healer', 'dps') NOT NULL
);