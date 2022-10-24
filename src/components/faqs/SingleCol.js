import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion.custom(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion.custom(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);


export default function SingleCol() {
  const subheading = "FAQS"
  const heading = "You have Questions ?"
  const description = "And we have got answers to all of them."
  const faqs = [
    {
      question: "The dishes have to be taken out if there’s a power failure?",
      answer:
        "There’s no need for that as it continues washing from where it left"
    },
    {
      question: "How toxicis my dishwashing detergents?",
      answer:
        "In general, liquid detergent is one of the least toxic cleaning products. Automatic dishwasher detergents are much stronger. Those products could contain chlorine bleach and phosphates. Look for alternative products without these two ingredients."
    },
    {
      question: "What all factors I should consider while buying a washing machine?",
      answer:
        "Capacity, space requirement, type, budget & brand. These are the factors you need to consider while buying a washing machine. If you are on a limited budget (like me), then consider budget first and search for other factors within that budget."
    },

    {
      question: " Does your estimate include service call? ",
      answer:
        "Estimates that you get on our interactive website calculator already include service call and approximate labor charge but parts are not included."
    }, {
      question: "  What dishwasher cleaner should I use for monthly maintenance ?",
      answer: "We recommend Dishwasher Magic by Glisten."
    },
  ]

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container className="faq-container">
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading className="app-secondary-text">{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs?.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
    </Container>
  );
}; 