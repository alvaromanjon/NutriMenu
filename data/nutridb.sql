-- MySQL dump 10.13  Distrib 8.0.34, for Linux (aarch64)
--
-- Host: localhost    Database: nutri_db
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alimento`
--

DROP TABLE IF EXISTS `alimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alimento` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `gramos_por_racion` double NOT NULL,
  `grupo_alimento` enum('CEREALES','COMBINACION','FRUTA','GRASAS','LACTEOS','LEGUMBRES','NO_APLICA','PROTEICOS','VERDURAS') NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `componentes_nutricionales_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKgj9wpaht4oit59ka8i3769wxd` (`nombre`),
  UNIQUE KEY `UK_rlw8grx8vmsrcbtjodbdnr8tv` (`componentes_nutricionales_id`),
  CONSTRAINT `FKgogyseyjc90kkps5e3qx0g8q9` FOREIGN KEY (`componentes_nutricionales_id`) REFERENCES `componentes_nutricionales` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alimento`
--

LOCK TABLES `alimento` WRITE;
/*!40000 ALTER TABLE `alimento` DISABLE KEYS */;
INSERT INTO `alimento` VALUES (31,123,'VERDURAS','Tomate',51),(32,100,'PROTEICOS','Atún en lata',52),(33,94,'VERDURAS','Cebolla roja',53),(34,482,'COMBINACION','Sopa de verduras',58),(35,105,'CEREALES','Macarrones',60),(36,104,'NO_APLICA','Salsa de tomate',61),(37,85,'PROTEICOS','Entrecot',64),(38,194,'COMBINACION','Patatas fritas caseras',65),(39,125,'NO_APLICA','Tarta de queso',67),(40,177,'LEGUMBRES','Alubia',69),(41,94,'VERDURAS','Cebolla amarilla',70),(42,100,'LACTEOS','Queso rallado',71),(43,94,'VERDURAS','Lechuga',75);
/*!40000 ALTER TABLE `alimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `componentes_nutricionales`
--

DROP TABLE IF EXISTS `componentes_nutricionales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `componentes_nutricionales` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `azucares` decimal(6,2) DEFAULT NULL,
  `calorias` decimal(6,2) DEFAULT NULL,
  `fibra` decimal(6,2) DEFAULT NULL,
  `grasas` decimal(6,2) DEFAULT NULL,
  `grasas_saturadas` decimal(6,2) DEFAULT NULL,
  `hidratos_carbono` decimal(6,2) DEFAULT NULL,
  `proteinas` decimal(6,2) DEFAULT NULL,
  `sal` decimal(6,2) DEFAULT NULL,
  `minerales_id` bigint DEFAULT NULL,
  `vitaminas_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_4vslnqwusvmk218d4g0k1nuuh` (`minerales_id`),
  UNIQUE KEY `UK_2kvbs7fc9yo71rdflrkyrkgau` (`vitaminas_id`),
  CONSTRAINT `FKjn0w0mtektoirkuybq08h0kxi` FOREIGN KEY (`vitaminas_id`) REFERENCES `vitaminas` (`id`),
  CONSTRAINT `FKs9i46f6rxmivu4jyjjn519bue` FOREIGN KEY (`minerales_id`) REFERENCES `minerales` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `componentes_nutricionales`
--

LOCK TABLES `componentes_nutricionales` WRITE;
/*!40000 ALTER TABLE `componentes_nutricionales` DISABLE KEYS */;
INSERT INTO `componentes_nutricionales` VALUES (51,3.23,22.14,1.48,0.25,0.03,4.78,1.08,0.01,51,51),(52,0.00,128.00,0.00,2.97,0.79,0.00,23.62,0.38,52,52),(53,4.45,41.36,1.32,0.18,0.03,9.54,1.28,0.00,53,53),(58,3.95,159.06,3.37,3.76,0.87,25.79,5.83,1.22,58,58),(59,3.95,159.06,3.37,3.76,0.87,25.79,5.83,1.22,59,59),(60,0.59,165.90,1.89,0.98,0.18,32.40,6.09,0.00,60,60),(61,3.70,24.96,1.56,0.31,0.04,5.52,1.25,0.49,61,61),(62,0.59,165.90,1.89,0.98,0.18,32.40,6.09,0.00,62,62),(63,3.70,24.96,1.56,0.31,0.04,5.52,1.25,0.49,63,63),(64,0.00,230.35,0.00,16.17,7.18,0.00,21.12,0.05,64,64),(65,NULL,157.14,NULL,2.48,1.55,30.01,4.56,0.42,65,65),(66,0.00,230.35,0.00,16.17,7.18,0.00,21.12,0.05,66,66),(67,27.25,401.25,0.50,28.13,12.40,31.88,6.88,0.55,67,67),(68,27.25,401.25,0.50,28.13,12.40,31.88,6.88,0.55,68,68),(69,0.57,224.79,11.33,0.89,0.13,40.36,15.35,0.00,69,69),(70,4.45,41.36,1.32,0.18,0.03,9.54,1.28,0.00,70,70),(71,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,71,71),(75,1.12,15.98,1.97,0.28,0.04,3.09,1.16,0.01,75,75),(76,3.23,22.14,1.48,0.25,0.03,4.78,1.08,0.01,76,76),(77,0.00,128.00,0.00,2.97,0.79,0.00,23.62,0.38,77,77),(78,4.45,41.36,1.32,0.18,0.03,9.54,1.28,0.00,78,78),(79,1.12,15.98,1.97,0.28,0.04,3.09,1.16,0.01,79,79);
/*!40000 ALTER TABLE `componentes_nutricionales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cif` varchar(255) NOT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `codigo_postal` bigint DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK2fqlxbcs4h827hio1qam0dhd3` (`nombre`),
  UNIQUE KEY `UKh60fhvrn4edfbs5fxhh07gssl` (`cif`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (13,'15544225C','Burgos',9001,'Calle Don Juan de Austria, 1 ','contacto@ubu.es','Universidad de Burgos','947129482');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `local`
--

DROP TABLE IF EXISTS `local`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `local` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `direccion` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `empresa_id` bigint DEFAULT NULL,
  `ciudad` varchar(255) NOT NULL,
  `codigo_postal` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK1xnng8r04p1i86ki013sajj6l` (`email`),
  UNIQUE KEY `UKsb6b4mvjrq49lvofkejmd5efc` (`telefono`),
  UNIQUE KEY `UKj44e9qdc6wvmq6utmqdjfheo2` (`nombre`,`empresa_id`),
  KEY `FKf8jbe625rvivur0py3ojw9erh` (`empresa_id`),
  CONSTRAINT `FKf8jbe625rvivur0py3ojw9erh` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `local`
--

LOCK TABLES `local` WRITE;
/*!40000 ALTER TABLE `local` DISABLE KEYS */;
INSERT INTO `local` VALUES (6,'Avenida Cantabria','eps@ubu.es','Escuela Politécnica Superior','947129918',13,'Burgos',9006),(7,'Paseo de Comendadores','infohumanidades@ubu.es','Facultad de Humanidades y Comunicación','947499112',13,'Burgos',9001),(8,'Hospital del Rey','decader@ubu.es','Facultad de Derecho','947258701',13,'Burgos',9001),(9,'Pza. de la Infanta Dª. Elena','infoeconomicas@ubu.es','Facultad de Ciencias Económicas y Empresariales','947258956',13,'Burgos',9001);
/*!40000 ALTER TABLE `local` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `fecha_publicacion` date DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `empresa_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKijiagd6jrlkl4i3acmxyp72n1` (`empresa_id`),
  CONSTRAINT `FKijiagd6jrlkl4i3acmxyp72n1` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (12,'Este es el menú del día del viernes','2024-02-15','2024-02-16','Menú del día del viernes',13);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_local`
--

DROP TABLE IF EXISTS `menu_local`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_local` (
  `menu_id` bigint NOT NULL,
  `local_id` bigint NOT NULL,
  KEY `FKd2hkwqwqm7lbt5og437ipgwmf` (`local_id`),
  KEY `FKpgcrk0g04s1m9ygo140jujb7f` (`menu_id`),
  CONSTRAINT `FKd2hkwqwqm7lbt5og437ipgwmf` FOREIGN KEY (`local_id`) REFERENCES `local` (`id`),
  CONSTRAINT `FKpgcrk0g04s1m9ygo140jujb7f` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_local`
--

LOCK TABLES `menu_local` WRITE;
/*!40000 ALTER TABLE `menu_local` DISABLE KEYS */;
INSERT INTO `menu_local` VALUES (12,6),(12,7),(12,8),(12,9);
/*!40000 ALTER TABLE `menu_local` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_plato`
--

DROP TABLE IF EXISTS `menu_plato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_plato` (
  `menu_id` bigint NOT NULL,
  `plato_id` bigint NOT NULL,
  KEY `FKsy6i7hsv14y6lic9dednkgrkm` (`plato_id`),
  KEY `FKdbgjs42emgj2jghbxr4agwxse` (`menu_id`),
  CONSTRAINT `FKdbgjs42emgj2jghbxr4agwxse` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`),
  CONSTRAINT `FKsy6i7hsv14y6lic9dednkgrkm` FOREIGN KEY (`plato_id`) REFERENCES `plato` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_plato`
--

LOCK TABLES `menu_plato` WRITE;
/*!40000 ALTER TABLE `menu_plato` DISABLE KEYS */;
INSERT INTO `menu_plato` VALUES (12,11),(12,12),(12,13),(12,16),(12,19);
/*!40000 ALTER TABLE `menu_plato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `minerales`
--

DROP TABLE IF EXISTS `minerales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `minerales` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `calcio` decimal(10,4) DEFAULT NULL,
  `fosforo` decimal(10,4) DEFAULT NULL,
  `hierro` decimal(10,4) DEFAULT NULL,
  `magnesio` decimal(10,4) DEFAULT NULL,
  `potasio` decimal(10,4) DEFAULT NULL,
  `selenio` decimal(10,4) DEFAULT NULL,
  `sodio` decimal(10,4) DEFAULT NULL,
  `zinc` decimal(10,4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `minerales`
--

LOCK TABLES `minerales` WRITE;
/*!40000 ALTER TABLE `minerales` DISABLE KEYS */;
INSERT INTO `minerales` VALUES (51,12.3000,29.5200,0.3321,13.5300,291.5100,0.0000,6.1500,0.2091),(52,14.0000,217.0000,0.9700,33.0000,237.0000,65.7000,377.0000,0.4800),(53,20.6800,32.9000,0.2256,10.3400,156.0400,0.5640,2.8200,0.1974),(58,43.3800,77.1200,1.9280,14.4600,380.7800,5.3020,1219.4600,1.5906),(59,43.3800,77.1200,1.9280,14.4600,380.7800,5.3020,1219.4600,1.5906),(60,7.3500,60.9000,1.3440,18.9000,46.2000,27.7200,1.0500,0.5355),(61,14.5600,28.0800,0.9984,15.6000,308.8800,0.6240,492.9600,0.2288),(62,7.3500,60.9000,1.3440,18.9000,46.2000,27.7200,1.0500,0.5355),(63,14.5600,28.0800,0.9984,15.6000,308.8800,0.6240,492.9600,0.2288),(64,10.2000,138.5500,2.0400,19.5500,237.1500,27.0300,49.3000,5.3890),(65,69.8400,97.0000,0.9118,34.9200,516.0400,2.3280,420.9800,0.5820),(66,10.2000,138.5500,2.0400,19.5500,237.1500,27.0300,49.3000,5.3890),(67,63.7500,116.2500,0.7875,13.7500,112.5000,6.5000,547.5000,0.6375),(68,63.7500,116.2500,0.7875,13.7500,112.5000,6.5000,547.5000,0.6375),(69,61.9500,244.2600,3.9294,74.3400,716.8500,1.9470,1.7700,1.7700),(70,20.6800,32.9000,0.2256,10.3400,156.0400,0.5640,2.8200,0.1974),(71,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000),(75,31.0200,28.2000,0.9118,13.1600,232.1800,0.3760,7.5200,0.2162),(76,12.3000,29.5200,0.3321,13.5300,291.5100,0.0000,6.1500,0.2091),(77,14.0000,217.0000,0.9700,33.0000,237.0000,65.7000,377.0000,0.4800),(78,20.6800,32.9000,0.2256,10.3400,156.0400,0.5640,2.8200,0.1974),(79,31.0200,28.2000,0.9118,13.1600,232.1800,0.3760,7.5200,0.2162);
/*!40000 ALTER TABLE `minerales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plato`
--

DROP TABLE IF EXISTS `plato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plato` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `fecha_modificacion` date DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `tipo_plato` enum('ENTRANTE','POSTRE','PRIMER_PLATO','SEGUNDO_PLATO') NOT NULL,
  `empresa_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKe1sofwya8gf2lqkv3x48k6t0v` (`nombre`,`empresa_id`),
  KEY `FK6o1ectt4bcmsl9vui3sux9x84` (`empresa_id`),
  CONSTRAINT `FK6o1ectt4bcmsl9vui3sux9x84` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plato`
--

LOCK TABLES `plato` WRITE;
/*!40000 ALTER TABLE `plato` DISABLE KEYS */;
INSERT INTO `plato` VALUES (11,'Plato de sopa de verduras','2024-02-12','2024-02-12','Sopa de verduras','PRIMER_PLATO',13),(12,'Plato de macarrones con tomate','2024-02-12','2024-02-12','Macarrones con tomate','PRIMER_PLATO',13),(13,'Plato de entrecot','2024-02-12','2024-02-12','Entrecot de ternera','SEGUNDO_PLATO',13),(16,'Plato de tarta de queso','2024-02-12','2024-02-12','Tarta de queso','POSTRE',13),(19,'Plato de ensalada','2024-02-15','2024-02-15','Ensalada','ENTRANTE',13);
/*!40000 ALTER TABLE `plato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plato_alimento`
--

DROP TABLE IF EXISTS `plato_alimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plato_alimento` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `gramos_escogidos` double NOT NULL,
  `alimento_id` bigint DEFAULT NULL,
  `componentes_nutricionales_id` bigint DEFAULT NULL,
  `plato_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKm6gxeuv1raj07m7inovdmxa9t` (`plato_id`,`alimento_id`),
  UNIQUE KEY `UK_qm2xw9g6aau4g2qnoh3iusn6s` (`componentes_nutricionales_id`),
  KEY `FKeku9jc7u81s0qqpxhmbwp6ub1` (`alimento_id`),
  CONSTRAINT `FKeku9jc7u81s0qqpxhmbwp6ub1` FOREIGN KEY (`alimento_id`) REFERENCES `alimento` (`id`),
  CONSTRAINT `FKqmu5eooue1ookhv6x3n3ddwne` FOREIGN KEY (`componentes_nutricionales_id`) REFERENCES `componentes_nutricionales` (`id`),
  CONSTRAINT `FKs4rdd41jmhic1o99bcp605esq` FOREIGN KEY (`plato_id`) REFERENCES `plato` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plato_alimento`
--

LOCK TABLES `plato_alimento` WRITE;
/*!40000 ALTER TABLE `plato_alimento` DISABLE KEYS */;
INSERT INTO `plato_alimento` VALUES (25,482,34,59,11),(26,105,35,62,12),(27,104,36,63,12),(28,85,37,66,13),(29,100,38,NULL,13),(30,125,39,68,16),(34,123,31,76,19),(35,100,32,77,19),(36,94,33,78,19),(37,94,43,79,19);
/*!40000 ALTER TABLE `plato_alimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` tinyint NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `empresa_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKi02kr8ui5pqddyd7pkm3v4jbt` (`usuario`),
  UNIQUE KEY `UK5171l57faosmj8myawaucatdw` (`email`),
  KEY `FK87ckfs30l64gnivnfk7ywp8l6` (`empresa_id`),
  CONSTRAINT `FK87ckfs30l64gnivnfk7ywp8l6` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`),
  CONSTRAINT `usuario_chk_1` CHECK ((`rol` between 0 and 2))
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (9,'administrador@nutrimenu.com','Administrador','administrador1',0,'administrador',NULL),(10,'editor@ubu.es','Editor UBU','editorubu1',1,'editorubu',13),(11,'camarero@ubu.es','Camarero UBU','camareroubu1',2,'camareroubu',13);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vitaminas`
--

DROP TABLE IF EXISTS `vitaminas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vitaminas` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `vitaminaa` decimal(10,4) DEFAULT NULL,
  `vitaminab1` decimal(10,4) DEFAULT NULL,
  `vitaminab12` decimal(10,4) DEFAULT NULL,
  `vitaminab2` decimal(10,4) DEFAULT NULL,
  `vitaminab3` decimal(10,4) DEFAULT NULL,
  `vitaminab6` decimal(10,4) DEFAULT NULL,
  `vitaminab9` decimal(10,4) DEFAULT NULL,
  `vitaminac` decimal(10,4) DEFAULT NULL,
  `vitaminad` decimal(10,4) DEFAULT NULL,
  `vitaminae` decimal(10,4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vitaminas`
--

LOCK TABLES `vitaminas` WRITE;
/*!40000 ALTER TABLE `vitaminas` DISABLE KEYS */;
INSERT INTO `vitaminas` VALUES (51,51.6600,0.0455,0.0000,0.0234,0.7306,0.0984,0.0000,16.8510,0.0000,0.0000),(52,6.0000,0.0080,1.1700,0.0440,5.7990,0.2170,0.0000,0.0000,2.0000,0.0000),(53,0.0000,0.0395,0.0000,0.0216,0.1551,0.1213,0.0000,4.8880,0.0000,0.0000),(58,207.2600,0.1012,0.0000,0.0916,1.9039,0.1109,0.0000,4.8200,0.0000,0.0000),(59,207.2600,0.1012,0.0000,0.0916,1.9039,0.1109,0.0000,4.8200,0.0000,0.0000),(60,0.0000,0.2877,0.0000,0.1428,1.7735,0.0515,69.3000,0.0000,0.0000,0.0000),(61,22.8800,0.0250,0.0000,0.0676,1.0306,0.1019,0.0000,7.2800,0.0000,0.0000),(62,0.0000,0.2877,0.0000,0.1428,1.7735,0.0515,69.3000,0.0000,0.0000,0.0000),(63,22.8800,0.0250,0.0000,0.0676,1.0306,0.1019,0.0000,7.2800,0.0000,0.0000),(64,5.9500,0.0629,1.8700,0.2559,4.3767,0.4250,0.0000,0.0000,0.0850,0.0000),(65,0.0000,0.1455,0.0000,0.1086,1.9555,0.4132,0.0000,32.3980,0.0000,0.0000),(66,5.9500,0.0629,1.8700,0.2559,4.3767,0.4250,0.0000,0.0000,0.0850,0.0000),(67,198.7500,0.0350,0.2125,0.2413,0.2438,0.0650,3.7500,0.5000,0.6250,0.0000),(68,198.7500,0.0350,0.2125,0.2413,0.2438,0.0650,3.7500,0.5000,0.6250,0.0000),(69,0.0000,0.2832,0.0000,0.1027,1.0231,0.2124,0.0000,2.1240,0.0000,0.0000),(70,0.0000,0.0395,0.0000,0.0216,0.1551,0.1213,0.0000,4.8880,0.0000,0.0000),(71,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000,0.0000),(75,409.8400,0.0677,0.0000,0.0630,0.2942,0.0696,0.0000,3.7600,0.0000,0.0000),(76,51.6600,0.0455,0.0000,0.0234,0.7306,0.0984,0.0000,16.8510,0.0000,0.0000),(77,6.0000,0.0080,1.1700,0.0440,5.7990,0.2170,0.0000,0.0000,2.0000,0.0000),(78,0.0000,0.0395,0.0000,0.0216,0.1551,0.1213,0.0000,4.8880,0.0000,0.0000),(79,409.8400,0.0677,0.0000,0.0630,0.2942,0.0696,0.0000,3.7600,0.0000,0.0000);
/*!40000 ALTER TABLE `vitaminas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-15 20:20:55
