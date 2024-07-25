-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: gadget
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
-- Table structure for table `bank_server`
--

DROP TABLE IF EXISTS `bank_server`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bank_server` (
  `id` int NOT NULL AUTO_INCREMENT,
  `card_holder_name` varchar(255) DEFAULT NULL,
  `card_number` bigint DEFAULT NULL,
  `cvv_number` int DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_gdn1mbolb2druihrpnqbyfh4k` (`card_number`),
  UNIQUE KEY `UK_dioc6ba7o6bc99cydlrc6usk7` (`cvv_number`),
  UNIQUE KEY `UK_lfrtpsp2itxiuorlnld10kc40` (`expiry_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bank_server`
--

LOCK TABLES `bank_server` WRITE;
/*!40000 ALTER TABLE `bank_server` DISABLE KEYS */;
/*!40000 ALTER TABLE `bank_server` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int NOT NULL,
  `image_link` varchar(255) DEFAULT NULL,
  `product_brand` varchar(255) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_price` int DEFAULT NULL,
  `product_quantity` int DEFAULT NULL,
  `selected_quantity` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,'https://m.media-amazon.com/images/I/71igHNJUz0L._SL1500_.jpg','',7,'MSI Thin A15',57999,10,1,1),(2,'https://m.media-amazon.com/images/I/71TcPkUibVL._SL1500_.jpg','',1,'Dell 15 ',53999,8,1,1);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_seq`
--

DROP TABLE IF EXISTS `cart_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_seq`
--

LOCK TABLES `cart_seq` WRITE;
/*!40000 ALTER TABLE `cart_seq` DISABLE KEYS */;
INSERT INTO `cart_seq` VALUES (101);
/*!40000 ALTER TABLE `cart_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `my_generator`
--

DROP TABLE IF EXISTS `my_generator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `my_generator` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `my_generator`
--

LOCK TABLES `my_generator` WRITE;
/*!40000 ALTER TABLE `my_generator` DISABLE KEYS */;
INSERT INTO `my_generator` VALUES (4);
/*!40000 ALTER TABLE `my_generator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_generator`
--

DROP TABLE IF EXISTS `order_generator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_generator` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_generator`
--

LOCK TABLES `order_generator` WRITE;
/*!40000 ALTER TABLE `order_generator` DISABLE KEYS */;
INSERT INTO `order_generator` VALUES (6);
/*!40000 ALTER TABLE `order_generator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_table`
--

DROP TABLE IF EXISTS `order_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_table` (
  `order_id` int NOT NULL,
  `country` varchar(255) DEFAULT NULL,
  `flat` varchar(255) DEFAULT NULL,
  `user_full_name` varchar(255) DEFAULT NULL,
  `landmark` varchar(255) DEFAULT NULL,
  `order_quantity` int DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `phone_number` bigint NOT NULL,
  `pincode` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_price` bigint NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_table`
--

LOCK TABLES `order_table` WRITE;
/*!40000 ALTER TABLE `order_table` DISABLE KEYS */;
INSERT INTO `order_table` VALUES (1,'India','A','Venkatesh','A',1,'pending','Cash On Delivery',9999999999,560078,1,'Dell 15 ',53999,'Karnataka',1),(2,'India','1','Venkat','JP Nagar',2,'pending','Cash On Delivery',1111111111,560078,1,'Dell 15 ',107998,'Karnataka',1),(3,'India','7bcg','sharth','bangalore',1,'pending','Cash On Delivery',881239808,569978,1,'Dell 15 ',53999,'Karnataka',1),(4,'India','gskjdnjsdb','bhavana','673t76rfyd',1,'pending','Cash On Delivery',9154929232,517422,1,'Dell 15 ',53999,'Andhra Pradesh',1),(5,'India','gskjdnjsdb','bhavana','673t76rfyd',1,'pending','Cash On Delivery',9154929232,517422,7,'MSI Thin A15',57999,'Andhra Pradesh',1);
/*!40000 ALTER TABLE `order_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `payment_id` int NOT NULL,
  `card_cvv` int NOT NULL,
  `card_holder_name` varchar(255) DEFAULT NULL,
  `card_number` bigint NOT NULL,
  `expiry_date` date DEFAULT NULL,
  `payment_mode` varchar(255) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `total_amount` bigint NOT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,0,NULL,0,NULL,'Cash On Delivery','Payment Done',0,0,1),(2,0,NULL,0,NULL,'Cash On Delivery','Payment Done',0,0,1),(52,0,NULL,0,NULL,'Cash On Delivery','Payment Done',0,111998,1),(53,0,NULL,0,NULL,'Cash On Delivery','Payment Done',0,111998,1),(54,0,NULL,0,NULL,'Cash On Delivery','Payment Done',0,111998,1);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_seq`
--

DROP TABLE IF EXISTS `payment_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_seq`
--

LOCK TABLES `payment_seq` WRITE;
/*!40000 ALTER TABLE `payment_seq` DISABLE KEYS */;
INSERT INTO `payment_seq` VALUES (151);
/*!40000 ALTER TABLE `payment_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `link1` varchar(255) DEFAULT NULL,
  `link2` varchar(255) DEFAULT NULL,
  `link3` varchar(255) DEFAULT NULL,
  `product_colour` varchar(255) DEFAULT NULL,
  `product_description1` varchar(255) DEFAULT NULL,
  `product_description2` varchar(255) DEFAULT NULL,
  `product_description3` varchar(255) DEFAULT NULL,
  `product_description4` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_price` bigint DEFAULT NULL,
  `product_quantity` int DEFAULT NULL,
  `product_warranty` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `FK979liw4xk18ncpl87u4tygx2u` (`user_id`),
  CONSTRAINT `FK979liw4xk18ncpl87u4tygx2u` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'https://m.media-amazon.com/images/I/71TcPkUibVL._SL1500_.jpg','https://m.media-amazon.com/images/I/71h-SX-ecgL._SL1200_.jpg','https://m.media-amazon.com/images/I/71-PdmrSeRL._SL1200_.jpg','https://m.media-amazon.com/images/I/610JxREowPL._SL1200_.jpg','Silver','Processor - Intel Core I5 - 1235U | Weight - 1.66 kg','RAM - 8GB | Storage - 512GB SSD (No HDD)','Display - 15.6\" (39.62cm) FHD | Spill Resistant Keyboard','Windows 11 + MSO\'21 | 15  Month McAfee Antivirus','Dell 15 ',53999,6,'1 year on Laptop and Charger ( not applicable on the external damanges)',NULL),(7,'https://m.media-amazon.com/images/I/71igHNJUz0L._SL1500_.jpg','https://m.media-amazon.com/images/I/61duBAD+knL._SL1500_.jpg','https://m.media-amazon.com/images/I/51RO7fX0lSL._SL1500_.jpg','https://m.media-amazon.com/images/I/71orzcBOoEL._SL1500_.jpg','Grey','Processor - AMD Ryzen5 - 7535HS | Weight - 1.86 kg','RAM - 16GB | Storage - 512GB SSD (No HDD)','Display - 15.6\" (40cm) FHD 144Hz','Windows 11 + MSO\'21 | 15  Month McAfee Antivirus','MSI Thin A15',57999,9,'2 years Brand Warranty for Laptop and charger (Physical damages are not  included)',NULL),(8,'https://m.media-amazon.com/images/I/71Ckr4dFaQL._SX679_.jpg','https://m.media-amazon.com/images/I/717VNeqBZ+L._SL1500_.jpg','https://m.media-amazon.com/images/I/71llSvoeffL._SL1500_.jpg','https://m.media-amazon.com/images/I/81D4dbOl3NL._SL1500_.jpg','Silver','Processor - Intel Core I5 -13th Gen - 1334U | Intel Iris Xe graphics','RAM - 16GB DDR4 | Storage - 512GB SSD (No HDD)','Display - 15.6\" (39.62cm) FHD | Weight - 1.59 KG','Backlit Key Board | MSO | Dual speakers ','HP Laptop 15',57899,10,'1 year Brand Warranty for Laptop and charger (Physical damages are not  included)',NULL),(9,'https://m.media-amazon.com/images/I/71Lvi7DDA0L._SL1500_.jpg','https://m.media-amazon.com/images/I/71iZPlD6BUL._SL1500_.jpg','https://m.media-amazon.com/images/I/51qmbGtWaKL.jpg','https://m.media-amazon.com/images/I/91iRUUxp94L._SL1500_.jpg','Blue','Processor - Intel Core I7 - 12th Gen - 12650H ','RAM - 16GB | Storage - 512GB SSD (No HDD)','Display - 15.6\" (39.62cm) FHD | Intel Iris Xe Graphics','Windows 11 + MSO\'21 | Weight - 1.7 kg','ASUS Vivobook 15',61990,10,'1 year Brand Warranty for Laptop and charger (Physical damages are not  included)',NULL),(10,'https://m.media-amazon.com/images/I/71mQMASiF7L._SL1500_.jpg','https://m.media-amazon.com/images/I/71pHAEYmgBL._SL1500_.jpg','https://m.media-amazon.com/images/I/71gJQzNsMlL._SL1500_.jpg','https://m.media-amazon.com/images/I/71YlDPQPOYL._SL1500_.jpg','Black','Processor - Intel Celeron N4500 | Weight - 1.3 kg','RAM - 8GB | Storage - 256GB SSD (No HDD)','Display - 14\" (35.56cm) FHD | Thin & Light weight Laptop','Integrated Graphics | Windows 11','ASUS Vivobook Go 14 (2023)',22999,10,'1 year Brand Warranty for Laptop and charger (Physical damages are not  included)',NULL),(11,'https://m.media-amazon.com/images/I/7184yGb0PsL._SL1500_.jpg','https://m.media-amazon.com/images/I/716yR0T86iL._SL1500_.jpg','https://m.media-amazon.com/images/I/71ogkzaA5jL._SL1500_.jpg','https://m.media-amazon.com/images/I/71-kOZB7feL._SL1500_.jpg','Silver','Processor - AMD Ryzen 3 5300U | Weight - 1.69 kg','RAM - 8GB DDR4 | Storage - 512GB SSD (No HDD)','Display - 15.6\" (39.62cm) FHD | Thin & Light weight laptop','Windows 11 | MSO 2019 | AMD Radeon graphics','HP Laptop 15s',31999,10,'1 year Brand Warranty for Laptop and charger (Physical damages are not  included)',NULL),(12,'https://m.media-amazon.com/images/I/51CEknIIHcL._SL1080_.jpg','https://m.media-amazon.com/images/I/51i2stSaJsL._SL1080_.jpg','https://m.media-amazon.com/images/I/61-EgcODdjL._SL1080_.jpg','https://m.media-amazon.com/images/I/51pHIdY++qL._SL1080_.jpg','Grey','Processor - Intel Core I3 - 12th Gen - 1215U | Weight - 1.48kg','RAM - 8GB | Storage - 512GB SSD (No HDD) | Intel UHD Graphics','Display - 15.6\" (39.62cm) FHD | Display - 15.6\" (39.62cm) FHD | Spill Resistant Keyboard','Windows 11 + MSO\'21 | 15  Month McAfee Antivirus','Dell Smartchoice 15',31999,10,'1 year Brand Warranty for Laptop and charger (Physical damages are not  included)',NULL),(13,'https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg','https://m.media-amazon.com/images/I/71-6roO29AL._SL1500_.jpg','https://m.media-amazon.com/images/I/71-6roO29AL._SL1500_.jpg','https://m.media-amazon.com/images/I/71-6roO29AL._SL1500_.jpg','Space Grey','RAM - 8GB | Storage - 256GB SSD (No HDD)','FaceTime HD Camera | Touch ID','Display - 13.3\" (33.74cm) FHD | Backlit Keyboard','Works with iPhone/iPad','Apple MacBook Air Laptop M1 chip',69990,10,'1 year Brand Warranty for Laptop and charger (Physical damages are not  included)',NULL),(14,'https://m.media-amazon.com/images/I/61Id6WJDWqL._SL1200_.jpg','https://m.media-amazon.com/images/I/61fd1yUJ6kL._SL1200_.jpg','https://m.media-amazon.com/images/I/71MUvQYhSOL._SL1200_.jpg','https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/6/w/l/z7-pro-5g-i2301-iqoo-original-imagtbffxnwvsnfx.jpeg?q=70&crop=false','Blue Lagoon','8GB RAM, 256GB Storage | 64MP Aura Light OIS Camera','4nm MediaTek Dimesity 7200 5G Processor ','3D Curved Super-vision Display with 17.22 cm (6.78 inches) screen size, 93.3% Screen-to-body ratio, 120 Hz AMOLED FHD+, 1.07 Billion Colors, 1300 nits Peak Local Brightness','66W FlashCharge with 4600mAh large battery | 8GB RAM + 8GB Extended RAM','iQOO Z7 Pro 5g',25999,10,'1 year Brand Warranty on Handset and the charger (Physical damages are not included)',NULL),(15,'https://m.media-amazon.com/images/I/61nxQ62qglL._SL1500_.jpg','https://m.media-amazon.com/images/I/71rooC1PHHL._SL1200_.jpg','https://m.media-amazon.com/images/I/51WU-TWgRHL._SL1500_.jpg','https://m.media-amazon.com/images/I/513gpPI73-L._SL1500_.jpg','Celadon Marble','Qualcomm Snapdragon 7 Gen 3 chipset ','100W SuperVOOC charging | 5500mAh Battery','8Gb RAM 128Gb Storage','SONY LYT-600 (IMX882) 50MP camera sensor with OIS','Oneplus Nord Ce4',24999,10,'1 year Brand Warranty on Handset and the charger (Physical damages are not included)',NULL),(16,'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/t/u/-original-imagxhd5xtjuwnqz.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/z/a/-original-imagymagnckhyx6d.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/b/c/12-pro-5g-rmx3840-realme-original-imagxgnk9zzrs9y6.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/1/i/-original-imagxrz5pmq63ekb.jpeg?q=70&crop=false','Submarine Blue','8 GB RAM | 256 GB ROM','17.02 cm (6.7 inch) Full HD+ Display','50MP + 8MP + 64MP | 32MP Front Camera','5000 mAh Battery | Snapdragon 7s Gen 2 Processor','Realme 12 Pro+ 5G',29999,10,'1 year Brand Warranty on Handset and the charger (Physical damages are not included)',NULL),(17,'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/w/i/d/-original-imagwzrguaee4pz6.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/o/f/-original-imagx2fgdvh6fzzg.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/r/4/f/-original-imagx2fgucqfzbfx.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/p/h/m/-original-imagx2fgeh3gdnbz.jpeg?q=70&crop=false','Spectre Black','12 GB RAM | 512 GB ROM','16.94 cm (6.67 inch) Display | 5000 mAh Battery','64MP + 8MP + 2MP | 16MP Front Camera','Dimensity D8300 Ultra Processor','POCO X6 Pro 5G',25999,10,'1 year Brand Warranty on Handset and the charger (Physical damages are not included)',NULL),(18,'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/5/f/-original-imagwu9fyya8h6mg.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/4/i/e/-original-imagwzh8hjxgragr.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/r/6/-original-imagwu9ftxwdrfwj.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/8/x/-original-imagwu9fadxm9azt.jpeg?q=70&crop=false','Fusion Purple','12 GB RAM | 512 GB ROM','16.94 cm (6.67 inch) Display | 5000 mAh Battery','200MP (OIS) + 8MP + 2MP | 16MP Front Camera','Dimensity 7200 Ultra 5G Processor','Redmi Note 13 Pro+ 5g',30999,10,'1 year Brand Warranty on Handset and the charger (Physical damages are not included)',NULL),(19,'https://m.media-amazon.com/images/I/71nvkHnPpZL._SL1500_.jpg','https://m.media-amazon.com/images/I/71nvkHnPpZL._SL1500_.jpg','https://m.media-amazon.com/images/I/71nvkHnPpZL._SL1500_.jpg','https://m.media-amazon.com/images/I/61YNAYpY2cL._SL1500_.jpg','Green','128 GB ROM ','15.49 cm (6.1 inch) Super Retina XDR Display','48MP + 12MP | 12MP Front Camera','A16 Bionic Chip, 6 Core Processor Processor','Apple iPhone 15',71999,10,'1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories',NULL),(20,'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/x/q/u/-original-imahfqwstzrcnhpb.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/x/q/u/-original-imahfqwstzrcnhpb.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/x/q/u/-original-imahfqwstzrcnhpb.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/k/u/f27-pro-cph2643-oppo-original-imahfs7qpyetuug8.jpeg?q=70&crop=false','Dusk Pink','8 GB RAM | 128 GB ROM | 5000 mAh Battery','17.02 cm (6.7 inch) Full HD+ Display','64MP + 2MP | 8MP Front Camera','Dimensity 7050 Processor','OPPO F27 Pro+',27999,10,'1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories',NULL),(21,'https://m.media-amazon.com/images/I/61-ZYvldY+L._SL1500_.jpg','https://m.media-amazon.com/images/I/71Ir9qUcqwL._SL1500_.jpg','https://m.media-amazon.com/images/I/61U7CmuGSuL._SL1500_.jpg','https://m.media-amazon.com/images/I/61r5p5A9R3L._SL1500_.jpg','Thunder Gray','With Mic:Yes | Connector type: No | Bluetooth version: 5.3 | Wireless range: 10 m','Battery life: 36 Hours | Charging time: 60 min (Earphone), 90 min (Earphone and Case)','Battery life: 36 Hours | Charging time: 60 min (Earphone), 90 min (Earphone and Case)','25dB Active Noise Cancellation','OnePlus Nord Buds 2',2999,10,'1 Year Manufacturer Warranty',NULL),(22,'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/v/y/o/-original-imagt3vwuweuwk9v.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/s/j/o/-original-imagt3vwrh8gfpaq.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/f/o/x/-original-imagt3vwg7vvt7sf.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/l/e/q/-original-imagt3vwhnzsffsa.jpeg?q=70&crop=false','Stylish Black','With Mic:Yes | Bluetooth version: 5.3 | 12.4mm Dynamic Bass Driver','30dB ANC with 360 Degree Spatial Audio Effect Supports Dolby Atmos','Upto 40 Hours Battery Life with Fast-charging support of 10 min charging for 7 hours playback','Quad-mic Call Noise Cancellation, 50ms ultra-low latency Bluetooth 5.3 | IP55 Dust and Water Resistance','Realme Buds T300',2099,10,'1 Year Domestic Warranty',NULL),(23,'https://m.media-amazon.com/images/I/61jn3K2cP6L._SL1500_.jpg','https://m.media-amazon.com/images/I/61qzknTpa1L._SL1500_.jpg','https://m.media-amazon.com/images/I/61ON1-1-97L._SL1500_.jpg','https://m.media-amazon.com/images/I/61mZogGlI1L._SL1500_.jpg','Tranquil Blue','50H Playtime | Quad Mics ENx™ Tech','Low Latency Mode | 13mm Drivers','ASAP™ Charge | IPX4 Protection','IWP™ | Touch Controls & BT v5.3','boAt Airdopes 170 ',1299,10,'1 year warranty from the date of purchase',NULL),(24,'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/k/i/o/-original-imagp6skdxptyrjt.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/u/5/k/-original-imagp6skrv3mma3a.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/2/i/h/-original-imagp6skzrzdfxh8.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/m/e/d/-original-imagp6sknfwbu4zm.jpeg?q=70&crop=false','Celeste Blue','With Mic:Yes | Bluetooth version: v5.1 | Wireless range: 10 m','Battery life: 50 Hours | Charging time: 2 Hour','Driver Size : Immersive Audio with 11mm driver','Type - C Charging Port | Upto 50 Hours of Total Playtime','Noise Buds VS102',999,10,'1 Year Warranty from the Date of Purchase',NULL),(25,'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/e/a/f/-original-imagtc44nk4b3hfg.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/j/0/o/-original-imagtcfghamt7x4z.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/6/6/h/-original-imagtdqgnhzehtgm.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/9/k/m/-original-imagtdqgzfnjwwqp.jpeg?q=70&crop=false','White','With Mic:Yes | Connector type: No','Apple-designed H2 chip | Adaptive Audio','Low-distortion, custom-built driver and amplifier deliver crisp, clear high notes and deep, rich bass in stunning definition.','Up to 2x more Active Noise Cancellation than the previous-generation AirPods Pro','Apple AirPods Pro (2nd generation) with MagSafe Case (USB-C)',18999,10,'1 Year Warranty',NULL),(26,'https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/t/q/0/-original-imagzuzzrfgytsfz.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/m/j/9/-original-imagzuzzfrmrfsrw.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/j/v/j/-original-imagzuzzbyhfrvwc.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/4/8/e/-original-imagzuzz4ax3z3jz.jpeg?q=70&crop=false','Navy Blue',' With Mic:Yes | Bluetooth version: 5.2 | Wireless range: 10 m','Battery life: 60 hrs | 60 Hours Playback | boAt Signature Sound','ASAP Charge: 10 Mins Charge= 20 Hours Playback','IPX7: Water & Sweat Resistant | Dual Pairing: Connect 2 devices at once','boAt Rockerz 255 Pro+',1299,10,'1 Year Warranty from the Date of Purchase',NULL),(27,'https://rukminim2.flixcart.com/image/832/832/l4ei1e80/headphone/b/j/w/bullets-wireless-z2-oneplus-original-imagfaww7ga6nshz.jpeg?q=70&crop=false','https://m.media-amazon.com/images/I/51ZWE9W53fL._SL1500_.jpg','https://m.media-amazon.com/images/I/71WTqE8FijL._SL1500_.jpg','https://m.media-amazon.com/images/I/41M3NrJGhTL._SL1500_.jpg','Acoustic Red','With Mic:Yes | Bluetooth version: 5','Battery life: 20 Hrs | Charging time: 10 Mins','Battery life: 20 Hrs','Charging time: 10 mins','OnePlus Bullets Wireless Z2 Bluetooth Headset',1799,10,'1 Year Warranty on Product',NULL),(28,'https://rukminim2.flixcart.com/image/832/832/l09w8sw0/headphone/i/u/j/-original-imagc3zppcfhhppd.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/l09w8sw0/headphone/4/z/9/-original-imagc3zphs5pdkfb.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/a/f/v/-original-imagj85k426at7j8.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/l09w8sw0/headphone/z/h/k/-original-imagc3zp2gdjcxgn.jpeg?q=70&crop=false','Black','With Mic:Yes | Wireless range: 10 m','Bluetooth version: 4.2','Battery life: 15 hrs | Charging time: Approximate 4.5 hrs','10 mins charge 60 mins playtime','SONY WI-XB400 Extra Bass Wireless Stereo Bluetooth Headset ',2999,10,'1 Year Warranty',NULL),(29,'https://m.media-amazon.com/images/I/61c575GViJL._SL1500_.jpg','https://m.media-amazon.com/images/I/81NSHGg6foL._SL1500_.jpg','https://m.media-amazon.com/images/I/71yvZk1qGPL._SL1500_.jpg','https://m.media-amazon.com/images/I/61mhfrx3UyL._SL1500_.jpg','Vitality White','With Mic:Yes | Battery life: 40 hrs | 13.6mm Dynamic Titanized Bass Driver','30dB ANC with 360 degree Spatial Audio Effect | realme Link App Connectivity','Upto 40 Hours Battery Life | Fast-charging support of 10 min charging for 25 hours playback','45ms ultra-low latency | Bluetooth 5.3 | IP55 Dust and Water Resistance','realme Buds Wireless 3',1799,10,'1 Year Warranty',NULL),(30,'https://m.media-amazon.com/images/I/514FHju3wzL._SL1500_.jpg','https://m.media-amazon.com/images/I/61JR0DcN0eL._SL1500_.jpg','https://m.media-amazon.com/images/I/71FFW-ii5+L._SL1500_.jpg','https://m.media-amazon.com/images/I/61a6twk4A9L._SL1500_.jpg','Gunmetal Black','Crystal Bionic Sound | 25db ANC ','ASAP Charge - 5 hours of playtime in just 10 minutes of charging.','Clear Voice Calls - ENx tech | 24 hrs Playback','IP Rating- It is marked with IPX4 water resistance so that you don’t have to fret over sweat or drizzle.','boAt Rockerz 330ANC Bluetooth Neckband',1999,10,'1 year warranty from the date of purchase',NULL),(31,'https://m.media-amazon.com/images/I/41uA9kFKO4L._SL1280_.jpg','https://m.media-amazon.com/images/I/41U5jOqO0tL._SL1280_.jpg','https://m.media-amazon.com/images/I/51nQ8dwckGL._SL1280_.jpg','https://m.media-amazon.com/images/I/41U5jOqO0tL._SL1280_.jpg','NA','Read speeds up to 3,500 MB/s2 (500GB – 1TB models), 840 Lumen .Wattage : ‎3600','Downloadable Western Digital SSD Dashboard4 helps you monitor your drive’s health','Slim M.2 2280 form factor, Sequential Read Performance: 3300MB/s, Sequential Write Performance: 1200MB/s','Save on space with a single-sided M.2 2280 PCIe Gen3 x4 NVMe SSD','Western Digital WD Blue SN570',2999,10,'5 year limited warranty',NULL),(32,'https://m.media-amazon.com/images/I/51k5wAFZgFL._SL1500_.jpg','https://m.media-amazon.com/images/I/61M75adMjhL._SL1080_.jpg','https://m.media-amazon.com/images/I/61iPieK9MNL._SL1080_.jpg','https://m.media-amazon.com/images/I/61xfvV5ERIL._SL1080_.jpg','NA','Impressive read/write speeds up to 5000/4200MB/s1.','Spacious storage up to 4TB2. NVMe PCIe 4.0 M.2 (2280).','Backward compatibility with PCIe 3.0. Micron Advanced 3D NAND.','Performs up to 43% faster than the fastest Gen3 NVMe SSDs3','Crucial P3 Plus',3799,10,'3 Year Warranty',NULL),(33,'https://m.media-amazon.com/images/I/61n2UmMkYIL._SL1500_.jpg','https://m.media-amazon.com/images/I/713e3hV51QL._SL1500_.jpg','https://m.media-amazon.com/images/I/71fCwXvEV-L._SL1500_.jpg','https://m.media-amazon.com/images/I/71Qy7tzH9kL._SL1500_.jpg','NA','m.2 NVMe SSD with 2280 form factor.','512GB capacity | 1900* MB/s Sequential read speed | 1100* MB/s sequential write speed.','S.M.A.R.T. | Thermal management | Ultra low power consumption | Silent operation.','Useful for faster data transfer | Next level performance depending on PC configuration | Better than conventional data storage devices.','ZEBRONICS MN52 m.2 NVMe',3299,10,'1 Year Carry into service centre',NULL),(34,'https://m.media-amazon.com/images/I/618VzJBuz0L._SL1500_.jpg','https://m.media-amazon.com/images/I/81Ose55RZ4L._SL1500_.jpg','https://m.media-amazon.com/images/I/81SenrGJtrL._SL1500_.jpg','https://m.media-amazon.com/images/I/81yayyHN97L._SL1500_.jpg','NA','Fast NVMe performance for daily computing needs — up to 3,200MB/s**','SSDs offer shock-resistance against accidental bumps and drops','The slim M.2 2280 form factor is ideal for computers with an NVMe slot','Downloadable Western Digital SSD Dashboard monitors the health and usage of your drive','Western Digital WD Green SN350 NVMe 1TB',5899,10,'3 Year Warranty',NULL),(35,'https://m.media-amazon.com/images/I/712UQPOqmaL._SL1500_.jpg','https://m.media-amazon.com/images/I/81OfhuYVWfL._SL1500_.jpg','https://m.media-amazon.com/images/I/81ZO6fA81oL._SL1500_.jpg','https://m.media-amazon.com/images/I/81fnoAASINL._SL1500_.jpg','NA','Performance: Sequential Read/Write speeds up to 3,500/3,300 MB/s respectively.','Interface : NVMe (PCIe Gen 3.0 x 4).','Voltage:3.3 V ± 5 % Allowable voltage. Operating Temperature : 0 - 70 ℃','Form Factor : M.2 (2280) Available Capacity : up to 2TB','Samsung 970 EVO Plus 500GB PCIe NVMe M.2',6799,10,'5 year limited warranty',NULL),(36,'https://m.media-amazon.com/images/I/61JyZxQ36lL._SL1500_.jpg','https://m.media-amazon.com/images/I/71h43APsPLL._SL1500_.jpg','https://m.media-amazon.com/images/I/71p2ksC6WoL._SL1500_.jpg','https://m.media-amazon.com/images/I/71j+JEVe+lL._SL1500_.jpg','Black','114 Keys Including 12 Dedicated Multimedia Keys & with Rupee Key','Superior Built Quality | Modular Design','USB interface | UV Printed Keycap | Plug & play','Compatible with Windows XP/Vista/7/8/10','Zebronics ZEB-KM2100 Multimedia USB Keyboard',249,10,'1 year warranty. Carry into service center',NULL),(37,'https://m.media-amazon.com/images/I/613Tk-Ci6NL._SL1500_.jpg','https://m.media-amazon.com/images/I/71Ql2lKDpBL._SL1500_.jpg','https://m.media-amazon.com/images/I/61je0mQeYUL._SL1500_.jpg','https://m.media-amazon.com/images/I/61BQCfqDlfL._SL1500_.jpg','Black','Gaming Keyboard with Breathing Effect |Backlit Keyboard Membrane','Mixed Color Lighting | Floating Keycaps','19 Anti-Ghosting Keys | Windows Lock Key | Braided cable','Elevated Keys and 19-Key Anti Ghosting','EvoFox Fireblade Wired TKL Gaming Keyboard',899,10,'1 Year Manufacturing Warranty',NULL),(38,'https://m.media-amazon.com/images/I/6124OpB-LRL._SL1500_.jpg','https://m.media-amazon.com/images/I/61OjTmn08ZL._SL1500_.jpg','https://m.media-amazon.com/images/I/71BXoIitCUL._SL1500_.jpg','https://m.media-amazon.com/images/I/71IkjP74ALL._SL1500_.jpg','White and Grey Color ','61 Keys Compact Mechanical Keyboard',' Linear Red Switch | Pro Driver/Software Supported','Pro Software Customizable | Vibrant RGB','Dedicated for FPS Gamer | Hot-Swappable Red Switches','Redragon K617 Fizz 60% Wired RGB Gaming Keyboard',2799,10,'1 Year of Manufacture Warranty where the customer will have to ship the product to service center',NULL),(39,'https://m.media-amazon.com/images/I/81tioCUVf4L._SL1500_.jpg','https://m.media-amazon.com/images/I/91i-ZYTcf6L._SL1500_.jpg','https://m.media-amazon.com/images/I/81yD0BBk2TL._SL1500_.jpg','https://m.media-amazon.com/images/I/81oNby3lS9L._SL1500_.jpg','Black','High-Performance Gold-Plated USB Mouse: 6 Buttons','Multi-Color LED Lights | Breathing LED','High-Resolution Sensor with max 3600 DPI, and DPI Switch','High Precision | Works on most surface','ZEBRONICS-Transformer-M',299,10,'1 year carry in to service centre',NULL),(40,'https://m.media-amazon.com/images/I/512n+5X1p6L._SL1000_.jpg','https://m.media-amazon.com/images/I/71pPYNON7nL._SL1500_.jpg','https://m.media-amazon.com/images/I/71Ovo8NsgQL._SL1500_.jpg','https://m.media-amazon.com/images/I/61g26u3QzhL._SL1500_.jpg','Black','Bluetooth 5.1 + 2.4 Ghz wireless Gaming Mouse',' 7D buttons mouse | 3 DPI modes 1600:2400:3200 mice for ipad, Mac book, Tablet, PC, Smart TV','TYPE - C charging Port | Soundless Clicking Mouse','2-MODE BLUETOOTH + WIRELESS MOUSE','Offbeat wireless Gaming Mouse',1090,10,'1 year manufacturer\'s warranty from the date of delivery Pan India free pick up and replacement.',NULL),(41,'https://m.media-amazon.com/images/I/61GvCTDIqBL._SL1500_.jpg','https://m.media-amazon.com/images/I/711K+WDspnL._SL1500_.jpg','https://m.media-amazon.com/images/I/71OVyldP4YL._SL1500_.jpg','https://m.media-amazon.com/images/I/71lbVKczjqL._SL1500_.jpg','Graphite','2-Year Battery | Silent Click | Customizable Side Buttons','Bluetooth for PC/Mac/Multi-Device/Chromebook','Line-by-line precision for documents and super-fast scrolling for long web pages','Plastic parts in Signature M650 L include certified post-consumer recycled plastic','Logitech Signature M650 L Full Size Wireless Mouse',2699,10,'1-Year Limited Hardware Warranty',NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_generator`
--

DROP TABLE IF EXISTS `product_generator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_generator` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_generator`
--

LOCK TABLES `product_generator` WRITE;
/*!40000 ALTER TABLE `product_generator` DISABLE KEYS */;
INSERT INTO `product_generator` VALUES (43);
/*!40000 ALTER TABLE `product_generator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `mobile_no` bigint DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_r9kvst217faqa7vgeyy51oos0` (`email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,NULL,NULL,'achavenky@gmail.com','VENKATESH','A',99999999999,'Venky@123',0,NULL),(2,NULL,NULL,'dalawai@gmail.com','Srikanth','Dalawai',9686353716,'12345678',0,NULL),(3,NULL,NULL,'sharatha@gmail.com','sharath','d',9990099009900,'1234567',0,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-28 16:08:16
