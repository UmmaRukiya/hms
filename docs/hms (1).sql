-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2024 at 02:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hms`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `patient_name` varchar(255) NOT NULL,
  `paitent_id` int(11) NOT NULL,
  `patient_contact` varchar(255) NOT NULL,
  `doctor_id` bigint(20) UNSIGNED NOT NULL,
  `department_id` bigint(20) UNSIGNED NOT NULL,
  `app_date` date NOT NULL,
  `app_time` time DEFAULT NULL,
  `serial` bigint(20) DEFAULT NULL,
  `problem` text DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0 COMMENT '0 inactive,1 active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `patient_name`, `paitent_id`, `patient_contact`, `doctor_id`, `department_id`, `app_date`, `app_time`, `serial`, `problem`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Sohana', 2, '2154564', 1, 1, '2024-10-30', '20:00:00', 1, 'Lorem ipsum dolor sit amet', 1, '2024-10-29 21:23:21', '2024-10-29 21:23:21'),
(2, 'Ritu', 3, '45464648', 2, 2, '2024-10-30', '20:00:00', 2, 'Lorem ipsum dolor sit amet', 1, '2024-10-29 21:23:55', '2024-10-29 21:23:55');

-- --------------------------------------------------------

--
-- Table structure for table `appointment_requests`
--

CREATE TABLE `appointment_requests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `department_id` int(11) NOT NULL,
  `doctor_id` bigint(20) UNSIGNED NOT NULL,
  `patient_name` varchar(255) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `contact_no` varchar(100) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `age` varchar(255) NOT NULL,
  `blood_id` int(11) DEFAULT NULL,
  `app_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `births`
--

CREATE TABLE `births` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `patient_id` bigint(20) UNSIGNED NOT NULL,
  `title` text DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `description` text DEFAULT 'text',
  `doctor_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bloods`
--

CREATE TABLE `bloods` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `blood_group` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1 COMMENT '1 Avaiable, 0 Unvailable',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bloods`
--

INSERT INTO `bloods` (`id`, `blood_group`, `status`, `created_at`, `updated_at`) VALUES
(1, 'A+', 1, '2024-10-29 20:59:43', '2024-10-29 20:59:43'),
(2, 'O+', 1, '2024-10-29 20:59:49', '2024-10-29 20:59:49'),
(3, 'B-', 0, '2024-10-29 20:59:59', '2024-10-29 20:59:59');

-- --------------------------------------------------------

--
-- Table structure for table `days`
--

CREATE TABLE `days` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `day_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `days`
--

INSERT INTO `days` (`id`, `day_name`, `created_at`, `updated_at`) VALUES
(1, 'Saturday', '2024-10-29 20:55:00', '2024-10-29 20:55:00'),
(2, 'Sunday', '2024-10-29 20:55:04', '2024-10-29 20:55:04'),
(3, 'Monday', '2024-10-29 20:55:09', '2024-10-29 20:55:09');

-- --------------------------------------------------------

--
-- Table structure for table `deaths`
--

CREATE TABLE `deaths` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `patient_id` bigint(20) UNSIGNED NOT NULL,
  `death_date` date DEFAULT NULL,
  `description` text DEFAULT 'text',
  `doctor_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `dep_name` varchar(255) NOT NULL,
  `dep_des` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `dep_name`, `dep_des`, `created_at`, `updated_at`) VALUES
(1, 'Cardiology', 'Lorem ipsum dolor sit amet', '2024-10-29 20:52:10', '2024-10-29 20:52:10'),
(2, 'Dermatology', 'Lorem ipsum dolor sit amet', '2024-10-29 20:52:31', '2024-10-29 20:52:31'),
(3, 'Neurology', 'Lorem ipsum dolor sit amet', '2024-10-29 20:53:16', '2024-10-29 20:53:16');

-- --------------------------------------------------------

--
-- Table structure for table `designations`
--

CREATE TABLE `designations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `desig_name` varchar(255) NOT NULL,
  `desig_des` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `designations`
--

INSERT INTO `designations` (`id`, `desig_name`, `desig_des`, `created_at`, `updated_at`) VALUES
(1, 'Senior', 'Lorem ipsum dolor sit amet', '2024-10-29 20:53:55', '2024-10-29 20:53:55'),
(2, 'Junior', 'Lorem ipsum dolor sit amet', '2024-10-29 20:54:03', '2024-10-29 20:54:03');

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `designation_id` int(11) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `specialist` varchar(255) DEFAULT NULL,
  `biography` varchar(255) DEFAULT NULL,
  `fees` decimal(6,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`, `role_id`, `name`, `designation_id`, `department_id`, `email`, `contact`, `image`, `education`, `specialist`, `biography`, `fees`, `created_at`, `updated_at`) VALUES
