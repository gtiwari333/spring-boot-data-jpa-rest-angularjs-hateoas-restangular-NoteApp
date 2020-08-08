insert  into `person`(`id`,`email`,`first_name`,`last_name`,`mid_name`) values
 (1,'gtiwari333@gmail.com','Ganesh','Tiwari',NULL),
 (2,'jk@tiwari.com','Jyoti','Kattel',NULL),
 (3,'jtep@us.gov','Johnny','Tepp',NULL),
 (4,'kp@pmo.np','Khadga','Oli','Prasad'),
 (5,'hba@nepal.comdey','Hari','Acharya','Bamsa'),
 (6,'mks@comedy.nepal','Madan','Shrestha','Krishna');


insert  into `note`(`id`,`content`,`created_date`,`title`,`view_count`,`person_id`)
values
(1,'Hello,Im Ganesh. How is everything?','2016-05-03 00:40:30','My Intro',4,1),
(2,'I just finished writing this small app in 3 nights. Looking forward to post a blog article soon.','2016-05-03 00:42:02','Note App Info',6,1),
(3,'Restangular is an AngularJS service that simplifies common GET, POST, DELETE, and UPDATE requests with a minimum of client code. Its a perfect fit for any WebApp that consumes data from a RESTful API.','2016-05-03 08:23:02','Restangular',0,2),
(4,'There are 3 ways of creating a main Restangular object. The first one and most common one is by stating the main route of all requests. The second one is by stating the main route and object of all requests.','2016-05-03 08:23:42','Creating Main Restangular object',0,2),(5,'You can also access the configuration via RestangularProvider and Restangular via the configuration property if you dont want to use the setters. Check it out:Restangular.configuration.requestSuffix = /;','2016-05-03 08:24:23','Restangular configuration',0,1),
(6,'Therere some times where you want to use Restangular but you dont want to expose Restangular object anywhere. For those cases, you can actually use the service feature of Restangular.','2016-05-03 08:25:22','Decoupled Restangular Service',0,1),
(7,'Im not pirate.. I play pirate.','2016-05-03 08:26:06','Pirate',9,3);
