"use client"

import CentralPlaceSydney from "@/app/components/CentralPlaceSydney"
import CommercialCarousel from "@/app/components/CommercialCarousel"
import CommercialLocation from "@/app/components/CommercialLocation"
import CommercialProjectInfo from "@/app/components/CommercialProjectInfo"
import CommercialProjectMoreInfo from "@/app/components/CommercialProjectMoreInfo"
import CommercialService from "@/app/components/CommercialService"
import Gallery from "@/app/components/Gallery"


const Iramoo = () => {
  let companyName="Iramoo Waters";
  let companyDescription ="150+ residential lots, 2Ha green space, wetland, and walking tracks."
  let locationSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.268350411389!2d144.62685307528184!3d-37.71337852830657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6f38cf1c4aff5%3A0x7d9f6acd0ada7094!2sCentral%20Square!5e0!3m2!1sen!2s!4v1721211989146!5m2!1sen!2s";
  let contactUrl="https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park"
  let locationMap="https://maps.app.goo.gl/FPkmKLqfQGH87KtL8";
  let location="Address Not Available";
  let carouselImage = "/images/iroomocarousel.jpg";
  // let pdfFile="/"
  
  let developmentStatus="To Be Provided";

  let paragraph1 =
  "A well-balanced residential subdivision over 13.7Ha in growth area of Thornhill Park offers in access of 150 residential lots and over 2Ha of green space. The development have its own wetland and walking tracks. The masterplanning is underway and will be released shortly.";

let paragraph2 =
  "One of the standout features of this subdivision is its dedicated wetland, which will serve as a focal point for the community. The wetland will not only enhance the aesthetic appeal of the area but also support local wildlife and promote biodiversity. Additionally, the development will feature a network of walking tracks, encouraging residents to embrace an active and healthy lifestyle. These pathways will wind through the green spaces and wetland, offering picturesque routes for leisurely strolls and outdoor activities.";
let paragraph3 =
  "The masterplanning of this residential subdivision is currently underway, with careful attention to detail being a top priority. The layout of the lots and green spaces is being meticulously designed to maximize both functionality and beauty. The aim is to create a community that is not only visually appealing but also highly livable, with easy access to amenities and a strong sense of connectivity. Once completed, the masterplan will be released, providing prospective buyers with a clear vision of the future neighborhood.";

let point1 =
  "In the rapidly growing area of Thornhill Park, a well-balanced residential subdivision is taking shape over 13.7 hectares.";
let point2 =
  "This thoughtfully planned development will offer more than 150 residential lots, providing ample opportunities for new homeowners to join a thriving community.";
let point3 =
  "The inclusion of over 2 hectares of green space ensures that residents will enjoy a harmonious blend of urban living and natural beauty.";

let point4 =
  "This development in Thornhill Park is poised to become a sought-after address for those looking to build their dream homes in a vibrant and well-planned community.";
let point5 =
  "With its combination of ample residential lots, extensive green spaces, and dedicated amenities, it promises to offer a high quality of life for its residents.";
let point6 =
  "As the area continues to grow and evolve, this subdivision will play a key role in shaping the future of Thornhill Park.";
let point7 =
  "Attracting families and individuals who value a balanced and enriching lifestyle.";



  return (
   <>
   <CommercialCarousel companyName={companyName} companyDescription={companyDescription} carouselImage={carouselImage}/>
   <CommercialProjectInfo
        companyName={companyName}
        locationMap={locationMap}
        contactUrl={contactUrl}
        location={location}
        developmentStatus={developmentStatus}
        // pdfFile={pdfFile}
        paragraph1={paragraph1}
        point1={point1}
        point2={point2}
        point3={point3}
      />
      {/* <CommercialService /> */}
    <CentralPlaceSydney companyName={companyName} paragraph2={paragraph2} paragraph3={paragraph3}/>
    <CommercialProjectMoreInfo point1={point1} point2={point2} point3={point3} point4={point4} point5={point5} point6={point6} point7={point7}/>
   <CommercialLocation locationSrc={locationSrc} companyName={companyName}/>
   <Gallery companyName={companyName}/>
   </>
  )
}

export default Iramoo