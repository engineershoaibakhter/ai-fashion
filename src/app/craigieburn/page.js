"use client";

import react,{useEffect,useState} from 'react';
import CentralPlaceSydney from "@/app/components/CentralPlaceSydney";
import CommercialCarousel from "@/app/components/CommercialCarousel";
import CommercialLocation from "@/app/components/CommercialLocation";
import CommercialProjectInfo from "@/app/components/CommercialProjectInfo";
import CommercialProjectMoreInfo from "@/app/components/CommercialProjectMoreInfo";
import CommercialService from "@/app/components/CommercialService";
import Gallery from "@/app/components/Gallery";

const Craigieburn = () => {
  let companyName = "Aston Square";
  let companyDescription ="Upcoming neighbourhood centre with childcare, gym, and specialty shops."
  let locationSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.1505565089255!2d144.88961027527503!3d-37.59861552177166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65141017b6dbb%3A0xe9c14ec789587fe6!2s179%20Elevation%20Bvd%2C%20Craigieburn%20VIC%203064%2C%20Australia!5e0!3m2!1sen!2s!4v1721211562391!5m2!1sen!2s";
  let locationMap = "https://maps.app.goo.gl/4hmfPqf3X3AWCSAf9";
  let contactUrl =
    "https://www.pspproperty.com.au/property?property_id=1241993/179-elevation-boulevard-craigieburn";
  let location = "179 Elevation Bvd, Craigieburn VIC 3064, Australia";
  let pdfFile = "/pdf/master_plan_astonsquare.pdf";
  let developmentStatus="Construction Underway Late 2024";
  let paragraph1 =
    "This upcoming Neighbourhood activity centre is situated centrally in Aston Estate. Aston Square will have a childcare, Swim school, Gym, anchored by an IGA+ Liquor supermarket. Adding to above, there will be a hand-picked mix of speciality shops and F&B tenancies.";
  
  let paragraph2 =
    "Aston Square will be anchored by an IGA+ Liquor supermarket, ensuring that residents have access to a wide range of groceries and everyday essentials. Complementing this anchor store will be a hand-picked mix of speciality shops and food and beverage tenancies. This carefully curated selection aims to provide a variety of shopping and dining options, enhancing the convenience and appeal of Aston Square for the local community.";
  let paragraph3 =
    "In addition to retail and dining, Aston Square will house NDIS (National Disability Insurance Scheme) accommodations, demonstrating a commitment to inclusivity and support for people with disabilities. The inclusion of these houses ensures that individuals with special needs have access to suitable living environments within a thriving community. Moreover, the site will feature some light industrial lots, contributing to local employment opportunities and economic growth.";
  
  let point1 =
    "Site will also have NDIS houses and some light industrial lots. Construction to commence late 2024.";
  let point2 =
    "Aston Square is set to provide essential services and amenities that cater to the diverse needs of its residents.";
  let point3 =
    "One of the standout features of this development is its childcare centre and swim school, which will offer convenient and high-quality care and recreational options for families with young children.";
  
  let point4 =
    "Construction of Aston Square is scheduled to commence in late 2024.";
  let point5 =
    "Marking the beginning of an exciting new chapter for Aston Estate.";
  let point6 = "As this development takes shape, it promises to become a central meeting point and service hub for residents";
  let point7 =
    "Offering a blend of essential amenities, retail experiences, and community support services.";

    const [carouselImage, setCarouselImage] = useState("/images/astonCarousel.jpg");

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) {
          setCarouselImage("/images/commercial/aston.jpg");
        } else {
          setCarouselImage("/images/astonCarousel.jpg");
        }
      };

      window.addEventListener('resize', handleResize);
    handleResize(); // Set the initial image

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <CommercialCarousel companyName={companyName} companyDescription={companyDescription} carouselImage={carouselImage}/>
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
      <CommercialLocation locationSrc={locationSrc} companyName={companyName} />
      <Gallery companyName={companyName} />
    </>
  );
};

export default Craigieburn;