(1, 2, 'Jamal', 1, 1, 'wdp@gmail.com', '0184565646', '17302582295296.jpg', 'M.B.B.S , F.R.C.S', 'Lorem ipsum dolor sit amet', 'Medicine Categories', 700.00, '2024-10-29 21:17:09', '2024-10-29 21:17:09'),
(2, 2, 'Kamal', 2, 2, 'wdpfr59@gmail.com', '0181463564', '17302582782387.jpg', 'M.B.B.S , F.R.C.S', 'Lorem ipsum dolor sit amet', 'Medicine Categories', 500.00, '2024-10-29 21:17:58', '2024-10-29 21:17:58');

-- --------------------------------------------------------

--
-- Table structure for table `employes`
--

CREATE TABLE `employes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `blood_id` int(11) DEFAULT NULL,
  `present_address` varchar(255) DEFAULT NULL,
  `permanent_address` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employes`
--

INSERT INTO `employes` (`id`, `role_id`, `name`, `email`, `contact`, `image`, `birth_date`, `gender`, `blood_id`, `present_address`, `permanent_address`, `created_at`, `updated_at`) VALUES
(1, 3, 'Himi', 'w59@gmail.com', 2147483647, '17302585088496.jpg', '2024-10-18', 'Female', 1, '2 no gate, Chittagong', '2 no gate, Chittagong', '2024-10-29 21:21:48', '2024-10-29 21:21:48'),
(2, NULL, 'Sohana', 'wdpfr59@gmail.com', 4565646, '', '2024-11-04', 'Female', 1, NULL, NULL, '2024-11-04 01:08:30', '2024-11-04 01:08:30'),
(3, NULL, 'Sonia', 'wdpfr59@gmail.com', 2147483647, '', '2024-11-04', 'Female', NULL, NULL, NULL, '2024-11-04 01:08:53', '2024-11-04 01:08:53');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invest_cats`
--

CREATE TABLE `invest_cats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invest_cat_name` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1 COMMENT '0 Unavailable,1 Available',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invest_cats`
--

