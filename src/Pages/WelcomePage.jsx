import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import Testimonials from "../Components/Testimonials";
import Lottie from "lottie-react";
import Button, {
  Testimonial,
  ButtonOutline2,
  Features,
} from "../Components/Utitlity";
import WelcomeHeader from "../Components/Header";
import HeroBg from "./../assets/Images/heroBg.png";
import Story from "./../assets/Images/Story.png";
import HeroBgMobile from "./../assets/Images/heroBgMobile.png";
import Group from "./../assets/Images/cummunityPic.png";
import Valinetine from "./../assets/Images/valentine.png";
import FeaturesData from "../Components/Features";
import ChatScreen from "../assets/Animations/Chatscreen.json";
import VideoCall from "../assets/Animations/VideoChat.json";
import "../css/WelcomePage.css";

export default function WelcomePage() {
  return (
    <>
      <WelcomeHeader />
      <section
        id="hero"
        className="py-5 flex flex-col md:flex-row px-3 relative md:px-10 w-full mt-20"
      >
        <picture>
          <source
            media="(min-width: 700px)"
            srcset={HeroBg}
            className="w-11/12 absolute"
          />

          <img src={HeroBgMobile} alt="GFG" className="w-11/12 absolute" />
        </picture>

        <div className="w-full md:w-7/12 py-5 px-3 md:px-10 justify-center items-center z-10">
          <h1 className="text-4xl font-bold mt-2 text-center">
            Welcome to
            <strong className="text-Pink900"> Pink Chat</strong>
          </h1>
          <p className="px-5 md:px-20 text-center mt-10">
            Join us for meaningful connections, vibrant conversations, and a
            safe space to share your relationship experiences, facts, and
            advice. Whether it's celebrating lasting love or exploring the
            dating world, Pink Chat is here to help you thrive.
          </p>
          <div className="flex justify-center">
            <Button Extend="hidden md:block self-center mt-10">
              Join the Community
            </Button>
            <Button Extend="block md:hidden self-center mt-10">
              Create an account
            </Button>
          </div>

          <div className="flex flex-row flex-wrap justify-around space-y-3 items-center mt-10">
            <img src={Group} alt="Community" width={250} />
            <p className="font-bold px-5 text-center">
              Join 2,000+ people from different part of the world
            </p>
          </div>
        </div>
        <div className="hidden md:block w-5/12 mt-10 z-10">
          <img src={Valinetine} alt="Love" />
        </div>
      </section>
      <section
        id="whyus"
        className="w-full py-10 mt-4 md:mt-20 px-3 md:px-10 flex flex-row flex-wrap"
      >
        <div className="w-full md:w-4/12 mt-5">
          <h2 className="text-4xl capitalize font-bold text-center underline text-Pink900">
            Why PinkChat ?
          </h2>
          <p className="mt-7 px-5">
            Connect with like-minded individuals, explore new beginnings, and
            enjoy privacy at its best. Your journey is important to us, and
            PinkChat ensures a safe and intimate space for you to express,
            connect, and celebrate.
          </p>
        </div>
        <div className="w-full md:w-7/12 flex flex-auto flex-wrap justify-around pb-2">
          {FeaturesData.map((feature) => (
            <Features
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <section className="flex w-full flex-auto justify-between flex-wrap bg-Pink600 mt-5 px-3 md:px-10 rounded-t-3xl">
        <div className="w-full md:w-5/12 flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl mt-10 font-bold text-white px-2 text-center">
            Efficient Messaging
          </h3>
          <p className="text-white mt-10 font-bold px-2">
            Experience efficient communication like never before with PinkChat.
            Our messaging system is designed to make your conversations smooth
            and hassle-free. Connect effortlessly and stay engaged with ease.
          </p>
        </div>
        <div className="w-full md:w-6/12 flex mt-20 md:mt-0 flex-row justify-center items-center">
          <Lottie
            animationData={ChatScreen}
            loop={true}
            style={{ width: 600 }}
            className="-mt-20 "
          />
        </div>
      </section>

      <section className="flex w-full flex-col md:flex-row-reverse flex-wrap-reverse justify-between bg-white mt-5 px-3 md:px-10 rounded-t-3xl">
        <div className="w-full md:w-5/12 flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl mt-10 font-bold text-Pink900 px-2 text-center">
            Real-time Video call
          </h3>
          <p className="text-PinkBlack900 mt-10 font-bold px-2">
            Discover a new way to communicate with PinkChat's video calls that
            include augmented reality (AR). Enjoy more lifelike interactions
            with added AR elements that bring a special touch to your
            conversations.
          </p>
        </div>
        <div className="w-full md:w-6/12 flex mt-20 md:mt-0 flex-row justify-center items-center">
          <Lottie
            animationData={VideoCall}
            loop={true}
            style={{ width: 600 }}
            className="-mt-20 "
          />
        </div>
      </section>

      <section className="flex w-full flex-col md:flex-row flex-wrap justify-between bg-white mt-5 px-3 md:px-10 rounded-t-3xl">
        <div className="w-full md:w-5/12 flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl mt-10 font-bold text-Pink900 px-2 text-center capitalize">
            Add Stories and Reels
          </h3>
          <p className="text-PinkBlack900 mt-10 font-bold px-2">
            PinkChat brings you an array of exciting features, including Stories
            and Reels. Express yourself through captivating stories and short
            reels, sharing your unique moments with others. Join us in creating
            a vibrant community where your creativity knows no bounds!
          </p>
        </div>
        <div className="w-full md:w-6/12 flex md:mt-0 flex-row justify-center items-center">
          <img src={Story} alt="Story" />
        </div>
      </section>

      <section className="flex w-full flex-col md:flex-row py-10 flex-wrap justify-between bg-Pink900 mt-5 px-3 md:px-10 rounded-t-3xl">
        <div className="w-full md:w-5/12 flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl mt-10 font-bold text-white px-2 text-center capitalize">
            How I met Regeimi
          </h3>
          <p className="mt-6 text-white font-medium">
            Let me take you through the wonderful journey of how I crossed paths
            with Regeimi on PinkChat. Our virtual encounter turned into
            something truly extraordinary, filled with conversations, shared
            interests, and the magic of connecting through the app. Join me as I
            unfold the story of how PinkChat brought us together....
          </p>
          <ButtonOutline2 Extend="mt-5">Read more</ButtonOutline2>
        </div>
        <div className="successImg w-full md:w-4/12 flex mt-10 md:mt-0 flex-row justify-center items-center">
          <img src="images/black-couple.png" alt="Black-couple" />
        </div>
      </section>

      <div className="text-Pink900 mt-10 text-3xl font-bold text-center">
        What our beloved Users say
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          loop: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {Testimonials.map((testimonial) => (
          <SwiperSlide>
            <Testimonial
              name={testimonial.name}
              message={testimonial.message.slice(0,210) + '...'}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="download mt-10 pb-20 flex flex-col items-center">
        <h4 className="text-PinkBlack900 font-bold text-center text-3xl">
          Dowload our mobile app on Google Plays store and App store
        </h4>
        <button className="border-2 p-2 rounded-3xl mt-10 flex flex-row items-center space-x-2">
          <img src="images/google-play.png" alt="" style={{ width: "70px" }} />
          <span className="text-2xl font-bold text-PinkBlack900">
            Get on Plays Store
          </span>
        </button>
        <button className="border-2 p-2 rounded-3xl mt-10 flex flex-row items-center space-x-2">
          <img src="images/app-store.png" alt="" style={{ width: "70px" }} />
          <span className="text-2xl font-bold text-PinkBlack900">
            Get on Apps Store
          </span>
        </button>
      </div>

      <footer className="py-20 w-full px-3 md:px-10 rounded-t-3xl bg-Pink900">
        Footer: Will be added later
      </footer>
    </>
  );
}
