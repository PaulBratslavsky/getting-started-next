import React from "react";
import Link from "next/link";
import Image from "next/image";
const TwitterIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 5.63381C19.3743 5.91106 18.7029 6.09908 17.9975 6.18303C18.7178 5.75172 19.2691 5.06761 19.5304 4.25494C18.8548 4.65436 18.1091 4.94439 17.3144 5.10161C16.6781 4.42281 15.7731 4 14.7692 4C12.8432 4 11.2816 5.56158 11.2816 7.48647C11.2816 7.75947 11.3124 8.02611 11.3719 8.28108C8.474 8.13553 5.90431 6.74711 4.18444 4.63736C3.88381 5.15153 3.71278 5.75064 3.71278 6.39017C3.71278 7.60014 4.32892 8.66775 5.26375 9.29236C4.69222 9.27325 4.15469 9.11603 3.68411 8.85469V8.89825C3.68411 10.5873 4.88664 11.997 6.48114 12.3178C6.189 12.3964 5.88094 12.44 5.56225 12.44C5.33706 12.44 5.11928 12.4177 4.90575 12.3752C5.34978 13.7615 6.63731 14.7696 8.16278 14.7972C6.96981 15.7321 5.46558 16.2876 3.83178 16.2876C3.55028 16.2876 3.273 16.2706 3 16.2398C4.54353 17.231 6.376 17.8089 8.3455 17.8089C14.7607 17.8089 18.2674 12.4952 18.2674 7.88697L18.2557 7.4355C18.9409 6.94681 19.5336 6.33281 20 5.63381Z"
      fill="#17A34A"
    />
    <mask
      id="mask0"
      maskUnits="userSpaceOnUse"
      x="3"
      y="4"
      width="17"
      height="14"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 5.63381C19.3743 5.91106 18.7029 6.09908 17.9975 6.18303C18.7178 5.75172 19.2691 5.06761 19.5304 4.25494C18.8548 4.65436 18.1091 4.94439 17.3144 5.10161C16.6781 4.42281 15.7731 4 14.7692 4C12.8432 4 11.2816 5.56158 11.2816 7.48647C11.2816 7.75947 11.3124 8.02611 11.3719 8.28108C8.474 8.13553 5.90431 6.74711 4.18444 4.63736C3.88381 5.15153 3.71278 5.75064 3.71278 6.39017C3.71278 7.60014 4.32892 8.66775 5.26375 9.29236C4.69222 9.27325 4.15469 9.11603 3.68411 8.85469V8.89825C3.68411 10.5873 4.88664 11.997 6.48114 12.3178C6.189 12.3964 5.88094 12.44 5.56225 12.44C5.33706 12.44 5.11928 12.4177 4.90575 12.3752C5.34978 13.7615 6.63731 14.7696 8.16278 14.7972C6.96981 15.7321 5.46558 16.2876 3.83178 16.2876C3.55028 16.2876 3.273 16.2706 3 16.2398C4.54353 17.231 6.376 17.8089 8.3455 17.8089C14.7607 17.8089 18.2674 12.4952 18.2674 7.88697L18.2557 7.4355C18.9409 6.94681 19.5336 6.33281 20 5.63381Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)"></g>
  </svg>
);

export default function About() {
  return (
    <section className="absolute inset-0 z-0">
      <div className="container mx-auto h-screen px-4 flex justify-center items-center">
        <div className="mb-6 w-full lg:w-3/4 px-4">
          <div className="flex flex-wrap items-center bg-white rounded shadow overflow-hidden">
            <Image
              height={600}
              width={600}
              className="w-full lg:w-1/3 h-80 object-cover"
              src="https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Profile"
            />
            <div className="w-full lg:w-2/3 lg:pl-6 p-4">
              <h4 className="mb-2 text-2xl font-bold font-heading">
                Danny Bailey
              </h4>
              <p className="mb-4 text-gray-500 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae felis at ante bibendum mollis et et mauris.
              </p>
              <div className="flex">
                <Link className="mr-3" href="#">
                  <TwitterIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
