const About = ({ title, description = "description is this and that" }) => {
  // const a = 1 + 2; //JS logic
  return (
    <>
      About Page
      {title},{description}
    </>
  ); // HTML with JS ko result
};

export default About;
