import React, {  useState } from 'react';
// import AddonServices from './AddonServices/addonServices.jsx'
// import Banner from  './Banner/banner.jsx'
import ExpertResumeServices from './ExpertResumeServices/expertResumeServices.jsx'
// import ChooseServicesSlider from './ChooseServicesSlider/chooseServicesSlider.jsx'
// import EnquireNow from './EnquireNow/enquireNow.jsx'
// import FAQ from './FAQ/faq.jsx'
// import LikeCources from './LikeCourses/likeCourses.jsx'
// import OurCustomers from './OurCustomers/ourCustomers.jsx'
// import ProfessionalWriters from './ProfessionalWriters/professionalWriters.jsx'
// import RelatedArticles from './RelatedArticles/relatedArticles.jsx'
// import ResumeSlider from './ResumeSlider/resumeSlider.jsx'
// import ServiceLog from './ServiceLog/serviceLog.jsx'
// import SuccessStories from './SuccessStories/successStories.jsx'

export default function Home() {
    // const [buttonText, setButtonText] = useState("Click me, please");
  
    return (
        <div>
        <ExpertResumeServices/>
        {/* <Banner/> */}
        {/* <AddonServices/>
        <ChooseServicesSlider/>
        <EnquireNow/>
        <FAQ/>
        <LikeCources/>
        <OurCustomers/>
        <ProfessionalWriters/>
        <RelatedArticles/>
        <ResumeSlider/>
        <ServiceLog/>
        <SuccessStories/> */}
        </div>
    );
  }