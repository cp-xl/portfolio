/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/blue-background-light.jpg";

const imageAltText = "light blue background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a final-year Monash University student pursuing a Bachelor's degree in Information Technology. My passion lies in creating a safer digital space for everyone and leveraging my tech skills for community impact. Throughout my academic journey, my interests have expanded, ranging from cybersecurity to AI.\n\nRecently, I've developed a strong interest in exploring the world of startups, especially with AI, and have been learning from founders about their journeys in turning ideas into reality. I also love attending events that empower women in the tech industry, such as Girls In Tech and Grad Girls. Networking at these events has allowed me to meet many inspiring women and share experiences.\nI'm also a social butterfly in those settings, so if you ever see me around at an MSLA event, come say hi!";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python",
  "C++",
  "Web Development",
  "Problem solving",
  "Mobile App Development",
  "Software Security",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about using my tech skills for positive impact and drive innovation to solve local community problems.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
