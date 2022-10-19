import React from 'react';
import coverImage from '../../assets/cover/coverImage2.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I want to introduce myself as a student at George Mason University, earning a bachelor's degree in computer science.
          My graduation date is for December 2022. I am now seeking full-time permanent opportunities with prestigious organizations which would provide me with additional training and development opportunities to complement my role and aid in my transition from student to career professional. Database Systems, Operating Systems, Analysis of Algorithms, Data structures, Software Engineering, Networking, Computer Systems, and George Washington Full Stack Developer Bootcamp made me understand the discipline of Computer Science.
          My working approach includes adapting to different work cultures, recognizing and addressing bottlenecks, and prioritizing. In addition to the previous, I believe in learning and sharing what I have learned with my colleagues. My life philosophy has been "Knowledge shared is knowledge gained." I strongly desire to learn and am adept at recognizing and addressing challenges.
          I am convinced that my experience and knowledge in Computer Science and solid technical abilities in programming languages will be a valuable asset and bring instant value.
        </p>
      </div>
    </section>
  );
}

export default About;
