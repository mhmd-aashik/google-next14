import Header from "@/components/Header";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-48">
        <Image
          priority
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="google"
          width={400}
          height={100}
          
        />
        <HomeSearch />
      </div>
    </div>
  );
};

export default Home;
