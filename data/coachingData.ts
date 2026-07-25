export const INSTITUTE_INFO = {
  name: "Moonlight Coaching Centre",
  tagline: "Strong Foundation, Bright Future!",
  welcomeText: "WHERE LEARNING MEETS SUCCESS",
  subtitle: "Building strong concepts, improving skills and shaping brighter futures for students from Nursery to Class 12.",
  director: "Mrs. Anil Jha",
  address: "Parsauni, Sitamarhi, Bihar – 843316",
  phone: "9953016615",
  email: "info@moonlightcoaching.in",
  timingWeekdays: "Mon - Sat : 6:00 AM - 8:00 PM",
  timingSunday: "Sunday : 8:00 AM - 2:00 PM",
  admissionSession: "2025-26",
};

export const COURSES = [
  {
    id: "nursery-9th",
    category: "Foundation",
    title: "NURSERY TO 9TH",
    description: "Strong foundation in all subjects with concept based learning.",
    colorTheme: "green",
    bgClass: "bg-cardPastel-greenBg border-cardPastel-greenBorder",
    badgeClass: "bg-emerald-100 text-emerald-800",
    buttonClass: "bg-[#066E38] hover:bg-emerald-800 text-white",
    iconName: "BookOpen",
    subjects: ["Mathematics", "Science", "English", "Hindi", "Social Studies", "EVS"],
    features: [
      "Concept-based daily learning",
      "Weekly diagnostic tests",
      "Personalized attention",
      "Handwritten study materials"
    ]
  },
  {
    id: "10th-board",
    category: "Board Preparation",
    title: "10TH (BOARD)",
    description: "Complete preparation for Board Exams with regular tests & doubt sessions.",
    colorTheme: "blue",
    bgClass: "bg-cardPastel-blueBg border-cardPastel-blueBorder",
    badgeClass: "bg-blue-100 text-blue-800",
    buttonClass: "bg-[#0B192C] hover:bg-blue-900 text-white",
    iconName: "GraduationCap",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Social Science", "Sanskrit/Hindi"],
    features: [
      "Targeted Board exam strategy",
      "10+ Previous years paper practice",
      "Special weekend doubt clearing sessions",
      "OML-based mock tests & progress tracking"
    ]
  },
  {
    id: "11th-12th",
    category: "Higher Secondary",
    title: "11TH & 12TH",
    description: "Science & Commerce Streams with expert faculty guidance.",
    colorTheme: "yellow",
    bgClass: "bg-cardPastel-yellowBg border-cardPastel-yellowBorder",
    badgeClass: "bg-amber-100 text-amber-800",
    buttonClass: "bg-[#F59E0B] hover:bg-amber-600 text-slate-900 font-semibold",
    iconName: "FileText",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Accountancy", "Economics"],
    features: [
      "Deep conceptual clarity for Boards & Entrance",
      "Regular unit tests and answer writing drills",
      "Expert guidance by senior educators",
      "Modern formula sheets and notes"
    ]
  },
  {
    id: "competitive-exams",
    category: "Competitive Exams",
    title: "COMPETITIVE EXAMS",
    description: "JEE, NEET, BPSC, SSC, Bank and other competitive exams preparation.",
    colorTheme: "purple",
    bgClass: "bg-cardPastel-purpleBg border-cardPastel-purpleBorder",
    badgeClass: "bg-purple-100 text-purple-800",
    buttonClass: "bg-purple-700 hover:bg-purple-800 text-white",
    iconName: "Target",
    subjects: ["Quantitative Aptitude", "Reasoning", "General Studies", "Current Affairs", "Science & Tech"],
    features: [
      "Pattern-oriented shortcut techniques",
      "Comprehensive test series & ranking analysis",
      "Dedicated current affairs magazines",
      "Library study access included"
    ]
  }
];

export const STATS = [
  { icon: "Trophy", value: "500+", label: "Successful Students" },
  { icon: "UserCheck", value: "25+", label: "Expert Faculty" },
  { icon: "ClipboardList", value: "50+", label: "Courses Offered" },
  { icon: "Star", value: "95%", label: "Success Rate" },
  { icon: "Smile", value: "1000+", label: "Happy Parents" },
];

export const WHY_CHOOSE_US = [
  {
    icon: "UserCheck",
    title: "Expert Faculty",
    description: "Well qualified and experienced teachers dedicated to student success."
  },
  {
    icon: "Lightbulb",
    title: "Concept Based Learning",
    description: "Focus on building strong fundamental concepts rather than rote learning."
  },
  {
    icon: "ClipboardCheck",
    title: "Regular Test & Analysis",
    description: "Weekly tests and detailed performance analysis provided to parents."
  },
  {
    icon: "Users",
    title: "Personal Attention",
    description: "Small batch sizes ensuring personal attention to every student."
  },
  {
    icon: "ShieldCheck",
    title: "Safe & Conducive Environment",
    description: "Peaceful and secure learning environment equipped with modern facilities."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ritik Kumar",
    classTag: "Class 10th",
    text: "Moonlight Coaching Centre has helped me a lot in improving my concepts. The teachers are very supportive and regular tests really help.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Anjali Kumari",
    classTag: "Class 12th",
    text: "The library is amazing! It has all the reference books I need for my preparation. The environment is perfect for study.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Saurabh Jha",
    classTag: "Class 11th",
    text: "Best coaching in Sitamarhi! I improved my confidence and scores in a very short time thanks to continuous guidance.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 4,
    name: "Pooja Sharma",
    classTag: "Class 9th",
    text: "Clear concept teaching method. Math and Science became my favorite subjects after joining Moonlight Coaching Centre.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200"
  }
];

export const LIBRARY_FEATURES = [
  "Wide collection of books & reference materials",
  "Peaceful reading environment with silent zones",
  "Newspapers, magazines & digital resources",
  "Separate Reading Room for Boys & Girls",
  "Library membership for all enrolled students"
];

export const FACULTY_MEMBERS = [
  {
    name: "Mrs. Anil Jha",
    role: "Director & Senior Mathematics Educator",
    experience: "18+ Years Experience",
    qualification: "M.Sc. Mathematics, B.Ed.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Rajesh Kumar Jha",
    role: "Head of Physics Dept.",
    experience: "12+ Years Experience",
    qualification: "M.Tech Physics",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. S. K. Verma",
    role: "Senior Chemistry & Biology Mentor",
    experience: "15+ Years Experience",
    qualification: "Ph.D. Organic Chemistry",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Priya Roy",
    role: "English & Communication Specialist",
    experience: "8+ Years Experience",
    qualification: "M.A. English Literature",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400"
  }
];

export const FAQS = [
  {
    q: "What classes are taught at Moonlight Coaching Centre?",
    a: "We offer complete coaching for students from Nursery to Class 12 (Science & Commerce), as well as foundation courses and competitive exam prep (JEE, NEET, BPSC, SSC)."
  },
  {
    q: "Where is Moonlight Coaching Centre located?",
    a: "We are located at Parsauni, Sitamarhi, Bihar – 843316."
  },
  {
    q: "What are the coaching and library timings?",
    a: "Our coaching and reading hall are open Monday to Saturday from 6:00 AM to 8:00 PM, and on Sundays from 8:00 AM to 2:00 PM."
  },
  {
    q: "Does the library have separate spaces for male and female students?",
    a: "Yes, our modern library has dedicated, comfortable, and peaceful separate reading spaces for boys and girls."
  },
  {
    q: "How can I enroll my child for the 2025-26 academic session?",
    a: "You can call us directly at 9953016615, fill out our online Admission Enquiry Form on the website, or visit our Parsauni campus."
  }
];
