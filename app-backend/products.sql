-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Dec 16. 08:45
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `megaprojekt`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `ram` varchar(50) DEFAULT NULL,
  `storage` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `products`
--

INSERT INTO `products` (`id`, `brand`, `model`, `ram`, `storage`, `price`) VALUES
(1, 'Apple', 'iPhone 15', '8 GB', '128 GB', 799.99),
(2, 'Samsung', 'Galaxy S23', '8 GB', '256 GB', 999.99),
(3, 'Xiaomi', 'Redmi Note 12', '6 GB', '128 GB', 299.99),
(4, 'OnePlus', 'OnePlus 11', '12 GB', '256 GB', 899.99),
(5, 'Google', 'Pixel 8', '8 GB', '128 GB', 699.99),
(6, 'Samsung', 'Galaxy Z Fold 5', '12 GB', '512 GB', 1799.99),
(7, 'Apple', 'iPhone 14', '6 GB', '128 GB', 699.99),
(8, 'Xiaomi', 'Mi 13 Pro', '8 GB', '256 GB', 849.99),
(9, 'Oppo', 'Find X5 Pro', '12 GB', '256 GB', 1099.99),
(10, 'Motorola', 'Edge 40', '8 GB', '256 GB', 749.99);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
