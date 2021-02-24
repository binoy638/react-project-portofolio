import React from "react";
import AboutSection from "../components/AboutSection";
import ServivesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function Aboutus() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServivesSection />
      <FaqSection />
    </motion.div>
  );
}

export default Aboutus;
