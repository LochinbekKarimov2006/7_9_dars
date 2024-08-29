import React, { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 3 soniya interval

    return () => clearInterval(interval);
  }, [items.length]);

  // 3 ta element ko'rsatish uchun indekslarni hisoblash
  const visibleItems = [
    items[currentIndex],
    items[(currentIndex + 1) % items.length],
    items[(currentIndex + 2) % items.length],
  ];

  return (
    <div className="flex justify-between w-[100%] space-x-4 overflow-hidden ">
      {visibleItems.map((item, index) => (
        <div key={index} className="min-w-[430px] h-[230px] bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
          <div className="p-4 bg-black bg-opacity-50 text-white">
            <h3>{item.title}</h3>
            <p>{item.year} - {item.type} - {item.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Foydalanish uchun misol:
const items = [
    { image: 'https://freekino.uz/uploads/posts/2023-12/1702138437_photo_2023-12-09_20-48-38.jpg', title: 'DAXSHATLI JONAJON UY 2 FASL BARCHA QISMLARI UZBEK OZBEK TILIDA', year: 2023, type: 'Movie', rating: 'PG' },
    { image: 'https://i.artfile.ru/1920x1080_1150675_[www.ArtFile.ru].jpg', title: 'MULTFILM, PREMYERA', year: 2021, type: 'Movie', rating: 'PG' },
    { image: 'https://bogatyr.club/uploads/posts/2023-03/1679153655_bogatyr-club-p-fon-rio-foni-vkontakte-67.jpg', title: 'MULTFILM, PREMYERA', year: 2019, type: 'TV Series', rating: 'E' },
    { image: 'https://get.wallhere.com/photo/4000x2164-px-cartoon-comedy-dark-Halloween-horror-hotel-Transylvania-vampire-1865103.jpg', title: 'MULTFILM, PREMYERA', year: 2022, type: 'Movie', rating: 'PG-13' },
    { image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1528730/5f8b9b215a4201b8a47748bf246020e7/1920x1080', title: 'MULTFILM, PREMYERA', year: 2019, type: 'Movie', rating: 'PG' },
    { image: 'https://get.wallhere.com/photo/2880x1800-px-6-action-adventure-animation-big-Disney-futuristic-hero-robot-superhero-1824181.jpg', title: 'MULTFILM, PREMYERA', year: 2021, type: 'Movie', rating: 'PG' },
    { image: 'https://wallpapers.com/images/hd/2560x1440-disney-mike-monsters-university-wkjpt0u32adi5yxy.jpg', title: 'MULTFILM, PREMYERA', year: 2019, type: 'TV Series', rating: 'E' },
    { image: 'https://a-static.besthdwallpaper.com/luca-with-alberto-giulia-disney-x-pixar-movie-luca-2021-wallpaper-1920x1200-73510_6.jpg', title: 'MULTFILM, PREMYERA', year: 2022, type: 'Movie', rating: 'PG-13' },
  // Boshqa elementlar qo'shishingiz mumkin...
];

export default function App() {
  return (
    <div>
      <Carousel items={items} />
    </div>
  );
}