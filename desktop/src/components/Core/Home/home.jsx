import React, {  useState } from 'react';
import Header from  '../../Common/Header/header.jsx'
import Banner from  '../../Core/Home/Banner/banner.jsx'
import AddonServices from  '../../Core/Home/AddonServices/addonServices.jsx'
import ExpertResumeServices from  '../../Core/Home/ExpertResumeServices/expertResumeServices.jsx'
import ChooseServicesSlider from './ChooseServicesSlider/chooseServicesSlider.jsx'
import ProfessionalResume from './ProfessionalResume/professionalResume.jsx'
import ProfessionalWriters from './ProfessionalWriters/professionalWriters.jsx'
import OurCustomers from './OurCustomers/ourCustomers.jsx'
import SuccessStories from './SuccessStories/successStories.jsx'
import LikeCourses from './LikeCourses/likeCourses.jsx'
import FAQ from  '../../Core/Home/FAQ/faq.jsx'
import RelatedArticles from './RelatedArticles/relatedArticles.jsx'
import EnquireNow from './EnquireNow/enquireNow.jsx'
import Footer from  '../../Common/Footer/footer.jsx'



// import ResumeSlider from './ResumeSlider/resumeSlider.jsx'
// import ServiceLog from './ServiceLog/serviceLog.jsx'


export default function Home() {
    // const [buttonText, setButtonText] = useState("Click me, please");
  
    return (
        <div>
        <Header/>
        <Banner/>
        <ExpertResumeServices/>
        <ChooseServicesSlider/>
        <ProfessionalResume/>
        <AddonServices/>
        <ProfessionalWriters/>
        <OurCustomers/>
        <SuccessStories/>
        <LikeCourses/>
        <FAQ/>
        <RelatedArticles/>
        <EnquireNow/>
        <Footer/>
        {/* 
        
        
        <ResumeSlider/>
        <ServiceLog/>
         */}
        </div>
    );
  }