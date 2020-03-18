import React, {  useState } from 'react';
import Header from  '../../Common/Header/header.jsx'
import Banner from  '../../Core/Home/Banner/banner.jsx'
import AddonServices from  '../../Core/Home/AddonServices/addonServices.jsx'
// import FAQ from  '../../Core/Home/FAQ/faq.jsx'
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
        <Header/>
        <Banner/>
        <AddonServices/>
        {/* <FAQ/> */}
        {/* 
        <ChooseServicesSlider/>
        <EnquireNow/>
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