import React from 'react'
import Card from './Card';

function Header() {

   const Cards = [
       {
           title: 'Web development',
           subtitle: 'Front-end Developer',
           desc: 'Every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. Responsive Web Design is used in all types of modern web development. ECMAScript 5 (JavaScript 5) is supported in all modern browsers.',
           image:'https://cdn.dribbble.com/users/1270214/screenshots/5646236/web-development-illustration.png'
       },
       {
        title: 'App Development',
        subtitle: 'App Developer',
        desc: 'App Development refers to the creation of computer applications for use on mobile devices such as tablets, smartphones and smart watches. Mobile device features such as cameras, motion and location awareness can be used to create unique and inventive mobile-only applications for things such as taxi and bike sharing.',
        image:'https://clipartart.com/images/app-development-clipart-5.png'
    },
    {
        title: 'Graphic Designing',
        subtitle: 'Designer',
        desc: 'Design is the process of creating visual content to communicate information/ messages to the masses. Considered to be a sub-set of Communication Design, Graphic Design is used to create visual content using elements such as photographs, colours, typography, illustrations, and icons',
        image:'https://livelikeyouarerich.com/wp-content/uploads/2014/09/graphicdesignFB.jpg'
    },
    {
        title: 'Digital Marketing',
        subtitle: 'Branding',
        desc: ' Digital marketing can be defined as the marketing method to sell/buy/promote/advertise a product(s) or service(s) online or over the internet and other digital platforms. The digital marketing process is a term with a broad meaning and covers various methods and processes to achieve digital marketing goals and objectives.',
        image:'https://highclickmedia.com/wp-content/uploads/2019/01/digital_marketing_process_infographic_2019.jpg'
    },
    {
        title: 'Data Scientist',
        subtitle: 'Machine Larning',
        desc: 'A person employed to analyze and interpret complex digital data, such as the usage statistics of a website, especially in order to assist a business in its decision-making.',
        image:'https://th.bing.com/th/id/OIP.WLiMpxyhWdO1R5q9zxz8uwHaEK?pid=ImgDet&rs=1'
    },
      
   ]


    return (
        <div className="container">
        {
            Cards.map((card,index) => (
                <Card title={card.title} desc={card.desc} subtitle={card.subtitle} image={card.image} />
            ))
        }
        </div>
    )
}

export default Header;
