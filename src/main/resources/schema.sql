
USE `noteapp`;


CREATE TABLE `note` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` varchar(1024) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `view_count` bigint(20) DEFAULT 0,
  `person_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_with_person_id` (`person_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;


CREATE TABLE `person` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `mid_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
