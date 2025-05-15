"use client"

import CentralPlaceSydney from "@/app/components/CentralPlaceSydney"
import CommercialCarousel from "@/app/components/CommercialCarousel"
import CommercialLocation from "@/app/components/CommercialLocation"
import CommercialProjectInfo from "@/app/components/CommercialProjectInfo"
import CommercialProjectMoreInfo from "@/app/components/CommercialProjectMoreInfo"
import CommercialService from "@/app/components/CommercialService"
import Gallery from "@/app/components/Gallery"


const Orrong_Tower = () => {
  let companyName="Orrong Tower";
  let companyDescription ="Boutique architecturally designed apartment block in Toorak coming soon."
  let locationSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12603.290020566874!2d144.99845572794013!3d-37.84104094931178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64270233922c7%3A0x5045675218cd9b0!2sToorak%20VIC%203142!5e0!3m2!1sen!2sau!4v1721994170708!5m2!1sen!2sau";
  let contactUrl="https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park"
  let locationMap="hhttps://maps.app.goo.gl/gwnDaJo3V4E2k5Xt7";
  let location="Address Not Available";
  // let pdfFile="/pdf/wollert.pdf"
  let carouselImage = "/images/download6.jpg";
  let developmentStatus="To Be Provided";
  let paragraph1 =
  "Spectacularly designed Apartment Block in the heart of Toorak. A boutique block of architecturally designed Apartments is coming soon.";

let paragraph2 =
  "The apartments will showcase cutting-edge design elements, seamlessly integrating indoor and outdoor living spaces. Expansive balconies and terraces will offer breathtaking views of Toorak's lush surroundings, creating a serene retreat in the middle of the bustling city. High-quality materials and finishes will be used throughout, reflecting the commitment to excellence and attention to detail that defines this project. Each apartment will be a masterpiece of contemporary design, tailored to meet the needs and desires of discerning homeowners.";
let paragraph3 =
  "This boutique apartment block will also boast a range of exclusive amenities designed to enhance the residents' lifestyle. From state-of-the-art fitness centers to beautifully landscaped communal gardens, every aspect of the development will cater to the residents' well-being and leisure. Secure parking, advanced security systems, and personalized concierge services will provide peace of mind and convenience, making everyday living effortless and enjoyable. The development aims to create a close-knit community where residents can enjoy a sense of belonging and camaraderie.";

let point1 =
  "In the heart of Toorak, a spectacularly designed apartment block is set to redefine luxury living.";
let point2 =
  "This boutique development will feature architecturally designed apartments that blend modern elegance with timeless sophistication.";
let point3 =
  "Situated in one of Melbourne's most prestigious suburbs, the upcoming apartment block promises an exclusive lifestyle with unmatched convenience and style.";

let point4 =
  "Located in Toorak, one of Melbourne's most sought-after suburbs, the apartment block offers easy access to a host of premium amenities.";
let point5 =
  "Residents will be within walking distance of high-end boutiques, gourmet restaurants, and charming cafes.";
let point6 =
  "Excellent transport links will ensure quick and convenient connections to the rest of Melbourne, while prestigious schools and parks will be just a stone's throw away.";
let point7 =
  "This new development promises to deliver a lifestyle of unparalleled luxury and sophistication, making it a coveted address for those seeking the best in urban living.";



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

export default Orrong_Tower