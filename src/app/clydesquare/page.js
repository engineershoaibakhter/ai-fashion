"use client";

import CentralPlaceSydney from "@/app/components/CentralPlaceSydney";
import CommercialCarousel from "@/app/components/CommercialCarousel";
import CommercialLocation from "@/app/components/CommercialLocation";
import CommercialProjectInfo from "@/app/components/CommercialProjectInfo";
import CommercialProjectMoreInfo from "@/app/components/CommercialProjectMoreInfo";
import CommercialService from "@/app/components/CommercialService";
import Gallery from "@/app/components/Gallery";

const ClydeSquare = () => {
  let companyName = "Clyde Square";
  let companyDescription ="Unique mix of commercial, industrial lots, and boutique F&B precinct."
  let locationSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50200.73727275419!2d145.31236957781005!3d-38.15074655701739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61b347a44eff7%3A0x5045675218ce180!2sClyde%20VIC%203978!5e0!3m2!1sen!2sau!4v1721994097093!5m2!1sen!2sau";
  let contactUrl =
    "https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park";
  let locationMap = "https://maps.app.goo.gl/A82YTrgH8LW2Jfo67";
  let location = "Address Not Available";
  let pdfFile = "/pdf/master_plan_clydesquare.pdf";
  let developmentStatus="To Be Provided";
  let carouselImage = "/images/download6.jpg";
  let paragraph1 =
    "Clyde Square offers a unique mix of Commercial and Industrial lots. Offering Multiple QSR’s, Service Station with anchored supermarket. Site also offers a childcare, LFR lots with a boutique F&B precinct.";

  let paragraph2 =
    "Clyde Square will feature a service station anchored by a supermarket. This combination ensures that both fuel and grocery needs are conveniently met in one location, making it an ideal stop for busy commuters and local residents alike. The inclusion of a supermarket as an anchor tenant adds significant value to the development, drawing in consistent foot traffic and providing a reliable customer base for the other businesses on site.";
  let paragraph3 =
    "Clyde Square also addresses the needs of families by incorporating a childcare center into its design. This facility will provide a safe and nurturing environment for children, allowing parents to go about their daily activities with peace of mind. Additionally, the development includes large format retail (LFR) lots, which are perfect for businesses that require expansive space for their operations, such as furniture stores or hardware outlets.";

  let point1 =
    "Clyde Square is poised to become a vibrant hub, offering a unique mix of commercial and industrial lots that cater to a diverse range of business needs.";
  let point2 =
    "This development is strategically designed to provide essential services and amenities that enhance the daily lives of its visitors and residents.";
  let point3 =
    "One of the key attractions of Clyde Square is the variety of Quick Service Restaurants (QSRs), which offer a wide array of dining options for people on the go.";

  let point4 =
    "Adding to the appeal of Clyde Square is a boutique food and beverage precinct.";
  let point5 =
    "This area will offer a curated selection of dining establishments, providing a variety of culinary experiences in a more intimate and refined setting. ";
  let point6 =
    "Whether for a casual meal or a special occasion, this precinct will serve as a destination for food lovers and a social hub for the community.6";
  let point7 =
    "Together, these elements make Clyde Square a comprehensive and dynamic development that meets a wide range of commercial, industrial, and community needs.";


  return (
    <>
      <CommercialCarousel companyName={companyName} companyDescription={companyDescription} carouselImage={carouselImage} />
      <CommercialProjectInfo
        companyName={companyName}
        locationMap={locationMap}
        contactUrl={contactUrl}
        location={location}
        developmentStatus={developmentStatus}
        pdfFile={pdfFile}
        paragraph1={paragraph1}
        point1={point1}
        point2={point2}
        point3={point3}
      />
      {/* <CommercialService /> */}
      <CentralPlaceSydney companyName={companyName} paragraph2={paragraph2} paragraph3={paragraph3}/>
      <CommercialProjectMoreInfo point1={point1} point2={point2} point3={point3} point4={point4} point5={point5} point6={point6} point7={point7}/>
      <CommercialLocation locationSrc={locationSrc} companyName={companyName}  />
      <Gallery companyName={companyName} />
    </>
  );
};

export default ClydeSquare;
