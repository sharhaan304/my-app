export const navItems = [
    { name: "About Me", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "./mine.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for web development and ML modeling.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "./grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently stepped into a Generative AI project",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "./b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: " Real time Chatbot By using RAG",
      des: "Identify the customers query and deliver best solution by using RAG,LLM.",
      img: "./chatbot.svg",
      iconLists: ["/flask.svg", "/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
      link: "https://github.com/Hevb890/IFS_Project",
    },
    {
      id: 2,
      title: "Website for Supply chain Management",
      des: "A website for managing the supply chain of a company from their owm data pipeline.",
      img: "./suply.jpg",
      iconLists: ["/next.svg", "/tail.svg", "/mongodb-logo.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/Hevb890/IFS_Project",
    },
    {
      id: 3,
      title: "Python Sentiment Analysis",
      des: "by using NLTK and BERT to rating the reviews of luxury Hotels.",
      img: "./PSA.svg",
      iconLists: ["/pytorch.svg", "/pyt.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/sharhaan304/Python-Sentiment-anlaysis-using-NLTK-and-BERT",
    },
    {
      id: 4,
      title: "My Portfolio Website",
      des: "modern Portfolio website by using Next.js, framer motion and Tailwind CSS.",  
      img: "./PPW.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg", "/c.svg", "/fm.svg"],
      link: "https://github.com/sharhaan304/my-app",
    },
  ];
  

  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Freelance Graphic Designer",
      desc: "Creating banners, badges, Posters by using Adobe photoshop & Gimp.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: " Contract Mobile App Dev",
      desc: "Designed and developed mobile app for both iOS & Android platforms using Flutter.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Meme Creator",
      desc: "Managing a page with More than 20K+ followers in Facebook .",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "./git.svg",
      link: "https://github.com/sharhaan304"
    },
    {
      id: 2,
      img: "./twit.svg",
      link:"https://x.com/sharhaanmfm"
    },
    {
      id: 3,
      img: "./link.svg",
      link:"https://www.linkedin.com/in/mohamed-sharhaan-62b313247/ "
    },
  ];

  export const educationDetails = [
    {
      quote:
        "I completed my GCE Advanced Level (A/L) at T/R.K.M Hindu College, an institution known for its commitment to academic excellence and cultural values. During my time there, I specialized in subjects that challenged and expanded my intellectual boundaries, preparing me for the next steps in my academic and professional journey.",
      name: "T/R.K.M Sri Koneswara Hindu College",
      title: "G.C.E A/L -> Grade 12-13",
      logo: "./hinduite.svg", // Update the path to your logo image
    },
    {
      quote:
        "I am currently pursuing a Bachelor's degree in Artificial Intelligence at the University of Moratuwa, where I am gaining deep expertise in machine learning, data science, and intelligent systems.",
      name: "University of Moratuwa",
      title: "BSc(hons) in Artificial Intelligence -> Reading",
      logo: "./University_of_Moratuwa_logo.svg", // Update the path to your logo image
    },
    {
      quote:
        "I attended KCC for my primary and secondary education, which laid a solid foundation for my academic journey. I got 165 in Grade 5 Scholarship Examination  And also I got 9A in GCE O/L",
      name: "T/Kinniya Central College",
      title: "Grade 1-11, G.C.E O/L",
      logo: "./KKKKK.svg", // Update the path to your logo image
    },
  ];