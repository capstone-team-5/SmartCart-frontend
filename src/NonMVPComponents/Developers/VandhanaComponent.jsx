//This component will talk about Vandhana
import { Link } from "react-router-dom";
const VandhanaComponent = () => {
  return (
    <div>
      <p>
        Hi, I'm Vandhana, and I'm a front-end software developer with a passion
        for coding, gardening, and traveling. Ever since I was introduced to
        programming in college, I've been fascinated by how code can bring ideas
        to life and make a positive impact on people's lives.
        <br /> <br />
        One of my favorite ways to practice coding is by solving CodeWars and
        LeetCode problems, which challenge me to think creatively and improve my
        problem-solving skills. I also love watching coding videos on YouTube,
        which help me stay up-to-date on the latest tools and techniques in the
        industry.
        <br /> <br />
        Currently, I'm a student at Pursuit, where I'm learning software
        development and working with a talented group of peers. Outside of
        coding, I'm a proud mom and love spending time with my kids, whether
        we're exploring new places or just hanging out at home.
        <br /> <br />
        In my free time, I also enjoy tending to my garden and trying out new
        recipes in the kitchen. I find that these hobbies help me unwind and
        recharge my creativity, so that I can bring my best self to my work as a
        software developer.
        <br /> <br />
        If you're looking for a developer who is dedicated, and passionate about
        coding, I would love to work with you. Let's collaborate to bring your
        software development project to life!
        <br /> <br />
        Check out my{" "}
        <Link to="https://www.linkedin.com/in/vandhanamohan/" target="_blank">
          {" "}
          LinkedIn
        </Link>{" "}
        and{" "}
        <Link to="https://github.com/Vandhana-Mohan" target="_blank">
          {" "}
          GitHub{" "}
        </Link>{" "}
        to see what I've been working on.
      </p>
    </div>
  );
};

export default VandhanaComponent;