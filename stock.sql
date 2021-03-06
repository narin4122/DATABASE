--------------------------------------------------------
--  File created - �ѹ����ʺ��-�ѹ�Ҥ�-17-2558   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table CPE_SHOP_STOCK
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."CPE_SHOP_STOCK" 
   (	"STOCK_ID" NUMBER, 
	"BUY_DATE" VARCHAR2(50 BYTE), 
	"AMONUT" VARCHAR2(50 BYTE), 
	"SUM_PRICE" NUMBER
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into SYSTEM.CPE_SHOP_STOCK
SET DEFINE OFF;
Insert into SYSTEM.CPE_SHOP_STOCK (STOCK_ID,BUY_DATE,AMONUT,SUM_PRICE) values (1,'25/1/58','70',1111100);
Insert into SYSTEM.CPE_SHOP_STOCK (STOCK_ID,BUY_DATE,AMONUT,SUM_PRICE) values (2,'28/2/58','50',300000);
Insert into SYSTEM.CPE_SHOP_STOCK (STOCK_ID,BUY_DATE,AMONUT,SUM_PRICE) values (3,'5/7/58','60',111888);
Insert into SYSTEM.CPE_SHOP_STOCK (STOCK_ID,BUY_DATE,AMONUT,SUM_PRICE) values (5,'28/5/58','30',300000);
Insert into SYSTEM.CPE_SHOP_STOCK (STOCK_ID,BUY_DATE,AMONUT,SUM_PRICE) values (6,'ret','39',44444);
--------------------------------------------------------
--  DDL for Index CPE_STOK_STOCK_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."CPE_STOK_STOCK_PK" ON "SYSTEM"."CPE_SHOP_STOCK" ("STOCK_ID", "BUY_DATE") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table CPE_SHOP_STOCK
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."CPE_SHOP_STOCK" ADD CONSTRAINT "CPE_STOK_STOCK_PK" PRIMARY KEY ("STOCK_ID", "BUY_DATE")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
  ALTER TABLE "SYSTEM"."CPE_SHOP_STOCK" MODIFY ("BUY_DATE" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."CPE_SHOP_STOCK" MODIFY ("STOCK_ID" NOT NULL ENABLE);
