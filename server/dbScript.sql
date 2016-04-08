CREATE TABLE `sccf_involvemint`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `description` VARCHAR(500) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `sccf_involvemint`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `organizationId` INT NOT NULL,
  `starttime` DATETIME NULL,
  `endtime` DATETIME NULL,
  `location` VARCHAR(45) NULL,
  `description` VARCHAR(500) NULL,
  `notes` VARCHAR(500) NULL,
  `isFamilyFriendly` TINYINT(1) NULL,
  `minAge` INT NULL,
  `duration` INT NULL,
  `when` VARCHAR(500) NULL,
  `where` VARCHAR(500) NULL,
  `numberNeeded` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `sccf_involvemint`.`credits` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NULL,
  `eventId` INT NOT NULL,
  `businessId` INT NULL,
  `offerId` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `sccf_involvemint`.`event_log` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `eventId` INT NOT NULL,
  `checkin` DATETIME NULL,
  `checkout` DATETIME NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `sccf_involvemint`.`offers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `businessId` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`));


--Seed

INSERT INTO sccf_involvemint.events VALUES
('1', 'Test Event', '1234', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'BKSQ', 'some desc', 'my notes', '1', '18', '5', 'when data', 'where data', 10)