INSERT INTO `invest_cats` (`id`, `invest_cat_name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Ultrasound', 1, '2024-10-29 20:57:23', '2024-10-29 20:57:23'),
(2, 'Blood count', 1, '2024-10-29 20:57:38', '2024-10-29 20:57:38');

-- --------------------------------------------------------

--
-- Table structure for table `invest_lists`
--

CREATE TABLE `invest_lists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `inv_cat_id` int(11) DEFAULT NULL,
  `invest_name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT 'text',
  `price` decimal(6,2) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1 COMMENT '0 Unavailable,1 Available',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invest_lists`
--

INSERT INTO `invest_lists` (`id`, `inv_cat_id`, `invest_name`, `description`, `price`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 'Hemoglobin', 'Amajer anjrer dfort', 200.00, 1, '2024-10-29 21:01:52', '2024-10-29 21:01:52'),
(2, 2, 'WBC count', 'Lorem WBC count', 500.00, 1, '2024-10-29 21:02:49', '2024-10-29 21:02:49'),
(3, 1, 'Abdominal ultrasound', 'Abdominal ultrasound Abdominal ultrasound', 700.00, 1, '2024-10-29 21:03:50', '2024-10-29 21:03:50'),
(4, 1, 'Transvaginal ultrasound', 'Transvaginal ultrasound lorem unit', 800.00, 1, '2024-10-29 21:04:53', '2024-10-29 21:04:53');

-- --------------------------------------------------------

--
-- Table structure for table `medicines`
--

CREATE TABLE `medicines` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `medicine_cat_id` int(11) NOT NULL,
  `medicine_name` varchar(255) NOT NULL,
  `dosage` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `medicines`
--

INSERT INTO `medicines` (`id`, `medicine_cat_id`, `medicine_name`, `dosage`, `created_at`, `updated_at`) VALUES
(1, 1, 'Napa', '500mg', '2024-10-29 21:05:23', '2024-10-29 21:05:23'),
(2, 2, 'Calcium Pantothenate', '500mg', '2024-10-29 21:06:33', '2024-10-29 21:06:33'),
(3, 1, 'Lamotrigine', '100mg', '2024-10-29 21:07:55', '2024-10-29 21:07:55'),
(4, 1, 'Phenobarbital', '50mg', '2024-10-29 21:08:28', '2024-10-29 21:08:28');

-- --------------------------------------------------------

--
-- Table structure for table `medicine_cats`
--

CREATE TABLE `medicine_cats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `medicine_cat_name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `medicine_cats`
--

INSERT INTO `medicine_cats` (`id`, `medicine_cat_name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Analgesics', 1, '2024-10-29 20:58:34', '2024-10-29 20:58:34'),
(2, 'Dermatology', 1, '2024-10-29 20:58:45', '2024-10-29 20:58:45'),
(3, 'Analgesics', 1, '2024-10-29 20:59:19', '2024-10-29 20:59:19');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_11_000000_create_roles_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2024_10_02_000000_create_departments_table', 1),
(7, '2024_10_02_000001_create_designations_table', 1),
(8, '2024_10_02_000002_create_bloods_table', 1),
(9, '2024_10_02_000003_create_days_table', 1),
(10, '2024_10_02_000004_create_shifts_table', 1),
(11, '2024_10_02_000005_create_room_cats_table', 1),
(12, '2024_10_02_000006_create_room_lists_table', 1),
(13, '2024_10_02_145044_create_doctors_table', 1),
(14, '2024_10_08_061152_create_nurses_table', 1),
(15, '2024_10_10_153007_create_patients_table', 1),
(16, '2024_10_11_150713_create_employes_table', 1),
(17, '2024_10_11_160550_create_schedules_table', 1),
(18, '2024_10_13_111822_create_appointments_table', 1),
(19, '2024_10_13_112037_create_appointment_requests_table', 1),
(20, '2024_10_13_112115_create_births_table', 1),
(21, '2024_10_13_112134_create_deaths_table', 1),
(22, '2024_10_13_112307_create_patient_admits_table', 1),
(24, '2024_10_13_112434_create_patient_bill_details_table', 1),
(25, '2024_10_13_112541_create_patient_payments_table', 1),
(26, '2024_10_13_112802_create_medicine_cats_table', 1),
(27, '2024_10_13_113318_create_patient_tests_table', 1),
(28, '2024_10_13_113404_create_patient_test_details_table', 1),
(29, '2024_10_13_142734_create_invest_cats_table', 1),
(30, '2024_10_13_142752_create_invest_lists_table', 1),
(31, '2024_10_24_083738_create_prescriptions_table', 1),
(32, '2024_10_24_083838_create_prescription_details_table', 1),
(33, '2024_10_26_061134_create_medicines_table', 1),
(35, '2024_10_13_112331_create_patient_bills_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `nurses`
--

CREATE TABLE `nurses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `blood_id` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `present_address` varchar(255) DEFAULT NULL,
  `permanent_address` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nurses`
--

INSERT INTO `nurses` (`id`, `role_id`, `name`, `email`, `contact`, `gender`, `birth_date`, `blood_id`, `image`, `present_address`, `permanent_address`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Sadia', 'r59@gmail.com', '4565646123', 'Female', '2024-10-03', 2, '17302583609276.jpg', '2 no gate, Chittagong', '2 no gate, Chittagong', '2024-10-29 21:19:20', '2024-10-29 21:19:20'),
(2, NULL, 'Himi', 'wdr59@gmail.com', '2356132464', 'Female', '2024-10-07', 3, '17302584155259.jpg', '2 no gate, Chittagong', '2 no gate, Chittagong', '2024-10-29 21:20:15', '2024-10-29 21:20:15');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `father_name` varchar(255) DEFAULT NULL,
  `mother_name` varchar(255) DEFAULT NULL,
  `husband_name` varchar(255) DEFAULT NULL,
  `marital_status` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact` int(11) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `blood_id` int(11) DEFAULT NULL,
  `present_address` varchar(255) DEFAULT NULL,
  `permanent_address` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `name`, `father_name`, `mother_name`, `husband_name`, `marital_status`, `email`, `contact`, `gender`, `birth_date`, `blood_id`, `present_address`, `permanent_address`, `created_at`, `updated_at`) VALUES
(1, 'Ritu', 'Akash', 'Mitu', 'Mukut', 'Married', 'wd@gmail.com', 4565646, 'Female', '2024-10-04', 1, '2 no gate, Chittagong', '2 no gate, Chittagong', '2024-10-29 21:12:15', '2024-10-29 21:12:15'),
(2, 'Sohana', 'Karim', 'Tasmina', 'Ratul', 'Married', 'w9@gmail.com', 2154564, 'Female', '2024-10-10', 2, '2 no gate, Chittagong', '2 no gate, Chittagong', '2024-10-29 21:14:10', '2024-10-30 00:01:20');

-- --------------------------------------------------------

--
-- Table structure for table `patient_admits`
--

CREATE TABLE `patient_admits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `patient_id` bigint(20) UNSIGNED NOT NULL,
  `doctor_id` bigint(20) UNSIGNED NOT NULL,
  `problem` text DEFAULT 'text',
  `admit_date` date DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL,
  `guardian` varchar(255) DEFAULT NULL,
  `relation` varchar(255) DEFAULT NULL,
  `condition` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `patient_admits`
--

INSERT INTO `patient_admits` (`id`, `patient_id`, `doctor_id`, `problem`, `admit_date`, `release_date`, `room_id`, `guardian`, `relation`, `condition`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 'Calcium Pantothenate', '2024-10-30', '2024-11-04', 2, 'Akash', 'Husband', 'Calcium Pantothenate', '2024-10-29 22:01:02', '2024-10-29 22:01:02'),
(2, 1, 1, 'SGhgd', '2024-11-06', NULL, 2, 'Akash', 'Husband', 'dfssdgf', '2024-11-08 23:47:51', '2024-11-08 23:47:51');

-- --------------------------------------------------------

--
-- Table structure for table `patient_bills`
--

CREATE TABLE `patient_bills` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `patient_id` bigint(20) UNSIGNED NOT NULL,
  `admit_id` int(11) DEFAULT NULL,
  `sub_amount` decimal(10,2) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL,
  `tax` decimal(10,2) NOT NULL COMMENT 'in %',
  `total_amount` decimal(10,2) DEFAULT NULL,
  `pay` decimal(10,2) DEFAULT NULL,
  `bill_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patient_bill_details`
--

CREATE TABLE `patient_bill_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `patient_bill_id` int(11) NOT NULL,
  `particular` varchar(255) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `patient_bill_details`
--

INSERT INTO `patient_bill_details` (`id`, `patient_bill_id`, `particular`, `amount`, `created_at`, `updated_at`) VALUES
(1, 1, 'Room', 700.00, '2024-10-29 22:02:37', '2024-10-29 22:02:37');

-- --------------------------------------------------------

--
-- Table structure for table `patient_payments`
--

CREATE TABLE `patient_payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `patient_bill_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `patient_test_id` int(11) NOT NULL,
  `pay_date` date DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patient_tests`
--

CREATE TABLE `patient_tests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `patient_id` bigint(20) UNSIGNED NOT NULL,
  `admit_id` int(11) DEFAULT NULL,
  `sub_price` decimal(6,2) DEFAULT NULL,
  `vat` decimal(6,2) NOT NULL COMMENT 'in %',
  `discount` decimal(6,2) DEFAULT NULL,
  `total_amount` decimal(8,2) DEFAULT NULL,
  `paid` decimal(8,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `patient_tests`
--

INSERT INTO `patient_tests` (`id`, `patient_id`, `admit_id`, `sub_price`, `vat`, `discount`, `total_amount`, `paid`, `created_at`, `updated_at`) VALUES
(1, 2, 1, NULL, 0.00, 0.00, 900.00, NULL, '2024-11-09 01:36:44', '2024-11-09 01:36:44'),
(2, 2, 1, NULL, 0.00, 0.00, 800.00, 800.00, '2024-11-11 22:46:10', '2024-11-11 22:46:10');

-- --------------------------------------------------------

--
-- Table structure for table `patient_test_details`
--

CREATE TABLE `patient_test_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `patient_test_id` int(11) DEFAULT NULL,
  `inv_list_id` int(11) DEFAULT NULL,
  `amount` decimal(8,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `patient_test_details`
--

INSERT INTO `patient_test_details` (`id`, `patient_test_id`, `inv_list_id`, `amount`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 200.00, '2024-11-09 01:36:44', '2024-11-09 01:36:44'),
(2, 1, 3, 700.00, '2024-11-09 01:36:44', '2024-11-09 01:36:44'),
(3, 2, 4, 800.00, '2024-11-11 22:46:10', '2024-11-11 22:46:10');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'hosp', '029216f1e2f17a78aa5247943341dcf56264918a7a6f7e9fe5b54674e51b1060', '[\"*\"]', NULL, NULL, '2024-10-29 22:12:20', '2024-10-29 22:12:20'),
(2, 'App\\Models\\User', 1, 'hosp', '71e0ade37eec1abb8de0c8195d5ca8d8950c4e3aee7b759b696b54967fc2a004', '[\"*\"]', NULL, NULL, '2024-10-29 22:12:28', '2024-10-29 22:12:28'),
(3, 'App\\Models\\User', 1, 'hosp', '7a73217d470e968804b843f502ff27b90652dd191a69eafa871e2725c883ad51', '[\"*\"]', NULL, NULL, '2024-10-29 23:58:32', '2024-10-29 23:58:32'),
(4, 'App\\Models\\User', 1, 'hosp', 'f3f24e8adbed1bd754e1426c3b1ecf063356d205ee3b2e55901a0538a58c3ae1', '[\"*\"]', NULL, NULL, '2024-11-05 21:47:44', '2024-11-05 21:47:44');

-- --------------------------------------------------------

--
-- Table structure for table `prescriptions`
--

CREATE TABLE `prescriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `doctor_id` bigint(20) UNSIGNED NOT NULL,
  `patient_id` bigint(20) UNSIGNED NOT NULL,
  `age` varchar(255) NOT NULL,
  `temp` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `bp` varchar(255) DEFAULT NULL,
  `cc` varchar(255) DEFAULT NULL,
  `inv` varchar(255) DEFAULT NULL,
  `mh` varchar(255) DEFAULT NULL,
  `de` varchar(255) DEFAULT NULL,
  `advice` varchar(255) DEFAULT NULL,
  `follow_up` date DEFAULT NULL,
  `issue_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prescriptions`
--

INSERT INTO `prescriptions` (`id`, `doctor_id`, `patient_id`, `age`, `temp`, `weight`, `bp`, `cc`, `inv`, `mh`, `de`, `advice`, `follow_up`, `issue_date`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '25 years', '12F', '55kg', '80/120', 'Fever', 'Hemoglobin low', 'Calcium Pantothenate', NULL, 'No fast food , Bed Rest', '2024-11-09', '2024-10-30', '2024-10-29 21:26:49', '2024-10-29 21:26:49'),
(2, 1, 2, '25', NULL, '50kg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-10-30 00:01:20', '2024-10-30 00:01:20');

-- --------------------------------------------------------

--
-- Table structure for table `prescription_details`
--

CREATE TABLE `prescription_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `prescription_id` bigint(20) UNSIGNED NOT NULL,
  `medicine_id` int(11) NOT NULL,
  `dosage` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `disease` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prescription_details`
--

INSERT INTO `prescription_details` (`id`, `prescription_id`, `medicine_id`, `dosage`, `duration`, `disease`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '1+0+1', '7 days', NULL, '2024-10-29 21:26:49', '2024-10-29 21:26:49'),
(2, 1, 1, '1+1+1', '3 days', NULL, '2024-10-29 21:26:49', '2024-10-29 21:26:49'),
(3, 2, 1, '1+0+1', '7days', NULL, '2024-10-30 00:01:20', '2024-10-30 00:01:20'),
(4, 2, 1, '1', '7days', NULL, '2024-10-30 00:01:20', '2024-10-30 00:01:20');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `role_identity` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role_name`, `role_identity`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'superadmin', '2024-10-29 20:51:24', NULL),
(2, 'Doctor', 'doctor', '2024-10-29 20:51:24', NULL),
(3, 'Receptionist', 'receptionist', '2024-10-29 20:51:24', NULL),
(4, 'Accountant', 'accountant', '2024-10-29 20:51:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `room_cats`
--

CREATE TABLE `room_cats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `room_cat_name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `room_cats`
--

INSERT INTO `room_cats` (`id`, `room_cat_name`, `description`, `price`, `created_at`, `updated_at`) VALUES
(1, 'Double', 'Leorerm duouble bed', 1000.00, '2024-10-29 20:55:51', '2024-10-29 20:55:51'),
(2, 'VIP', 'Wash separately in', 2000.00, '2024-10-29 20:56:14', '2024-10-29 20:56:14'),
(3, 'Single', 'Wash separately in', 500.00, '2024-10-29 20:56:27', '2024-10-29 20:56:27');

-- --------------------------------------------------------

--
-- Table structure for table `room_lists`
--

CREATE TABLE `room_lists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `room_cat_id` int(11) DEFAULT NULL,
  `room_no` int(11) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `floor_no` int(11) DEFAULT NULL,
  `description` text DEFAULT 'text',
  `status` int(11) NOT NULL DEFAULT 0 COMMENT '0 Unavailable,1 Available',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `room_lists`
--

INSERT INTO `room_lists` (`id`, `room_cat_id`, `room_no`, `department_id`, `floor_no`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 1, 2, 'Wash separately in', 1, '2024-10-29 21:53:50', '2024-10-29 21:53:50'),
(2, 1, 2, 1, 2, 'Wash separately in', 1, '2024-10-29 21:55:11', '2024-10-29 21:55:11'),
(3, 3, 3, 1, 2, 'Wash separately in', 1, '2024-10-29 21:55:31', '2024-10-29 21:55:31');

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `employe_id` int(11) DEFAULT NULL,
  `day_id` int(11) DEFAULT NULL,
  `shift_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `schedules`
--

INSERT INTO `schedules` (`id`, `employe_id`, `day_id`, `shift_id`, `created_at`, `updated_at`) VALUES
(2, 1, 1, 1, '2024-11-04 00:41:13', '2024-11-04 00:41:13'),
(3, 1, 2, 2, '2024-11-04 00:54:30', '2024-11-04 00:54:30'),
(4, 2, 1, 1, '2024-11-04 01:09:11', '2024-11-04 01:09:11'),
(5, 2, 3, 1, '2024-11-04 01:09:38', '2024-11-04 01:09:38'),
(6, 2, 1, 1, '2024-11-04 01:09:55', '2024-11-04 01:09:55'),
(7, 2, 1, 1, '2024-11-04 01:32:22', '2024-11-04 01:32:22'),
(8, 2, 1, 1, '2024-11-04 01:36:41', '2024-11-04 01:36:41'),
(9, 3, 1, 2, '2024-11-04 01:37:04', '2024-11-04 01:37:04'),
(10, 1, 1, 1, '2024-11-05 22:57:14', '2024-11-05 22:57:14'),
(11, 2, 1, 2, '2024-11-05 22:59:41', '2024-11-05 22:59:41');

-- --------------------------------------------------------

--
-- Table structure for table `shifts`
--

CREATE TABLE `shifts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `shift_name` varchar(255) NOT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `shifts`
--

INSERT INTO `shifts` (`id`, `shift_name`, `start_time`, `end_time`, `created_at`, `updated_at`) VALUES
(1, 'Morning', '08:00:00', '14:00:00', '2024-10-29 20:54:30', '2024-10-29 20:54:30'),
(2, 'Evening', '14:00:00', '20:00:00', '2024-10-29 20:54:51', '2024-10-29 20:54:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Rukiya', 'rukiya@gmail.com', NULL, '$2y$12$KILgREZlkR6dnasU2Sxpt.ouad16RqVEk30sE4otqt5NxJLYu0qaa', NULL, '2024-10-29 22:12:20', '2024-10-29 22:12:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `appointments_doctor_id_foreign` (`doctor_id`),
  ADD KEY `appointments_department_id_foreign` (`department_id`);

--
-- Indexes for table `appointment_requests`
--
ALTER TABLE `appointment_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `appointment_requests_doctor_id_foreign` (`doctor_id`);

--
-- Indexes for table `births`
--
ALTER TABLE `births`
  ADD PRIMARY KEY (`id`),
  ADD KEY `births_patient_id_foreign` (`patient_id`),
  ADD KEY `births_doctor_id_foreign` (`doctor_id`);

--
-- Indexes for table `bloods`
--
ALTER TABLE `bloods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `days`
--
ALTER TABLE `days`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deaths`
--
ALTER TABLE `deaths`
  ADD PRIMARY KEY (`id`),
  ADD KEY `deaths_patient_id_foreign` (`patient_id`),
  ADD KEY `deaths_doctor_id_foreign` (`doctor_id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `designations`
--
ALTER TABLE `designations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employes`
--
ALTER TABLE `employes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `invest_cats`
--
ALTER TABLE `invest_cats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invest_lists`
--
ALTER TABLE `invest_lists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicines`
--
ALTER TABLE `medicines`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicine_cats`
--
ALTER TABLE `medicine_cats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nurses`
--
ALTER TABLE `nurses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient_admits`
--
ALTER TABLE `patient_admits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_admits_patient_id_foreign` (`patient_id`),
  ADD KEY `patient_admits_doctor_id_foreign` (`doctor_id`);

--
-- Indexes for table `patient_bills`
--
ALTER TABLE `patient_bills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_bills_patient_id_foreign` (`patient_id`);

--
-- Indexes for table `patient_bill_details`
--
ALTER TABLE `patient_bill_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient_payments`
--
ALTER TABLE `patient_payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient_tests`
--
ALTER TABLE `patient_tests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_tests_patient_id_foreign` (`patient_id`);

--
-- Indexes for table `patient_test_details`
--
ALTER TABLE `patient_test_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `prescriptions`
--
ALTER TABLE `prescriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prescriptions_doctor_id_foreign` (`doctor_id`),
  ADD KEY `prescriptions_patient_id_foreign` (`patient_id`);

--
-- Indexes for table `prescription_details`
--
ALTER TABLE `prescription_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prescription_details_prescription_id_foreign` (`prescription_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room_cats`
--
ALTER TABLE `room_cats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room_lists`
--
ALTER TABLE `room_lists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shifts`
--
ALTER TABLE `shifts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `appointment_requests`
--
ALTER TABLE `appointment_requests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `births`
--
ALTER TABLE `births`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bloods`
--
ALTER TABLE `bloods`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `days`
--
ALTER TABLE `days`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `deaths`
--
ALTER TABLE `deaths`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `designations`
--
ALTER TABLE `designations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `employes`
--
ALTER TABLE `employes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invest_cats`
--
ALTER TABLE `invest_cats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `invest_lists`
--
ALTER TABLE `invest_lists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `medicines`
--
ALTER TABLE `medicines`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `medicine_cats`
--
ALTER TABLE `medicine_cats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `nurses`
--
ALTER TABLE `nurses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `patient_admits`
--
ALTER TABLE `patient_admits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `patient_bills`
--
ALTER TABLE `patient_bills`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_bill_details`
--
ALTER TABLE `patient_bill_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `patient_payments`
--
ALTER TABLE `patient_payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_tests`
--
ALTER TABLE `patient_tests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `patient_test_details`
--
ALTER TABLE `patient_test_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `prescriptions`
--
ALTER TABLE `prescriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `prescription_details`
--
ALTER TABLE `prescription_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `room_cats`
--
ALTER TABLE `room_cats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `room_lists`
--
ALTER TABLE `room_lists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `shifts`
--
ALTER TABLE `shifts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  ADD CONSTRAINT `appointments_doctor_id_foreign` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`);

--
-- Constraints for table `appointment_requests`
--
ALTER TABLE `appointment_requests`
  ADD CONSTRAINT `appointment_requests_doctor_id_foreign` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`);

--
-- Constraints for table `births`
--
ALTER TABLE `births`
  ADD CONSTRAINT `births_doctor_id_foreign` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`),
  ADD CONSTRAINT `births_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`);

--
-- Constraints for table `deaths`
--
ALTER TABLE `deaths`
  ADD CONSTRAINT `deaths_doctor_id_foreign` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`),
  ADD CONSTRAINT `deaths_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`);

--
-- Constraints for table `patient_admits`
--
ALTER TABLE `patient_admits`
  ADD CONSTRAINT `patient_admits_doctor_id_foreign` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`),
  ADD CONSTRAINT `patient_admits_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`);

--
-- Constraints for table `patient_bills`
--
ALTER TABLE `patient_bills`
  ADD CONSTRAINT `patient_bills_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`);

--
-- Constraints for table `patient_tests`
--
ALTER TABLE `patient_tests`
  ADD CONSTRAINT `patient_tests_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`);

--
-- Constraints for table `prescriptions`
--
ALTER TABLE `prescriptions`
  ADD CONSTRAINT `prescriptions_doctor_id_foreign` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`),
  ADD CONSTRAINT `prescriptions_patient_id_foreign` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`);

--
-- Constraints for table `prescription_details`
--
ALTER TABLE `prescription_details`
  ADD CONSTRAINT `prescription_details_prescription_id_foreign` FOREIGN KEY (`prescription_id`) REFERENCES `prescriptions` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
