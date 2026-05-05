CREATE SCHEMA IF NOT EXISTS `loja_back_front` DEFAULT CHARACTER SET utf8 ;
USE `loja_back_front` ;

-- -----------------------------------------------------
-- Table `loja_back_front`.`Categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja_back_front`.`Categorias` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
);


-- -----------------------------------------------------
-- Table `loja_back_front`.`Produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja_back_front`.`Produtos` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `valor` DECIMAL(10,2) NOT NULL,
  `idCategoria` INT NOT NULL,
    FOREIGN KEY (`idCategoria`)
    REFERENCES `loja_back_front`.`Categorias` (`id`)
);
