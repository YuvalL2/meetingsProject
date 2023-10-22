-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2023 at 10:15 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `management_of_meetings`
--
CREATE DATABASE IF NOT EXISTS `management_of_meetings` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `management_of_meetings`;

-- --------------------------------------------------------

--
-- Table structure for table `development_groups`
--

CREATE TABLE `development_groups` (
  `groupId` int(11) NOT NULL,
  `groupName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `development_groups`
--

INSERT INTO `development_groups` (`groupId`, `groupName`) VALUES
(1, 'UI team'),
(2, 'React team'),
(3, 'Mobile team'),
(4, 'Yuval\'s team');

-- --------------------------------------------------------

--
-- Table structure for table `meeting_schedule`
--

CREATE TABLE `meeting_schedule` (
  `meetingId` int(11) NOT NULL,
  `groupId` int(11) NOT NULL,
  `beginningTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `description` varchar(1000) NOT NULL,
  `roomMeeting` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meeting_schedule`
--

INSERT INTO `meeting_schedule` (`meetingId`, `groupId`, `beginningTime`, `endTime`, `description`, `roomMeeting`) VALUES
(1, 1, '2023-09-04 09:00:00', '2023-09-04 10:00:00', 'Monthly meeting', 'new york room'),
(2, 2, '2023-09-27 10:30:00', '2023-09-27 11:25:00', 'Brainstorm about UI improvement', 'blue room'),
(3, 3, '2023-10-09 15:00:00', '2023-10-09 16:45:00', 'Meeting about improving website security', 'large board room'),
(4, 4, '2023-09-20 08:30:00', '2023-09-20 10:00:00', 'A new idea for a website that helps juniors find work, in cooperation with companies that contribute to this..', 'America room'),
(13, 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'cool meeting', 'red room');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `development_groups`
--
ALTER TABLE `development_groups`
  ADD PRIMARY KEY (`groupId`);

--
-- Indexes for table `meeting_schedule`
--
ALTER TABLE `meeting_schedule`
  ADD PRIMARY KEY (`meetingId`),
  ADD KEY `groupId` (`groupId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `development_groups`
--
ALTER TABLE `development_groups`
  MODIFY `groupId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `meeting_schedule`
--
ALTER TABLE `meeting_schedule`
  MODIFY `meetingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meeting_schedule`
--
ALTER TABLE `meeting_schedule`
  ADD CONSTRAINT `meeting_schedule_ibfk_1` FOREIGN KEY (`groupId`) REFERENCES `development_groups` (`groupId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
