"use client";

import CentralPlaceSydney from "@/app/components/CentralPlaceSydney";
import CommercialCarousel from "@/app/components/CommercialCarousel";
import CommercialLocation from "@/app/components/CommercialLocation";
import CommercialProjectInfo from "@/app/components/CommercialProjectInfo";
import CommercialProjectMoreInfo from "@/app/components/CommercialProjectMoreInfo";
import CommercialService from "@/app/components/CommercialService";
import Gallery from "@/app/components/Gallery";

const thornhill = () => {
  let companyName = "Central Square";
  let companyDescription ="Local Activity Centre with diverse tenancies and ample parking."
  let locationSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.268350411389!2d144.62685307528184!3d-37.71337852830657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6f38cf1c4aff5%3A0x7d9f6acd0ada7094!2sCentral%20Square!5e0!3m2!1sen!2s!4v1721211989146!5m2!1sen!2s";
  let contactUrl =
    "https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park";
  let carouselImage = "/images/download6.jpg";
  let locationMap = "https://maps.app.goo.gl/FPkmKLqfQGH87KtL8";
  let location = "2 Sadie Av, Thornhill Park VIC 3335, Australia";
  let pdfFile = "/pdf/master_plan_centralsquare.pdf";
  let developmentStatus="DA Status To Be Completed";
  let paragraph1 =
    "Nestled in the growing suburb of Thornhill Park, Central Square is a Local Activity Centre with a mix of tenancies to service local community. Anchored by a Large IGA+ Liquor, the centre offers Health offerings like, Medical Centre, Anytime Fitness Gym, Discount Chemist and Dentist.  ";
  let paragraph2 =
    "The centre boasts a carefully curated mix of specialty shops designed to meet various lifestyle needs. Among these are a Barber, Eyebrow shop, Laundry, Real Estate office, and a Finance Broker. These businesses provide a range of services that are essential for daily living, making Central Square a convenient one-stop destination for residents.";
  let paragraph3 =
    "To satisfy the local food aspirations, Central Square offers a diverse array of dining options. These include popular fast-food outlets like Subway and Fish & Chips, a refreshing Juice Bar, a Pizza shop, and a fusion Bar cum Indian Sub-continent cuisine restaurant. This variety ensures that there is something to cater to every taste, making the centre a vibrant hub for food enthusiasts.";
  let point1 =
    "A carefully picked mix of speciality shops include Barber, Eyebrow shop, Laundry, Real Estate and a Finance Broker.";
  let point2 =
    "To seal the local food aspirations, we have Subway, Fish & Chips, Juice Bar, Pizza shop and a fusion Bar cum Indian Sub-continent cuisine restaurant. 120+ car parks on site provides ample parking space for the centre users.";
  let point3 =
    "Centre is designed and almost fully leased out to cater for Community everyday needs";
  let point4="Ample parking is another key feature of Central Square, with over 120 car parks available on site."
  let point5="This ensures that visitors have convenient access to the centre without the hassle of finding parking. "
  let point6="Designed with the community's everyday needs in mind."
  let point7="Central Square is almost fully leased out, reflecting its success in attracting a wide range of tenants to serve the local population."
    return (
    <>
      <CommercialCarousel companyName={companyName} companyDescription={companyDescription} carouselImage={carouselImage} />
      <CommercialProjectInfo
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
      <CommercialLocation locationSrc={locationSrc} companyName={companyName} />
      <Gallery companyName={companyName} />
    </>
  );
};

export default thornhill;
