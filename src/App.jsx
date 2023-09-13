import './App.css';
import Roof from './components/Roof';
import FoodTruck from './components/FoodTruck';
import birriaLandiaImage from './assets/Birria-Landia image.webp';
import mysttikMasalaImage from './assets/Mysttik Masala image.avif';
import halalGuysImage from './assets/The Halal Guys image.webp';
import nyDosasImage from './assets/NY Dosas image.jpg';
import jerkPanImage from './assets/Jerk Pan image.jpg';
import tongImage from './assets/Tong image.jpg';
import kingSouvlakiImage from './assets/King Souvlaki of Astoria image.jpg';
import lingSweetMiniCakesImage from './assets/Lings Sweet Mini Cakes image.jpg';
import uncleGussysImage from './assets/Uncle Gussys image.jpg';
import pataconPisaoImage from './assets/Patacon Pisao image.jpg';
import momsMonoImage from './assets/Moms Mono image.jpg';
import makinaCafeImage from './assets/Makina Cafe image.jpg';

const App = () => {
  const trucks = [
    {
      name: "Birria-Landia",
      description: "Delicious Birria tacos and more!",
      imageUrl: birriaLandiaImage,
      location: "Mexican",
      menuLink: "https://thebirrialandia.com/menu/"
    },
    {
      name: "Mysttik Masala",
      description: "Come, indulge yourself in Indian food, like it should be.",
      imageUrl: mysttikMasalaImage,
      location: "Indian",
      menuLink: "https://indianfoodny.com/"
    },
    {
      name: "The Halal Guys",
      description: "Chicken, Gyros, and Falafel Platters. Since 1990.",
      imageUrl: halalGuysImage,
      location: "Middle Eastern",
      menuLink: "https://thehalalguys.com/menu/"
    },
    {
      name: "NY Dosas",
      description: "Made with love and passion.",
      imageUrl: nyDosasImage,
      location: "Vegetarian",
      menuLink: "https://nydosas.com/menu/"
    },
    {
      name: "Jerk Pan",
      description: "Come try our Lunch Specials Mini!",
      imageUrl: jerkPanImage,
      location: "Jamaican",
      menuLink: "https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/"
    },
    {
      name: "Tong",
      description: "Definitely rivals the best fuchka in Bangladesh.",
      imageUrl: tongImage,
      location: "Bangladeshi",
      menuLink: "https://www.facebook.com/Bangladeshistreetfoods/"
    },
    {
      name: "King Souvlaki of Astoria",
      description: "The most authentic Greek street food outside of Greece.",
      imageUrl: kingSouvlakiImage,
      location: "Greek",
      menuLink: "https://kingsouvlakinyc.com/"
    },
    {
      name: "Ling's Sweet Mini Cakes",
      description: "A carefully curated retail market",
      imageUrl: lingSweetMiniCakesImage,
      location: "Chinese",
      menuLink: "https://canalstreet.market/"
    },
    {
      name: "Uncle Gussy's",
      description: "The Best Greek Ingredients & Flavor.",
      imageUrl: uncleGussysImage,
      location: "Greek",
      menuLink: "https://unclegussys.com/menus/"
    },
    {
      name: "Patacon Pisao",
      description: "The perfect snack for any time of the day, night and/or any party!",
      imageUrl: pataconPisaoImage,
      location: "Venezuelan",
      menuLink: "https://www.pataconpisaonyc.com/menus/"
    },
    {
      name: "Mom's Mono",
      description: "Come try the best momos in town!",
      imageUrl: momsMonoImage,
      location: "Tibetan",
      menuLink: "https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/"
    },
    {
      name: "Makina Cafe",
      description: "Tasty, healthy, nutritious and something quite unique.",
      imageUrl: makinaCafeImage,
      location: "Ethiopian",
      menuLink: "https://makinacafenyc.com/"
    }
  ];

  return (
    <div className="App">
      <Roof />
      <h1>Food Truck Favorites</h1>
      <div className="truck-container">
        {trucks.map((truck, index) => (
          <FoodTruck 
            key={index}
            name={truck.name} 
            theme={truck.theme}
            description={truck.description}
            imageUrl={truck.imageUrl}
            location={truck.location}
            menuLink={truck.menuLink}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
