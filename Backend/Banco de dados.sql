CREATE DATABASE  IF NOT EXISTS `bancodotf` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bancodotf`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: bancodotf
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agendamentos`
--

DROP TABLE IF EXISTS `agendamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agendamentos` (
  `idagendamento` int NOT NULL AUTO_INCREMENT,
  `datahora` varchar(45) NOT NULL,
  `funcionario` varchar(45) NOT NULL,
  `formadepagamento` tinytext NOT NULL,
  PRIMARY KEY (`idagendamento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendamentos`
--

LOCK TABLES `agendamentos` WRITE;
/*!40000 ALTER TABLE `agendamentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `agendamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `senha` varchar(60) NOT NULL,
  `telefone` int DEFAULT NULL,
  `cpf` char(14) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `senha` (`senha`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Robson','robson1213@gmail.com','12345',999999999,'111.222.333-44'),(2,'João','joao@example.com','senha123',888888888,'12345678900'),(4,'','','',NULL,''),(5,'Tainá Salvador','tainasalvador71@gmail.com','taina123',NULL,'117.559.719-82'),(6,'Daiane Correa','daianecorreapatricio@gmail.com','325588744',NULL,'1558899');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(99) NOT NULL,
  `categoria` varchar(99) NOT NULL,
  `preco` decimal(5,2) NOT NULL,
  `marca` varchar(45) NOT NULL,
  `descricao` varchar(900) DEFAULT NULL,
  `linkimg` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'Kit Shampoo e Condicionador','Beleza',260.90,'Alfaparf','Kit Shampoo e Condicionador Leave-In Alfaparf Semi Di Lino Moisture Grande','imagens/Products/f1.png'),(2,'Condicionador Amend Marula Fabulous Nutrition 250ml','Beleza',38.90,'Marula','','imagens/Products/f2.png'),(3,'Máscara Alfaparf Semi di Lino Smooth 200ml','Beleza',94.90,'Alfaparf','','imagens/Products/f3.png'),(4,'Queratina Líquida Lunell Keratin Restore 200ml','Beleza',59.90,'Lunell','','imagens/Products/f4.png'),(5,'Kit de Tratamento Amend Millenar Óleos Indianos Pequeno','Beleza',119.90,'Amend Millenar','','imagens/Products/f5.png'),(6,'L\'Oréal Professionnel Absolut Repair Kit Shampoo + Condicionador - Kit','Beleza',323.10,'L\'Oréal','','imagens/Products/f6.png'),(7,'Hidratante Facial Epidrat Calm Mantecorp Skincare - 40g','Beleza',73.02,'Epidrat\'','','imagens/Products/f7.png'),(8,'Gel de Limpeza Facial Mantecorp Skincare Glycare Control - 300g','Beleza',65.46,'Mantecorp\'','','imagens/Products/f8.png'),(9,'Kit Esponja de Maquiagem Special Diamond Blend (4 Produtos) - OCÉANE','Beleza',88.90,'Océane\'','','imagens/Products/f9.png'),(10,'Estojo de Maquiagem Joli Joli - Iconic Contour - 1 Un','Beleza',54.91,'Joli Joli','','imagens/Products/f10.png'),(11,'Spray Fixador de Maquiagem Too Faced Makeup Insurance - 01','Beleza',269.85,'Insurance','','imagens/Products/f11.png'),(12,'L\'Oréal Professionnel NutriOil Kit – Shampoo + Condicionador + Leave-In - Kit','Beleza',318.40,'L\'Oréal','','imagens/Products/f12.png'),(13,'Kit Pincéis De Maquiagem Profissional, Produto Natural, Sombra E Blusher Para Contorno - ElaShopp','Beleza',268.94,'ElaShopp','','imagens/Products/f13.png'),(14,'Máscara para Cílios Peel Off Like It - Melu by Ruby Rose','Beleza',21.90,'Melu by Ruby Rose','','imagens/Products/f14.png'),(15,'Creme Hidratante Natura Ameixa de Flor de Baunilha 400ml','Beleza',39.90,'Natura','','imagens/Products/f15.png'),(16,'CEscova Raquete Flex Pink Ricca','Beleza',39.90,'Ricca','','imagens/Products/f16.png');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicos`
--

DROP TABLE IF EXISTS `servicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicos` (
  `idserviço` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `descricao` varchar(45) NOT NULL,
  `preco` decimal(7,2) NOT NULL,
  PRIMARY KEY (`idserviço`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos`
--

LOCK TABLES `servicos` WRITE;
/*!40000 ALTER TABLE `servicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-10 21:13:32
