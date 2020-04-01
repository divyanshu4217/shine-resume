import React, {  useState } from 'react';
import MenuNav from  '../../Common/MenuNav/menuNav.jsx'
import Header from  '../../Common/Header/header.jsx'
import Banner from  './Banner/banner.jsx'
import ExpertResumeServices from './ExpertResumeServices/expertResumeServices.jsx'
import ChooseServicesSlider from './ChooseServicesSlider/chooseServicesSlider.jsx'
import ProfessionalResume from './ProfessionalResume/professionalResume.jsx'
import AddonServices from './AddonServices/addonServices.jsx'
import ProfessionalWriters from './ProfessionalWriters/professionalWriters.jsx'
import OurCustomers from './OurCustomers/ourCustomers.jsx'
import SuccessStories from './SuccessStories/successStories.jsx'
import LikeCourses from './LikeCourses/likeCourses.jsx'
import FAQ from './FAQ/faq.jsx'
import RelatedArticles from './RelatedArticles/relatedArticles.jsx'
import EnquireNow from './EnquireNow/enquireNow.jsx'
import Footer from  '../../Common/Footer/footer.jsx'


export default function Home() {
    // const [buttonText, setButtonText] = useState("Click me, please");
  
    return (
        <div>
        <MenuNav/>
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
        </div>
    );
  }