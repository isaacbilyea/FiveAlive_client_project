-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 09, 2025 at 11:55 AM
-- Server version: 8.3.0
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: bia_project
--

-- --------------------------------------------------------

--
-- Table structure for table battles
--

CREATE TABLE battles (
  id int NOT NULL,
  title varchar(300) NOT NULL,
  year varchar(150) NOT NULL,
  summary varchar(7000) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table battles
--

INSERT INTO battles (id, title, year, summary, created_at, updated_at) VALUES
(1, 'Battle of Somme', 'April 1915', 'During the Battle of the Somme in July 1916, Squadron \'A\' (Sikh) of the 20th Deccan Horse, part of the 2nd Indian Cavalry Division, led a charge against the German 26th Infantry Regiment at High Wood. Supported by Canadian forces (Fort Garry Horse), this charge became a pivotal moment in the battle.', '2025-04-03 15:16:42', '2025-04-03 15:16:42'),
(2, 'Battle of Loos', 'September 1915', 'The Battle of Loos, France, in September 1915, was the last major operation by the India Corps on the Western Front. During the battle, the Gurkhas and Garhwalis led diversionary attacks, with Sarabjit Gurung\'s company sacrificing all its men. Kulbir Thapa of the Gurkha Rifles was awarded the Victoria Cross, and Lieutenant Jodha Jang Bahadur Rana of the Garhwal Rifles received the Military Cross.', '2025-04-03 15:16:42', '2025-04-03 15:16:42'),
(3, 'Battle of Vimy Ridge', 'April 1917', 'In April 1917, Sikh artillerymen of the Lahore Division played a crucial role in supporting Canadian forces to capture a heavily fortified position, a pivotal moment in Canada’s history. The Lahore Division had arrived in France in September 1914, initially supporting British troops. The victory at Vimy, achieved at the cost of over 10,000 Canadian casualties, is regarded as a defining moment in Canada\'s nationhood.', '2025-04-03 15:16:42', '2025-04-03 15:16:42'),
(4, '2nd Battle of Ypres', 'April 1915', 'During the 2nd Battle of Ypres in April 1915, the Germans used poison gas for the first time on the Western Front. The Ferozepur and Jullunder brigades fought to close the gap between the French and British lines. The Indian War Memorial at Ypres honors the 130,000 soldiers who fought in Flanders during World War I.', '2025-04-03 15:16:42', '2025-04-03 15:16:42'),
(5, 'Siege of Kut-Al-Amara', 'Dec 1915 - Apr 1916', 'This was one of the worst Allied defeats of World War I, lasted 147 days. Major-General Charles Townshend\'s 6th Poona Division, after suffering 11,000 casualties during their retreat from Ctesiphon, withdrew to Kut-al-Amara. Townshend chose to defend the position, despite its strong natural defenses, due to vulnerable supply lines, rather than retreat further south toward Basra.', '2025-04-03 15:16:42', '2025-04-03 15:16:42'),
(7, 'Liberation of Haifa', 'September 1918', 'On September 23, 1918, the Indian Cavalry captured Haifa, ending 400 years of Ottoman rule and securing the region for Christian and Jewish communities while preventing the destruction of Baha\'i shrines. Part of the 5th Cavalry Division, the 15th Imperial Service Cavalry Brigade, including the Jodhpur, Mysore, and Hyderabad Lancers, played a key role in this pivotal victory. The battle, which cost 900 Indian lives, contributed to the success of Allenby’s forces in Palestine, Lebanon, and Syria and is remembered as the last successful cavalry charge in military history.', '2025-04-03 15:16:42', '2025-04-03 15:16:42');

-- --------------------------------------------------------

--
-- Table structure for table battles_sections
--

CREATE TABLE battles_sections (
  id int NOT NULL,
  battle_id int NOT NULL,
  heading varchar(200) NOT NULL,
  description varchar(5000) NOT NULL,
  image varchar(600) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table battles_sections
--

INSERT INTO battles_sections (id, battle_id, heading, description, image, created_at, updated_at) VALUES
(1, 1, 'The Battle in Somme', 'During the Battle of the Somme in July 1916, Squadron \'A\' (Sikh) of the 20th Deccan Horse, part of the 2nd Indian Cavalry Division, led a charge against the German 26th Infantry Regiment at High Wood. Supported by Canadian forces (Fort Garry Horse), this charge became a pivotal moment in the battle.\r\n<br><br>\r\nIt was the only real cavalry charge of World War I, and the honor of executing this remarkable act of courage belongs to the Punjabi community. This achievement is a significant and proud part of both Indian and Canadian history. The Somme itself was one of the bloodiest battles in history, with Canada suffering 25,000 casualties, including nearly the entire Newfoundland Regiment at Beaumont-Hamel.\r\n', 'somme_section1.1.jpg,somme_section1.2.jpg', '2025-04-03 15:21:42', '2025-04-03 15:21:42'),
(2, 1, 'Brothers in Arms', 'New trench bridges, an innovation of the Canadian Cavalry Brigade, were used to lay tracks to the front line in preparation for the attack on July 14, 1916. A squadron from the Fort Garry Horse, attached to the advancing cavalry, prepared the tracks under direct machine gun fire.\r\n<br><br>\r\nEyewitness accounts at the time romanticized the bravery of Indian cavalry, describing them charging through waving cornfields with bugles blaring and lances glittering. However, the scene turned into a massacre when German machine guns opened fire.\r\n<br><br>\r\nLieutenant-Colonel G. Seton Hutchinson, a Distinguished Service Order and Military Cross recipient, recalled seeing the Indian cavalry galloping across the valley, their dark faces beneath shining helmets. The sight was inspiring, but tragically, many riders disappeared over the slope, and those who remained became targets of intense fire. Despite their exceptional horsemanship, they galloped through a barrage of shells, with ranks thinning and no survivors.\r\n<br><br>\r\nIn reality, casualties were relatively light for a force of approximately 1,500 troops engaged in one of the bloodiest battles of the Western Front. The German position at High Wood was taken, with 100 Germans killed or taken prisoner in the cornfields. The 20th Deccan Horse suffered two Indian officers wounded, three other ranks killed, and fifty wounded, along with eighteen horses killed and fifty-two wounded.', 'somme_section2.1.jpg,somme_section2.2.jpg', '2025-04-03 15:21:42', '2025-04-03 15:21:42'),
(3, 2, 'The Battle of Loos', 'The Battle of Loos, France, in September 1915, was the last major operation by the India Corps on the Western Front. During the battle, the Gurkhas and Garhwalis led diversionary attacks, with Sarabjit Gurung\'s company sacrificing all its men. Kulbir Thapa of the Gurkha Rifles was awarded the Victoria Cross, and Lieutenant Jodha Jang Bahadur Rana of the Garhwal Rifles received the Military Cross.', 'loos_section1.1.jpg,loos_section1.2.jpg', '2025-04-03 15:22:40', '2025-04-03 15:22:40'),
(4, 3, 'The Battle in Vimy', 'In April 1917, Sikh artillerymen of the Lahore Division played a crucial role in supporting Canadian forces to capture a heavily fortified position, a pivotal moment in Canada’s history. The Lahore Division had arrived in France in September 1914, initially supporting British troops. The victory at Vimy, achieved at the cost of over 10,000 Canadian casualties, is regarded as a defining moment in Canada\'s nationhood.\r\n<br><br>\r\nOver 135,000 British Indian Army troops, including Sikhs, fought alongside Canadian forces in key World War I battles, exemplifying unity, courage, and sacrifice. Sikhs distinguished themselves not only in service to British India but also to Britain, Australia, New Zealand, and Canada.', 'vimy_section1.1.jpg,vimy_section1.2.jpg', '2025-04-03 15:24:09', '2025-04-03 15:24:09'),
(5, 4, 'The Battle with Poison Gas', 'During the 2nd Battle of Ypres in April 1915, the Germans used poison gas for the first time on the Western Front. The Ferozepur and Jullunder brigades fought to close the gap between the French and British lines. The Indian War Memorial at Ypres honors the 130,000 soldiers who fought in Flanders during World War I.', 'ypres_section1.1.jpg,ypres_section1.2.jpg', '2025-04-03 15:25:56', '2025-04-03 15:25:56'),
(6, 4, 'The Dogras', 'In the Battle of Messines Ridge on October 31, 1914, the Dogra Company of the 2nd Cavalry Division was tasked with guarding the southeastern approaches to the village. The German 26th Division launched a fierce attack on the British and Indian units. As three battalions of the German 119th Grenadier Regiment advanced, the Dogras engaged in intense hand-to-hand combat. With most British officers killed, command fell to Jemadars Ram Singh and Kapur Singh.\r\n<br><br>\r\nThe Dogras held their position in a fierce firefight for over two hours, under orders not to retreat unless the neighboring British cavalry units did. As their situation grew increasingly dire and one by one they fell, Jemadar Kapur Singh remained the last man standing, down to his final bullet. With the Germans closing in, Kapur Singh chose to take his own life rather than surrender, embodying courage and devotion to duty. His self-sacrifice became a powerful symbol of \"death before dishonor\" and secured his place in the history and his village’s mythology, ensuring his memory lived on in the hearts of his people.', 'ypres_section2.1.jpg,ypres_section2.2.jpg', '2025-04-03 15:25:56', '2025-04-03 15:25:56'),
(7, 5, 'The Siege of Kut', 'This was one of the worst Allied defeats of World War I, lasted 147 days. Major-General Charles Townshend\'s 6th Poona Division, after suffering 11,000 casualties during their retreat from Ctesiphon, withdrew to Kut-al-Amara. Townshend chose to defend the position, despite its strong natural defenses, due to vulnerable supply lines, rather than retreat further south toward Basra.\r\n<br><br>\r\nOn December 7, 1915, Ottoman forces under Halil Pasha laid siege to the town. Townshend ordered his cavalry, led by Lt. Colonel Gerard Leachman, to escape south. Between January and March 1916, multiple Allied relief efforts failed, resulting in 30,000 Allied casualties, while Ottoman losses were around 10,000.\r\n<br><br>\r\nBy February 1916, food supplies dwindled, and disease spread rapidly. Townshend, with no hope of relief, surrendered in April. Around 13,000 Allied soldiers were captured, with one-third dying during the brutal 700-mile march through the desert. Many prisoners died in Baghdad, Mosul, and the Ottoman interior, enduring harsh conditions under a callous escort of Arab conscripts.\r\n<br><br>\r\nCaptured soldiers suffered severe abuse, including cholera, dysentery, starvation, and torture. They were stripped of their possessions and forced to work on railways in the Ottoman Empire. A unit that began with 300 men at Kut was reduced to just 140 survivors by the time they reached the Bagtsche rail station, continuing to endure brutal conditions.\r\n', 'kut_section1.1.jpg,kut_section1.2.jpg', '2025-04-03 15:27:11', '2025-04-03 15:27:11'),
(13, 7, 'Indian Cavalry in Haifa', 'On September 23, 1918, the Indian Cavalry captured Haifa, ending 400 years of Ottoman rule and securing the region for Christian and Jewish communities while preventing the destruction of Baha\'i shrines. Part of the 5th Cavalry Division, the 15th Imperial Service Cavalry Brigade, including the Jodhpur, Mysore, and Hyderabad Lancers, played a key role in this pivotal victory. The battle, which cost 900 Indian lives, contributed to the success of Allenby’s forces in Palestine, Lebanon, and Syria and is remembered as the last successful cavalry charge in military history.', 'haifa_section1.1.jpg,haifa_section1.2.jpg', '2025-04-03 15:36:47', '2025-04-03 15:36:47'),
(14, 7, 'Events during the liberation', 'On September 22, 1918, 700 Turkish soldiers from the Haifa garrison attempted to reach Tiberias but were attacked by the 18th Lancers at the 13th Cavalry Brigade’s outposts. Many were killed, and 311 were captured, along with four machine guns. Aerial reconnaissance later confirmed Haifa\'s evacuation. Meanwhile, a detachment of Light Armoured Cars, led by Brigadier General A. D\'A. King, advanced to occupy Haifa but faced barricades, artillery, and gun fire from Mount Carmel, forcing a withdrawal.\r\n<br><br>\r\nOn September 23, 1918, the 14th and 15th Cavalry Brigades handed over their line to the 3rd Australian Light Horse Brigade and began marching toward Haifa. The 15th Cavalry Brigade faced fire from 77mm guns on Mount Carmel while crossing the boggy River Kishon. By midday, the 14th Cavalry Brigade occupied the Kishon Railway Bridge and Harosheth of the Gentiles. The Jodhpur Lancers with the \'B\' Battery H.A.C. attacked Haifa. Meanwhile, the Mysore Lancers, supported by Sherwood Rangers, captured two naval guns and charged enemy machine gun positions.', 'haifa_section2.1.jpg,haifa_section2.2.jpg', '2025-04-03 15:36:47', '2025-04-03 15:36:47'),
(15, 7, 'The Heroic Action of Major Dalpat', 'Major Dalpat Singh Shekhawat Thakur, commander of the Jodhpur Lancers, led the final successful cavalry charge in military history during the war. He is remembered as the \"Hero of Haifa\" for his pivotal role in the city\'s liberation. For his bravery, he was posthumously awarded the Military Cross.\r\n<br><br>\r\nAt a critical moment, Major Dalpat entrusted the vital task of capturing the defile to his most senior officer, Captain Bahadur Aman Singh. Leading a fearless charge, Captain Singh eliminated over 30 enemy troops and captured two machine guns and two camel guns. This decisive assault secured the narrow defile, a pivotal operation for the success of the battle, and cleared the main road into Haifa.\r\n<br><br>\r\nBrigadier Harbord ordered the Jodhpur Lancers to advance near Beled Esh Sheikh but came under fire crossing the Acre railway line. Lt. Col. Holden directed Major Dalpat to charge the machine guns on Mount Carmel’s lower slopes. During the maneuver, he was shot in the spine and later died.', 'haifa_section3.1.jpg,haifa_section3.2.jpg', '2025-04-03 15:36:47', '2025-04-03 15:36:47'),
(16, 7, '\'Abdu\'l-Baha of Bahá’í Faith ', '‘Abdu’l-Bahá, son of Bahá’u’lláh, the founder of the Bahá’í Faith, was its spiritual leader and resided in Haifa, present-day Israel. Under his leadership, the faith, which originated in the Ottoman Empire in the 19th century, grew in influence through his humanitarian efforts. Alarmed by his popularity, Turkish commander Jamal Pasha threatened to crucify him on Mount Carmel and destroy all Bahá’í shrines.\r\n<br><br>\r\nWith Haifa’s liberation, the threat to his life was averted, preserving Bahá’í holy sites in Haifa and nearby Acre. Haifa held spiritual significance for the Bahá’í Faith, which had grown within the Ottoman Empire. ‘Abdu’l-Bahá’s humanitarian work had drawn Ottoman attention, leading to threats of his execution.', 'haifa_section4.1.jpg,haifa_section4.2.jpg', '2025-04-03 15:36:47', '2025-04-03 15:36:47'),
(17, 7, 'The Capture of Two Regiments', 'This capture of the two regiments resulted in 1,350 German and Ottoman prisoners. The Allies seized 17 artillery guns, along with 11 machine guns. Their own casualties included eight killed, 34 wounded, 60 horses killed, and 83 horses injured.', 'haifa_section5.1.jpg', '2025-04-03 15:36:47', '2025-04-03 15:36:47'),
(18, 7, 'Under the Turkish Ottoman Rule', 'Haifa had a population of 24,634, including 9,377 Muslims, 8,863 Christians, 6,230 Jews, and 164 others. The city developed as an industrial port with increased trade facilitated by the railway, and the construction of the Technion Institute of Technology, a Jewish technical school.', 'haifa_section6.1.jpg', '2025-04-03 15:36:47', '2025-04-03 15:36:47'),
(19, 7, 'Generals of the Ottoman Army', 'General Otto Liman von Sanders (1855–1929) was the German commander responsible for modernizing the Ottoman Army. General Mustafa Kemal (1881–1938), later known as Atatürk, was a skilled career soldier who played a crucial role in the Ottoman success at Gallipoli in 1915. General Edward Allenby was also a key figure in the military operations of the time.', 'haifa_section7.1.jpg,haifa_section7.2.jpg', '2025-04-03 15:36:47', '2025-04-03 15:36:47');

-- --------------------------------------------------------

--
-- Table structure for table contact
--

CREATE TABLE contact (
  id int UNSIGNED NOT NULL,
  name varchar(250) NOT NULL,
  email varchar(400) NOT NULL,
  subject varchar(230) NOT NULL,
  message varchar(2500) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table donors
--

CREATE TABLE donors (
  id int UNSIGNED NOT NULL,
  name varchar(500) NOT NULL,
  amount int NOT NULL,
  donated_date date NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table donors
--

INSERT INTO donors (id, name, amount, donated_date, created_at, updated_at) VALUES
(1, 'GBI', 5000, '2025-04-03', '2025-04-03 14:22:51', '2025-04-03 14:22:51'),
(2, 'Nehal Shelat', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(3, 'Deepti & Sunil Godse', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(4, 'Monika Sansanwal', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(5, 'Mohan Khandekar', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(6, 'Vasavi & Yuva Raju Poolacherla', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(7, 'Dr. Gagan Bhalla', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(8, 'Satish & Rimple Thakkar Family', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(9, 'Dr. Shailendra Ziradkar', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(10, 'Ashok & Sunila Kuchinad', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(11, 'Nagendra Krishnamurthy', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(12, 'Sunil Sheoran', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(13, 'Anita Bhatia', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(14, 'Vishal Papreja', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(15, 'Sapna Sharan', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(16, 'Madhu & Vijay Gupta', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(17, 'Arun & Anitha Prakash', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(18, 'Krishnaveni Ashok', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(19, 'Rajesh Nambiar', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(20, 'Bhavin Patel', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(21, 'Bogeshwari Venkatesan', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(22, 'Balvinder Dhinsa', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(23, 'Sanjay Deshpande', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(24, 'Sanjay Dahiya', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(25, 'Piyush & Vandana Shah', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(26, 'Sanjay Patel', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(27, 'Harpreet & Navneet Rai', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(28, 'Sonal & Vijay Kanthan', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(29, 'Amol Pai', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(30, 'Dr Rahul Manchanda', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(31, 'Anand Soni', 300, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(32, 'Bhutanese Hindu Community', 320, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(33, 'Suresh Kamath', 500, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(34, 'Akshya & Kamini Vasudev', 900, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(35, 'Robert & Debbie Schram', 1000, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(36, 'Virendra Singh Guleria', 1000, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(37, 'Jason & Shannon Hicks', 1000, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(38, 'Dr PC Shah', 1000, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(39, 'Vinod & Latha Varapravan', 1200, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(40, 'Dr. Rakesh Bhandari', 2001, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34'),
(41, 'Srishti Foundation', 3000, '2025-04-03', '2025-04-03 14:50:34', '2025-04-03 14:50:34');

-- --------------------------------------------------------

--
-- Table structure for table events
--

CREATE TABLE `events` (
  id int UNSIGNED NOT NULL,
  title varchar(250) NOT NULL,
  published_date date NOT NULL,
  image_main varchar(300) NOT NULL,
  content varchar(7600) NOT NULL,
  card_content varchar(500) NOT NULL,
  location varchar(250) NOT NULL,
  time varchar(125) NOT NULL,
  event_date date NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table events
--

INSERT INTO events (id, title, published_date, image_main, content, card_content, location, time, event_date, created_at, updated_at) VALUES
(1, 'Holi Celebration 2025', '2025-04-26', 'event1.jpg', '<p><b>For the 12th consecutive year since 2012, the Srishti Foundation transformed downtown London into a vibrant celebration of Holi, drawing approximately 4,000 people to Victoria Park.</b></p>\r\n\r\n<p>This ancient Dharmic festival brought together individuals from all backgrounds in a joyous riot of colours, music, and dance — truly embodying the spirit of unity in diversity.</p>\r\n\r\n<p><b>The celebration began at noon with:</b></p>\r\n<ul>\r\n  <li>A traditional Ganesh Puja performed by Pandit Tiwari Ji</li>\r\n  <li>A powerful message of togetherness, love, and happiness to set the tone for the day</li>\r\n</ul>\r\n\r\n<p><b>Dignitaries in attendance included:</b></p>\r\n<ul>\r\n  <li>London Mayor Josh Morgan</li>\r\n  <li>City councillors</li>\r\n  <li>Members of Parliament and the Provincial Legislature</li>\r\n</ul>\r\n\r\n<blockquote>\r\n  “Holi represents the best of our community — a celebration where everyone comes together, regardless of background, in pure joy and unity.”<br>\r\n  — Josh Morgan, Mayor of London\r\n</blockquote>\r\n\r\n<p><b>Festival highlights included:</b></p>\r\n<ul>\r\n  <li>High-energy folk dance performances and youth showcases</li>\r\n  <li>Live drummers and DJ music energizing the crowd</li>\r\n  <li>Synchronized colour throws creating bursts of vibrancy throughout the day</li>\r\n  <li>Traditional food vendors offering Indian and multicultural cuisines</li>\r\n</ul>\r\n\r\n<p><b>The celebration concluded at 5:00 PM with:</b></p>\r\n<ul>\r\n  <li>A heartfelt Aarti ceremony</li>\r\n  <li>Devotional dance and community participation in closing prayers</li>\r\n</ul>\r\n', 'Srishti Foundation’s 12th Holi event in Victoria Park brought 4,000 people together for a vibrant day of music, dance, and food.', 'Victoria Park, London, ON', '12:00 PM to 5:00 PM', '2025-04-27', '2025-04-03 15:05:30', '2025-04-03 15:05:30'),
(2, 'COVID-19 Relief in Valsad, Gujarat', '2025-01-05', 'event2.jpg', '<p><b>In June 2020, during India’s COVID-19 lockdown, Srishti Foundation - Canada partnered with Lokamangalam Trust to support isolated communities in Valsad, Gujarat.</b></p>\r\n\r\n<p>This humanitarian initiative provided essential aid to families affected by the pandemic, particularly in areas with limited or no access to resources.</p>\r\n\r\n<p><b>Relief efforts included:</b></p>\r\n<ul>\r\n  <li>Daily distribution of thousands of cooked meals and food kits</li>\r\n  <li>Focused outreach to remote hill villages where transportation routes were cut off</li>\r\n  <li>Special attention to elderly residents, low-income families, and those living in complete isolation</li>\r\n</ul>\r\n\r\n<p><b>Local Impact:</b> With the help of dedicated local volunteers, the initiative reached deep into the region’s most vulnerable areas, ensuring that no one was left behind during the crisis.</p>\r\n\r\n<p><b>Global Significance:</b> This effort demonstrated the powerful impact of cross-border cooperation and community-driven action during times of global emergency.</p>\r\n', 'Thousands of meals and food kits were delivered to remote villages in Valsad, Gujarat during the COVID-19 lockdown.', 'Remote Hill Areas, Valsad District, Gujarat, India', 'Daily, Morning to Evening', '2020-07-08', '2025-04-07 02:49:44', '2025-04-07 02:49:44'),
(3, 'Diwali Lights & Tribute Night', '2025-02-19', 'event3.jpg', '<p><b>Experience Diwali with the Srishti Foundation — a celebration of light, unity, and remembrance.</b></p>\r\n\r\n<p>This special event honors Indian WWI heroes while bringing the community together through vibrant cultural traditions.</p>\r\n\r\n<p><b>Event highlights include:</b></p>\r\n<ul>\r\n  <li>Captivating cultural performances showcasing Indian music and dance</li>\r\n  <li>Delicious traditional sweets shared in the spirit of Diwali</li>\r\n  <li>A moving candlelight tribute to the bravery and legacy of Indian soldiers</li>\r\n</ul>\r\n\r\n<p><b>Join us</b> in celebrating the triumph of light over darkness, and honoring the spirit of unity across generations and cultures.</p>\r\n', 'Diwali with cultural performances, traditional sweets, and a candlelight tribute to Indian WWI heroes. ', 'Memorial Site, London, ON', '6:00 PM – 9:00 PM', '2024-11-04', '2025-04-07 02:49:44', '2025-04-07 02:49:44'),
(4, 'Cricket Dhamaka & Picnic', '2025-09-03', 'event4.jpg', '<p><b>On July 15, 2023, Srishti Foundation hosted its annual Cricket Dhamaka & Picnic at the beautiful Springbank Park in London, Ontario.</b></p>\r\n\r\n<p>Families and friends came together for a fun-filled summer celebration featuring sports, games, food, and sunshine — a perfect day of togetherness and team spirit.</p>\r\n\r\n<p><b>Event highlights included:</b></p>\r\n<ul>\r\n  <li>Friendly cricket matches packed with sixes, fours, and playful rivalries</li>\r\n  <li>The thrilling competition for the coveted <b>Srishti Cup</b></li>\r\n  <li>Classic picnic games like tug of war and outdoor activities for all ages</li>\r\n  <li>Delicious snacks and refreshments enjoyed under the open sky</li>\r\n</ul>\r\n\r\n<p><b>Community Impact:</b> Laughter, cheering, and a sense of unity echoed through the park, reminding everyone of the power of shared joy and cultural celebration.</p>\r\n', 'A fun-filled day of cricket, games, tug of war, and the Srishti Cup brought the community together at Springbank Park.', 'Springbank Park, London, Ontario, Canada', '10:00 AM – 5:00 PM', '2025-04-27', '2025-04-07 14:13:13', '2025-04-07 14:13:13'),
(5, 'Savour the Flavours of Diwali', '2025-04-16', 'event5.jpg', '<p><b>A highlight of our annual Diwali celebration is the savoury vegetarian multi-cuisine dinner, served with care at Centennial Hall in London, Ontario.</b></p>\r\n\r\n<p>Every year, the dinner experience is crafted to reflect the warmth, richness, and diversity of our community.</p>\r\n\r\n<p><b>What makes our dinner special:</b></p>\r\n<ul>\r\n  <li>Extensive research, taste testing, and thoughtful vendor selection by our dedicated food team</li>\r\n  <li>A carefully curated menu showcasing a variety of vegetarian dishes from multiple Indian regions</li>\r\n  <li>Focus on comfort and convenience — no long lines, just delicious food and great company</li>\r\n</ul>\r\n\r\n<p><b>Easy planning:</b> Dinner time is chosen when purchasing tickets online, helping you schedule your evening smoothly.</p>\r\n\r\n<p><b>Start your Diwali Dhamaka experience with flavour, connection, and celebration.</b> Our community dinner is more than a meal — it’s a shared moment of joy you won’t want to miss!</p>\r\n', 'Enjoy a thoughtfully curated vegetarian multi-cuisine dinner with two seating options and no long queues at this year’s Diwali celebration!', 'Centennial Hall, London, Ontario, Canada', 'Dinner Slots: 5:00 PM – 5:45 PM & 5:45 PM – 6:30 PM', '2025-01-15', '2025-04-07 02:49:44', '2025-04-07 14:02:35'),
(6, 'Raksha Bandhan with London Police', '2025-02-17', 'event6.jpg', '<p><b>On April 8, 2025, for the 8th consecutive year, local youth and children gathered at the London Police Headquarters to celebrate Raksha Bandhan with our police officers.</b></p>\r\n\r\n<p>This heartfelt tradition brings young community members and law enforcement together in a unique expression of gratitude and unity.</p>\r\n\r\n<p><b>Event highlights included:</b></p>\r\n<ul>\r\n  <li>Children tying Rakhis to the Chief of Police and officers as a symbol of appreciation</li>\r\n  <li>Messages of respect and thanks for the officers\' year-round service and protection</li>\r\n  <li>Prayers for the safety and strength of those who keep our community secure</li>\r\n</ul>\r\n\r\n<p><b>Community Impact:</b> This touching annual celebration continues to strengthen the bond between youth and law enforcement, fostering mutual respect, trust, and a shared commitment to community well-being.</p>\r\n', 'For the 8th year, children tied Rakhis to London police officers to express gratitude and wish them safety.', 'London Police Headquarters, London, Ontario, Canada', '11:00 AM – 1:00 PM', '2024-11-11', '2025-04-07 02:49:44', '2025-04-07 02:49:44'),
(7, 'Tree Planting', '2024-12-08', 'event7.jpg', '<p><b>On May 26, 2018, Srishti Foundation, in partnership with the City of London, completed Phase 1 of the WWI Living Guard of Honour & Memorial project.</b></p>\r\n\r\n<p>This historic initiative took place at Veterans Memorial Parkway and honored the legacy of Indian and Canadian soldiers who fought side by side during the Great War.</p>\r\n\r\n<p><b>Key highlights of Phase 1:</b></p>\r\n<ul>\r\n  <li>Planting of <b>108 trees</b> to represent the soldiers, standing in formation as a Living Guard of Honour</li>\r\n  <li>Volunteer participation from the local community, including members of the Canadian Forces</li>\r\n  <li>Symbolic arrangement of trees in rows to reflect unity, discipline, and remembrance</li>\r\n</ul>\r\n\r\n<p><b>Looking ahead:</b> The site will eventually feature a stone memorial, dedicated to showcasing the untold stories of bravery, sacrifice, and brotherhood shared between Indian and Canadian soldiers during WWI.</p>\r\n', '108 trees planted to honour Indian and Canadian soldiers, creating a \'Living Guard of Honour\' in tribute to their bravery.', 'Veterans Memorial Parkway, London, Ontario', '11:00 AM – 4:00 PM', '2025-02-20', '2025-04-07 02:49:44', '2025-04-07 02:49:44');

-- --------------------------------------------------------

--
-- Table structure for table media
--

CREATE TABLE media (
  id int UNSIGNED NOT NULL,
  events_id int UNSIGNED NOT NULL,
  gallery varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  type varchar(400) NOT NULL,
  alt varchar(250) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table media
--

INSERT INTO media (id, events_id, gallery, type, alt, created_at, updated_at) VALUES
(2, 1, 'holi-gallery1.jpg,holi-gallery2.jpg,holi-gallery3.jpg,holi-gallery4.jpg,holi-gallery5.jpg,holi-gallery6.jpg,holi-gallery7.jpg', 'images', 'Image gallery', '2025-04-03 15:08:34', '2025-04-03 15:08:34'),
(4, 2, 'gujarat-gallery1.jpg,gujarat-gallery2.jpg,gujarat-gallery3.jpg,gujarat-gallery4.jpg', 'images', 'COVID-19 Relief in Valsad, Gujarat', '2025-04-07 13:23:46', '2025-04-07 13:23:46'),
(6, 3, 'diwali-gallery1.jpg,diwali-gallery2.jpg,diwali-gallery3.jpg,diwali-gallery4.jpg', 'images', 'Diwali Event Photo', '2025-04-07 13:23:46', '2025-04-07 13:23:46'),
(8, 4, 'cricket-gallery1.jpg,cricket-gallery2.jpg,cricket-gallery3.jpg,cricket-gallery4.jpg,cricket-gallery5.jpg,cricket-gallery6.jpg,cricket-gallery7.jpg', 'images', 'Cricket Dhamaka & Picnic at Springbank Park', '2025-04-07 13:23:46', '2025-04-07 13:23:46'),
(10, 5, 'dinner-gallery1.jpg,dinner-gallery2.jpg,dinner-gallery3.jpg,dinner-gallery4.jpg', 'images', 'Diwali Dinner', '2025-04-07 13:23:46', '2025-04-07 13:23:46'),
(12, 6, 'raksha-gallery1.jpg,raksha-gallery2.jpg,raksha-gallery3.jpg,raksha-gallery4.jpg', 'images', 'Raksha Bandhan Celebration', '2025-04-07 13:23:46', '2025-04-07 13:23:46'),
(14, 7, 'tree-gallery1.jpg,tree-gallery2.jpg,tree-gallery3.jpg,tree-gallery4.jpg,tree-gallery5.jpg,tree-gallery6.jpg,tree-gallery7.jpg,', 'images', 'Tree Planting', '2025-04-07 13:23:46', '2025-04-07 13:23:46');

-- --------------------------------------------------------

--
-- Table structure for table news
--

CREATE TABLE news (
  id int UNSIGNED NOT NULL,
  title varchar(350) NOT NULL,
  published_date date NOT NULL,
  content varchar(7500) NOT NULL,
  card_content varchar(600) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  image_main varchar(250) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table news
--

INSERT INTO news (id, title, published_date, content, card_content, image_main, created_at, updated_at) VALUES
(1, 'Construction Milestone', '2025-03-03', '<p><b>The Brothers in Arms Memorial project has reached a significant milestone</b> this week as construction crews completed the foundation work for the main monument area. This achievement marks the successful completion of Phase 1 of the memorial construction, setting the stage for the granite installations scheduled to begin next month.</p>\r\n\r\n<p><b>Engineering & Foundation Details</b><br>\r\nThe foundation, designed to support the 15-ton granite centerpiece, required specialized engineering to ensure stability in the varied soil conditions of Veterans Memorial Parkway.</p>\r\n<blockquote>\"This foundation isn\'t just concrete and steel—it\'s the literal groundwork for a lasting tribute that will stand for generations,\" said Chief Engineer Rajiv Singh.</blockquote>\r\n\r\n<p><b>Community Participation</b></p>\r\n<ul>\r\n  <li>Local residents joined a special ceremony last weekend.</li>\r\n  <li>Community members placed mementos and written messages into a time capsule embedded within the foundation.</li>\r\n  <li>Over 200 people attended, including veterans\' families and school children learning about the shared history of Indian and Canadian soldiers.</li>\r\n</ul>\r\n\r\n<p><b>Looking Ahead – Phase 2 Plans</b></p>\r\n<ul>\r\n  <li>Installation of the main granite monument</li>\r\n  <li>Landscaping of the surrounding memorial gardens</li>\r\n  <li>Planting of the first 36 heritage trees (of the planned 108)</li>\r\n  <li>Construction of accessible pathways throughout the site</li>\r\n</ul>\r\n<p>The memorial remains on schedule for completion in <b>November 2025</b>, with the official dedication ceremony planned for <b>Remembrance Day 2025</b>.</p>\r\n\r\n<p><b>How You Can Contribute</b></p>\r\n<ul>\r\n  <li><b>Sponsor a heritage tree</b> – $500 each</li>\r\n  <li><b>Purchase an engraved paver</b> for the Memory Path – $250</li>\r\n  <li><b>Volunteer</b> for upcoming planting days in June</li>\r\n</ul>\r\n', 'Granite installation starts next month. Completion set for Remembrance Day 2025.', 'news1.jpg', '2025-04-03 15:00:41', '2025-04-03 15:00:41'),
(2, 'First Phase Completed', '2025-02-10', '<p><b>Srishti Foundation proudly announces the completion of the first phase of the Indo-Canadian WWI Memorial.</b></p>\r\n\r\n<p><b>This phase includes:</b></p>\r\n<ul>\r\n  <li>A commemorative wall</li>\r\n  <li>A community space in London, Ontario</li>\r\n</ul>\r\n\r\n<p><b>This milestone honors:</b></p>\r\n<ul>\r\n  <li>The bravery of Indian soldiers</li>\r\n  <li>The shared history between India and Canada</li>\r\n</ul>\r\n', 'First phase of the memorial is now complete, honoring Indian soldiers in WWI.', 'news2.jpg', '2025-04-07 02:40:02', '2025-04-07 02:40:02'),
(3, 'Holi at the Memorial Grounds', '2025-04-25', '<p><b>The Foundation hosted a joyful Holi celebration at the memorial site.</b></p>\r\n\r\n<p><b>Highlights of the event included:</b></p>\r\n<ul>\r\n  <li>Vibrant colors</li>\r\n  <li>Traditional music</li>\r\n  <li>Cultural dance performances</li>\r\n</ul>\r\n\r\n<p><b>Community Impact:</b> Families and youth came together to experience Indian culture and honor the unity it represents.</p>\r\n', 'Holi was celebrated with joy at the memorial site, showcasing vibrant Indian traditions.', 'news3.jpg', '2025-04-07 02:40:02', '2025-04-07 02:40:02'),
(4, 'Phase 2', '2025-01-17', '<p><b>Srishti Foundation launches the second phase of its memorial initiative.</b></p>\r\n\r\n<p><b>This phase includes:</b></p>\r\n<ul>\r\n  <li>Development of a digital heritage space</li>\r\n  <li>Creation of a reflection garden</li>\r\n</ul>\r\n\r\n<p><b>Purpose:</b> To deepen the memorial’s cultural significance and provide a space for remembrance and connection.</p>\r\n', 'Phase two of the memorial project has officially started, featuring digital and natural elements.', 'news4.jpg', '2025-04-07 02:40:02', '2025-04-07 02:40:02'),
(5, 'Diwali at the Memorial', '2025-06-19', '<p><b>In celebration of Diwali, the Srishti Foundation organized a heartfelt candle-lighting event at the memorial site.</b></p>\r\n\r\n<p>The atmosphere was filled with warmth and unity as families, community members, and special guests gathered to illuminate the space with hundreds of glowing candles. The event symbolized the victory of light over darkness and paid tribute to the bravery and sacrifices of Indian soldiers who served during World War I.</p>\r\n\r\n<p><b>Guests enjoyed:</b></p>\r\n<ul>\r\n  <li>Traditional Indian sweets and festive snacks shared in the spirit of togetherness</li>\r\n  <li>Captivating classical dance and music performances by local artists</li>\r\n  <li>Storytelling sessions that honored the forgotten heroes of WWI and highlighted their contributions to global peace</li>\r\n</ul>\r\n\r\n<p><b>Community Impact:</b> The event not only celebrated Indian heritage but also strengthened cultural connections between generations and backgrounds, creating an evening filled with meaning, joy, and remembrance.</p>\r\n', 'Diwali was celebrated with lights and culture at the memorial in London, Ontario.', 'news5.jpg', '2025-04-07 02:40:02', '2025-04-07 13:57:08'),
(6, 'Educational Program', '2025-02-12', '<p><b>A new educational outreach by the Srishti Foundation introduces high school students to Indian contributions in WWI.</b></p>\r\n\r\n<p>Designed to foster awareness and appreciation among younger generations, the program brings history to life through engaging and immersive experiences in local schools and community centers.</p>\r\n\r\n<p><b>Each session includes:</b></p>\r\n<ul>\r\n  <li>Guest speakers, including historians and descendants of WWI veterans</li>\r\n  <li>Access to rare archival materials and visual exhibits</li>\r\n  <li>Interactive storytelling sessions that highlight the courage, sacrifice, and resilience of Indian soldiers</li>\r\n</ul>\r\n\r\n<p><b>Educational Impact:</b> Students gain a deeper understanding of global history, cultural collaboration, and the shared legacy between India and Canada during the First World War.</p>\r\n', 'Srishti launches a school program to teach students about Indian soldiers in WWI.', 'news6.jpg', '2025-04-07 02:40:02', '2025-04-07 02:40:02'),
(7, 'Remembrance Day Tribute', '2025-11-11', '<p><b>On Remembrance Day, a special ceremony was held at the memorial to honor the sacrifices of Indian and Canadian soldiers.</b></p>\r\n\r\n<p>The event brought together veterans, families, dignitaries, and local residents in a moving tribute that reflected unity, gratitude, and remembrance.</p>\r\n\r\n<p><b>Ceremony highlights included:</b></p>\r\n<ul>\r\n  <li>Raising of the Indian and Canadian flags side by side, symbolizing shared history and brotherhood</li>\r\n  <li>Emotional tributes from veterans and community members who shared personal stories and memories</li>\r\n  <li>A moment of silence followed by the playing of the Last Post</li>\r\n</ul>\r\n\r\n<p><b>Community Reflection:</b> The ceremony served as a powerful reminder of the enduring bond between the two nations and the importance of preserving the legacy of those who served in World War I.</p>\r\n', 'Indian soldiers were honored on Remembrance Day with a special ceremony.', 'news7.jpg', '2025-04-07 02:40:02', '2025-04-07 02:40:02'),
(8, 'Unity March', '2025-07-16', '<p><b>Hundreds participated in the Srishti Foundation\'s Unity March, waving Indian and Canadian flags in celebration of cultural harmony.</b></p>\r\n\r\n<p>The march, filled with energy and spirit, brought together people of all ages and backgrounds to walk side by side through downtown London, symbolizing peace, friendship, and unity between the two nations.</p>\r\n\r\n<p><b>Key highlights of the Unity March:</b></p>\r\n<ul>\r\n  <li>Participants proudly waved Indian and Canadian flags, dressed in traditional and cultural attire</li>\r\n  <li>Live music and drumming added a festive rhythm to the march</li>\r\n  <li>Volunteers distributed campaign posters and unity wristbands to spread awareness</li>\r\n</ul>\r\n\r\n<p><b>Campaign Impact:</b> The event marked the success of the <b>#HandshakeAcrossNations</b> campaign, reinforcing the importance of cross-cultural collaboration and honoring the shared legacy of Indian and Canadian soldiers.</p>\r\n', 'Cultural unity celebrated with a march supporting Indo-Canadian friendship.', 'news8.jpg', '2025-04-07 02:40:02', '2025-04-07 02:40:02');

-- --------------------------------------------------------

--
-- Table structure for table newsletters
--

CREATE TABLE newsletters (
  id int UNSIGNED NOT NULL,
  email varchar(500) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table newsletters
--

INSERT INTO newsletters (id, email, created_at, updated_at) VALUES
(1, 'jimmy@publiqmedia.com', '2025-04-03 14:57:32', '2025-04-03 14:57:32'),
(2, 'test@gmail.com', '2025-04-09 11:33:03', '2025-04-09 11:42:38');

-- --------------------------------------------------------

--
-- Table structure for table users
--

CREATE TABLE users (
  id int UNSIGNED NOT NULL,
  username varchar(200) NOT NULL,
  password varchar(200) NOT NULL,
  role varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table users
--

INSERT INTO users (id, username, password, role) VALUES
(1, 'fivealive', '108', 'Administrator');

-- --------------------------------------------------------

--
-- Table structure for table volunteers
--

CREATE TABLE volunteers (
  id int UNSIGNED NOT NULL,
  name varchar(300) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table volunteers
--

INSERT INTO volunteers (id, name, created_at, updated_at) VALUES
(1, 'Vinod Varapravan', '2025-04-03 14:24:31', '2025-04-03 14:24:31'),
(2, 'Vandana Nagpal Shah', '2025-04-03 14:24:31', '2025-04-03 14:24:31'),
(3, 'Jimmy Kothari', '2025-04-03 14:53:01', '2025-04-03 14:53:01'),
(4, 'Milind Parkara', '2025-04-03 14:53:01', '2025-04-03 14:53:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table battles
--
ALTER TABLE battles
  ADD PRIMARY KEY (id);

--
-- Indexes for table battles_sections
--
ALTER TABLE battles_sections
  ADD PRIMARY KEY (id);

--
-- Indexes for table contact
--
ALTER TABLE contact
  ADD PRIMARY KEY (id);

--
-- Indexes for table donors
--
ALTER TABLE donors
  ADD PRIMARY KEY (id);

--
-- Indexes for table events
--
ALTER TABLE events
  ADD PRIMARY KEY (id);

--
-- Indexes for table media
--
ALTER TABLE media
  ADD PRIMARY KEY (id);

--
-- Indexes for table news
--
ALTER TABLE news
  ADD PRIMARY KEY (id);

--
-- Indexes for table newsletters
--
ALTER TABLE newsletters
  ADD PRIMARY KEY (id);

--
-- Indexes for table users
--
ALTER TABLE users
  ADD PRIMARY KEY (id);

--
-- Indexes for table volunteers
--
ALTER TABLE volunteers
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table battles
--
ALTER TABLE battles
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table battles_sections
--
ALTER TABLE battles_sections
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table contact
--
ALTER TABLE contact
  MODIFY id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table donors
--
ALTER TABLE donors
  MODIFY id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table events
--
ALTER TABLE events
  MODIFY id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table media
--
ALTER TABLE media
  MODIFY id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table news
--
ALTER TABLE news
  MODIFY id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table newsletters
--
ALTER TABLE newsletters
  MODIFY id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table users
--
ALTER TABLE users
  MODIFY id int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table volunteers
--
ALTER TABLE volunteers
  MODIFY id int UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
