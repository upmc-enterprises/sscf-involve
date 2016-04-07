CREATE TABLE `sccf_involvemint`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
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
  `isFamilyFriendly` BIT NULL,
  `minAge` INT NULL,
  `duration` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `sccf_involvemint`.`credits` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NULL,
  `eventId` INT NOT NULL,
  `businessId` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `sccf_involvemint`.`event_log` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `eventId` INT NOT NULL,
  `checkin` DATETIME NULL,
  `checkout` DATETIME NULL,
  PRIMARY KEY (`id`));
