--------------------------------------------------------
--  File created - �ѹ����ʺ��-�ѹ�Ҥ�-17-2558   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table CPE_SHOP_PRODUCT
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."CPE_SHOP_PRODUCT" 
   (	"PRODUCT_ID" NUMBER, 
	"PRODUCT_NAME" VARCHAR2(20 BYTE), 
	"PRODUCT_TYPE" VARCHAR2(20 BYTE), 
	"PRICE_BUY" NUMBER, 
	"PRICE_SELL" NUMBER, 
	"BRAND" VARCHAR2(20 BYTE), 
	"PIC_ID" NUMBER, 
	"STOCK_ID" NUMBER, 
	"DETAIL" VARCHAR2(100 BYTE)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into SYSTEM.CPE_SHOP_PRODUCT
SET DEFINE OFF;
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (1,'acer -a2t','pc',20000,35000,'acer',74,1,'ram 4 g  hdd 1 TB intel core i7 6650k IPS Full HD');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (2,'acer-a1','pc',25000,30000,'acer',73,1,'ram 4 g HDD 750 GB intel core i5 5560u Nvidia GTX 760 ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (3,'acer-a5','pc',23345,324434,'acer',72,1,'ram 4 g HDD 750 GB intel core i5 5560u Nvidia GTX 760');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (4,'acer-aspire','pc',40000,45000,'acer',75,1,'ram 4 g HDD 750 GB intel core i5 5560u Nvidia GTX 760');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (5,'acer-x6','pc',54000,22000,'acer',76,1,'ram 4 g HDD 750 GB intel core i5 5560u Nvidia GTX 760');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (6,'acer-c5','pc',40000,50000,'acer',77,1,'ram 4 g HDD 750 GB intel core i5 5560u Nvidia GTX 760');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (7,'acer-c3','pc',30000,45000,'acer',78,1,'ram 4 g HDD 750 GB intel core i5 5560u Nvidia GTX 760');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (8,'acer','pc',29000,40000,'acer',79,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (9,'test','pc',30000,46000,'acer',80,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (10,'test','pc',15000,18000,'acer',81,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (11,'test','pc',20000,25000,'acer',82,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (12,'test','pc',33000,55656,'acer',83,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (13,'test','pc',35000,34256,'acer',84,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (14,'test','pc',23400,22342,'acer',85,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (15,'test','pc',22200,25674,'acer',86,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (16,'test','pc',48000,43534,'acer',87,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (17,'test','pc',39000,35627,'acer',88,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (18,'notebook','notebook',34535,43535,'asus',4,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (19,'notebook','notebook',55553,53459,'asus',5,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (20,'notebook','notebook',44522,77544,'asus',7,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (21,'notebook','notebook',99997,45633,'asus',3,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (22,'notebook','notebook',53433,67544,'asus',16,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (23,'notebook','notebook',54333,46644,'asus',35,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (24,'notebook','notebook',24244,34533,'asus',22,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (25,'notebook','notebook',22345,35355,'asus',6,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (26,'notebook','notebook',66666,23424,'asus',11,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (27,'notebook','notebook',22222,36773,'asus',13,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (28,'notebook','notebook',55345,53535,'asus',21,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (29,'phone','phone',34553,44522,'lenovo',36,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (30,'phone','phone',33333,99997,'lenovo',43,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (31,'phone','phone',44422,53433,'lenovo',44,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (32,'phone','phone',65332,34235,'lenovo',37,1,'CPU : Intel Atom Z3735F 1.33GHz  RAM : 2GB/DDR3L ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (33,'phone','phone',34235,35627,'lenovo',50,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (34,'phone','phone',34622,43535,'lenovo',46,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (35,'phone','phone',55553,53459,'lenovo',39,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (36,'phone','phone',44522,77544,'lenovo',40,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (37,'phone','phone',99997,45633,'lenovo',51,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (38,'phone','phone',53433,67544,'lenovo',52,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (39,'phone','phone',34235,23424,'lenovo',41,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (40,'tablet','tablet',2424,2452,null,54,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (41,'tablet','tablet',2324,2452,null,71,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (42,'tablet','tablet',6326,2453,null,56,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (43,'tablet','tablet',6246,3543,null,59,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (44,'tablet','tablet',7324,5633,null,60,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (45,'tablet','tablet',2345,2542,null,63,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (46,'tablet','tablet',5432,2452,null,61,1,'Harddrive : 64GB SSD ');
Insert into SYSTEM.CPE_SHOP_PRODUCT (PRODUCT_ID,PRODUCT_NAME,PRODUCT_TYPE,PRICE_BUY,PRICE_SELL,BRAND,PIC_ID,STOCK_ID,DETAIL) values (47,'tablet','tablet',4443,2542,null,69,1,'Harddrive : 64GB SSD ');
--------------------------------------------------------
--  DDL for Index CPE_SHOP_PRODUCT_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."CPE_SHOP_PRODUCT_PK" ON "SYSTEM"."CPE_SHOP_PRODUCT" ("PRODUCT_ID", "PRODUCT_NAME") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table CPE_SHOP_PRODUCT
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."CPE_SHOP_PRODUCT" ADD CONSTRAINT "CPE_SHOP_PRODUCT_PK" PRIMARY KEY ("PRODUCT_ID", "PRODUCT_NAME")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
  ALTER TABLE "SYSTEM"."CPE_SHOP_PRODUCT" MODIFY ("PRODUCT_NAME" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."CPE_SHOP_PRODUCT" MODIFY ("PRODUCT_TYPE" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."CPE_SHOP_PRODUCT" MODIFY ("PRODUCT_ID" NOT NULL ENABLE);