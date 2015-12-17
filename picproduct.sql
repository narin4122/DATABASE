--------------------------------------------------------
--  File created - ÇÑ¹¾ÄËÑÊº´Õ-¸Ñ¹ÇÒ¤Á-17-2558   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table CPE_SHOP_PIC_PRODUCT
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."CPE_SHOP_PIC_PRODUCT" 
   (	"ID_PIC" NUMBER, 
	"PIC_NAME" VARCHAR2(20 BYTE), 
	"PRODUCT_TYPE" VARCHAR2(20 BYTE), 
	"PATH" VARCHAR2(50 BYTE), 
	"BRAND" VARCHAR2(20 BYTE)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into SYSTEM.CPE_SHOP_PIC_PRODUCT
SET DEFINE OFF;
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (1,'asus','notebook','image\notebook\asus-01.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (2,'asus','notebook','image\notebook\asus-02.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (3,'asus','notebook','image\notebook\asus-03.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (4,'asus','notebook','image\notebook\asus-04.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (5,'asus','notebook','image\notebook\asus-05.png','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (6,'asus','notebook','image\notebook\asus-06.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (7,'asus','notebook','image\notebook\asus-07.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (8,'asus','notebook','image\notebook\asus-08.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (36,'acer','phone','image\phone\pacer-01.png','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (10,'lenovo','notebook','image\notebook\lenovo-01.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (11,'lenovo','notebook','image\notebook\lenovo-02.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (12,'lenovo','notebook','image\notebook\lenovo-03.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (13,'lenovo','notebook','image\notebook\lenovo-04.png','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (14,'lenovo','notebook','image\notebook\lenovo-05.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (15,'lenovo','notebook','image\notebook\lenovo-06.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (16,'lenovo','notebook','image\notebook\lenovo-07.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (17,'lenovo','notebook','image\notebook\lenovo-08.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (18,'acer','notebook','image\notebook\acer-01.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (19,'acer','notebook','image\notebook\acer-02.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (20,'acer','notebook','image\notebook\acer-03.png','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (21,'acer','notebook','image\notebook\acer-04.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (22,'acer','notebook','image\notebook\acer-05.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (23,'acer','notebook','image\notebook\acer-06.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (24,'acer','notebook','image\notebook\acer-07.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (25,'acer','notebook','image\notebook\acer-08.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (26,'acer','notebook','image\notebook\acer-09.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (27,'samsung','notebook','image\notebook\samsung-01.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (28,'samsung','notebook','image\notebook\samsung-02.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (29,'samsung','notebook','image\notebook\samsung-03.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (30,'samsung','notebook','image\notebook\samsung-04.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (31,'samsung','notebook','image\notebook\samsung-05.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (32,'samsung','notebook','image\notebook\samsung-06.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (33,'samsung','notebook','image\notebook\samsung-07.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (34,'samsung','notebook','image\notebook\samsung-08.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (35,'samsung','notebook','image\notebook\samsung-09.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (37,'acer','phone','image\phone\pacer-02.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (38,'acer','phone','image\phone\pacer-03.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (39,'acer','phone','image\phone\pacer-04.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (40,'acer','phone','image\phone\pacer-05.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (41,'asus','phone','image\phone\pasus-01.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (42,'asus','phone','image\phone\pasus-02.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (43,'asus','phone','image\phone\pasus-03.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (44,'asus','phone','image\phone\pasus-04.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (45,'lenovo','phone','image\phone\plenovo-01.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (46,'lenovo','phone','image\phone\plenovo-02.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (47,'lenovo','phone','image\phone\plenovo-03.png','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (48,'lenovo','phone','image\phone\plenovo-04.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (49,'lenovo','phone','image\phone\plenovo-05.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (50,'samsung','phone','image\phone\psamsung-01.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (51,'samsung','phone','image\phone\psamsung-02.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (52,'samsung','phone','image\phone\psamsung-03.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (53,'samsung','phone','image\phone\psamsung-04.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (54,'acer','tablet','image\tablet\tacer-01.png','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (55,'acer','tablet','image\tablet\tacer-02.png','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (56,'acer','tablet','image\tablet\tacer-03.png','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (57,'acer','tablet','image\tablet\tacer-04.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (58,'acer','tablet','image\tablet\tacer-05.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (59,'samsung','tablet','image\tablet\tsamsung-01.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (60,'samsung','tablet','image\tablet\tsamsung-02.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (61,'samsung','tablet','image\tablet\tsamsung-03.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (62,'samsung','tablet','image\tablet\tsamsung-04.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (63,'samsung','tablet','image\tablet\tsamsung-05.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (64,'asus','tablet','image\tablet\tasus-01.png','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (65,'asus','tablet','image\tablet\tasus-02.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (66,'asus','tablet','image\tablet\tasus-03.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (67,'asus','tablet','image\tablet\tasus-04.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (68,'lenovo','tablet','image\tablet\tlenovo-01.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (69,'lenovo','tablet','image\tablet\tlenovo-02.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (70,'lenovo','tablet','image\tablet\tlenovo-03.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (71,'lenovo','tablet','image\tablet\tlenovo-04.png','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (72,'acer','pc','image\pc\pacer-01.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (73,'acer','pc','image\pc\pacer-02.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (74,'acer','pc','image\pc\pacer-03.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (75,'acer','pc','image\pc\pacer-04.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (76,'acer','pc','image\pc\pacer-05.jpg','acer');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (77,'samsung','pc','image\pc\psamsung-01.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (78,'samsung','pc','image\pc\psamsung-02.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (79,'samsung','pc','image\pc\psamsung-03.jpg','samsung');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (80,'asus','pc','image\pc\pasus-01.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (81,'asus','pc','image\pc\pasus-02.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (82,'asus','pc','image\pc\pasus-03.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (83,'asus','pc','image\pc\pasus-04.jpg','asus');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (84,'lenovo','pc','image\pc\plenovo-01.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (85,'lenovo','pc','image\pc\plenovo-02.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (86,'lenovo','pc','image\pc\plenovo-03.png','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (87,'lenovo','pc','image\pc\plenovo-04.jpg','lenovo');
Insert into SYSTEM.CPE_SHOP_PIC_PRODUCT (ID_PIC,PIC_NAME,PRODUCT_TYPE,PATH,BRAND) values (88,'lenovo','pc','image\pc\plenovo-05.jpg','lenovo');
--------------------------------------------------------
--  DDL for Index CPE_SHOP_PIC_PRODUCT_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."CPE_SHOP_PIC_PRODUCT_PK" ON "SYSTEM"."CPE_SHOP_PIC_PRODUCT" ("ID_PIC") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table CPE_SHOP_PIC_PRODUCT
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."CPE_SHOP_PIC_PRODUCT" ADD CONSTRAINT "CPE_SHOP_PIC_PRODUCT_PK" PRIMARY KEY ("ID_PIC")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
  ALTER TABLE "SYSTEM"."CPE_SHOP_PIC_PRODUCT" MODIFY ("ID_PIC" NOT NULL ENABLE);
