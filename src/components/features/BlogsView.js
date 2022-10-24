import React, { useState } from "react";
import tw from "twin.macro";
import { Table } from 'reactstrap';
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

export default function BlogsView(props) {

  const [learnMore, setLearnMore] = useState(false)
  const history = useHistory();
  return (
    <Container className="blogs-list-container container">
      <TwoColumn className="mt-3">
        <ImageColumn>
          <Image
            onClick={() => {
              history.push(`/blog/${props?.dataObject.title.replace(/\s/g, "-").toLowerCase()}-${props?.dataObject.id}`);
            }} css={props.imageCss} src={props.imageSrc} imageBorder={props.imageBorder} imageShadow={props.imageShadow} imageRounded={props.imageRounded} />
          {props.imageDecoratorBlob && <DecoratorBlob css={props.imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={props.textOnLeft}>
          <TextContent>

            <Heading onClick={() => {
              history.push(`/blog/${props.dataObject.title.replace(/\s/g, "-").toLowerCase()}-${props.dataObject.id}`);
            }}
            >{props.heading}</Heading>
            {learnMore ? <>
              {props.dataObject.table?.map((item) => (
                <Table key={Math.random()}  >
                  <tbody>
                    <tr>
                      <th scope="row">{item.item}</th>
                      <td className="text-right">{item.value}</td>
                    </tr>
                  </tbody>
                </Table>
              ))}
              <Description>{props.dataObject.description?.replace(".", ".")} ...</Description>

              <PrimaryButton onClick={() => { setLearnMore(!learnMore) }} buttonRounded={props.buttonRounded} >
                Less
              </PrimaryButton>
            </> : <>
                <Description>{props?.description}...</Description>

                <PrimaryButton
                  onClick={() => {
                    history.push(`/blog/${props?.dataObject.title.replace(/\s/g, "-").toLowerCase()}-${props.dataObject.id}`);
                  }}
                  buttonRounded={props?.buttonRounded}
                >
                  {props.primaryButtonText}
                </PrimaryButton>
              </>}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
