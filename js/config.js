// Edit your personal details and portfolio content in this file.
const SITE_CONFIG = {
  name: "Alexander Jung",
  initials: "AJ",
  location: "California",
  email: "alexanderjung417@gmail.com", // Replace with your professional email.
  githubProfile: "https://github.com/alexjung417",
  linkedin: "", // Add your LinkedIn URL, or leave blank to hide it.
  about: "I'm an aspiring data analyst and business intelligence developer interested in transforming raw data into meaningful insights. My work combines analytical problem-solving, data visualization, and machine learning. I value clear communication and building work that helps people better understand the information in front of them.",
  skills: ["Python", "R", "SQL", "Tableau", "Data Visualization", "Machine Learning", "Statistical Analysis", "Excel"],
  projects: [{
    number: "01",
    category: "TEAM CAPSTONE · MACHINE LEARNING · SIGNAL PROCESSING",
    title: "Automated Gray Whale Vocalization Detection",
    description: "A team data science capstone exploring machine learning methods to detect and classify gray whale vocalizations in passive acoustic monitoring recordings. The project evaluated audio features through signal processing and models including Random Forest and KNN.",
    tools: ["R", "AWS S3","Machine Learning", "Audio Analysis", "Signal Processing", "Random Forest", "KNN"],
    link: "https://github.com/alexjung417/Data-Science-Capstone-2025",
    linkLabel: "View project on GitHub"
  }
  // ,{
  //   number: "02",
  //   category: "MACHINE LEARNING · BUSINESS ANALYSIS",
  //   title: "IOWA ALCOHOL SALES INVESTIGATION",
  //   description: "A team data science capstone exploring machine learning methods to detect and classify gray whale vocalizations in passive acoustic monitoring recordings. The project evaluated audio features through signal processing and models including Random Forest and KNN.",
  //   tools: ["Python", "Machine Learning", "Linear Regression", "Web Scraping"],
  //   link: "" https://github.com/alexjung417/Iowa-Demographics,
  //   linkLabel: "View project on GitHub"
  // }
  ],
  dashboards: [
    {title:"AI Dashboard",description:"An interactive dashboard presenting an exploration of AI-related data.",embedUrl:"https://public.tableau.com/views/AIDashboard3/AIDashBoard2?:showVizHome=no&:embed=true",publicUrl:"https://public.tableau.com/views/AIDashboard3/AIDashBoard2"},
    {title:"Room for Carbon: Airbnb & Carbon Mapping",description:"An interactive Tableau visualization exploring the relationship between Airbnb rentals and carbon-mapping data.",embedUrl:"https://public.tableau.com/views/RoomForCarbonAirbnbandCarbonMappingDataAnalysis/RoomForCarbonV2?:showVizHome=no&:embed=true",publicUrl:"https://public.tableau.com/views/RoomForCarbonAirbnbandCarbonMappingDataAnalysis/RoomForCarbonV2"}
    
  ]
};