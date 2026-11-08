// Edit your personal details and portfolio content in this file.
const SITE_CONFIG = {
  name: "Alexander Jung",
  initials: "AJ",
  location: "California",
  email: "alexanderjung417@gmail.com", // Replace with your professional email.
  githubProfile: "https://github.com/alexjung417",
  linkedin: "", //"https://www.linkedin.com/in/alexander-jung-111791237/"
  about: "I am an aspiring data analyst and business intelligence developer interested in transforming raw data into meaningful insights. I have earned a B.S. in Statistics with a Data Science minor from California Polytechnic State University. My work combines analytical problem-solving, data visualization, and machine learning to provide valuable, actionable insights. Clear communication is the most important metric in order for people to better understand the information in front of them.",
  skills: ["Python", "R", "SQL", "Tableau","AWS","Statistical Analysis", "Machine Learning", "Data Visualization", "Data Analysis", "Excel"],
  projects: [{
    number: "01",
    category: "TEAM CAPSTONE · MACHINE LEARNING · SIGNAL PROCESSING",
    title: "Automated Gray Whale Vocalization Detection",
    description: "A team data science capstone exploring machine learning methods to detect and classify gray whale vocalizations in passive acoustic monitoring recordings. The project evaluated audio features through signal processing and models including Random Forest and KNN. Assembles all components into an R package so non technical users can interact with models.",
    tools: ["R", "AWS S3","Machine Learning", "Audio Analysis", "Signal Processing", "Random Forest", "KNN"],
    link: "https://github.com/alexjung417/Data-Science-Capstone-2025",
    linkLabel: "View project on GitHub"
  }
  ,{
    number: "02",
    category: "MACHINE LEARNING · BUSINESS ANALYSIS · PREDICTION",
    title: "Iowa Alcohol Sales Investigation",
    description: "A project investigating an Iowa Alcohol dataset to understand sales based on products and locations. The project evaluated sales and demographic features to make predictions based on a ridge regression model.",
    tools: ["Python", "Machine Learning", "Linear Regression", "Web Scraping"],
    link: "https://github.com/alexjung417/Iowa-Alcohol-Project",
    linkLabel: "View project on GitHub"
  }
  ],
  dashboards: [
    {title:"AI Dashboard",description:"An interactive dashboard presenting an exploration of AI-related data.", pdfUrl:"dashboards/AI DashBoard (2).pdf",publicUrl:"https://public.tableau.com/views/AIDashboard3/AIDashBoard2"},
    {title:"Room for Carbon: Airbnb & Carbon Mapping",description:"An interactive Tableau visualization exploring the relationship between Airbnb rentals and carbon-mapping data.",pdfUrl:"dashboards/Room For Carbon V2.pdf",publicUrl:"https://public.tableau.com/views/RoomForCarbonAirbnbandCarbonMappingDataAnalysis/RoomForCarbonV2"}
    
  ]
};