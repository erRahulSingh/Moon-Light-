// Bundler re-evaluation trigger for logo assets
import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Linking,
  TextInput,
  Alert,
  Image,
  Modal,
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'courses' | 'library' | 'admission' | 'contact'>('home');

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: false });
    }
  }, [subScreen, activeTab]);

  // Sub-screen State
  const [subScreen, setSubScreen] = useState<'none' | 'about' | 'faculty' | 'gallery' | 'library_info' | 'contact_info' | 'faq' | 'disclaimer' | 'privacy' | 'terms' | 'edit_profile' | 'change_password' | 'notifications' | 'help_support' | 'view_progress' | 'premium_request' | 'homework' | 'attendance'>('none');

  // Authentication Module States
  const [authScreen, setAuthScreen] = useState<'splash' | 'onboarding' | 'login' | 'register' | 'otp' | 'forgot_password' | 'reset_password' | 'authenticated'>('splash');

  // Homework Module States
  const [hwFilter, setHwFilter] = useState('All');
  const [selectedHw, setSelectedHw] = useState<any | null>(null);
  const [hwFileAttached, setHwFileAttached] = useState('');
  const [hwStudentNote, setHwStudentNote] = useState('');
  const [submittedHwIds, setSubmittedHwIds] = useState<number[]>([4]);

  // Attendance Module States
  const [attMonth, setAttMonth] = useState('July 2026');
  const [attFilter, setAttFilter] = useState('All');

  // Notification Center States
  const [notifFilter, setNotifFilter] = useState('All');
  const [readNotifIds, setReadNotifIds] = useState<number[]>([]);
  const [onboardingIndex, setOnboardingIndex] = useState(0);
  const [loginEmailOrPhone, setLoginEmailOrPhone] = useState('rahulkumar@gmail.com');
  const [loginPassword, setLoginPassword] = useState('123456');
  const [loginMode, setLoginMode] = useState<'password' | 'otp'>('password');
  const [rememberMe, setRememberMe] = useState(true);
  const [showLoginPass, setShowLoginPass] = useState(false);

  // Register Form States
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regClass, setRegClass] = useState('Class 12 (JEE Prep)');
  const [regGoal, setRegGoal] = useState('JEE Main & Advanced');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [regAgreeTerms, setRegAgreeTerms] = useState(true);

  // OTP Verification States
  const [otpDigits, setOtpDigits] = useState(['5', '8', '2', '9']);
  const [otpTimer, setOtpTimer] = useState(30);
  const [otpTargetRecipient, setOtpTargetRecipient] = useState('+91 7870391245');

  // Forgot / Reset Password States
  const [forgotInput, setForgotInput] = useState('');
  const [resetNewPass, setResetNewPass] = useState('');
  const [resetConfirmPass, setResetConfirmPass] = useState('');

  // Auto Splash Screen Timer Effect
  useEffect(() => {
    if (authScreen === 'splash') {
      const timer = setTimeout(() => {
        setAuthScreen('onboarding');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [authScreen]);

  // OTP Resend Countdown Timer Effect
  useEffect(() => {
    let interval: any = null;
    if (authScreen === 'otp' && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [authScreen, otpTimer]);

  // User Profile States
  const [userName, setUserName] = useState('Rahul Kumar');
  const [userEmail, setUserEmail] = useState('rahulkumar@gmail.com');
  const [userPhone, setUserPhone] = useState('7870391245');
  const [userClass, setUserClass] = useState('Class 12 (JEE Prep)');
  const [userAvatar, setUserAvatar] = useState('👨‍🎓');
  const [userPassword, setUserPassword] = useState('123456');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme style variables for dynamic styling support
  const themeContainerStyle = isDarkMode ? { backgroundColor: '#051329' } : { backgroundColor: '#F8FAFC' };
  const themeCardStyle = isDarkMode ? { backgroundColor: '#0D1E36', borderColor: '#1E293B' } : { backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' };
  const themeTextStyle = isDarkMode ? { color: '#F8FAFC' } : { color: '#0F172A' };
  const themeSubTextStyle = isDarkMode ? { color: '#94A3B8' } : { color: '#64748B' };
  const themeBorderColor = isDarkMode ? '#1E293B' : '#E2E8F0';

  // Profile Sub-screens Form States
  const [editNameField, setEditNameField] = useState('Rahul Kumar');
  const [editEmailField, setEditEmailField] = useState('rahulkumar@gmail.com');
  const [editPhoneField, setEditPhoneField] = useState('7870391245');
  const [editClassField, setEditClassField] = useState('Class 12 (JEE Prep)');
  const [editAvatarField, setEditAvatarField] = useState('👨‍🎓');
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);

  // Password Sub-screen States
  const [currentPassField, setCurrentPassField] = useState('');
  const [newPassField, setNewPassField] = useState('');
  const [confirmPassField, setConfirmPassField] = useState('');
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  // Notification Preferences States
  const [notifyStudyReminders, setNotifyStudyReminders] = useState(true);
  const [notifyMockResults, setNotifyMockResults] = useState(true);
  const [notifyFeeAlerts, setNotifyFeeAlerts] = useState(false);
  const [notifyCourseAnnouncements, setNotifyCourseAnnouncements] = useState(true);
  const [notifyEbookUpdates, setNotifyEbookUpdates] = useState(false);

  // FAQ State
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [faqActiveCategory, setFaqActiveCategory] = useState('All FAQs');
  const [faqOpenId, setFaqOpenId] = useState<number | null>(1);

  // Help & Support Sub-screen States
  const [supportTopic, setSupportTopic] = useState('General Inquiry');
  const [supportMessage, setSupportMessage] = useState('');
  const [supportSubmitted, setSupportSubmitted] = useState(false);
  const [supportTicketId, setSupportTicketId] = useState('');
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  // Library Sub-screen Book Search State
  const [bookSearchQuery, setBookSearchQuery] = useState('');

  // Gallery Sub-screen Lightbox State
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<any>(null);
  const [galleryFilter, setGalleryFilter] = useState('All');

  // Global Search Modal State
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  // Contact Sub-screen Form State
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Policy States
  const [disclaimerActiveSection, setDisclaimerActiveSection] = useState(1);
  const [privacyActiveSection, setPrivacyActiveSection] = useState(1);
  const [termsActiveSection, setTermsActiveSection] = useState(1);
  const [termsShowAll, setTermsShowAll] = useState(false);

  // Admission Form State
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');

  // Premium Course & Batch Counselor Form State
  const [prefSegment, setPrefSegment] = useState('Class 11th - 12th (Boards + Entrance)');
  const [prefGoal, setPrefGoal] = useState('NEET Medical Prep');
  const [prefMode, setPrefMode] = useState('🏫 Offline Classroom');
  const [prefTiming, setPrefTiming] = useState('🌅 Morning (7 AM - 11 AM)');
  const [prefStudentName, setPrefStudentName] = useState('');
  const [prefPhone, setPrefPhone] = useState('');
  const [prefCity, setPrefCity] = useState('Sitamarhi');
  const [prefSubmitted, setPrefSubmitted] = useState(false);

  // Student Dashboard Interactive States
  const [completedHomework, setCompletedHomework] = useState<number[]>([]);
  const toggleHomework = (id: number) => {
    if (completedHomework.includes(id)) {
      setCompletedHomework(completedHomework.filter((item) => item !== id));
    } else {
      setCompletedHomework([...completedHomework, id]);
    }
  };

  const handleCall = () => {
    Linking.openURL('tel:7870391245');
  };

  const handleFormSubmit = () => {
    if (!studentName || !phone) {
      Alert.alert('Incomplete Form', 'Please enter Student Name and Mobile Number.');
      return;
    }
    Alert.alert(
      'Enquiry Submitted!',
      `Thank you ${studentName}. Moonlight Coaching Centre team will contact you shortly at ${phone}.`
    );
    setStudentName('');
    setParentName('');
    setPhone('');
  };

  const handleContactSubmit = () => {
    if (!contactName || !contactPhone || !contactEmail || !contactSubject || !contactMessage) {
      Alert.alert('Incomplete Form', 'Please fill in all the required fields.');
      return;
    }
    setContactSubmitted(true);
    Alert.alert('Message Sent!', 'Thank you. Moonlight Coaching Centre team will get back to you shortly.');
  };

  // ================= SUB-SCREEN RENDER FUNCTIONS =================

  const renderAboutSubScreen = () => {
    const journeyTimeline = [
      { year: "2015", title: "Founding Year", icon: "🚩", desc: "Moonlight Coaching Centre was founded with a vision to provide quality education." },
      { year: "2016-17", title: "Faculty Expansion", icon: "👥", desc: "Expanded our faculty team and introduced new courses for better learning." },
      { year: "2018-19", title: "Modern Facilities", icon: "📖", desc: "Established a well-equipped library and modern classrooms for students." },
      { year: "2020-21", title: "Excellence Milestone", icon: "📈", desc: "Achieved excellent results with 95%+ success rate in board examinations." },
      { year: "2022-23", title: "Competitive Success", icon: "🏆", desc: "Hundreds of students qualified in competitive exams and achieved their dreams." },
      { year: "2024 & Beyond", title: "Brighter Future", icon: "🚀", desc: "Continuing our journey towards excellence and building a brighter future for all." }
    ];

    const lifeAtCoaching = [
      { title: "Classroom", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=400" },
      { title: "Library", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=400" },
      { title: "Physics Lab", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400" },
      { title: "Computer Lab", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" },
      { title: "Events & Activities", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400" },
      { title: "Extra Curricular", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400" }
    ];

    return (
      <View style={styles.subScreenContent}>
        {/* Hero Card */}
        <View style={styles.heroCard}>
          <Text style={styles.heroTitleWhite}>About Us</Text>
          <Text style={styles.heroSubtextText}>
            Moonlight Coaching Centre is dedicated to providing quality education and shaping the future of students.
          </Text>
          <View style={styles.badgeRowGrid}>
            <View style={styles.miniPillBadge}><Text style={styles.miniPillBadgeText}>🎓 Quality Education</Text></View>
            <View style={styles.miniPillBadge}><Text style={styles.miniPillBadgeText}>👨‍🏫 Expert Faculty</Text></View>
            <View style={styles.miniPillBadge}><Text style={styles.miniPillBadgeText}>🎯 Student Focused</Text></View>
            <View style={styles.miniPillBadge}><Text style={styles.miniPillBadgeText}>🏆 Better Results</Text></View>
          </View>
        </View>

        {/* Building Image */}
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=900" }}
            style={styles.fullWidthImage}
            resizeMode="cover"
          />
          <Text style={styles.imageCaption}>Moonlight Coaching Centre Building</Text>
        </View>

        {/* Director's Desk */}
        <View style={styles.cardContainer}>
          <Text style={styles.cardHeading}>From the Director's Desk</Text>
          <View style={styles.directorDeskRow}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500" }}
              style={styles.directorPic}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.quoteMark}>“</Text>
              <Text style={styles.quoteText}>
                At Moonlight Coaching Centre, we believe every student is unique and has the potential to achieve excellence. Our mission is to provide the right guidance, quality education and a supportive environment to help students reach their goals and build a successful future.
              </Text>
              <Text style={styles.directorName}>Mr. Anil Jha</Text>
              <Text style={styles.directorRole}>Director</Text>
            </View>
          </View>
        </View>

        {/* Vision & Mission */}
        <View style={styles.splitCardsRow}>
          <View style={[styles.splitCard, { borderColor: '#DBEAFE' }]}>
            <Text style={{ fontSize: 24 }}>👁️</Text>
            <Text style={styles.splitCardTitle}>Our Vision</Text>
            <Text style={styles.splitCardDesc}>To be a leading educational institute that empowers students with knowledge, confidence and skills to excel in all spheres of life.</Text>
          </View>
          <View style={[styles.splitCard, { borderColor: '#FDF2F8' }]}>
            <Text style={{ fontSize: 24 }}>🚀</Text>
            <Text style={styles.splitCardTitle}>Our Mission</Text>
            <Text style={styles.splitCardDesc}>To provide quality education with concept based learning, experienced faculty, regular practice and continuous progress monitoring.</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsBarNavy}>
          <View style={styles.statsBarItem}>
            <Text style={styles.statsBarText}>500+ Students</Text>
          </View>
          <View style={styles.statsBarDivider} />
          <View style={styles.statsBarItem}>
            <Text style={styles.statsBarText}>25+ Faculty</Text>
          </View>
          <View style={styles.statsBarDivider} />
          <View style={styles.statsBarItem}>
            <Text style={styles.statsBarText}>95% Success</Text>
          </View>
        </View>

        {/* Timeline */}
        <Text style={styles.sectionHeading}>Our Journey</Text>
        <View style={styles.timelineList}>
          {journeyTimeline.map((item, idx) => (
            <View key={idx} style={styles.timelineCard}>
              <View style={styles.timelineIconBox}>
                <Text style={{ fontSize: 16 }}>{item.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.timelineYear}>{item.year} - {item.title}</Text>
                <Text style={styles.timelineDesc}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Life at Coaching Gallery */}
        <Text style={styles.sectionHeading}>Life at Moonlight Centre</Text>
        <View style={styles.galleryGrid}>
          {lifeAtCoaching.map((item, idx) => (
            <View key={idx} style={styles.galleryGridCard}>
              <Image source={{ uri: item.image }} style={styles.galleryGridCardImage} />
              <Text style={styles.galleryGridCardText}>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  const renderFacultySubScreen = () => {
    const facultyMembers = [
      { 
        name: "Mr. Anil Jha", 
        role: "Director & Math Expert", 
        subject: "Mathematics", 
        education: "M.Sc (Math), BHU", 
        achievement: "Mentored 500+ JEE Crackers", 
        experience: "15+ Years", 
        desc: "Specialist in Advanced Calculus, Algebra & IIT-JEE preparation tracks.", 
        icon: "√x", 
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
      },
      { 
        name: "Mrs. Priya Kumari", 
        role: "Physics Head", 
        subject: "Physics", 
        education: "M.Tech, IIT Kharagpur", 
        achievement: "Ex-FIITJEE Faculty", 
        experience: "12+ Years", 
        desc: "Expert in Mechanics, Electrodynamics & concept building for competitive exams.", 
        icon: "⚛️", 
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
      },
      { 
        name: "Mr. Rahul Singh", 
        role: "Chemistry Specialist", 
        subject: "Chemistry", 
        education: "M.Sc (Chemistry), DU", 
        achievement: "Author of Prep Books", 
        experience: "10+ Years", 
        desc: "Passionate about Organic & Inorganic Chemistry mechanisms.", 
        icon: "🧪", 
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400" 
      },
      { 
        name: "Mrs. Neha Verma", 
        role: "English Expert", 
        subject: "English", 
        education: "MA (English), JNU", 
        achievement: "TOEFL Trainer", 
        experience: "9+ Years", 
        desc: "Focuses on grammar, reading comprehension, and spoken communication skills.", 
        icon: "📖", 
        image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400" 
      },
      { 
        name: "Mr. Amit Kumar", 
        role: "Accounts Mentor", 
        subject: "Accounts", 
        education: "CA, B.Com (Hons)", 
        achievement: "Top State Ranker", 
        experience: "8+ Years", 
        desc: "Simplifies financial accounting, business studies, and ledger basics.", 
        icon: "📊", 
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
      },
      { 
        name: "Mrs. Shalini Mishra", 
        role: "CS Coordinator", 
        subject: "Comp Sci", 
        education: "MCA, Gold Medalist", 
        achievement: "Ex-Software Engineer", 
        experience: "7+ Years", 
        desc: "Teaches coding, Python, Java, database management, and CS modules.", 
        icon: "💻", 
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" 
      },
      { 
        name: "Mr. Deepak Sharma", 
        role: "Biology Specialist", 
        subject: "Biology", 
        education: "Ph.D (Life Sci), AMU", 
        achievement: "NEET Exam Coach", 
        experience: "8+ Years", 
        desc: "Brings cell biology, anatomy, and genetics to life with interactive diagrams.", 
        icon: "🧬", 
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" 
      },
      { 
        name: "Mrs. Kavita Jha", 
        role: "Social Science Expert", 
        subject: "History/Civ", 
        education: "MA (History), BHU", 
        achievement: "UPSC Aspirant Mentor", 
        experience: "9+ Years", 
        desc: "Specialist in Indian history, geography, civic rules, and board curricula.", 
        icon: "🌐", 
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" 
      }
    ];

    return (
      <View style={styles.subScreenContent}>
        <Text style={styles.subSectionIntro}>
          Meet the experienced and dedicated educators who are committed to your success at Moonlight Coaching Centre.
        </Text>

        <View style={styles.facultyGridContainer}>
          {facultyMembers.map((fac, idx) => (
            <View key={idx} style={styles.facultyProfileCardMini}>
              {/* Avatar section */}
              <View style={styles.facultyCardTopMini}>
                <Image source={{ uri: fac.image }} style={styles.facultyCardAvatarMini} />
                <View style={styles.facultySubjectBadgeCircleMini}>
                  <Text style={styles.facultySubjectBadgeTextMini}>{fac.icon}</Text>
                </View>
              </View>

              {/* Text core details */}
              <Text style={styles.facultyCardNameMini} numberOfLines={1}>{fac.name}</Text>
              
              {/* Role Badge */}
              <View style={styles.facultyRoleBadge}>
                <Text style={styles.facultyRoleBadgeText}>{fac.subject}</Text>
              </View>

              <Text style={styles.facultyCardEduText}>{fac.education}</Text>
              <Text style={styles.facultyCardExpMini}>{fac.experience} Exp</Text>

              {/* Achievement tag */}
              <View style={styles.facultyAchievementTag}>
                <Text style={styles.facultyAchievementTagText}>🏆 {fac.achievement}</Text>
              </View>

              {/* Divider */}
              <View style={styles.facultyCardDivider} />

              {/* Description */}
              <Text style={styles.facultyCardDescMini} numberOfLines={4}>{fac.desc}</Text>

              {/* Actions */}
              <View style={styles.facultyActionButtonsRow}>
                <TouchableOpacity 
                  style={styles.facultyActionBtnMini} 
                  onPress={() => Linking.openURL(`mailto:info@moonlightcoaching.in?subject=Doubt with ${fac.name}`)}
                >
                  <Text style={styles.facultyActionBtnText}>✉️ Email</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.facultyActionBtnMini, { backgroundColor: '#F59E0B' }]} 
                  onPress={() => Alert.alert('Book Doubt Slot', `Successfully booked a 1-on-1 doubt clearing session with ${fac.name}! Meeting link sent via SMS.`)}
                >
                  <Text style={[styles.facultyActionBtnText, { color: '#051329' }]}>📅 Slot</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  };

  const renderGallerySubScreen = () => {
    const galleryItems = [
      { id: 1, title: "Modern Classroom Session", category: "Classrooms", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800", desc: "Clean, air-conditioned hybrid classrooms equipped with projection screens and digital boards for visual learning." },
      { id: 2, title: "Central Library Reading Hall", category: "Library", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800", desc: "A massive central library stocked with reference books, competitive syllabus materials, and a silent study zone." },
      { id: 3, title: "Group Study & Doubt Clearance", category: "Classrooms", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", desc: "Interactive session classrooms where mentors solve doubts individually with students in off-class hours." },
      { id: 4, title: "Annual Student Award Function", category: "Events", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800", desc: "Rewarding student excellence! Photos from our annual ceremony recognizing board rankers and JEE/NEET clearers." },
      { id: 5, title: "Parsauni Campus Front View", category: "Campus", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", desc: "The main academic campus building located at Parsauni, offering modern infrastructure and clean classrooms." },
      { id: 6, title: "Board Exam Practice Test Session", category: "Classrooms", image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800", desc: "Students practicing under simulated exam environments to master time management for real tests." },
      { id: 7, title: "Smart Computer Lab", category: "Campus", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", desc: "High-speed internet computer center for research, online test practice, and computer science projects." },
      { id: 8, title: "Science Chemistry Lab", category: "Campus", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800", desc: "Fully equipped Chemistry lab where students perform practical chemistry experiments safely." },
      { id: 9, title: "Sports Day Ceremony", category: "Events", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", desc: "Encouraging a healthy lifestyle! Students taking part in inter-coaching sports tournaments." },
      { id: 10, title: "Silent Study Cabins", category: "Library", image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800", desc: "Specially partitioned study cubicles providing distraction-free reading environments for senior students." }
    ];

    const categories = ["All", "Campus", "Classrooms", "Library", "Events"];
    const filtered = galleryFilter === "All" ? galleryItems : galleryItems.filter(item => item.category === galleryFilter);

    const getCategoryCount = (cat: string) => {
      if (cat === "All") return galleryItems.length;
      return galleryItems.filter(item => item.category === cat).length;
    };

    return (
      <View style={styles.subScreenContent}>
        {/* Horizontal scroll for categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galleryFilterScroll}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.galleryFilterPill, galleryFilter === cat && styles.galleryFilterPillActive]}
              onPress={() => setGalleryFilter(cat)}
            >
              <Text style={[styles.galleryFilterPillText, galleryFilter === cat && styles.galleryFilterPillTextActive]}>
                {cat} ({getCategoryCount(cat)})
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Gallery items grid */}
        <View style={styles.galleryFlexGrid}>
          {filtered.map((item) => (
            <TouchableOpacity key={item.id} style={styles.galleryItemCardLarge} onPress={() => setSelectedLightboxImage(item)}>
              <Image source={{ uri: item.image }} style={styles.galleryItemCardImage} />
              <View style={styles.galleryItemCardTextOverlay}>
                <Text style={styles.galleryItemCardCategory}>{item.category.toUpperCase()}</Text>
                <Text style={styles.galleryItemCardTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Lightbox Modal */}
        {selectedLightboxImage && (
          <Modal transparent visible={!!selectedLightboxImage} animationType="fade" onRequestClose={() => setSelectedLightboxImage(null)}>
            <View style={styles.lightboxOverlay}>
              <TouchableOpacity style={styles.lightboxCloseBtn} onPress={() => setSelectedLightboxImage(null)}>
                <Text style={styles.lightboxCloseText}>✕ Close</Text>
              </TouchableOpacity>
              <Image source={{ uri: selectedLightboxImage.image }} style={styles.lightboxImage} resizeMode="contain" />
              <View style={styles.lightboxCaptionContainer}>
                <Text style={styles.lightboxCategory}>{selectedLightboxImage.category.toUpperCase()}</Text>
                <Text style={styles.lightboxTitle}>{selectedLightboxImage.title}</Text>
                <Text style={styles.lightboxDesc}>{selectedLightboxImage.desc}</Text>
              </View>
            </View>
          </Modal>
        )}
      </View>
    );
  };

  const renderLibrarySubScreen = () => {
    const libraryResources = [
      { title: "Academic Books", desc: "Extensive collection of NCERT, reference books and subject specific books.", icon: "📖" },
      { title: "Competitive Exams", desc: "Books for JEE, NEET, BPSC, SSC, Banking, Railway and other exams.", icon: "🔖" },
      { title: "Reference Materials", desc: "Dictionaries, encyclopedias, handbooks and quick reference guides.", icon: "📄" },
      { title: "Magazines & Journals", desc: "Latest magazines, newspapers and journals to keep students informed.", icon: "📰" },
      { title: "Digital Library", desc: "Access e-books, online journals and digital resources anytime, anywhere.", icon: "💻" },
      { title: "Audio Visual Resources", desc: "Educational videos, lectures and audio materials for better understanding.", icon: "🎧" }
    ];

    const environmentCards = [
      { title: "Spacious Reading Hall", desc: "Large and peaceful reading hall with ample seating.", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=400" },
      { title: "Individual Study Zone", desc: "Quiet zones for focused and independent study.", image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=400" },
      { title: "Group Discussion Area", desc: "Collaborative spaces for group study and discussions.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" },
      { title: "Digital Access", desc: "Computers with internet access for online learning.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400" }
    ];

    const libraryRules = [
      { icon: "🔇", title: "Absolute Silence", desc: "Maintain complete peace inside the main reading room." },
      { icon: "📵", title: "Mobile Restriction", desc: "Keep mobile phones switched off or on absolute silent mode." },
      { icon: "🚻", title: "Separate Seating", desc: "Designated separate reading sections for Boys and Girls." },
      { icon: "📚", title: "Asset Care", desc: "Handle library books, reference manuals, and catalogs with care." },
      { icon: "⏱️", title: "Return Deadlines", desc: "Return borrowed syllabus textbooks within the 14-day limit." }
    ];

    const mockBooks = [
      { title: "Concepts of Physics (Vol 1)", author: "H.C. Verma", subject: "Physics", shelf: "Shelf A-1" },
      { title: "Concepts of Physics (Vol 2)", author: "H.C. Verma", subject: "Physics", shelf: "Shelf A-2" },
      { title: "NCERT Mathematics Class 12", author: "NCERT", subject: "Mathematics", shelf: "Shelf B-3" },
      { title: "NCERT Chemistry Class 12", author: "NCERT", subject: "Chemistry", shelf: "Shelf C-1" },
      { title: "Problems in General Physics", author: "I.E. Irodov", subject: "Physics", shelf: "Shelf A-4" },
      { title: "Organic Chemistry", author: "Morrison & Boyd", subject: "Chemistry", shelf: "Shelf C-3" },
      { title: "Objective Biology for NEET", author: "Dr. Ali", subject: "Biology", shelf: "Shelf D-2" },
      { title: "TS Grewal Book Keeping", author: "T.S. Grewal", subject: "Accounts", shelf: "Shelf E-1" }
    ];

    const searchedBooks = bookSearchQuery.trim() === "" 
      ? [] 
      : mockBooks.filter(b => 
          b.title.toLowerCase().includes(bookSearchQuery.toLowerCase()) ||
          b.author.toLowerCase().includes(bookSearchQuery.toLowerCase()) ||
          b.subject.toLowerCase().includes(bookSearchQuery.toLowerCase())
        );

    return (
      <View style={styles.subScreenContent}>
        {/* Timings Card */}
        <View style={styles.libraryTimingsCard}>
          <Text style={styles.libraryTimingsCardTitle}>⏰ Library Schedule</Text>
          <View style={styles.scheduleRowContainer}>
            <View style={styles.scheduleRowItem}>
              <Text style={styles.scheduleDayLabel}>Weekdays (Mon-Sat)</Text>
              <Text style={styles.scheduleTimeVal}>06:00 AM - 08:00 PM</Text>
            </View>
            <View style={styles.scheduleRowDivider} />
            <View style={styles.scheduleRowItem}>
              <Text style={styles.scheduleDayLabel}>Sunday</Text>
              <Text style={styles.scheduleTimeVal}>08:00 AM - 02:00 PM</Text>
            </View>
          </View>
        </View>

        {/* Catalog Search Simulator */}
        <Text style={styles.sectionHeading}>Search Library Books</Text>
        <View style={styles.formCard}>
          <TextInput
            style={styles.input}
            placeholder="Search by Title, Author or Subject (e.g. Physics)"
            value={bookSearchQuery}
            onChangeText={setBookSearchQuery}
          />
          {bookSearchQuery.trim() !== "" && (
            <View style={styles.bookSearchResultsList}>
              <Text style={styles.bookSearchResultsCountText}>{searchedBooks.length} Books Found</Text>
              {searchedBooks.map((book, idx) => (
                <View key={idx} style={styles.bookSearchItemCard}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.bookSearchItemTitle}>{book.title}</Text>
                    <Text style={styles.bookSearchItemAuthor}>by {book.author} • {book.subject}</Text>
                  </View>
                  <View style={styles.bookSearchShelfBadge}>
                    <Text style={styles.bookSearchShelfText}>{book.shelf}</Text>
                  </View>
                </View>
              ))}
              {searchedBooks.length === 0 && (
                <Text style={styles.bookNoResultsText}>No books found matching "{bookSearchQuery}"</Text>
              )}
            </View>
          )}
        </View>

        {/* Resources list */}
        <Text style={styles.sectionHeading}>Library Resources</Text>
        <View style={styles.libraryResourcesList}>
          {libraryResources.map((item, idx) => (
            <View key={idx} style={styles.libraryResourceItemCard}>
              <View style={styles.libraryResourceIconCircle}>
                <Text style={{ fontSize: 20 }}>{item.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.libraryResourceTitle}>{item.title}</Text>
                <Text style={styles.libraryResourceDesc}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Study Environments */}
        <Text style={styles.sectionHeading}>Study Environment</Text>
        <View style={styles.galleryGrid}>
          {environmentCards.map((env, idx) => (
            <View key={idx} style={styles.galleryGridCard}>
              <Image source={{ uri: env.image }} style={styles.galleryGridCardImage} />
              <Text style={styles.galleryGridCardText}>{env.title}</Text>
            </View>
          ))}
        </View>

        {/* Library Rules */}
        <Text style={styles.sectionHeading}>Library Rules & Discipline</Text>
        <View style={styles.libraryRulesModernList}>
          {libraryRules.map((rule, idx) => (
            <View key={idx} style={styles.libraryRuleModernCard}>
              <View style={styles.libraryRuleIconCircle}>
                <Text style={{ fontSize: 18 }}>{rule.icon}</Text>
              </View>
              <View style={{ flex: 1, gap: 1 }}>
                <Text style={styles.libraryRuleModernTitle}>{rule.title}</Text>
                <Text style={styles.libraryRuleModernDesc}>{rule.desc}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  };

  const renderContactSubScreen = () => {
    return (
      <View style={styles.subScreenContent}>
        {/* Contact Info Cards */}
        <View style={styles.contactDetailsGrid}>
          <View style={styles.contactDetailCard}>
            <Text style={{ fontSize: 24 }}>📍</Text>
            <Text style={styles.contactDetailCardTitle}>Address</Text>
            <Text style={styles.contactDetailCardDesc}>Parsauni, Sitamarhi, Bihar - 843316</Text>
          </View>
          <View style={styles.contactDetailCard}>
            <Text style={{ fontSize: 24 }}>📞</Text>
            <Text style={styles.contactDetailCardTitle}>Call Us</Text>
            <Text style={styles.contactDetailCardDesc}>+91 78703 91245</Text>
          </View>
          <View style={styles.contactDetailCard}>
            <Text style={{ fontSize: 24 }}>✉️</Text>
            <Text style={styles.contactDetailCardTitle}>Email Us</Text>
            <Text style={styles.contactDetailCardDesc}>info@moonlightcoaching.in</Text>
          </View>
          <View style={styles.contactDetailCard}>
            <Text style={{ fontSize: 24 }}>⏰</Text>
            <Text style={styles.contactDetailCardTitle}>Timings</Text>
            <Text style={styles.contactDetailCardDesc}>Mon-Sat: 6AM - 8PM{"\n"}Sunday: 8AM - 2PM</Text>
          </View>
        </View>

        {/* Map Simulator */}
        <Text style={styles.sectionHeading}>Coaching Map Location</Text>
        <View style={styles.mapSimulatorCard}>
          {/* Simulated Map Visual */}
          <View style={styles.mapVisualContainer}>
            {/* Roads */}
            <View style={styles.mapVisualRoadH} />
            <View style={styles.mapVisualRoadV} />
            {/* Nearby Landmarks */}
            <View style={[styles.mapLandmarkCircle, { top: 30, left: 20 }]}><Text style={styles.mapLandmarkText}>🏫 Govt High School</Text></View>
            <View style={[styles.mapLandmarkCircle, { bottom: 25, right: 15 }]}><Text style={styles.mapLandmarkText}>🏥 Primary Health Care</Text></View>
            <View style={[styles.mapLandmarkCircle, { top: 90, right: 60 }]}><Text style={styles.mapLandmarkText}>🚆 Canal Crossing</Text></View>
            {/* Moonlight coaching center pin */}
            <View style={styles.mapCoachingPin}>
              <View style={styles.mapPulsingDot} />
              <Text style={{ fontSize: 24, zIndex: 10 }}>📍</Text>
              <Text style={styles.mapPinLabel}>Moonlight Centre</Text>
            </View>
          </View>

          <View style={styles.mapSimulatorPinContainer}>
            <Text style={styles.mapSimulatorTitle}>Moonlight Coaching Centre</Text>
            <Text style={styles.mapSimulatorSub}>Parsauni, Sitamarhi, Bihar - 843316</Text>
          </View>
        </View>

        {/* Travel and Transit Guides */}
        <Text style={styles.sectionHeading}>Travel & Transit Guide</Text>
        <View style={styles.travelGuideContainer}>
          <View style={styles.travelGuideCard}>
            <Text style={{ fontSize: 16 }}>🚆</Text>
            <View style={{ flex: 1, gap: 1 }}>
              <Text style={styles.travelGuideTitle}>From Sitamarhi Jn (12 KM)</Text>
              <Text style={styles.travelGuideDesc}>Take an auto-rickshaw heading towards Bairgania. Ask to drop off at Parsauni Chowk. (Travel time: 25 mins)</Text>
            </View>
          </View>
          <View style={styles.travelGuideCard}>
            <Text style={{ fontSize: 16 }}>🚌</Text>
            <View style={{ flex: 1, gap: 1 }}>
              <Text style={styles.travelGuideTitle}>From Parsauni Chowk (0.5 KM)</Text>
              <Text style={styles.travelGuideDesc}>We are a 5-minute walk from the main Chowk on the Canal Road. E-Rickshaws are readily available. (Travel time: 2 mins)</Text>
            </View>
          </View>
        </View>

        {/* Contact form */}
        <Text style={styles.sectionHeading}>Send Us a Message</Text>
        {contactSubmitted ? (
          <View style={styles.contactSuccessCard}>
            <Text style={{ fontSize: 28, textAlign: 'center' }}>✅</Text>
            <Text style={styles.contactSuccessTitle}>Message Sent Successfully!</Text>
            <Text style={styles.contactSuccessDesc}>Thank you. Moonlight Coaching Centre team will get back to you shortly.</Text>
            <TouchableOpacity style={styles.contactResetBtn} onPress={() => {
              setContactSubmitted(false);
              setContactName('');
              setContactPhone('');
              setContactEmail('');
              setContactSubject('');
              setContactMessage('');
            }}>
              <Text style={styles.contactResetBtnText}>Send Another Message</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.formCard}>
            <Text style={styles.label}>Your Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Rahul Kumar"
              value={contactName}
              onChangeText={setContactName}
            />

            <Text style={styles.label}>Your Phone *</Text>
            <TextInput
              style={styles.input}
              placeholder="7870391245"
              keyboardType="phone-pad"
              value={contactPhone}
              onChangeText={setContactPhone}
            />

            <Text style={styles.label}>Your Email *</Text>
            <TextInput
              style={styles.input}
              placeholder="rahul@gmail.com"
              keyboardType="email-address"
              value={contactEmail}
              onChangeText={setContactEmail}
            />

            <Text style={styles.label}>Subject *</Text>
            <TextInput
              style={styles.input}
              placeholder="Subject of inquiry"
              value={contactSubject}
              onChangeText={setContactSubject}
            />

            <Text style={styles.label}>Your Message *</Text>
            <TextInput
              style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
              placeholder="Write your message here..."
              multiline
              numberOfLines={4}
              value={contactMessage}
              onChangeText={setContactMessage}
            />

            <TouchableOpacity style={styles.submitBtn} onPress={handleContactSubmit}>
              <Text style={styles.submitBtnText}>Send Message ➔</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  const renderFAQSubScreen = () => {
    const faqs = [
      { id: 1, category: "Admissions & Fees", question: "What is the procedure for Session 2025-26?", answer: "Admissions can be taken either by visiting our Parsauni campus or filling out the online Admission Enquiry form on our website/app. After form submission, our academic counselor will contact you for a brief interaction and document verification." },
      { id: 2, category: "Admissions & Fees", question: "Is there any scholarship or fee waiver test?", answer: "Yes! Moonlight Coaching Centre conducts periodic Merit Scholarship Tests. High-scoring students can receive up to 50% waiver on tuition fees for board exam preparation and competitive courses." },
      { id: 3, category: "Courses & Academics", question: "Which classes and streams are taught?", answer: "We offer specialized coaching for Class 6 to 10 (All Subjects), Class 11 & 12 (Science, Commerce, and Arts streams), as well as competitive examination preparation for JEE Main/Advanced, NEET, BPSC, and SSC." },
      { id: 4, category: "Courses & Academics", question: "What is the average batch size for classes?", answer: "We maintain small batch sizes of 25 to 35 students per class to ensure every student receives individual attention, doubt resolution, and personalized feedback from faculty members." },
      { id: 5, category: "Library & Facilities", question: "What are the Central Library hours and rules?", answer: "The Moonlight Central Library is open Monday through Saturday from 6:00 AM to 8:00 PM, and Sundays from 8:00 AM to 2:00 PM. It features over 12,000 reference books, daily newspapers, and quiet study zones." },
      { id: 6, category: "Library & Facilities", question: "Are there separate reading zones for boys and girls?", answer: "Yes, we have strictly designated, disciplined, and separate reading zones for Boys and Girls in our reading hall to ensure a comfortable and focused study environment." },
      { id: 7, category: "Exams & Results", question: "How frequent are unit tests and mock examinations?", answer: "We conduct Weekly Progress Tests every Sunday and Full-Length Mock Exams at the end of each topic module. Report cards and performance analytics are shared directly with parents via SMS and parent meetings." },
      { id: 8, category: "Exams & Results", question: "Do you offer specialized test series?", answer: "Yes, we provide specialized Board Booster Test Series for Class 10 & 12 board aspirants, as well as full-length test series with detailed solutions for JEE, NEET, and BPSC candidates." },
      { id: 9, category: "Admissions & Fees", question: "Can a student take a free demo class?", answer: "Absolutely! Prospective students are welcome to attend up to 2 Free Demo Classes in any ongoing batch to experience our teaching methodology and faculty interaction before confirming admission." },
      { id: 10, category: "Library & Facilities", question: "Is hostel facility available for outstation students?", answer: "Yes, limited hostel seats are available near our Parsauni campus with nutritious food, 24/7 security, and supervised evening study hours." }
    ];

    const categories = ["All FAQs", "Admissions & Fees", "Courses & Academics", "Library & Facilities", "Exams & Results"];

    const filtered = faqs.filter(faq => {
      const matchCat = faqActiveCategory === "All FAQs" || faq.category === faqActiveCategory;
      const matchSearch = faq.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(faqSearchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    return (
      <View style={styles.subScreenContent}>
        {/* Search */}
        <View style={styles.searchBarRow}>
          <View style={styles.searchBarInputContainer}>
            <Text style={styles.searchIconSymbol}>🔍</Text>
            <TextInput
              style={styles.searchBarTextInput}
              placeholder="Search FAQ questions or topics..."
              value={faqSearchQuery}
              onChangeText={setFaqSearchQuery}
              placeholderTextColor="#94A3B8"
            />
          </View>
        </View>

        {/* Categories scroll */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galleryFilterScroll}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.galleryFilterPill, faqActiveCategory === cat && styles.galleryFilterPillActive]}
              onPress={() => setFaqActiveCategory(cat)}
            >
              <Text style={[styles.galleryFilterPillText, faqActiveCategory === cat && styles.galleryFilterPillTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* FAQ list */}
        <View style={styles.faqListContainerSub}>
          {filtered.length === 0 ? (
            <Text style={styles.noDataText}>No FAQs found matching your query.</Text>
          ) : (
            filtered.map((faq) => (
              <View key={faq.id} style={styles.faqAccordionCard}>
                <TouchableOpacity
                  style={styles.faqAccordionHeader}
                  onPress={() => setFaqOpenId(faqOpenId === faq.id ? null : faq.id)}
                >
                  <Text style={styles.faqAccordionQuestion}>{faq.question}</Text>
                  <Text style={styles.faqAccordionArrow}>{faqOpenId === faq.id ? "▲" : "▼"}</Text>
                </TouchableOpacity>
                {faqOpenId === faq.id && (
                  <View style={styles.faqAccordionBody}>
                    <Text style={styles.faqAccordionAnswer}>{faq.answer}</Text>
                    <Text style={styles.faqAccordionBadge}>Category: {faq.category}</Text>
                  </View>
                )}
              </View>
            ))
          )}
        </View>
      </View>
    );
  };

  const renderDisclaimerSubScreen = () => {
    const disclaimerList = [
      { id: 1, title: "1. General Information Notice", content: "The information provided by Moonlight Coaching Centre on our website (moonlightcoaching.in) and marketing materials is for general educational, academic guidance, and informational purposes only. All information is provided in good faith." },
      { id: 2, title: "2. Educational & Exam Advice", content: "Our study notes, test series, syllabus summaries, and faculty advice are designed to aid board and competitive exam preparation. However, official examination guidelines, dates, and syllabus updates released by respective boards (BSEB, CBSE, NTA, BPSC) remain authoritative." },
      { id: 3, title: "3. No Guarantee of Specific Results", content: "While Moonlight Coaching Centre maintains a high success rate and provides rigorous coaching, individual student performance in competitive and board exams depends on student dedication, regular attendance, personal effort, and exam conditions. Enrollment does not guarantee a specific score or rank." },
      { id: 4, title: "4. External Links & References", content: "Our website or study portals may contain links to external third-party websites for student reference (e.g., educational portals, official exam result sites). We do not control or endorse the content, policies, or availability of external sites." },
      { id: 5, title: "5. Accuracy of Content", content: "We strive to keep fee structures, timing details, and course offerings updated. However, course fees, batch schedules, and faculty assignments may be updated periodically without prior personal notification." },
      { id: 6, title: "6. Copyright & Brand Ownership", content: "The logo, brand name 'Moonlight Coaching Centre', study materials, and custom curriculum published on this site are intellectual property of Moonlight Coaching Centre. Unauthorized reproduction or commercial distribution is prohibited." },
      { id: 7, title: "7. Contact Information", content: "If you have any questions or require clarification regarding our disclaimer, please contact our administrative desk at +91 78703 91245 or email info@moonlightcoaching.in." }
    ];

    const pills = [
      { id: 1, label: "1. General" },
      { id: 2, label: "2. Advice" },
      { id: 3, label: "3. Results" },
      { id: 4, label: "4. Links" },
      { id: 5, label: "5. Updates" },
      { id: 6, label: "6. Copyright" },
      { id: 7, label: "7. Contact" }
    ];

    return (
      <View style={styles.subScreenContent}>
        {/* Curved Header Card */}
        <View style={styles.policyHeaderCard}>
          <Text style={styles.policyHeaderEmoji}>⚖️</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.policyHeaderTitle}>Website Disclaimer</Text>
            <Text style={styles.policyHeaderSub}>Moonlight Coaching Centre Legal Statement</Text>
          </View>
          <View style={styles.policyDateBadge}>
            <Text style={styles.policyDateBadgeText}>May 24, 2024</Text>
          </View>
        </View>

        {/* 4 Pillars Summary Grid */}
        <View style={styles.policyPillarsGrid}>
          <View style={styles.policyPillarItem}>
            <Text style={{ fontSize: 16 }}>ℹ️</Text>
            <Text style={styles.policyPillarTitle}>General Notice</Text>
            <Text style={styles.policyPillarText}>Information for educational guidance.</Text>
          </View>
          <View style={styles.policyPillarItem}>
            <Text style={{ fontSize: 16 }}>⚠️</Text>
            <Text style={styles.policyPillarTitle}>No Guarantee</Text>
            <Text style={styles.policyPillarText}>Results depend on student effort.</Text>
          </View>
          <View style={styles.policyPillarItem}>
            <Text style={{ fontSize: 16 }}>🔗</Text>
            <Text style={styles.policyPillarTitle}>External Links</Text>
            <Text style={styles.policyPillarText}>Links are for reference only.</Text>
          </View>
          <View style={styles.policyPillarItem}>
            <Text style={{ fontSize: 16 }}>🔄</Text>
            <Text style={styles.policyPillarTitle}>Updates</Text>
            <Text style={styles.policyPillarText}>Subject to change without notice.</Text>
          </View>
        </View>

        {/* Navigation Pills Scroll */}
        <View>
          <Text style={styles.policyPillsHeading}>Jump to Section:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.policyPillsScrollContainer}>
            {pills.map((pill) => {
              const isActive = disclaimerActiveSection === pill.id;
              return (
                <TouchableOpacity
                  key={pill.id}
                  style={[styles.policyPill, isActive && styles.policyPillActive]}
                  onPress={() => setDisclaimerActiveSection(pill.id)}
                >
                  <Text style={[styles.policyPillText, isActive && styles.policyPillTextActive]}>{pill.label}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Accordions List */}
        <View style={styles.policyFaqContainer}>
          {disclaimerList.map((item) => {
            const isExpanded = disclaimerActiveSection === item.id;
            return (
              <View
                key={item.id}
                style={[
                  styles.policyAccordionCard,
                  isExpanded && styles.policyAccordionCardActiveDisclaimer
                ]}
              >
                <TouchableOpacity
                  style={styles.policyAccordionHeader}
                  onPress={() => setDisclaimerActiveSection(isExpanded ? 0 : item.id)}
                >
                  <Text style={[styles.policyAccordionQuestion, isExpanded && styles.policyAccordionQuestionActive]}>
                    {item.title}
                  </Text>
                  <Text style={styles.policyAccordionArrow}>{isExpanded ? "▲" : "▼"}</Text>
                </TouchableOpacity>
                {isExpanded && (
                  <View style={styles.policyAccordionBody}>
                    <Text style={styles.policyAccordionAnswer}>{item.content}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* Help Support Banner */}
        <View style={styles.policySupportBanner}>
          <View style={{ flex: 1, gap: 2 }}>
            <Text style={styles.policySupportTitle}>Have questions about our Disclaimer?</Text>
            <Text style={styles.policySupportDesc}>Contact our admin desk for quick assistance.</Text>
          </View>
          <TouchableOpacity style={styles.policySupportBtn} onPress={() => setSubScreen('contact_info')}>
            <Text style={styles.policySupportBtnText}>Contact Us ➔</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderPrivacySubScreen = () => {
    const privacyList = [
      { id: 1, title: "1. Introduction", content: "This Privacy Policy describes how Moonlight Coaching Centre collects, uses, and protects the personal information of students, parents, and website visitors. We are committed to maintaining data privacy and security." },
      { id: 2, title: "2. Information We Collect", content: "We may collect personal information such as student full name, parent name, mobile number, email address, course preferences, and location when you register or submit enquiry forms." },
      { id: 3, title: "3. How We Use Information", content: "We use the collected information to process course enrollments, communicate class schedules, send performance reports to parents, and improve our educational services." },
      { id: 4, title: "4. Information Sharing", content: "We do not sell or rent your personal information to third parties. We may share data strictly with trusted service providers who assist in operating our SMS, website, or payment processing." },
      { id: 5, title: "5. Data Security", content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction." },
      { id: 6, title: "6. Your Rights & Choices", content: "You have the right to access, update, or request deletion of your personal information. You can also opt out of promotional SMS or email communications at any time." },
      { id: 7, title: "7. Cookies & Tracking", content: "Our website uses standard session cookies to enhance browsing performance and analyze traffic trends. You can control or disable cookie preferences through your browser settings." },
      { id: 8, title: "8. Data Retention", content: "We retain personal student records only as long as necessary for educational reference, academic verification, or legal compliance purposes." },
      { id: 9, title: "9. Children's Privacy", content: "Our online forms for minor students must be filled with parental consent. We do not knowingly collect personal data from children without guardian authorization." },
      { id: 10, title: "10. Changes to This Policy", content: "We may update this Privacy Policy periodically. Any modifications will be updated on this page along with a revised effective date." },
      { id: 11, title: "11. Contact Us", content: "If you have any questions about this Privacy Policy, please contact our administrative desk at +91 78703 91245 or email info@moonlightcoaching.in." }
    ];

    const pills = [
      { id: 1, label: "1. Intro" },
      { id: 2, label: "2. Collect" },
      { id: 3, label: "3. Usage" },
      { id: 4, label: "4. Share" },
      { id: 5, label: "5. Security" },
      { id: 6, label: "6. Rights" },
      { id: 7, label: "7. Cookies" },
      { id: 8, label: "8. Retention" },
      { id: 9, label: "9. Children" },
      { id: 10, label: "10. Changes" },
      { id: 11, label: "11. Contact" }
    ];

    return (
      <View style={styles.subScreenContent}>
        {/* Curved Header Card */}
        <View style={[styles.policyHeaderCard, { backgroundColor: '#1E3A8A' }]}>
          <Text style={styles.policyHeaderEmoji}>🛡️</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.policyHeaderTitle}>Privacy Policy</Text>
            <Text style={styles.policyHeaderSub}>Your Privacy is Our Absolute Priority</Text>
          </View>
          <View style={styles.policyDateBadge}>
            <Text style={styles.policyDateBadgeText}>May 24, 2024</Text>
          </View>
        </View>

        {/* 4 Pillars Summary Grid */}
        <View style={styles.policyPillarsGrid}>
          <View style={styles.policyPillarItem}>
            <Text style={{ fontSize: 16 }}>👤</Text>
            <Text style={styles.policyPillarTitle}>Data Collection</Text>
            <Text style={styles.policyPillarText}>Name, contact, email, and preferences.</Text>
          </View>
          <View style={styles.policyPillarItem}>
            <Text style={{ fontSize: 16 }}>⚙️</Text>
            <Text style={styles.policyPillarTitle}>How We Use</Text>
            <Text style={styles.policyPillarText}>Enrollment & schedule communication.</Text>
          </View>
          <View style={styles.policyPillarItem}>
            <Text style={{ fontSize: 16 }}>🔒</Text>
            <Text style={styles.policyPillarTitle}>Data Protection</Text>
            <Text style={styles.policyPillarText}>Strict encryption & secure servers.</Text>
          </View>
          <View style={styles.policyPillarItem}>
            <Text style={{ fontSize: 16 }}>⚖️</Text>
            <Text style={styles.policyPillarTitle}>Your Rights</Text>
            <Text style={styles.policyPillarText}>Access, update, or delete your data.</Text>
          </View>
        </View>

        {/* Navigation Pills Scroll */}
        <View>
          <Text style={styles.policyPillsHeading}>Jump to Section:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.policyPillsScrollContainer}>
            {pills.map((pill) => {
              const isActive = privacyActiveSection === pill.id;
              return (
                <TouchableOpacity
                  key={pill.id}
                  style={[styles.policyPill, isActive && styles.policyPillActiveBlue]}
                  onPress={() => setPrivacyActiveSection(pill.id)}
                >
                  <Text style={[styles.policyPillText, isActive && styles.policyPillTextActive]}>{pill.label}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Accordions List */}
        <View style={styles.policyFaqContainer}>
          {privacyList.map((item) => {
            const isExpanded = privacyActiveSection === item.id;
            return (
              <View
                key={item.id}
                style={[
                  styles.policyAccordionCard,
                  isExpanded && styles.policyAccordionCardActiveBlue
                ]}
              >
                <TouchableOpacity
                  style={styles.policyAccordionHeader}
                  onPress={() => setPrivacyActiveSection(isExpanded ? 0 : item.id)}
                >
                  <Text style={[styles.policyAccordionQuestion, isExpanded && styles.policyAccordionQuestionActiveBlue]}>
                    {item.title}
                  </Text>
                  <Text style={styles.policyAccordionArrow}>{isExpanded ? "▲" : "▼"}</Text>
                </TouchableOpacity>
                {isExpanded && (
                  <View style={styles.policyAccordionBody}>
                    <Text style={styles.policyAccordionAnswer}>{item.content}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* Help Support Banner */}
        <View style={styles.policySupportBanner}>
          <View style={{ flex: 1, gap: 2 }}>
            <Text style={styles.policySupportTitle}>Have questions about our Privacy Policy?</Text>
            <Text style={styles.policySupportDesc}>We are committed to securing student data.</Text>
          </View>
          <TouchableOpacity style={styles.policySupportBtn} onPress={() => setSubScreen('contact_info')}>
            <Text style={styles.policySupportBtnText}>Contact Us ➔</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTermsSubScreen = () => {
    const termsList = [
      { id: 1, title: "1. Introduction", content: "Welcome to Moonlight Coaching Centre. These Terms & Conditions govern your use of our website, services, and enrollment in our courses. By accessing our site or registering for classes, you agree to comply with these terms in full." },
      { id: 2, title: "2. Eligibility", content: "Our services are available to students who meet the eligibility criteria for the respective courses. By using our services, you confirm that you are eligible and providing accurate personal details during registration." },
      { id: 3, title: "3. Course Enrollment", content: "Enrollment in any course is subject to seat availability and confirmation of initial fee payment. We reserve the right to refuse enrollment or adjust course schedules with prior notice." },
      { id: 4, title: "4. Fees & Payments", content: "Course fees must be paid in full or as per the agreed installment payment schedule. All fees are non-transferable and non-negotiable once enrollment is confirmed." },
      { id: 5, title: "5. Refund & Cancellation", content: "Refunds are processed strictly as per our institute Refund Policy. No refunds will be provided for partially completed courses, missed classes, or voluntary withdrawals after the batch starts." },
      { id: 6, title: "6. Student Responsibilities", content: "Students must attend classes regularly, complete assignments on time, maintain discipline in the learning environment, and respect faculty and fellow peers." },
      { id: 7, title: "7. Intellectual Property", content: "All content on our website and study materials, including text, graphics, logos, question banks, and notes, is the property of Moonlight Coaching Centre and protected by copyright laws." },
      { id: 8, title: "8. Code of Conduct", content: "Students and visitors are expected to maintain a respectful and professional behavior towards faculty, staff, and fellow students both on campus and online." },
      { id: 9, title: "9. Limitation of Liability", content: "Moonlight Coaching Centre shall not be held liable for indirect, incidental, or consequential damages resulting from website downtime, external exam schedule changes, or personal loss of belongings." },
      { id: 10, title: "10. Privacy Policy", content: "Your privacy is paramount to us. Please refer to our separate Privacy Policy to understand how we collect, handle, and safeguard your personal data." },
      { id: 11, title: "11. Changes to Terms", content: "We reserve the right to update these Terms & Conditions at any time. Any changes will be posted on this page with an updated revision date." },
      { id: 12, title: "12. Termination", content: "We reserve the right to terminate student admission or website access in cases of severe misconduct, non-payment of fees, or breach of institute guidelines." },
      { id: 13, title: "13. Governing Law", content: "These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of courts in Sitamarhi, Bihar." },
      { id: 14, title: "14. Contact Us", content: "If you have questions regarding these terms, please contact us at +91 78703 91245 or email info@moonlightcoaching.in. Address: Parsauni, Sitamarhi, Bihar." }
    ];

    const displayed = termsShowAll ? termsList : termsList.slice(0, 8);

    const pills = [
      { id: 1, label: "1. Intro" },
      { id: 2, label: "2. Eligibility" },
      { id: 3, label: "3. Enrollment" },
      { id: 4, label: "4. Fees" },
      { id: 5, label: "5. Refund" },
      { id: 6, label: "6. Duties" },
      { id: 7, label: "7. IP" },
      { id: 8, label: "8. Conduct" }
    ];

    if (termsShowAll) {
      pills.push(
        { id: 9, label: "9. Liability" },
        { id: 10, label: "10. Privacy" },
        { id: 11, label: "11. Changes" },
        { id: 12, label: "12. End" },
        { id: 13, label: "13. Law" },
        { id: 14, label: "14. Contact" }
      );
    }

    return (
      <View style={styles.subScreenContent}>
        {/* Curved Header Card */}
        <View style={[styles.policyHeaderCard, { backgroundColor: '#475569' }]}>
          <Text style={styles.policyHeaderEmoji}>📄</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.policyHeaderTitle}>Terms & Conditions</Text>
            <Text style={styles.policyHeaderSub}>Official Coaching Centre Agreement</Text>
          </View>
          <View style={styles.policyDateBadge}>
            <Text style={styles.policyDateBadgeText}>May 24, 2024</Text>
          </View>
        </View>

        {/* 4 Pillars Summary Grid */}
        <View style={styles.policyPillarsGrid}>
          <View style={styles.policyPillarItem}>
            <Text style={{ fontSize: 16 }}>📅</Text>
            <Text style={styles.policyPillarTitle}>Effective Date</Text>
            <Text style={styles.policyPillarText}>May 24, 2024</Text>
          </View>
          <View style={styles.policyPillarItem}>
            <Text style={{ fontSize: 16 }}>👥</Text>
            <Text style={styles.policyPillarTitle}>Applicable To</Text>
            <Text style={styles.policyPillarText}>All Users & Students</Text>
          </View>
          <View style={styles.policyPillarItem}>
            <Text style={{ fontSize: 16 }}>⚖️</Text>
            <Text style={styles.policyPillarTitle}>Governed By</Text>
            <Text style={styles.policyPillarText}>Laws of India</Text>
          </View>
          <View style={styles.policyPillarItem}>
            <Text style={{ fontSize: 16 }}>🔄</Text>
            <Text style={styles.policyPillarTitle}>Last Updated</Text>
            <Text style={styles.policyPillarText}>May 24, 2024</Text>
          </View>
        </View>

        {/* Navigation Pills Scroll */}
        <View>
          <Text style={styles.policyPillsHeading}>Jump to Section:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.policyPillsScrollContainer}>
            {pills.map((pill) => {
              const isActive = termsActiveSection === pill.id;
              return (
                <TouchableOpacity
                  key={pill.id}
                  style={[styles.policyPill, isActive && styles.policyPillActiveBlue]}
                  onPress={() => setTermsActiveSection(pill.id)}
                >
                  <Text style={[styles.policyPillText, isActive && styles.policyPillTextActive]}>{pill.label}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Accordions List */}
        <View style={styles.policyFaqContainer}>
          {displayed.map((item) => {
            const isExpanded = termsActiveSection === item.id;
            return (
              <View
                key={item.id}
                style={[
                  styles.policyAccordionCard,
                  isExpanded && styles.policyAccordionCardActiveBlue
                ]}
              >
                <TouchableOpacity
                  style={styles.policyAccordionHeader}
                  onPress={() => setTermsActiveSection(isExpanded ? 0 : item.id)}
                >
                  <Text style={[styles.policyAccordionQuestion, isExpanded && styles.policyAccordionQuestionActiveBlue]}>
                    {item.title}
                  </Text>
                  <Text style={styles.policyAccordionArrow}>{isExpanded ? "▲" : "▼"}</Text>
                </TouchableOpacity>
                {isExpanded && (
                  <View style={styles.policyAccordionBody}>
                    <Text style={styles.policyAccordionAnswer}>{item.content}</Text>
                  </View>
                )}
              </View>
            );
          })}
          <TouchableOpacity style={styles.showAllTermsBtn} onPress={() => setTermsShowAll(!termsShowAll)}>
            <Text style={styles.showAllTermsBtnText}>{termsShowAll ? "Show Less ↑" : "View All Terms ↓"}</Text>
          </TouchableOpacity>
        </View>

        {/* Help Support Banner */}
        <View style={styles.policySupportBanner}>
          <View style={{ flex: 1, gap: 2 }}>
            <Text style={styles.policySupportTitle}>Have questions about our Terms?</Text>
            <Text style={styles.policySupportDesc}>Our academic support desk is here to help you.</Text>
          </View>
          <TouchableOpacity style={styles.policySupportBtn} onPress={() => setSubScreen('contact_info')}>
            <Text style={styles.policySupportBtnText}>Contact Us ➔</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderEditProfileSubScreen = () => {
    const avatars = ['👨‍🎓', '👩‍🎓', '🧑‍🏫', '👨‍💻', '👩‍💻', '🚀', '⭐', '🏆'];
    
    const handleSaveProfile = () => {
      if (!editNameField || !editEmailField || !editPhoneField) {
        Alert.alert('Error', 'Please fill in all required fields.');
        return;
      }
      setUserName(editNameField);
      setUserEmail(editEmailField);
      setUserPhone(editPhoneField);
      setUserClass(editClassField);
      setUserAvatar(editAvatarField);
      Alert.alert('Success', 'Profile updated successfully!');
      setSubScreen('none');
    };

    const classesList = [
      'Class 9', 'Class 10', 'Class 11 (Sci)', 'Class 11 (Com)', 
      'Class 12 (JEE)', 'Class 12 (NEET)', 'Class 12 (Arts)'
    ];

    return (
      <View style={styles.subScreenContent}>
        {/* Main Card */}
        <View style={styles.formCard}>
          {/* Avatar chooser */}
          <Text style={styles.label}>Select Avatar</Text>
          <View style={{ alignItems: 'center', marginBottom: 12 }}>
            <TouchableOpacity 
              style={[styles.profileAvatarCircle, { width: 80, height: 80, borderRadius: 40, backgroundColor: '#051329' }]}
              onPress={() => setShowAvatarSelector(!showAvatarSelector)}
            >
              <Text style={{ fontSize: 40 }}>{editAvatarField}</Text>
              <View style={[styles.cameraIconBadge, { right: 2, bottom: 2 }]}>
                <Text style={{ fontSize: 10 }}>🔄</Text>
              </View>
            </TouchableOpacity>
            <Text style={{ fontSize: 10, color: '#64748B', marginTop: 4, fontWeight: '700' }}>Tap to Change Avatar</Text>
          </View>

          {showAvatarSelector && (
            <View style={styles.avatarSelectionGrid}>
              {avatars.map((av) => (
                <TouchableOpacity 
                  key={av} 
                  style={[styles.avatarSelectionItem, editAvatarField === av && styles.avatarSelectionItemActive]}
                  onPress={() => {
                    setEditAvatarField(av);
                    setShowAvatarSelector(false);
                  }}
                >
                  <Text style={{ fontSize: 24 }}>{av}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Text inputs */}
          <Text style={styles.label}>Full Name *</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={editNameField}
            onChangeText={setEditNameField}
          />

          <Text style={styles.label}>Email Address *</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            keyboardType="email-address"
            value={editEmailField}
            onChangeText={setEditEmailField}
          />

          <Text style={styles.label}>Mobile Number *</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            value={editPhoneField}
            onChangeText={setEditPhoneField}
          />

          {/* Class selector */}
          <Text style={styles.label}>Academic Class / Segment</Text>
          <View style={styles.badgeRowGrid}>
            {classesList.map((cls) => {
              const isActive = editClassField === cls;
              return (
                <TouchableOpacity
                  key={cls}
                  style={[styles.classSelectorPill, isActive && styles.classSelectorPillActive]}
                  onPress={() => setEditClassField(cls)}
                >
                  <Text style={[styles.classSelectorPillText, isActive && styles.classSelectorPillTextActive]}>{cls}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Action button */}
          <TouchableOpacity style={[styles.submitBtn, { marginTop: 20 }]} onPress={handleSaveProfile}>
            <Text style={styles.submitBtnText}>Save Profile Changes ➔</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderChangePasswordSubScreen = () => {
    // Dynamic strength calculations
    const getPasswordStrength = (pass: string) => {
      if (pass.length === 0) return { label: "", color: "#E2E8F0", width: "0%" };
      if (pass.length < 6) return { label: "Too Short 🔴", color: "#EF4444", width: "30%" };
      
      const hasDigit = /\d/.test(pass);
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
      
      if (hasDigit && hasSpecial) return { label: "Strong! 🟢", color: "#10B981", width: "100%" };
      if (hasDigit || hasSpecial) return { label: "Medium 🟡", color: "#F59E0B", width: "65%" };
      return { label: "Weak 🔴", color: "#EF4444", width: "45%" };
    };

    const strength = getPasswordStrength(newPassField);

    // Validation checks
    const hasMinLen = newPassField.length >= 6;
    const hasDigit = /\d/.test(newPassField);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(newPassField);

    const handleUpdatePassword = () => {
      if (!currentPassField || !newPassField || !confirmPassField) {
        Alert.alert('Error', 'Please fill in all the password fields.');
        return;
      }
      if (currentPassField !== userPassword) {
        Alert.alert('Incorrect Password', 'The current password you entered is incorrect.');
        return;
      }
      if (!hasMinLen) {
        Alert.alert('Short Password', 'New password must be at least 6 characters long.');
        return;
      }
      if (newPassField !== confirmPassField) {
        Alert.alert('Password Mismatch', 'New password and confirm password fields do not match.');
        return;
      }
      
      setUserPassword(newPassField);
      Alert.alert('Success', 'Your account password has been updated!');
      setCurrentPassField('');
      setNewPassField('');
      setConfirmPassField('');
      setSubScreen('none');
    };

    return (
      <View style={styles.subScreenContent}>
        <View style={styles.formCard}>
          {/* Header shield icon */}
          <View style={{ alignItems: 'center', marginBottom: 12 }}>
            <View style={[styles.profileAvatarCircle, { width: 50, height: 50, borderRadius: 25, backgroundColor: 'rgba(245, 158, 11, 0.1)', justifyContent: 'center', alignItems: 'center' }]}>
              <Text style={{ fontSize: 24 }}>🔒</Text>
            </View>
            <Text style={{ fontSize: 13, fontWeight: '900', color: '#051329', marginTop: 6 }}>Secure Your Account</Text>
          </View>

          {/* Current password */}
          <Text style={styles.label}>Current Password *</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordTextInput}
              placeholder="Enter current password"
              secureTextEntry={!showCurrentPass}
              value={currentPassField}
              onChangeText={setCurrentPassField}
            />
            <TouchableOpacity style={styles.passwordEyeBtn} onPress={() => setShowCurrentPass(!showCurrentPass)}>
              <Text style={{ fontSize: 16 }}>{showCurrentPass ? "👁️" : "🙈"}</Text>
            </TouchableOpacity>
          </View>

          {/* New password */}
          <Text style={styles.label}>New Password *</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordTextInput}
              placeholder="Enter new password (Min 6 chars)"
              secureTextEntry={!showNewPass}
              value={newPassField}
              onChangeText={setNewPassField}
            />
            <TouchableOpacity style={styles.passwordEyeBtn} onPress={() => setShowNewPass(!showNewPass)}>
              <Text style={{ fontSize: 16 }}>{showNewPass ? "👁️" : "🙈"}</Text>
            </TouchableOpacity>
          </View>

          {/* Dynamic strength meter bar */}
          {newPassField.length > 0 && (
            <View style={styles.passStrengthContainer}>
              <View style={styles.passStrengthBarBg}>
                <View style={[styles.passStrengthBarFill, { width: strength.width, backgroundColor: strength.color }]} />
              </View>
              <Text style={[styles.passStrengthLabel, { color: strength.color }]}>Strength: {strength.label}</Text>
            </View>
          )}

          {/* Rules Checklist indicator */}
          <View style={styles.passChecklistContainer}>
            <Text style={styles.passChecklistItem}>
              {hasMinLen ? "🟢" : "🔴"} At least 6 characters
            </Text>
            <Text style={styles.passChecklistItem}>
              {hasDigit ? "🟢" : "🔴"} Contains at least 1 number
            </Text>
            <Text style={styles.passChecklistItem}>
              {hasSpecial ? "🟢" : "🔴"} Contains at least 1 special char (!@#...)
            </Text>
          </View>

          {/* Confirm password */}
          <Text style={styles.label}>Confirm New Password *</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordTextInput}
              placeholder="Re-enter new password"
              secureTextEntry={!showConfirmPass}
              value={confirmPassField}
              onChangeText={setConfirmPassField}
            />
            <TouchableOpacity style={styles.passwordEyeBtn} onPress={() => setShowConfirmPass(!showConfirmPass)}>
              <Text style={{ fontSize: 16 }}>{showConfirmPass ? "👁️" : "🙈"}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.submitBtn, { marginTop: 16 }]} onPress={handleUpdatePassword}>
            <Text style={styles.submitBtnText}>Update Account Password ➔</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderNotificationSettingsSubScreen = () => {
    const handleSavePreferences = () => {
      Alert.alert('Preferences Saved', 'Your notification alert preferences have been updated.');
      setSubScreen('none');
    };

    const toggleRow = (title, subtitle, val, setVal) => (
      <View style={styles.switchRowItem}>
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={styles.switchRowTitle}>{title}</Text>
          <Text style={styles.switchRowSub}>{subtitle}</Text>
        </View>
        <TouchableOpacity 
          style={[styles.switchTrack, val && styles.switchTrackActive]}
          onPress={() => setVal(!val)}
        >
          <View style={[styles.switchThumb, val && styles.switchThumbActive]} />
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={styles.subScreenContent}>
        <View style={styles.formCard}>
          {toggleRow("Daily Study Reminders", "Receive alerts to maintain your daily study streak.", notifyStudyReminders, setNotifyStudyReminders)}
          {toggleRow("Mock Test Results", "Get notified immediately when test scorecards are published.", notifyMockResults, setNotifyMockResults)}
          {toggleRow("Fee Payment Alerts", "Get alerts for monthly tuition fee dues and receipts.", notifyFeeAlerts, setNotifyFeeAlerts)}
          {toggleRow("New Course Announcements", "Receive updates when new coaching batches or courses launch.", notifyCourseAnnouncements, setNotifyCourseAnnouncements)}
          {toggleRow("E-Book & Notes Updates", "Get notifications when teachers upload new study notes.", notifyEbookUpdates, setNotifyEbookUpdates)}

          <TouchableOpacity style={[styles.submitBtn, { marginTop: 16 }]} onPress={handleSavePreferences}>
            <Text style={styles.submitBtnText}>Save Preferences ➔</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderHelpSupportSubScreen = () => {
    const faqShortcuts = [
      { q: "How do I reset my app password?", a: "Go to Profile tab > Change Password under Account section, verify your current password, and type a new strong password." },
      { q: "Where can I view class timetables?", a: "Timetables are updated on the Home Announcement board and notified to students directly via SMS or batch notices." },
      { q: "How can I access Central Library books?", a: "Visit the Central Library at our campus during working hours (6AM - 8PM) and scan your Student ID card to borrow reference books." },
      { q: "Who can I contact for fee query issues?", a: "For fee payments, receipt claims, or monthly due updates, submit a ticket here under the 'Fee query' topic or call our helpline directly." }
    ];

    const handleSubmitTicket = () => {
      if (!supportMessage.trim()) {
        Alert.alert('Error', 'Please enter a detailed message description.');
        return;
      }
      const randomTicketId = "MLH-" + Math.floor(100000 + Math.random() * 900000);
      setSupportTicketId(randomTicketId);
      setSupportSubmitted(true);
    };

    return (
      <View style={styles.subScreenContent}>
        {/* Support Header Card */}
        <View style={styles.supportHeaderCard}>
          <Text style={{ fontSize: 36 }}>🎧</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.supportHeaderTitle}>Moonlight Helpdesk</Text>
            <Text style={styles.supportHeaderSub}>We are here to resolve your doubts and queries 24/7</Text>
          </View>
        </View>

        {/* Contact Channels Grid */}
        <Text style={styles.sectionHeading}>Direct Contact Channels</Text>
        <View style={styles.supportChannelsRow}>
          <TouchableOpacity style={styles.supportChannelBtn} onPress={() => Linking.openURL('tel:7870391245')}>
            <Text style={{ fontSize: 18 }}>📞</Text>
            <Text style={styles.supportChannelTitle}>Call Helpline</Text>
            <Text style={styles.supportChannelSub}>+91 7870391245</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.supportChannelBtn} onPress={() => Linking.openURL('mailto:support@moonlightcoaching.in?subject=Helpdesk Inquiry')}>
            <Text style={{ fontSize: 18 }}>✉️</Text>
            <Text style={styles.supportChannelTitle}>Send Email</Text>
            <Text style={styles.supportChannelSub}>support@moonlight</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.supportChannelBtn} onPress={() => Linking.openURL('https://wa.me/917870391245')}>
            <Text style={{ fontSize: 18 }}>💬</Text>
            <Text style={styles.supportChannelTitle}>WhatsApp Us</Text>
            <Text style={styles.supportChannelSub}>Quick Chat</Text>
          </TouchableOpacity>
        </View>

        {/* Quick FAQ Accordions */}
        <Text style={styles.sectionHeading}>Quick Troubleshooting FAQs</Text>
        <View style={styles.supportFaqList}>
          {faqShortcuts.map((item, idx) => {
            const isFaqOpen = faqOpenIndex === idx;
            return (
              <View key={idx} style={[styles.policyAccordionCard, isFaqOpen && styles.policyAccordionCardActiveDisclaimer]}>
                <TouchableOpacity style={styles.policyAccordionHeader} onPress={() => setFaqOpenIndex(isFaqOpen ? null : idx)}>
                  <Text style={[styles.policyAccordionQuestion, isFaqOpen && styles.policyAccordionQuestionActive]}>{item.q}</Text>
                  <Text style={styles.policyAccordionArrow}>{isFaqOpen ? "▲" : "▼"}</Text>
                </TouchableOpacity>
                {isFaqOpen && (
                  <View style={styles.policyAccordionBody}>
                    <Text style={styles.policyAccordionAnswer}>{item.a}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* Support Ticket form */}
        <Text style={styles.sectionHeading}>Submit Support Ticket</Text>
        {supportSubmitted ? (
          <View style={styles.supportTicketSuccessCard}>
            <Text style={{ fontSize: 24 }}>🎫</Text>
            <Text style={styles.supportTicketSuccessTitle}>Ticket Submitted Successfully!</Text>
            <View style={styles.ticketIdBadge}>
              <Text style={styles.ticketIdText}>TICKET ID: {supportTicketId}</Text>
            </View>
            <Text style={styles.supportTicketSuccessDesc}>Our support team will review your query and contact you within 2-4 hours. Check your registered phone for SMS updates.</Text>
            <TouchableOpacity 
              style={[styles.submitBtn, { backgroundColor: '#F59E0B', marginTop: 12 }]} 
              onPress={() => {
                setSupportSubmitted(false);
                setSupportMessage('');
              }}
            >
              <Text style={[styles.submitBtnText, { color: '#051329' }]}>Create New Ticket ➔</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.formCard}>
            <Text style={styles.label}>Select Category Topic *</Text>
            <View style={styles.badgeRowGrid}>
              {['General Inquiry', 'Fee query', 'App Bug Report', 'Library Access', 'Other'].map((topic) => {
                const isActive = supportTopic === topic;
                return (
                  <TouchableOpacity
                    key={topic}
                    style={[styles.classSelectorPill, isActive && styles.classSelectorPillActive]}
                    onPress={() => setSupportTopic(topic)}
                  >
                    <Text style={[styles.classSelectorPillText, isActive && styles.classSelectorPillTextActive]}>{topic}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Text style={styles.label}>Message Details *</Text>
            <TextInput
              style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
              placeholder="Describe your issue or query in detail..."
              multiline
              numberOfLines={4}
              value={supportMessage}
              onChangeText={setSupportMessage}
            />

            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmitTicket}>
              <Text style={styles.submitBtnText}>Submit Support Ticket ➔</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  const renderViewProgressSubScreen = () => {
    const weeklyData = [
      { day: "Mon", min: 45 },
      { day: "Tue", min: 70 },
      { day: "Wed", min: 90 },
      { day: "Thu", min: 110 },
      { day: "Fri", min: 50 },
      { day: "Sat", min: 80 },
      { day: "Sun", min: 120 }
    ];

    const milestones = [
      { icon: "⚡", title: "Consistent Learner", desc: "Maintained 12 days study streak.", status: "Unlocked" },
      { icon: "🎓", title: "NCERT Master", desc: "Completed all Math Chapter tests.", status: "Unlocked" },
      { icon: "🏆", title: "Mock Test Topper", desc: "Scored 92% in electrostatics test.", status: "Unlocked" },
      { icon: "🧪", title: "Chemistry Wizard", desc: "Complete 15 Chemistry video modules.", status: "Locked" }
    ];

    const subjectProgress = [
      { subject: "Mathematics", percentage: 85, color: "#10B981" },
      { subject: "Physics", percentage: 72, color: "#2563EB" },
      { subject: "Chemistry", percentage: 60, color: "#F59E0B" }
    ];

    return (
      <View style={styles.subScreenContent}>
        {/* Leaderboard Rank Card */}
        <View style={styles.progressRankCard}>
          <View style={styles.progressRankCircle}>
            <Text style={styles.progressRankVal}>#3</Text>
          </View>
          <View style={{ flex: 1, gap: 1 }}>
            <Text style={styles.progressRankTitle}>Class Leaderboard Rank</Text>
            <Text style={styles.progressRankSub}>Top 5% of Class 12 Batch aspirants</Text>
          </View>
          <Text style={{ fontSize: 24 }}>🏆</Text>
        </View>

        {/* Weekly Chart */}
        <Text style={styles.sectionHeading}>Weekly Study Minutes</Text>
        <View style={styles.formCard}>
          <View style={styles.chartContainer}>
            <View style={styles.chartBarsRow}>
              {weeklyData.map((d, idx) => {
                const barHeight = (d.min / 120) * 100;
                return (
                  <View key={idx} style={styles.chartBarCol}>
                    <Text style={styles.chartBarLabelVal}>{d.min}m</Text>
                    <View style={styles.chartBarTrack}>
                      <View style={[styles.chartBarFill, { height: barHeight }]} />
                    </View>
                    <Text style={styles.chartBarDay}>{d.day}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <Text style={styles.chartFooterText}>Average daily study time: 74 minutes</Text>
        </View>

        {/* Subject Mastery Progress */}
        <Text style={styles.sectionHeading}>Subject Progress</Text>
        <View style={styles.formCard}>
          {subjectProgress.map((sub, idx) => (
            <View key={idx} style={styles.subjectProgressItem}>
              <View style={styles.subjectProgressTextRow}>
                <Text style={styles.subjectProgressName}>{sub.subject}</Text>
                <Text style={[styles.subjectProgressPercentText, { color: sub.color }]}>{sub.percentage}%</Text>
              </View>
              <View style={styles.subjectProgressBarBg}>
                <View style={[styles.subjectProgressBarFill, { width: `${sub.percentage}%`, backgroundColor: sub.color }]} />
              </View>
            </View>
          ))}
        </View>

        {/* Milestones and Badges */}
        <Text style={styles.sectionHeading}>Unlocked Achievements</Text>
        <View style={styles.milestonesList}>
          {milestones.map((m, idx) => {
            const isUnlocked = m.status === "Unlocked";
            return (
              <View key={idx} style={[styles.milestoneCard, !isUnlocked && { opacity: 0.5 }]}>
                <View style={[styles.milestoneIconCircle, isUnlocked ? { backgroundColor: 'rgba(245, 158, 11, 0.1)' } : { backgroundColor: '#F1F5F9' }]}>
                  <Text style={{ fontSize: 18 }}>{m.icon}</Text>
                </View>
                <View style={{ flex: 1, gap: 1 }}>
                  <Text style={styles.milestoneTitle}>{m.title}</Text>
                  <Text style={styles.milestoneDesc}>{m.desc}</Text>
                </View>
                <View style={[styles.milestoneBadgeStatus, isUnlocked ? { backgroundColor: '#D1FAE5' } : { backgroundColor: '#E2E8F0' }]}>
                  <Text style={[styles.milestoneBadgeText, isUnlocked ? { color: '#065F46' } : { color: '#475569' }]}>
                    {m.status}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const renderPremiumRequestSubScreen = () => {
    const classSegments = [
      { key: 'Class 6th - 8th (Junior Foundation)', title: 'Junior Foundation', sub: 'Class 6th - 8th • NTSE & Olympiad Base', icon: '🎒', badge: 'Foundation' },
      { key: 'Class 9th - 10th (Pre-Foundation & Boards)', title: 'Pre-Foundation & Boards', sub: 'Class 9th - 10th • 95%+ Target', icon: '🎓', badge: 'Board Target' },
      { key: 'Class 11th - 12th (Boards + Entrance)', title: 'Senior Secondary (Sci/Arts)', sub: 'Class 11th - 12th • JEE/NEET Prep', icon: '🔬', badge: 'JEE/NEET' },
      { key: 'Dropper / Target Batch (Repeater)', title: 'Target Batch (Droppers)', sub: 'Ranker Batch for 1-Year Prep', icon: '🚀', badge: 'Rank Booster' }
    ];

    const examGoals = [
      { name: 'NEET Medical Prep', icon: '🩺', tag: 'Physics, Chem, Bio' },
      { name: 'JEE Main & Advanced', icon: '⚙️', tag: 'Maths, Physics, Chem' },
      { name: 'Class 10th & 12th Board Special', icon: '🎯', tag: 'CBSE & State Board' },
      { name: 'Olympiad & NTSE', icon: '🏆', tag: 'Aptitude & Science' },
      { name: 'BPSC & Govt Foundation', icon: '🏛️', tag: 'General Studies' }
    ];

    const modeOptions = [
      { name: '🏫 Offline Classroom', campus: 'Parsauni Campus, Sitamarhi' },
      { name: '💻 Live Hybrid Class', campus: 'Smart Class + Mobile App' },
      { name: '📱 Online E-Learning', campus: 'HD Recorded + PDFs' }
    ];

    const timingOptions = [
      { slot: '🌅 Morning (7:00 AM - 11:00 AM)', tag: '🔥 4 Slots Left' },
      { slot: '☀️ Afternoon (12:00 PM - 4:00 PM)', tag: '⭐ Most Popular' },
      { slot: '🌇 Evening (4:00 PM - 7:30 PM)', tag: '⚡ Fast Filling' }
    ];

    const handleSubmitPremiumForm = () => {
      if (!prefStudentName.trim() || !prefPhone.trim()) {
        Alert.alert('Missing Info', 'Please enter Student Name and Mobile Number.');
        return;
      }
      setPrefSubmitted(true);
    };

    if (prefSubmitted) {
      return (
        <View style={styles.subScreenContent}>
          <View style={[styles.formCard, { alignItems: 'center', paddingVertical: 28, paddingHorizontal: 20, gap: 14, borderRadius: 24 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
            <View style={{ width: 72, height: 72, borderRadius: 36, backgroundColor: '#D1FAE5', alignItems: 'center', justifyContent: 'center', shadowColor: '#10B981', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 10, elevation: 6 }}>
              <Text style={{ fontSize: 36 }}>🎉</Text>
            </View>

            <Text style={[{ fontSize: 20, fontWeight: '900', color: '#051329', textAlign: 'center' }, isDarkMode && { color: '#FFFFFF' }]}>
              VIP Batch Slot & Plan Unlocked!
            </Text>

            <Text style={[{ fontSize: 12.5, color: '#64748B', textAlign: 'center', lineHeight: 18 }, isDarkMode && { color: '#94A3B8' }]}>
              Congratulations <Text style={{ fontWeight: '900', color: '#F59E0B' }}>{prefStudentName}</Text>! Your customized learning roadmap and fee waiver ticket have been registered.
            </Text>

            {/* Ticket Card */}
            <View style={[{ width: '100%', backgroundColor: '#051329', borderRadius: 18, padding: 16, borderWidth: 1, borderColor: '#1E293B', gap: 8 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#1E293B', paddingBottom: 8 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <Text style={{ fontSize: 16 }}>👑</Text>
                  <Text style={{ fontSize: 11, fontWeight: '900', color: '#F59E0B' }}>MOONLIGHT VIP TICKET</Text>
                </View>
                <Text style={{ fontSize: 10, fontWeight: '900', color: '#4ADE80', backgroundColor: 'rgba(74, 222, 128, 0.15)', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 }}>ACTIVE</Text>
              </View>

              <Text style={{ fontSize: 11, color: '#E2E8F0', fontWeight: '800' }}>• Segment: <Text style={{ color: '#F59E0B' }}>{prefSegment}</Text></Text>
              <Text style={{ fontSize: 11, color: '#E2E8F0', fontWeight: '800' }}>• Target Goal: <Text style={{ color: '#F59E0B' }}>{prefGoal}</Text></Text>
              <Text style={{ fontSize: 11, color: '#E2E8F0', fontWeight: '800' }}>• Slot & Mode: <Text style={{ color: '#38BDF8' }}>{prefTiming}</Text> ({prefMode})</Text>
              <Text style={{ fontSize: 11, color: '#E2E8F0', fontWeight: '800' }}>• Contact Number: <Text style={{ color: '#FFFFFF' }}>{prefPhone}</Text></Text>
              
              <View style={{ marginTop: 6, backgroundColor: '#0D1E36', borderRadius: 10, padding: 10, borderWidth: 1, borderColor: '#1E293B', alignItems: 'center' }}>
                <Text style={{ fontSize: 9.5, color: '#94A3B8' }}>Your Reference Booking ID</Text>
                <Text style={{ fontSize: 15, fontWeight: '900', color: '#F59E0B', letterSpacing: 1, marginTop: 2 }}>ML-VIP-2025</Text>
              </View>
            </View>

            {/* Quick Contact Buttons */}
            <View style={{ flexDirection: 'row', gap: 10, width: '100%', marginTop: 4 }}>
              <TouchableOpacity style={[styles.secondaryBorderBtn, { flex: 1, backgroundColor: '#25D366', borderColor: '#25D366', paddingVertical: 12 }]} onPress={() => Linking.openURL(`https://wa.me/917870391245?text=Hello%20Moonlight%20Coaching,%20I%20unlocked%20VIP%20Ticket%20ML-VIP-2025%20for%20${prefStudentName}`)}>
                <Text style={[styles.secondaryBorderBtnText, { color: '#FFFFFF', fontWeight: '900' }]}>💬 WhatsApp Desk</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.primaryYellowBtn, { flex: 1, paddingVertical: 12 }]} onPress={handleCall}>
                <Text style={styles.primaryYellowBtnText}>📞 Call Counselor</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              style={{ marginTop: 6 }} 
              onPress={() => { setPrefSubmitted(false); setSubScreen('none'); }}
            >
              <Text style={{ fontSize: 12, fontWeight: '800', color: '#64748B' }}>Return to Homepage ➔</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.subScreenContent}>
        {/* TOP HERO BANNER */}
        <View style={[styles.heroCard, { backgroundColor: '#051329', padding: 20, borderRadius: 24 }]}>
          <View style={styles.heroBestBadge}>
            <Text style={{ fontSize: 13 }}>👑</Text>
            <Text style={styles.heroBestBadgeText}>OFFICIAL BATCH & COURSE PLANNER</Text>
          </View>
          <Text style={styles.heroTitleWhite}>Customize Class & Goal</Text>
          <Text style={styles.heroTitleYellow}>Unlock Premium Plan!</Text>
          <Text style={styles.heroSubtextText}>
            Select your class segment, exam goal, and batch timings to generate your personalized study kit & scholarship discount ticket.
          </Text>
        </View>

        {/* STEPPER PROGRESS BAR */}
        <View style={[{ backgroundColor: '#FFFFFF', borderRadius: 16, padding: 12, borderWidth: 1, borderColor: '#E2E8F0', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 11, fontWeight: '900', color: '#F59E0B' }}>1. Class</Text>
            <Text style={{ fontSize: 8.5, color: '#10B981', fontWeight: '800' }}>✓ Ready</Text>
          </View>
          <Text style={{ fontSize: 12, color: '#CBD5E1' }}>➔</Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 11, fontWeight: '900', color: '#F59E0B' }}>2. Goal</Text>
            <Text style={{ fontSize: 8.5, color: '#10B981', fontWeight: '800' }}>✓ Active</Text>
          </View>
          <Text style={{ fontSize: 12, color: '#CBD5E1' }}>➔</Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 11, fontWeight: '900', color: '#F59E0B' }}>3. Slot</Text>
            <Text style={{ fontSize: 8.5, color: '#38BDF8', fontWeight: '800' }}>In Progress</Text>
          </View>
          <Text style={{ fontSize: 12, color: '#CBD5E1' }}>➔</Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 11, fontWeight: '900', color: '#F59E0B' }}>4. Confirm</Text>
            <Text style={{ fontSize: 8.5, color: '#94A3B8', fontWeight: '700' }}>Final Step</Text>
          </View>
        </View>

        {/* STEP 1: CLASS SEGMENT SELECTOR */}
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionHeading, isDarkMode && { color: '#FFFFFF' }]}>Step 1: Select Academic Class Segment *</Text>
        </View>

        <View style={{ gap: 10 }}>
          {classSegments.map((item, idx) => {
            const isSelected = prefSegment === item.key;
            return (
              <TouchableOpacity
                key={idx}
                style={[{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: isSelected ? 'rgba(245, 158, 11, 0.14)' : '#FFFFFF',
                  borderWidth: 2,
                  borderColor: isSelected ? '#F59E0B' : '#E2E8F0',
                  borderRadius: 16,
                  padding: 14,
                  gap: 12
                }, isDarkMode && !isSelected && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}
                onPress={() => setPrefSegment(item.key)}
              >
                <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: isSelected ? '#F59E0B' : '#F1F5F9', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 22 }}>{item.icon}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                    <Text style={[{ fontSize: 13, fontWeight: '900', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>{item.title}</Text>
                    <Text style={{ fontSize: 8.5, fontWeight: '900', color: '#F59E0B', backgroundColor: 'rgba(245, 158, 11, 0.2)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>{item.badge}</Text>
                  </View>
                  <Text style={[{ fontSize: 10.5, color: '#64748B', marginTop: 2 }, isDarkMode && { color: '#94A3B8' }]}>{item.sub}</Text>
                </View>
                <Text style={{ fontSize: 18 }}>{isSelected ? "🔘" : "⚪"}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* STEP 2: EXAM GOAL SELECTION */}
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionHeading, isDarkMode && { color: '#FFFFFF' }]}>Step 2: Select Exam Target / Goal *</Text>
        </View>

        <View style={{ gap: 8 }}>
          {examGoals.map((item, idx) => {
            const isSelected = prefGoal === item.name;
            return (
              <TouchableOpacity
                key={idx}
                style={[{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: isSelected ? '#051329' : '#FFFFFF',
                  borderWidth: 1.5,
                  borderColor: isSelected ? '#051329' : '#E2E8F0',
                  borderRadius: 14,
                  padding: 12,
                  justifyContent: 'space-between'
                }, isDarkMode && !isSelected && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}
                onPress={() => setPrefGoal(item.name)}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <Text style={{ fontSize: 18 }}>{item.icon}</Text>
                  <View>
                    <Text style={[{ fontSize: 12, fontWeight: '900', color: isSelected ? '#F59E0B' : '#0F172A' }, isDarkMode && !isSelected && { color: '#FFFFFF' }]}>{item.name}</Text>
                    <Text style={[{ fontSize: 9.5, color: isSelected ? '#CBD5E1' : '#64748B' }]}>{item.tag}</Text>
                  </View>
                </View>
                <View style={[{ paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, backgroundColor: isSelected ? '#F59E0B' : '#F1F5F9' }, isDarkMode && !isSelected && { backgroundColor: '#1E293B' }]}>
                  <Text style={{ fontSize: 9, fontWeight: '900', color: isSelected ? '#051329' : '#475569' }}>{isSelected ? "ACTIVE ✓" : "SELECT"}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* STEP 3: STUDY MODE & BATCH TIMINGS */}
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionHeading, isDarkMode && { color: '#FFFFFF' }]}>Step 3: Preferred Mode & Batch Slot *</Text>
        </View>

        {/* Study Mode */}
        <View style={{ gap: 8 }}>
          {modeOptions.map((item, idx) => {
            const isSelected = prefMode === item.name;
            return (
              <TouchableOpacity
                key={idx}
                style={[{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: isSelected ? '#066E38' : '#FFFFFF',
                  borderWidth: 1.5,
                  borderColor: isSelected ? '#066E38' : '#E2E8F0',
                  borderRadius: 14,
                  padding: 12
                }, isDarkMode && !isSelected && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}
                onPress={() => setPrefMode(item.name)}
              >
                <View>
                  <Text style={[{ fontSize: 12, fontWeight: '900', color: isSelected ? '#FFFFFF' : '#0F172A' }, isDarkMode && !isSelected && { color: '#FFFFFF' }]}>{item.name}</Text>
                  <Text style={[{ fontSize: 9.5, color: isSelected ? '#E2E8F0' : '#64748B' }]}>{item.campus}</Text>
                </View>
                <Text style={{ fontSize: 16, color: isSelected ? '#FFFFFF' : '#94A3B8' }}>{isSelected ? "✔" : "➕"}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Batch Timing */}
        <Text style={[{ fontSize: 11, fontWeight: '800', color: '#475569', marginTop: 6 }, isDarkMode && { color: '#CBD5E1' }]}>Preferred Batch Timing Slot:</Text>
        <View style={{ gap: 8 }}>
          {timingOptions.map((item, idx) => {
            const isSelected = prefTiming === item.slot;
            return (
              <TouchableOpacity
                key={idx}
                style={[{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: isSelected ? '#FEF3C7' : '#FFFFFF',
                  borderWidth: 1.5,
                  borderColor: isSelected ? '#F59E0B' : '#E2E8F0',
                  borderRadius: 12,
                  padding: 10
                }, isDarkMode && !isSelected && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}
                onPress={() => setPrefTiming(item.slot)}
              >
                <Text style={[{ fontSize: 11, fontWeight: '800', color: isSelected ? '#B45309' : '#334155' }, isDarkMode && !isSelected && { color: '#CBD5E1' }]}>{item.slot}</Text>
                <Text style={{ fontSize: 8.5, fontWeight: '900', color: isSelected ? '#B45309' : '#64748B', backgroundColor: isSelected ? '#FDE68A' : '#F1F5F9', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>{item.tag}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* DYNAMIC UNLOCKED VIP PACKAGE CARD */}
        <View style={[{ backgroundColor: '#030F26', borderRadius: 20, padding: 18, borderWidth: 1.5, borderColor: '#F59E0B', gap: 10, shadowColor: '#F59E0B', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 12, elevation: 8 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#1E293B', paddingBottom: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text style={{ fontSize: 20 }}>👑</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F59E0B', letterSpacing: 0.5 }}>YOUR UNLOCKED VIP PACKAGE</Text>
            </View>
            <Text style={{ fontSize: 9, fontWeight: '900', color: '#4ADE80', backgroundColor: 'rgba(74, 222, 128, 0.15)', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 }}>FREE PERKS</Text>
          </View>

          <View style={{ gap: 6 }}>
            <Text style={{ fontSize: 11, color: '#E2E8F0', fontWeight: '800' }}>📘 Customized Syllabus Roadmap: <Text style={{ color: '#F59E0B' }}>{prefSegment}</Text></Text>
            <Text style={{ fontSize: 11, color: '#E2E8F0', fontWeight: '800' }}>🎒 Printed Kit & PYQ Book: <Text style={{ color: '#F59E0B' }}>{prefGoal}</Text></Text>
            <Text style={{ fontSize: 11, color: '#E2E8F0', fontWeight: '800' }}>👨‍🏫 1-on-1 Faculty Mentor: <Text style={{ color: '#38BDF8' }}>Weekly Doubt Session</Text></Text>
            <Text style={{ fontSize: 11, color: '#E2E8F0', fontWeight: '800' }}>⏰ Reserved Slot: <Text style={{ color: '#38BDF8' }}>{prefTiming}</Text> ({prefMode})</Text>
            <Text style={{ fontSize: 11, color: '#4ADE80', fontWeight: '900' }}>🎟️ Scholarship Discount: Flat 40% Waiver Applied!</Text>
          </View>
        </View>

        {/* STEP 4: CONFIRM STUDENT DETAILS */}
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionHeading, isDarkMode && { color: '#FFFFFF' }]}>Step 4: Confirm Student Details *</Text>
        </View>

        <View style={[styles.formCard, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
          <Text style={[styles.label, isDarkMode && { color: '#CBD5E1' }]}>Student / Parent Full Name *</Text>
          <TextInput
            style={[styles.input, isDarkMode && { backgroundColor: '#1E293B', borderColor: '#334155', color: '#FFFFFF' }]}
            placeholder="e.g. Rahul Kumar"
            placeholderTextColor="#94A3B8"
            value={prefStudentName}
            onChangeText={setPrefStudentName}
          />

          <Text style={[styles.label, isDarkMode && { color: '#CBD5E1' }]}>Mobile Phone Number *</Text>
          <TextInput
            style={[styles.input, isDarkMode && { backgroundColor: '#1E293B', borderColor: '#334155', color: '#FFFFFF' }]}
            placeholder="e.g. 7870391245"
            placeholderTextColor="#94A3B8"
            keyboardType="phone-pad"
            value={prefPhone}
            onChangeText={setPrefPhone}
          />

          <Text style={[styles.label, isDarkMode && { color: '#CBD5E1' }]}>City / Landmark Location</Text>
          <TextInput
            style={[styles.input, isDarkMode && { backgroundColor: '#1E293B', borderColor: '#334155', color: '#FFFFFF' }]}
            placeholder="e.g. Sitamarhi / Parsauni"
            placeholderTextColor="#94A3B8"
            value={prefCity}
            onChangeText={setPrefCity}
          />

          <TouchableOpacity style={[styles.primaryYellowBtn, { width: '100%', marginTop: 12, paddingVertical: 14 }]} onPress={handleSubmitPremiumForm}>
            <Text style={[styles.primaryYellowBtnText, { fontSize: 13 }]}>🔥 UNLOCK MY PLAN & RESERVE SLOT NOW ➔</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // ================= AUTHENTICATION MODULE RENDER FUNCTIONS =================

  const renderAuthScreens = () => {
    // 1. SPLASH SCREEN
    if (authScreen === 'splash') {
      return (
        <View style={{ flex: 1, backgroundColor: '#051329', justifyContent: 'center', alignItems: 'center', padding: 24 }}>
          {/* Logo Badge Container */}
          <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#0D1E36', borderWidth: 2, borderColor: '#F59E0B', justifyContent: 'center', alignItems: 'center', marginBottom: 20, shadowColor: '#F59E0B', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.4, shadowRadius: 16, elevation: 10 }}>
            <Image source={require('./assets/logo.png')} style={{ width: 70, height: 70, resizeMode: 'contain' }} />
          </View>

          <Text style={{ fontSize: 26, fontWeight: '900', color: '#FFFFFF', letterSpacing: 1.5 }}>MOONLIGHT</Text>
          <Text style={{ fontSize: 13, fontWeight: '900', color: '#F59E0B', letterSpacing: 2, marginTop: 4 }}>COACHING CENTRE</Text>
          <Text style={{ fontSize: 11, color: '#94A3B8', marginTop: 8, fontStyle: 'italic' }}>"Strong Foundation, Bright Future!"</Text>

          {/* Loading indicator animation */}
          <View style={{ marginTop: 40, alignItems: 'center', gap: 10 }}>
            <View style={{ width: 180, height: 4, backgroundColor: '#1E293B', borderRadius: 2, overflow: 'hidden' }}>
              <View style={{ width: '70%', height: '100%', backgroundColor: '#F59E0B', borderRadius: 2 }} />
            </View>
            <Text style={{ fontSize: 10, color: '#64748B', fontWeight: '800' }}>Loading your learning workspace...</Text>
          </View>

          <TouchableOpacity style={{ marginTop: 48, paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.08)' }} onPress={() => setAuthScreen('onboarding')}>
            <Text style={{ fontSize: 11, color: '#CBD5E1', fontWeight: '800' }}>Skip Splash ➔</Text>
          </TouchableOpacity>
        </View>
      );
    }

    // 2. ONBOARDING CAROUSEL SCREEN (3 SLIDES)
    if (authScreen === 'onboarding') {
      const slides = [
        {
          emoji: '🎓',
          title: 'Learn from Expert Educators',
          desc: 'High-qualified faculty team, 1-on-1 personalized doubt clearing, and individual student attention.',
          badge: 'FACULTY & MENTORSHIP'
        },
        {
          emoji: '📈',
          title: 'Interactive Test Series & AI Analytics',
          desc: 'Regular chapter mock tests, state rankers leaderboard, and dynamic scorecard performance tracking.',
          badge: 'TESTS & PROGRESS'
        },
        {
          emoji: '📖',
          title: 'Central Library & Digital Study Kits',
          desc: 'Access 5000+ topicwise formula handbooks, PYQ question banks, and quiet AC study rooms.',
          badge: 'RESOURCES & LIBRARY'
        }
      ];
      const activeSlide = slides[onboardingIndex];

      return (
        <View style={{ flex: 1, backgroundColor: '#051329', padding: 24, justifyContent: 'space-between' }}>
          {/* Top Skip Header */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Text style={{ fontSize: 16 }}>🌙</Text>
              <Text style={{ fontSize: 12, fontWeight: '900', color: '#F59E0B' }}>MOONLIGHT</Text>
            </View>
            <TouchableOpacity onPress={() => setAuthScreen('login')}>
              <Text style={{ fontSize: 12, fontWeight: '800', color: '#94A3B8' }}>Skip ➔</Text>
            </TouchableOpacity>
          </View>

          {/* Slide Main Content */}
          <View style={{ alignItems: 'center', gap: 16, paddingHorizontal: 8 }}>
            <View style={{ width: 110, height: 110, borderRadius: 55, backgroundColor: 'rgba(245, 158, 11, 0.12)', borderWidth: 2, borderColor: '#F59E0B', justifyContent: 'center', alignItems: 'center', shadowColor: '#F59E0B', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 14 }}>
              <Text style={{ fontSize: 54 }}>{activeSlide.emoji}</Text>
            </View>

            <View style={{ backgroundColor: 'rgba(245, 158, 11, 0.2)', paddingVertical: 4, paddingHorizontal: 12, borderRadius: 12 }}>
              <Text style={{ fontSize: 9.5, fontWeight: '900', color: '#F59E0B', letterSpacing: 1 }}>{activeSlide.badge}</Text>
            </View>

            <Text style={{ fontSize: 22, fontWeight: '900', color: '#FFFFFF', textAlign: 'center', lineHeight: 28 }}>
              {activeSlide.title}
            </Text>

            <Text style={{ fontSize: 12.5, color: '#94A3B8', textAlign: 'center', lineHeight: 19 }}>
              {activeSlide.desc}
            </Text>
          </View>

          {/* Bottom Controls */}
          <View style={{ gap: 20, marginBottom: 16 }}>
            {/* Step Indicators */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8 }}>
              {slides.map((_, idx) => (
                <TouchableOpacity key={idx} onPress={() => setOnboardingIndex(idx)}>
                  <View style={{ width: onboardingIndex === idx ? 28 : 10, height: 8, borderRadius: 4, backgroundColor: onboardingIndex === idx ? '#F59E0B' : '#1E293B' }} />
                </TouchableOpacity>
              ))}
            </View>

            {/* Next / Get Started Button */}
            <TouchableOpacity
              style={styles.primaryYellowBtn}
              onPress={() => {
                if (onboardingIndex < slides.length - 1) {
                  setOnboardingIndex(onboardingIndex + 1);
                } else {
                  setAuthScreen('login');
                }
              }}
            >
              <Text style={[styles.primaryYellowBtnText, { fontSize: 13 }]}>
                {onboardingIndex === slides.length - 1 ? 'Get Started Now ➔' : 'Next Screen ➔'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    // 3. LOGIN SCREEN
    if (authScreen === 'login') {
      return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#051329', padding: 24, justifyContent: 'center' }}>
          {/* Header */}
          <View style={{ alignItems: 'center', marginBottom: 24 }}>
            <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#0D1E36', borderWidth: 2, borderColor: '#F59E0B', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
              <Image source={require('./assets/logo.png')} style={{ width: 44, height: 44, resizeMode: 'contain' }} />
            </View>
            <Text style={{ fontSize: 22, fontWeight: '900', color: '#FFFFFF' }}>Welcome Back!</Text>
            <Text style={{ fontSize: 12, color: '#94A3B8', marginTop: 4 }}>Sign in to continue your Moonlight learning journey</Text>
          </View>

          {/* Login Mode Pill */}
          <View style={{ flexDirection: 'row', backgroundColor: '#0D1E36', borderRadius: 16, padding: 4, marginBottom: 16, borderWidth: 1, borderColor: '#1E293B' }}>
            <TouchableOpacity style={{ flex: 1, paddingVertical: 8, alignItems: 'center', borderRadius: 12, backgroundColor: loginMode === 'password' ? '#F59E0B' : 'transparent' }} onPress={() => setLoginMode('password')}>
              <Text style={{ fontSize: 11, fontWeight: '900', color: loginMode === 'password' ? '#051329' : '#94A3B8' }}>🔑 Password Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, paddingVertical: 8, alignItems: 'center', borderRadius: 12, backgroundColor: loginMode === 'otp' ? '#F59E0B' : 'transparent' }} onPress={() => setLoginMode('otp')}>
              <Text style={{ fontSize: 11, fontWeight: '900', color: loginMode === 'otp' ? '#051329' : '#94A3B8' }}>📱 Mobile OTP Login</Text>
            </TouchableOpacity>
          </View>

          {/* Card Form */}
          <View style={[styles.formCard, { backgroundColor: '#0D1E36', borderColor: '#1E293B', padding: 20 }]}>
            <Text style={styles.label}>Email Address / Mobile Number *</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E293B', borderWidth: 1, borderColor: '#334155', borderRadius: 12, paddingHorizontal: 12 }}>
              <Text style={{ fontSize: 14 }}>{loginMode === 'otp' ? '📱' : '📧'}</Text>
              <TextInput
                style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 8, color: '#FFFFFF', fontSize: 13 }}
                placeholder={loginMode === 'otp' ? 'Enter 10-digit mobile' : 'Enter email or phone'}
                placeholderTextColor="#64748B"
                value={loginEmailOrPhone}
                onChangeText={setLoginEmailOrPhone}
              />
            </View>

            {loginMode === 'password' && (
              <>
                <Text style={[styles.label, { marginTop: 10 }]}>Account Password *</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E293B', borderWidth: 1, borderColor: '#334155', borderRadius: 12, paddingHorizontal: 12 }}>
                  <Text style={{ fontSize: 14 }}>🔒</Text>
                  <TextInput
                    style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 8, color: '#FFFFFF', fontSize: 13 }}
                    placeholder="Enter password"
                    placeholderTextColor="#64748B"
                    secureTextEntry={!showLoginPass}
                    value={loginPassword}
                    onChangeText={setLoginPassword}
                  />
                  <TouchableOpacity onPress={() => setShowLoginPass(!showLoginPass)}>
                    <Text style={{ fontSize: 16 }}>{showLoginPass ? '👁️' : '🙈'}</Text>
                  </TouchableOpacity>
                </View>

                {/* Remember & Forgot Row */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                  <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }} onPress={() => setRememberMe(!rememberMe)}>
                    <Text style={{ fontSize: 14 }}>{rememberMe ? '☑️' : '⬜'}</Text>
                    <Text style={{ fontSize: 11, color: '#CBD5E1', fontWeight: '700' }}>Remember Me</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => setAuthScreen('forgot_password')}>
                    <Text style={{ fontSize: 11, color: '#F59E0B', fontWeight: '800' }}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}

            {/* Login CTA */}
            <TouchableOpacity
              style={[styles.primaryYellowBtn, { marginTop: 16, paddingVertical: 12 }]}
              onPress={() => {
                if (loginMode === 'otp') {
                  setOtpTargetRecipient(loginEmailOrPhone || '+91 7870391245');
                  setAuthScreen('otp');
                } else {
                  if (!loginEmailOrPhone || !loginPassword) {
                    Alert.alert('Incomplete Login', 'Please enter your email/phone and password.');
                    return;
                  }
                  setAuthScreen('authenticated');
                }
              }}
            >
              <Text style={styles.primaryYellowBtnText}>
                {loginMode === 'otp' ? 'Send Verification OTP ➔' : 'Sign In to Account ➔'}
              </Text>
            </TouchableOpacity>

            {/* Social Shortcuts */}
            <View style={{ alignItems: 'center', marginTop: 16, gap: 10 }}>
              <Text style={{ fontSize: 10, fontWeight: '800', color: '#64748B' }}>OR CONTINUE WITH</Text>
              <View style={{ flexDirection: 'row', gap: 10, width: '100%' }}>
                <TouchableOpacity style={{ flex: 1, backgroundColor: '#1E293B', borderWidth: 1, borderColor: '#334155', borderRadius: 12, paddingVertical: 8, alignItems: 'center' }} onPress={() => setAuthScreen('authenticated')}>
                  <Text style={{ fontSize: 11, color: '#FFFFFF', fontWeight: '800' }}>🌐 Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, backgroundColor: '#1E293B', borderWidth: 1, borderColor: '#334155', borderRadius: 12, paddingVertical: 8, alignItems: 'center' }} onPress={() => { setOtpTargetRecipient('+91 7870391245'); setAuthScreen('otp'); }}>
                  <Text style={{ fontSize: 11, color: '#FFFFFF', fontWeight: '800' }}>📱 Mobile OTP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Footer Sign Up Trigger */}
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity onPress={() => setAuthScreen('register')}>
              <Text style={{ fontSize: 12, color: '#CBD5E1' }}>
                Don't have an account? <Text style={{ color: '#F59E0B', fontWeight: '900' }}>Sign Up / Register ➔</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }

    // 4. REGISTER SCREEN
    if (authScreen === 'register') {
      const classOptions = ['Class 9th - 10th', 'Class 11th - 12th (Sci)', 'Class 11th - 12th (Arts)', 'Target Batch (Dropper)'];
      const goalOptions = ['NEET Medical', 'JEE Main/Adv', 'Board Exam Special', 'BPSC Foundation'];

      return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#051329', padding: 24, justifyContent: 'center' }}>
          {/* Header */}
          <View style={{ alignItems: 'center', marginBottom: 16 }}>
            <Text style={{ fontSize: 22, fontWeight: '900', color: '#FFFFFF' }}>Create Student Account</Text>
            <Text style={{ fontSize: 12, color: '#94A3B8', marginTop: 4 }}>Join Moonlight Coaching Centre for bright academic future</Text>
          </View>

          {/* Form Card */}
          <View style={[styles.formCard, { backgroundColor: '#0D1E36', borderColor: '#1E293B', padding: 18, gap: 10 }]}>
            <Text style={styles.label}>Student Full Name *</Text>
            <TextInput
              style={[styles.input, { backgroundColor: '#1E293B', borderColor: '#334155', color: '#FFFFFF' }]}
              placeholder="e.g. Rahul Kumar"
              placeholderTextColor="#64748B"
              value={regName}
              onChangeText={setRegName}
            />

            <Text style={styles.label}>Mobile Phone Number *</Text>
            <TextInput
              style={[styles.input, { backgroundColor: '#1E293B', borderColor: '#334155', color: '#FFFFFF' }]}
              placeholder="e.g. 7870391245"
              placeholderTextColor="#64748B"
              keyboardType="phone-pad"
              value={regPhone}
              onChangeText={setRegPhone}
            />

            <Text style={styles.label}>Email Address *</Text>
            <TextInput
              style={[styles.input, { backgroundColor: '#1E293B', borderColor: '#334155', color: '#FFFFFF' }]}
              placeholder="e.g. rahulkumar@gmail.com"
              placeholderTextColor="#64748B"
              keyboardType="email-address"
              value={regEmail}
              onChangeText={setRegEmail}
            />

            <Text style={styles.label}>Select Class Segment *</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
              {classOptions.map((cls, idx) => {
                const isSelected = regClass === cls;
                return (
                  <TouchableOpacity
                    key={idx}
                    style={{ backgroundColor: isSelected ? '#F59E0B' : '#1E293B', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 10, borderWidth: 1, borderColor: isSelected ? '#F59E0B' : '#334155' }}
                    onPress={() => setRegClass(cls)}
                  >
                    <Text style={{ fontSize: 10.5, fontWeight: '800', color: isSelected ? '#051329' : '#CBD5E1' }}>{cls}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Text style={styles.label}>Select Target Goal *</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
              {goalOptions.map((goal, idx) => {
                const isSelected = regGoal === goal;
                return (
                  <TouchableOpacity
                    key={idx}
                    style={{ backgroundColor: isSelected ? '#066E38' : '#1E293B', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 10, borderWidth: 1, borderColor: isSelected ? '#066E38' : '#334155' }}
                    onPress={() => setRegGoal(goal)}
                  >
                    <Text style={{ fontSize: 10.5, fontWeight: '800', color: '#FFFFFF' }}>{goal}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Text style={styles.label}>Create Password *</Text>
            <TextInput
              style={[styles.input, { backgroundColor: '#1E293B', borderColor: '#334155', color: '#FFFFFF' }]}
              placeholder="Min 6 characters"
              placeholderTextColor="#64748B"
              secureTextEntry={true}
              value={regPassword}
              onChangeText={setRegPassword}
            />

            {/* Terms checkbox */}
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4 }} onPress={() => setRegAgreeTerms(!regAgreeTerms)}>
              <Text style={{ fontSize: 14 }}>{regAgreeTerms ? '☑️' : '⬜'}</Text>
              <Text style={{ fontSize: 10.5, color: '#94A3B8', flex: 1 }}>I agree to Moonlight Terms & Conditions & Privacy Policy</Text>
            </TouchableOpacity>

            {/* Submit Button */}
            <TouchableOpacity
              style={[styles.primaryYellowBtn, { marginTop: 10, paddingVertical: 12 }]}
              onPress={() => {
                if (!regName || !regPhone) {
                  Alert.alert('Incomplete Form', 'Please enter Student Name and Mobile Number.');
                  return;
                }
                setOtpTargetRecipient(regPhone);
                setAuthScreen('otp');
              }}
            >
              <Text style={styles.primaryYellowBtnText}>Create Account & Verify OTP ➔</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center', marginTop: 16 }}>
            <TouchableOpacity onPress={() => setAuthScreen('login')}>
              <Text style={{ fontSize: 12, color: '#CBD5E1' }}>
                Already registered? <Text style={{ color: '#F59E0B', fontWeight: '900' }}>Sign In / Login ➔</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }

    // 5. OTP VERIFICATION SCREEN
    if (authScreen === 'otp') {
      return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#051329', padding: 24, justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.formCard, { backgroundColor: '#0D1E36', borderColor: '#1E293B', padding: 24, alignItems: 'center', gap: 14, width: '100%' }]}>
            <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(245, 158, 11, 0.15)', borderWidth: 2, borderColor: '#F59E0B', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 28 }}>🔐</Text>
            </View>

            <Text style={{ fontSize: 20, fontWeight: '900', color: '#FFFFFF', textAlign: 'center' }}>Verify Mobile OTP</Text>
            <Text style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center', lineHeight: 18 }}>
              Enter the 4-digit code sent to <Text style={{ fontWeight: '800', color: '#F59E0B' }}>{otpTargetRecipient}</Text>
            </Text>

            {/* OTP Digits Grid */}
            <View style={{ flexDirection: 'row', gap: 12, marginVertical: 10 }}>
              {otpDigits.map((digit, idx) => (
                <View key={idx} style={{ width: 50, height: 54, borderRadius: 14, backgroundColor: '#1E293B', borderWidth: 2, borderColor: '#F59E0B', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 24, fontWeight: '900', color: '#FFFFFF' }}>{digit}</Text>
                </View>
              ))}
            </View>

            {/* Countdown timer */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Text style={{ fontSize: 12, color: '#94A3B8' }}>Resend OTP Code in:</Text>
              <Text style={{ fontSize: 12, fontWeight: '900', color: otpTimer > 0 ? '#F59E0B' : '#10B981' }}>
                {otpTimer > 0 ? `00:${otpTimer < 10 ? '0' : ''}${otpTimer}s` : 'Resend Now'}
              </Text>
            </View>

            {/* Verify Button */}
            <TouchableOpacity
              style={[styles.primaryYellowBtn, { width: '100%', paddingVertical: 12, marginTop: 8 }]}
              onPress={() => {
                setAuthScreen('authenticated');
                Alert.alert('Verification Successful!', 'Welcome to Moonlight Coaching Centre!');
              }}
            >
              <Text style={styles.primaryYellowBtnText}>Verify OTP & Complete Sign In ➔</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setAuthScreen('register')}>
              <Text style={{ fontSize: 11, color: '#64748B', fontWeight: '800' }}>Change Recipient Number ✏️</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }

    // 6. FORGOT PASSWORD SCREEN
    if (authScreen === 'forgot_password') {
      return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#051329', padding: 24, justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.formCard, { backgroundColor: '#0D1E36', borderColor: '#1E293B', padding: 24, gap: 14, width: '100%' }]}>
            <View style={{ alignItems: 'center', gap: 8 }}>
              <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: 'rgba(245, 158, 11, 0.15)', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 26 }}>🔑</Text>
              </View>
              <Text style={{ fontSize: 20, fontWeight: '900', color: '#FFFFFF', textAlign: 'center' }}>Forgot Password?</Text>
              <Text style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center', lineHeight: 17 }}>
                Enter your registered email address or mobile number to receive a password reset verification code.
              </Text>
            </View>

            <Text style={styles.label}>Registered Email / Phone *</Text>
            <TextInput
              style={[styles.input, { backgroundColor: '#1E293B', borderColor: '#334155', color: '#FFFFFF' }]}
              placeholder="e.g. rahulkumar@gmail.com or 7870391245"
              placeholderTextColor="#64748B"
              value={forgotInput}
              onChangeText={setForgotInput}
            />

            <TouchableOpacity
              style={[styles.primaryYellowBtn, { width: '100%', paddingVertical: 12, marginTop: 8 }]}
              onPress={() => {
                if (!forgotInput.trim()) {
                  Alert.alert('Missing Input', 'Please enter your email or phone number.');
                  return;
                }
                setOtpTargetRecipient(forgotInput);
                setAuthScreen('otp');
              }}
            >
              <Text style={styles.primaryYellowBtnText}>Send Reset Code ➔</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center', marginTop: 4 }} onPress={() => setAuthScreen('login')}>
              <Text style={{ fontSize: 12, color: '#CBD5E1', fontWeight: '800' }}>⬅ Back to Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }

    // 7. RESET PASSWORD SCREEN
    if (authScreen === 'reset_password') {
      return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#051329', padding: 24, justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.formCard, { backgroundColor: '#0D1E36', borderColor: '#1E293B', padding: 24, gap: 14, width: '100%' }]}>
            <View style={{ alignItems: 'center', gap: 8 }}>
              <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: 'rgba(16, 185, 129, 0.15)', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 26 }}>🔐</Text>
              </View>
              <Text style={{ fontSize: 20, fontWeight: '900', color: '#FFFFFF', textAlign: 'center' }}>Reset Your Password</Text>
              <Text style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center' }}>Choose a strong password for your account</Text>
            </View>

            <Text style={styles.label}>New Password *</Text>
            <TextInput
              style={[styles.input, { backgroundColor: '#1E293B', borderColor: '#334155', color: '#FFFFFF' }]}
              placeholder="Enter new password"
              placeholderTextColor="#64748B"
              secureTextEntry={true}
              value={resetNewPass}
              onChangeText={setResetNewPass}
            />

            <Text style={styles.label}>Confirm New Password *</Text>
            <TextInput
              style={[styles.input, { backgroundColor: '#1E293B', borderColor: '#334155', color: '#FFFFFF' }]}
              placeholder="Re-enter new password"
              placeholderTextColor="#64748B"
              secureTextEntry={true}
              value={resetConfirmPass}
              onChangeText={setResetConfirmPass}
            />

            <TouchableOpacity
              style={[styles.primaryYellowBtn, { width: '100%', paddingVertical: 12, marginTop: 8 }]}
              onPress={() => {
                Alert.alert('Password Updated!', 'Your account password has been reset. Please sign in.');
                setAuthScreen('login');
              }}
            >
              <Text style={styles.primaryYellowBtnText}>Reset Password & Sign In ➔</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }

    return null;
  };

  // ================= HOMEWORK MODULE RENDER FUNCTION =================

  const renderHomeworkSubScreen = () => {
    const homeworkList = [
      {
        id: 1,
        title: 'Physics Chapter 4: Electrostatics PYQ Worksheet',
        subject: 'Physics',
        teacher: 'Mr. Anil Jha',
        dueDate: 'Today, 5:00 PM',
        questionsCount: '15 Questions',
        icon: '⚡',
        instructions: 'Solve all 15 PYQ problems in your homework notebook. Show complete step-by-step solutions with circuit/field diagrams. Upload as a single PDF.',
      },
      {
        id: 2,
        title: 'Calculus Definite Integrals Assignment 3.2',
        subject: 'Mathematics',
        teacher: 'Mr. Rahul Singh',
        dueDate: 'Tomorrow, 10:00 AM',
        questionsCount: '10 Problems',
        icon: '📐',
        instructions: 'Complete NCERT Exercise 3.2 problems #1 to #10. Pay attention to substitution and integration by parts formulas.',
      },
      {
        id: 3,
        title: 'Organic Chemistry Reactions Lab Report',
        subject: 'Chemistry',
        teacher: 'Mrs. Priya Kumari',
        dueDate: 'Friday, 28th July',
        questionsCount: 'Lab Report #3',
        icon: '🧪',
        instructions: 'Write observation table and chemical equations for Aldehydes & Ketones test reactions in your practical notebook.',
      },
      {
        id: 4,
        title: 'Capacitance & Dielectrics Numericals Sheet',
        subject: 'Physics',
        teacher: 'Mr. Anil Jha',
        dueDate: 'Yesterday',
        questionsCount: '20 Numericals',
        icon: '⚡',
        instructions: 'Solve numericals on parallel plate capacitor with dielectric slab insertion.',
        marks: '18 / 20 (90%)',
        grade: 'Grade A+',
        remarks: 'Excellent work Rahul! Your steps in Q3 and Q7 are very clean and precise. Pay slight attention to sign convention in Q12.',
      },
    ];

    const filteredList = homeworkList.filter((item) => hwFilter === 'All' || item.subject === hwFilter);

    if (selectedHw) {
      const isSubmitted = submittedHwIds.includes(selectedHw.id);
      const isGraded = selectedHw.marks ? true : false;

      return (
        <ScrollView style={{ flex: 1, padding: 16 }}>
          <TouchableOpacity style={{ marginBottom: 12 }} onPress={() => setSelectedHw(null)}>
            <Text style={{ fontSize: 12, fontWeight: '900', color: '#F59E0B' }}>⬅ Back to Homework List</Text>
          </TouchableOpacity>

          <View style={[{ backgroundColor: '#FFFFFF', borderRadius: 24, padding: 18, borderWidth: 1, borderColor: '#E2E8F0', gap: 12 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
            {/* Header Badge Row */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Text style={{ fontSize: 24 }}>{selectedHw.icon}</Text>
                <View>
                  <Text style={{ fontSize: 10, fontWeight: '900', color: '#F59E0B', textTransform: 'uppercase' }}>{selectedHw.subject}</Text>
                  <Text style={{ fontSize: 9.5, color: '#94A3B8' }}>Faculty: {selectedHw.teacher}</Text>
                </View>
              </View>

              <View style={{ backgroundColor: isGraded ? '#DCFCE7' : isSubmitted ? '#E0F2FE' : '#FEF3C7', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 }}>
                <Text style={{ fontSize: 9.5, fontWeight: '900', color: isGraded ? '#15803D' : isSubmitted ? '#0369A1' : '#B45309' }}>
                  {isGraded ? 'EVALUATED ✓' : isSubmitted ? 'UNDER REVIEW 🔵' : 'PENDING 🟡'}
                </Text>
              </View>
            </View>

            <Text style={[{ fontSize: 16, fontWeight: '900', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>{selectedHw.title}</Text>
            <Text style={{ fontSize: 10.5, color: '#EF4444', fontWeight: '800' }}>⏰ Due Date: {selectedHw.dueDate} • {selectedHw.questionsCount}</Text>

            {/* Teacher Instructions Box */}
            <View style={{ backgroundColor: isDarkMode ? '#1E293B' : '#F8FAFC', borderRadius: 16, padding: 14, borderWidth: 1, borderColor: isDarkMode ? '#334155' : '#E2E8F0', gap: 6 }}>
              <Text style={{ fontSize: 10.5, fontWeight: '900', color: '#38BDF8' }}>📌 TEACHER INSTRUCTIONS:</Text>
              <Text style={[{ fontSize: 11, color: '#475569', lineHeight: 16 }, isDarkMode && { color: '#CBD5E1' }]}>{selectedHw.instructions}</Text>
              <TouchableOpacity style={{ alignSelf: 'flex-start', marginTop: 4 }} onPress={() => Alert.alert('Question Paper', 'Downloading Question Paper PDF...')}>
                <Text style={{ fontSize: 10, fontWeight: '900', color: '#F59E0B' }}>📥 Download Question Paper (PDF - 1.8 MB)</Text>
              </TouchableOpacity>
            </View>

            {/* GRADED SECTION (If Evaluated) */}
            {isGraded && (
              <View style={{ backgroundColor: '#FEFCE8', borderRadius: 16, padding: 14, borderWidth: 1.5, borderColor: '#FDE047', gap: 8 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontSize: 12, fontWeight: '900', color: '#854D0E' }}>🏆 EVALUATION RESULT & MARKS</Text>
                  <Text style={{ fontSize: 13, fontWeight: '900', color: '#15803D', backgroundColor: '#DCFCE7', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 }}>
                    {selectedHw.marks}
                  </Text>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', borderRadius: 12, padding: 10, borderWidth: 1, borderColor: '#FEF08A' }}>
                  <Text style={{ fontSize: 10, fontWeight: '900', color: '#854D0E' }}>👨‍🏫 Teacher Remarks ({selectedHw.teacher}):</Text>
                  <Text style={{ fontSize: 11, color: '#451A03', fontStyle: 'italic', marginTop: 2 }}>"{selectedHw.remarks}"</Text>
                </View>
              </View>
            )}

            {/* SUBMISSION FORM (If Pending or Under Review) */}
            {!isGraded && (
              <View style={{ backgroundColor: isDarkMode ? '#1E293B' : '#F1F5F9', borderRadius: 18, padding: 14, gap: 10 }}>
                <Text style={[{ fontSize: 12, fontWeight: '900', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>
                  {isSubmitted ? '📤 Your Submitted Answer Sheet' : '📤 Upload Solution (PDF / Photo)'}
                </Text>

                {/* Upload Trigger Button */}
                <TouchableOpacity
                  style={{ backgroundColor: '#FFFFFF', borderWidth: 2, borderColor: '#F59E0B', borderStyle: 'dashed', borderRadius: 14, padding: 16, alignItems: 'center', justifyContent: 'center', gap: 6 }}
                  onPress={() => {
                    setHwFileAttached(`homework_sol_${selectedHw.id}_rahul.pdf`);
                    Alert.alert('File Attached', 'Selected: homework_sol_' + selectedHw.id + '_rahul.pdf (2.4 MB)');
                  }}
                >
                  <Text style={{ fontSize: 24 }}>📄</Text>
                  <Text style={{ fontSize: 11, fontWeight: '900', color: '#0F172A' }}>
                    {hwFileAttached ? hwFileAttached : 'Tap to Select Solution PDF or Images'}
                  </Text>
                  <Text style={{ fontSize: 9.5, color: '#64748B' }}>Supports PDF, JPG, PNG (Max 15 MB)</Text>
                </TouchableOpacity>

                <Text style={[{ fontSize: 10.5, fontWeight: '800', color: '#475569' }, isDarkMode && { color: '#CBD5E1' }]}>Student Notes / Remarks (Optional)</Text>
                <TextInput
                  style={[{ backgroundColor: '#FFFFFF', borderRadius: 12, padding: 10, borderWidth: 1, borderColor: '#CBD5E1', fontSize: 11, color: '#0F172A', minHeight: 50 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#334155', color: '#FFFFFF' }]}
                  placeholder="Add any note for the teacher (e.g. Doubts in Q7)..."
                  placeholderTextColor="#94A3B8"
                  value={hwStudentNote}
                  onChangeText={setHwStudentNote}
                />

                <TouchableOpacity
                  style={[styles.primaryYellowBtn, { paddingVertical: 12, width: '100%', marginTop: 4 }]}
                  onPress={() => {
                    if (!submittedHwIds.includes(selectedHw.id)) {
                      setSubmittedHwIds([...submittedHwIds, selectedHw.id]);
                    }
                    Alert.alert('Success!', 'Your homework solution has been uploaded & submitted successfully.');
                    setSelectedHw(null);
                  }}
                >
                  <Text style={[styles.primaryYellowBtnText, { fontSize: 12 }]}>
                    {isSubmitted ? '🔄 Resubmit Homework' : '📤 Submit Homework Now ➔'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
      );
    }

    return (
      <ScrollView style={{ flex: 1, padding: 16 }} contentContainerStyle={{ gap: 12 }}>
        {/* Header Summary Card */}
        <View style={[{ backgroundColor: '#051329', borderRadius: 20, padding: 16, borderWidth: 1.5, borderColor: '#1E293B', gap: 10 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text style={{ fontSize: 20 }}>📝</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F59E0B', letterSpacing: 0.5 }}>STUDENT HOMEWORK PORTAL</Text>
            </View>
            <Text style={{ fontSize: 9.5, fontWeight: '900', color: '#4ADE80', backgroundColor: 'rgba(74, 222, 128, 0.15)', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 }}>ACTIVE TERM</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: '900', color: '#FFFFFF' }}>My Homework & Assignments</Text>
          <Text style={{ fontSize: 10.5, color: '#94A3B8' }}>Track due dates, submit PDF solutions, and check teacher marks & remarks.</Text>
        </View>

        {/* Subject Filter Pills */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingVertical: 4 }}>
          {['All', 'Physics', 'Mathematics', 'Chemistry', 'Biology'].map((sub, idx) => (
            <TouchableOpacity
              key={idx}
              style={{ backgroundColor: hwFilter === sub ? '#F59E0B' : isDarkMode ? '#0D1E36' : '#FFFFFF', borderWidth: 1, borderColor: hwFilter === sub ? '#F59E0B' : isDarkMode ? '#1E293B' : '#E2E8F0', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20 }}
              onPress={() => setHwFilter(sub)}
            >
              <Text style={{ fontSize: 11, fontWeight: '900', color: hwFilter === sub ? '#051329' : isDarkMode ? '#FFFFFF' : '#0F172A' }}>{sub}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Homework List */}
        <View style={{ gap: 10 }}>
          {filteredList.map((hw) => {
            const isSubmitted = submittedHwIds.includes(hw.id);
            const isGraded = hw.marks ? true : false;

            return (
              <TouchableOpacity
                key={hw.id}
                style={[{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 14, borderWidth: 1, borderColor: '#E2E8F0', gap: 10 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}
                onPress={() => setSelectedHw(hw)}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <Text style={{ fontSize: 20 }}>{hw.icon}</Text>
                    <View>
                      <Text style={{ fontSize: 10, fontWeight: '900', color: '#F59E0B', textTransform: 'uppercase' }}>{hw.subject}</Text>
                      <Text style={{ fontSize: 9.5, color: '#94A3B8' }}>{hw.teacher}</Text>
                    </View>
                  </View>

                  <Text style={{ fontSize: 9, fontWeight: '900', color: isGraded ? '#16A34A' : isSubmitted ? '#0284C7' : '#D97706', backgroundColor: isGraded ? '#DCFCE7' : isSubmitted ? '#E0F2FE' : '#FEF3C7', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 }}>
                    {isGraded ? 'GRADED ✓' : isSubmitted ? 'SUBMITTED 🔵' : 'PENDING 🟡'}
                  </Text>
                </View>

                <Text style={[{ fontSize: 13, fontWeight: '900', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>{hw.title}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: isDarkMode ? '#1E293B' : '#F1F5F9', paddingTop: 8 }}>
                  <Text style={{ fontSize: 10, color: '#EF4444', fontWeight: '800' }}>⏰ Due: {hw.dueDate}</Text>
                  <Text style={{ fontSize: 10.5, fontWeight: '900', color: '#38BDF8' }}>View & Submit ➔</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
  };

  // ================= ATTENDANCE MODULE RENDER FUNCTION =================

  const renderAttendanceSubScreen = () => {
    // 31 Days status for July 2026
    const daysInMonth = Array.from({ length: 31 }, (_, i) => {
      const day = i + 1;
      let status = 'present';
      if (day === 14) status = 'absent';
      else if (day === 21) status = 'leave';
      else if (day === 5 || day === 12 || day === 19 || day === 26) status = 'sunday';
      return { day, status };
    });

    const subjectAttendance = [
      { name: 'Physics (Theory & Numericals)', attended: 24, total: 25, percentage: 96, icon: '⚡', color: '#F59E0B' },
      { name: 'Mathematics (Calculus & Algebra)', attended: 23, total: 25, percentage: 92, icon: '📐', color: '#2563EB' },
      { name: 'Chemistry (Organic & Physical)', attended: 24, total: 26, percentage: 94, icon: '🧪', color: '#10B981' },
      { name: 'English & Aptitude Test', attended: 10, total: 10, percentage: 100, icon: '💬', color: '#8B5CF6' }
    ];

    const attendanceLog = [
      { date: '25 Jul 2026', day: 'Saturday', status: 'Present', note: 'All 3 classes attended (Physics, Maths, Chem)', icon: '🟢' },
      { date: '24 Jul 2026', day: 'Friday', status: 'Present', note: 'All 3 classes attended', icon: '🟢' },
      { date: '21 Jul 2026', day: 'Tuesday', status: 'Leave', note: 'Approved Medical Leave (Parent Intimation)', icon: '🟡' },
      { date: '14 Jul 2026', day: 'Tuesday', status: 'Absent', note: 'Uninformed Absence (SMS Alert Sent to Parent)', icon: '🔴' },
      { date: '12 Jul 2026', day: 'Sunday', status: 'Holiday', note: 'Weekly Sunday Campus Holiday', icon: '⚪' }
    ];

    return (
      <ScrollView style={{ flex: 1, padding: 16 }} contentContainerStyle={{ gap: 14 }}>
        {/* Header Summary Card */}
        <View style={[{ backgroundColor: '#051329', borderRadius: 24, padding: 18, borderWidth: 1.5, borderColor: '#1E293B', gap: 12 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text style={{ fontSize: 22 }}>📊</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F59E0B', letterSpacing: 0.5 }}>ATTENDANCE DASHBOARD</Text>
            </View>
            <Text style={{ fontSize: 9.5, fontWeight: '900', color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.15)', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 }}>EXCELLENT 🟢</Text>
          </View>

          {/* Big Percentage Box */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#030F26', borderRadius: 20, padding: 16, borderWidth: 1, borderColor: '#F59E0B' }}>
            <View>
              <Text style={{ fontSize: 28, fontWeight: '900', color: '#FFFFFF' }}>94%</Text>
              <Text style={{ fontSize: 11, color: '#F59E0B', fontWeight: '800' }}>Overall Attendance Rate</Text>
              <Text style={{ fontSize: 9.5, color: '#94A3B8', marginTop: 2 }}>Class 12 - JEE Prep (July 2026)</Text>
            </View>
            <View style={{ width: 54, height: 54, borderRadius: 27, backgroundColor: 'rgba(16, 185, 129, 0.15)', borderWidth: 2, borderColor: '#10B981', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 14, fontWeight: '900', color: '#10B981' }}>47/50</Text>
            </View>
          </View>

          {/* 4 Stat Badges */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 6 }}>
            <View style={{ flex: 1, backgroundColor: '#0D1E36', borderRadius: 12, padding: 8, alignItems: 'center' }}>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#10B981' }}>47</Text>
              <Text style={{ fontSize: 8.5, color: '#94A3B8', fontWeight: '700' }}>Present (P)</Text>
            </View>

            <View style={{ flex: 1, backgroundColor: '#0D1E36', borderRadius: 12, padding: 8, alignItems: 'center' }}>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#EF4444' }}>2</Text>
              <Text style={{ fontSize: 8.5, color: '#94A3B8', fontWeight: '700' }}>Absent (A)</Text>
            </View>

            <View style={{ flex: 1, backgroundColor: '#0D1E36', borderRadius: 12, padding: 8, alignItems: 'center' }}>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F59E0B' }}>1</Text>
              <Text style={{ fontSize: 8.5, color: '#94A3B8', fontWeight: '700' }}>Leave (L)</Text>
            </View>

            <View style={{ flex: 1, backgroundColor: '#0D1E36', borderRadius: 12, padding: 8, alignItems: 'center' }}>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#CBD5E1' }}>4</Text>
              <Text style={{ fontSize: 8.5, color: '#94A3B8', fontWeight: '700' }}>Sunday (S)</Text>
            </View>
          </View>
        </View>

        {/* 🗓️ MONTHLY CALENDAR GRID WIDGET */}
        <View style={[{ backgroundColor: '#FFFFFF', borderRadius: 24, padding: 16, borderWidth: 1, borderColor: '#E2E8F0', gap: 12 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
          {/* Calendar Header Month Navigator */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => Alert.alert('Month', 'Showing July 2026 Attendance')}>
              <Text style={{ fontSize: 14, fontWeight: '900', color: '#F59E0B' }}>◀</Text>
            </TouchableOpacity>

            <Text style={[{ fontSize: 15, fontWeight: '900', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>🗓️ {attMonth}</Text>

            <TouchableOpacity onPress={() => Alert.alert('Month', 'Showing July 2026 Attendance')}>
              <Text style={{ fontSize: 14, fontWeight: '900', color: '#F59E0B' }}>▶</Text>
            </TouchableOpacity>
          </View>

          {/* Days Header */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, borderBottomColor: isDarkMode ? '#1E293B' : '#F1F5F9', paddingBottom: 6 }}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, idx) => (
              <Text key={idx} style={{ fontSize: 10, fontWeight: '900', color: '#94A3B8', width: 34, textAlign: 'center' }}>{d}</Text>
            ))}
          </View>

          {/* 31 Days Grid */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', gap: 6 }}>
            {daysInMonth.map((item) => {
              let bg = '#DCFCE7';
              let textCol = '#15803D';
              let badgeText = 'P';

              if (item.status === 'absent') {
                bg = '#FEE2E2';
                textCol = '#B91C1C';
                badgeText = 'A';
              } else if (item.status === 'leave') {
                bg = '#FEF3C7';
                textCol = '#B45309';
                badgeText = 'L';
              } else if (item.status === 'sunday') {
                bg = '#F1F5F9';
                textCol = '#64748B';
                badgeText = 'Sun';
              }

              return (
                <TouchableOpacity
                  key={item.day}
                  style={{ width: 42, height: 44, borderRadius: 12, backgroundColor: bg, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(0,0,0,0.05)' }}
                  onPress={() => Alert.alert(`Date: ${item.day} July 2026`, `Status: ${item.status.toUpperCase()}`)}
                >
                  <Text style={{ fontSize: 11, fontWeight: '900', color: textCol }}>{item.day}</Text>
                  <Text style={{ fontSize: 8, fontWeight: '900', color: textCol, marginTop: -1 }}>{badgeText}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Legend Bar */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 12, borderTopWidth: 1, borderTopColor: isDarkMode ? '#1E293B' : '#F1F5F9', paddingTop: 10 }}>
            <Text style={{ fontSize: 9.5, fontWeight: '800', color: '#16A34A' }}>🟢 Present (P)</Text>
            <Text style={{ fontSize: 9.5, fontWeight: '800', color: '#DC2626' }}>🔴 Absent (A)</Text>
            <Text style={{ fontSize: 9.5, fontWeight: '800', color: '#D97706' }}>🟡 Leave (L)</Text>
            <Text style={{ fontSize: 9.5, fontWeight: '800', color: '#64748B' }}>⚪ Sunday</Text>
          </View>
        </View>

        {/* 📚 SUBJECT-WISE ATTENDANCE BREAKDOWN */}
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionHeading, isDarkMode && { color: '#FFFFFF' }]}>📚 Subject-Wise Attendance %</Text>
        </View>

        <View style={{ gap: 10 }}>
          {subjectAttendance.map((sub, idx) => (
            <View key={idx} style={[{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 14, borderWidth: 1, borderColor: '#E2E8F0', gap: 8 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <Text style={{ fontSize: 18 }}>{sub.icon}</Text>
                  <Text style={[{ fontSize: 12.5, fontWeight: '900', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>{sub.name}</Text>
                </View>
                <Text style={{ fontSize: 12, fontWeight: '900', color: sub.color }}>{sub.percentage}%</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 9.5, color: '#64748B' }}>Attended: {sub.attended} / {sub.total} Classes</Text>
                <Text style={{ fontSize: 9, fontWeight: '900', color: '#16A34A', backgroundColor: '#DCFCE7', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>STATUS: REGULAR ✓</Text>
              </View>

              {/* Progress Bar */}
              <View style={{ height: 6, backgroundColor: isDarkMode ? '#1E293B' : '#F1F5F9', borderRadius: 3, overflow: 'hidden' }}>
                <View style={{ width: `${sub.percentage}%`, height: '100%', backgroundColor: sub.color, borderRadius: 3 }} />
              </View>
            </View>
          ))}
        </View>

        {/* 🕒 DETAILED ATTENDANCE LOG */}
        <View style={styles.sectionHeaderRow}>
          <Text style={[styles.sectionHeading, isDarkMode && { color: '#FFFFFF' }]}>🕒 Recent Attendance Log</Text>
        </View>

        <View style={[{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 14, borderWidth: 1, borderColor: '#E2E8F0', gap: 10 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
          {attendanceLog.map((log, idx) => (
            <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderBottomWidth: idx === attendanceLog.length - 1 ? 0 : 1, borderBottomColor: isDarkMode ? '#1E293B' : '#F1F5F9', paddingBottom: 8 }}>
              <Text style={{ fontSize: 16 }}>{log.icon}</Text>
              <View style={{ flex: 1 }}>
                <Text style={[{ fontSize: 11.5, fontWeight: '800', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>{log.date} ({log.day})</Text>
                <Text style={{ fontSize: 9.5, color: '#64748B' }}>{log.note}</Text>
              </View>
              <Text style={{ fontSize: 9, fontWeight: '900', color: log.status === 'Present' ? '#16A34A' : log.status === 'Absent' ? '#DC2626' : '#D97706', backgroundColor: log.status === 'Present' ? '#DCFCE7' : log.status === 'Absent' ? '#FEE2E2' : '#FEF3C7', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 }}>
                {log.status}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

  // ================= NOTIFICATION CENTER RENDER FUNCTION =================

  const renderNotificationsSubScreen = () => {
    const notificationsList = [
      {
        id: 1,
        category: 'Live Classes',
        title: '⚡ Physics Live Lecture Starting in 15 Mins!',
        desc: 'Chapter 4: Electrostatics & Potential by Mr. Anil Jha in Main Hall. Click to join stream.',
        time: '15 Mins ago',
        icon: '🔴',
        badgeColor: '#EF4444',
        bgBadge: 'rgba(239, 68, 68, 0.15)',
        actionText: 'Join Stream ➔',
        actionType: 'live',
      },
      {
        id: 2,
        category: 'Test Result',
        title: '🏆 MSAT Mock Test #4 Scorecard Published!',
        desc: 'Congratulations Rahul! You scored 92% (Rank #4 in Bihar State). Subjectwise breakdown available.',
        time: '1 Hour ago',
        icon: '🏆',
        badgeColor: '#10B981',
        bgBadge: 'rgba(16, 185, 129, 0.15)',
        actionText: 'View Scorecard ➔',
        actionType: 'result',
      },
      {
        id: 3,
        category: 'Homework',
        title: '📝 New Homework Assigned: Physics PYQ Worksheet',
        desc: 'Solve all 15 numerical problems in your notebook and upload PDF solution by 5:00 PM today.',
        time: '3 Hours ago',
        icon: '📄',
        badgeColor: '#F59E0B',
        bgBadge: 'rgba(245, 158, 11, 0.15)',
        actionText: 'Submit Solution ➔',
        actionType: 'homework',
      },
      {
        id: 4,
        category: 'Fees',
        title: '💳 Fee Payment Success: July 2026 Installment',
        desc: 'Payment of ₹3,500 received with thanks. Digital receipt #MNL-2026-781 generated.',
        time: 'Yesterday',
        icon: '💳',
        badgeColor: '#38BDF8',
        bgBadge: 'rgba(56, 189, 248, 0.15)',
        actionText: 'Download Receipt ➔',
        actionType: 'fee',
      },
      {
        id: 5,
        category: 'Admission',
        title: '🎓 Admissions Open for Target NEET/JEE Dropper Batches!',
        desc: 'Early Bird Scholarship Waiver of flat 40% available for top rankers till 31st July.',
        time: '2 Days ago',
        icon: '🎓',
        badgeColor: '#8B5CF6',
        bgBadge: 'rgba(139, 92, 246, 0.15)',
        actionText: 'Reserve Slot ➔',
        actionType: 'admission',
      },
      {
        id: 6,
        category: 'Announcements',
        title: '📢 Independence Day Flag Hoisting & Scholarship Drive',
        desc: 'Special campus event on 15th August at 9:00 AM followed by State Merit Scholarship Award ceremony.',
        time: '3 Days ago',
        icon: '📢',
        badgeColor: '#EC4899',
        bgBadge: 'rgba(236, 72, 153, 0.15)',
        actionText: 'Read Circular ➔',
        actionType: 'announcement',
      },
    ];

    const filteredNotifs = notificationsList.filter(
      (item) => notifFilter === 'All' || item.category === notifFilter
    );

    const markAllRead = () => {
      setReadNotifIds(notificationsList.map((n) => n.id));
      Alert.alert('Notifications', 'All notifications marked as read!');
    };

    return (
      <ScrollView style={{ flex: 1, padding: 16 }} contentContainerStyle={{ gap: 14 }}>
        {/* Header Summary Card */}
        <View style={[{ backgroundColor: '#051329', borderRadius: 24, padding: 18, borderWidth: 1.5, borderColor: '#1E293B', gap: 12 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Text style={{ fontSize: 22 }}>🔔</Text>
              <Text style={{ fontSize: 13, fontWeight: '900', color: '#F59E0B', letterSpacing: 0.5 }}>NOTIFICATION CENTER</Text>
            </View>

            <TouchableOpacity style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)', borderWidth: 1, borderColor: '#F59E0B', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 }} onPress={markAllRead}>
              <Text style={{ fontSize: 9.5, fontWeight: '900', color: '#F59E0B' }}>Mark All Read ✓</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: '900', color: '#FFFFFF' }}>Updates & Circulars</Text>
              <Text style={{ fontSize: 10.5, color: '#94A3B8', marginTop: 2 }}>Classes, Homework, Results, Fees & Admissions</Text>
            </View>

            <View style={{ backgroundColor: '#EF4444', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 }}>
              <Text style={{ fontSize: 10, fontWeight: '900', color: '#FFFFFF' }}>
                {notificationsList.length - readNotifIds.length} NEW
              </Text>
            </View>
          </View>
        </View>

        {/* Category Filter Pills (Admission, Homework, Live Classes, Test Result, Fees, Announcements) */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingVertical: 4 }}>
          {[
            { label: 'All', icon: '🔔' },
            { label: 'Live Classes', icon: '🔴' },
            { label: 'Test Result', icon: '🏆' },
            { label: 'Homework', icon: '📝' },
            { label: 'Fees', icon: '💳' },
            { label: 'Admission', icon: '🎓' },
            { label: 'Announcements', icon: '📢' },
          ].map((cat, idx) => (
            <TouchableOpacity
              key={idx}
              style={{ backgroundColor: notifFilter === cat.label ? '#F59E0B' : isDarkMode ? '#0D1E36' : '#FFFFFF', borderWidth: 1, borderColor: notifFilter === cat.label ? '#F59E0B' : isDarkMode ? '#1E293B' : '#E2E8F0', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, flexDirection: 'row', alignItems: 'center', gap: 6 }}
              onPress={() => setNotifFilter(cat.label)}
            >
              <Text style={{ fontSize: 12 }}>{cat.icon}</Text>
              <Text style={{ fontSize: 11, fontWeight: '900', color: notifFilter === cat.label ? '#051329' : isDarkMode ? '#FFFFFF' : '#0F172A' }}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Notifications List */}
        <View style={{ gap: 10 }}>
          {filteredNotifs.map((notif) => {
            const isRead = readNotifIds.includes(notif.id);

            return (
              <TouchableOpacity
                key={notif.id}
                style={[{ backgroundColor: isRead ? '#F8FAFC' : '#FFFFFF', borderRadius: 20, padding: 16, borderWidth: isRead ? 1 : 1.5, borderColor: isRead ? '#E2E8F0' : '#F59E0B', gap: 10 }, isDarkMode && { backgroundColor: isRead ? '#0F172A' : '#0D1E36', borderColor: isRead ? '#1E293B' : '#F59E0B' }]}
                onPress={() => {
                  if (!readNotifIds.includes(notif.id)) {
                    setReadNotifIds([...readNotifIds, notif.id]);
                  }
                  if (notif.actionType === 'homework') setSubScreen('homework');
                  else if (notif.actionType === 'result') setSubScreen('view_progress');
                  else if (notif.actionType === 'admission') setActiveTab('admission');
                  else Alert.alert(notif.title, notif.desc);
                }}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: notif.bgBadge, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 16 }}>{notif.icon}</Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: 10, fontWeight: '900', color: notif.badgeColor, textTransform: 'uppercase' }}>{notif.category}</Text>
                      <Text style={{ fontSize: 9.5, color: '#94A3B8' }}>{notif.time}</Text>
                    </View>
                  </View>

                  {!isRead && (
                    <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#EF4444' }} />
                  )}
                </View>

                <Text style={[{ fontSize: 13.5, fontWeight: '900', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>{notif.title}</Text>
                <Text style={[{ fontSize: 10.5, color: '#64748B', lineHeight: 16 }, isDarkMode && { color: '#CBD5E1' }]}>{notif.desc}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', borderTopWidth: 1, borderTopColor: isDarkMode ? '#1E293B' : '#F1F5F9', paddingTop: 8 }}>
                  <Text style={{ fontSize: 10.5, fontWeight: '900', color: '#F59E0B' }}>{notif.actionText}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
  };

  const renderSubScreen = () => {
    return (
      <View style={styles.subScreenContainer}>
        {/* Header / Back Bar */}
        <View style={[styles.subScreenHeader, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
          <TouchableOpacity style={[styles.subScreenBackBtn, isDarkMode && { backgroundColor: '#1E293B' }]} onPress={() => setSubScreen('none')}>
            <Text style={[styles.subScreenBackBtnText, isDarkMode && { color: '#FFFFFF' }]}>⬅ Back</Text>
          </TouchableOpacity>
          <Text style={[styles.subScreenTitle, isDarkMode && { color: '#FFFFFF' }]}>
            {subScreen === 'about' && 'About Us'}
            {subScreen === 'faculty' && 'Our Faculty'}
            {subScreen === 'gallery' && 'Campus Gallery'}
            {subScreen === 'library_info' && 'Central Library'}
            {subScreen === 'contact_info' && 'Contact Us'}
            {subScreen === 'faq' && 'FAQs'}
            {subScreen === 'disclaimer' && 'Disclaimer'}
            {subScreen === 'privacy' && 'Privacy Policy'}
            {subScreen === 'terms' && 'Terms & Conditions'}
            {subScreen === 'edit_profile' && 'Edit Profile'}
            {subScreen === 'change_password' && 'Change Password'}
            {subScreen === 'notifications' && 'Notification Settings'}
            {subScreen === 'help_support' && 'Help & Support'}
            {subScreen === 'view_progress' && 'My Progress'}
            {subScreen === 'premium_request' && 'Course & Batch Counselor'}
            {subScreen === 'homework' && 'Homework & Assignments'}
            {subScreen === 'attendance' && 'Student Attendance'}
          </Text>
        </View>

        {/* Content */}
        {subScreen === 'about' && renderAboutSubScreen()}
        {subScreen === 'faculty' && renderFacultySubScreen()}
        {subScreen === 'gallery' && renderGallerySubScreen()}
        {subScreen === 'library_info' && renderLibrarySubScreen()}
        {subScreen === 'contact_info' && renderContactSubScreen()}
        {subScreen === 'faq' && renderFAQSubScreen()}
        {subScreen === 'disclaimer' && renderDisclaimerSubScreen()}
        {subScreen === 'privacy' && renderPrivacySubScreen()}
        {subScreen === 'terms' && renderTermsSubScreen()}
        {subScreen === 'edit_profile' && renderEditProfileSubScreen()}
        {subScreen === 'change_password' && renderChangePasswordSubScreen()}
        {subScreen === 'notifications' && renderNotificationsSubScreen()}
        {subScreen === 'help_support' && renderHelpSupportSubScreen()}
        {subScreen === 'view_progress' && renderViewProgressSubScreen()}
        {subScreen === 'premium_request' && renderPremiumRequestSubScreen()}
        {subScreen === 'homework' && renderHomeworkSubScreen()}
        {subScreen === 'attendance' && renderAttendanceSubScreen()}
      </View>
    );
  };

  if (authScreen !== 'authenticated') {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#051329' }}>
        <ExpoStatusBar style="light" backgroundColor="#051329" />
        {renderAuthScreens()}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, themeContainerStyle]}>
      <ExpoStatusBar style={isDarkMode ? "light" : "dark"} backgroundColor={isDarkMode ? "#051329" : "#FFFFFF"} />

      {/* Main Header */}
      <View style={[styles.header, isDarkMode && { backgroundColor: '#0D1E36', borderBottomColor: '#1E293B' }]}>
        <View style={styles.headerLeft}>
          <View style={styles.logoBadgeContainer}>
            <Image source={require('./assets/logo.png')} style={styles.logoImageHeader} />
          </View>
          <View>
            <Text style={[styles.logoTitle, isDarkMode && { color: '#FFFFFF' }]}>MOONLIGHT</Text>
            <Text style={[styles.logoSubtitle, isDarkMode && { color: '#94A3B8' }]}>COACHING CENTRE</Text>
            <Text style={[styles.logoTagline, isDarkMode && { color: '#64748B' }]}>Strong Foundation, Bright Future!</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={[styles.headerIconBtn, isDarkMode && { backgroundColor: '#1E293B' }]} 
            onPress={() => setSubScreen('notifications')}
          >
            <Text style={{ fontSize: 18 }}>🔔</Text>
            <View style={styles.bellRedDot} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.headerIconBtn, isDarkMode && { backgroundColor: '#1E293B' }]} 
            onPress={() => setShowSearchModal(true)}
          >
            <Text style={{ fontSize: 18 }}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Scrollable Screen Content */}
      <ScrollView ref={scrollViewRef} contentContainerStyle={[styles.scrollContent, themeContainerStyle]} showsVerticalScrollIndicator={false}>
        {subScreen !== 'none' && renderSubScreen()}

        {/* ================= HOME TAB (FULL RICH HOMEPAGE FEED) ================= */}
        {subScreen === 'none' && activeTab === 'home' && (
          <View style={styles.tabContent}>
            
            {/* 1. ORIGINAL HERO CARD */}
            <View style={styles.heroCard}>
              {/* Badge */}
              <View style={styles.heroBestBadge}>
                <Text style={styles.heroBestBadgeStar}>⭐</Text>
                <Text style={styles.heroBestBadgeText}>BEST COACHING FOR YOUR BRIGHT FUTURE</Text>
              </View>

              {/* Row for Left Text and Right Image */}
              <View style={styles.heroMainRow}>
                {/* Left Side Column */}
                <View style={styles.heroTextCol}>
                  <Text style={styles.heroTitleWhite}>Learn Today,</Text>
                  <Text style={styles.heroTitleYellow}>Lead Tomorrow</Text>
                  
                  <Text style={styles.heroSubtextText}>
                    Explore courses, regular tests, and expert guidance.
                  </Text>

                  {/* Buttons */}
                  <View style={styles.heroBtnRow}>
                    <TouchableOpacity style={styles.primaryYellowBtn} onPress={() => setSubScreen('premium_request')}>
                      <Text style={styles.primaryYellowBtnText}>Get Started ➔</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondaryBorderBtn} onPress={handleCall}>
                      <Text style={styles.secondaryBorderBtnText}>Book a Free Demo ➔</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Right Side Column */}
                <View style={styles.heroImageCol}>
                  <Image 
                    source={require('./assets/indian_girl_student.png')} 
                    style={styles.heroRightImage} 
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>

            {/* 2. JOIN NEW BATCHES BAR */}
            <View style={styles.joinBatchesBar}>
              <View>
                <Text style={styles.joinBatchesTitle}>Join New Batches.</Text>
                <Text style={styles.joinBatchesSubtitle}>Admissions 2025-26</Text>
              </View>
              <TouchableOpacity style={styles.enrolNowBtn} onPress={() => setActiveTab('admission')}>
                <Text style={styles.enrolNowBtnText}>Enrol Now!</Text>
              </TouchableOpacity>
            </View>

            {/* 👑 3. PERSONALIZED STUDENT DASHBOARD (MID SECTION) */}
            <View style={[{ backgroundColor: '#051329', borderRadius: 24, padding: 18, borderWidth: 1.5, borderColor: '#1E293B', gap: 14 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
              {/* User Welcome Row */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                  <TouchableOpacity onPress={() => setSubScreen('edit_profile')}>
                    <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#0D1E36', borderWidth: 2, borderColor: '#F59E0B', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 24 }}>{userAvatar}</Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: '900', color: '#FFFFFF' }}>Welcome {userName} 👋</Text>
                    <Text style={{ fontSize: 10.5, color: '#F59E0B', fontWeight: '800' }}>👑 {userClass} • Batch A-1</Text>
                  </View>
                </View>

                <TouchableOpacity style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)', borderWidth: 1, borderColor: '#F59E0B', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 12 }} onPress={() => setSubScreen('view_progress')}>
                  <Text style={{ fontSize: 10, fontWeight: '900', color: '#F59E0B' }}>📊 My Rank #4</Text>
                </TouchableOpacity>
              </View>

              {/* NEXT CLASS COUNTDOWN CARD */}
              <View style={{ backgroundColor: '#030F26', borderRadius: 18, padding: 14, borderWidth: 1, borderColor: '#F59E0B', gap: 8 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                    <Text style={{ fontSize: 14 }}>⏰</Text>
                    <Text style={{ fontSize: 10.5, fontWeight: '900', color: '#F59E0B', letterSpacing: 0.5 }}>NEXT LIVE CLASS COUNTDOWN</Text>
                  </View>
                  <View style={{ backgroundColor: '#EF4444', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 }}>
                    <Text style={{ fontSize: 9, fontWeight: '900', color: '#FFFFFF' }}>🔴 LIVE IN 00:45:12</Text>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 13, fontWeight: '900', color: '#FFFFFF' }}>⚡ Physics: Electrostatics & Potential</Text>
                    <Text style={{ fontSize: 10.5, color: '#94A3B8', marginTop: 2 }}>Faculty: Mr. Anil Jha • Room: Main Hall</Text>
                    <Text style={{ fontSize: 10, color: '#38BDF8', fontWeight: '800', marginTop: 2 }}>⏰ 10:00 AM - 12:15 PM (Today)</Text>
                  </View>
                  <TouchableOpacity style={[styles.primaryYellowBtn, { paddingVertical: 8, paddingHorizontal: 12 }]} onPress={() => Alert.alert('Live Class', 'Opening Live Classroom Stream for Physics...')}>
                    <Text style={[styles.primaryYellowBtnText, { fontSize: 10 }]}>Join Class ➔</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* 4 QUICK METRICS GRID (Attendance %, Fee Due, Pending Homework, Upcoming Test) */}
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                {/* Metric 1: Attendance % */}
                <TouchableOpacity style={{ flex: 1, minWidth: '45%', backgroundColor: '#0D1E36', borderRadius: 16, padding: 12, borderWidth: 1, borderColor: '#1E293B', gap: 4 }} onPress={() => setSubScreen('attendance')}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16 }}>📊</Text>
                    <Text style={{ fontSize: 8.5, fontWeight: '900', color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.15)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>EXCELLENT</Text>
                  </View>
                  <Text style={{ fontSize: 18, fontWeight: '900', color: '#FFFFFF' }}>94%</Text>
                  <Text style={{ fontSize: 9.5, color: '#94A3B8', fontWeight: '700' }}>Attendance Rate (47/50 Days) ➔</Text>
                </TouchableOpacity>

                {/* Metric 2: Fee Due */}
                <View style={{ flex: 1, minWidth: '45%', backgroundColor: '#0D1E36', borderRadius: 16, padding: 12, borderWidth: 1, borderColor: '#1E293B', gap: 4 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16 }}>💳</Text>
                    <Text style={{ fontSize: 8.5, fontWeight: '900', color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.15)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>PAID ✓</Text>
                  </View>
                  <Text style={{ fontSize: 18, fontWeight: '900', color: '#FFFFFF' }}>₹0 Due</Text>
                  <Text style={{ fontSize: 9.5, color: '#94A3B8', fontWeight: '700' }}>July Paid • Next Due: 15 Aug</Text>
                </View>

                {/* Metric 3: Pending Homework */}
                <View style={{ flex: 1, minWidth: '45%', backgroundColor: '#0D1E36', borderRadius: 16, padding: 12, borderWidth: 1, borderColor: '#1E293B', gap: 4 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16 }}>📝</Text>
                    <Text style={{ fontSize: 8.5, fontWeight: '900', color: '#F59E0B', backgroundColor: 'rgba(245, 158, 11, 0.15)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>3 PENDING</Text>
                  </View>
                  <Text style={{ fontSize: 18, fontWeight: '900', color: '#FFFFFF' }}>3 Tasks</Text>
                  <Text style={{ fontSize: 9.5, color: '#94A3B8', fontWeight: '700' }}>Physics PYQ & Calculus Ex</Text>
                </View>

                {/* Metric 4: Upcoming Test */}
                <View style={{ flex: 1, minWidth: '45%', backgroundColor: '#0D1E36', borderRadius: 16, padding: 12, borderWidth: 1, borderColor: '#1E293B', gap: 4 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16 }}>🏆</Text>
                    <Text style={{ fontSize: 8.5, fontWeight: '900', color: '#38BDF8', backgroundColor: 'rgba(56, 189, 248, 0.15)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>SUN 28 JUL</Text>
                  </View>
                  <Text style={{ fontSize: 18, fontWeight: '900', color: '#FFFFFF' }}>MSAT #4</Text>
                  <Text style={{ fontSize: 9.5, color: '#94A3B8', fontWeight: '700' }}>Full Length Mock (180 Mins)</Text>
                </View>
              </View>
            </View>

            {/* 🗓️ 4. TODAY'S SCHEDULE (TIMETABLE WIDGET) */}
            <View style={styles.sectionHeaderRow}>
              <Text style={[styles.sectionHeading, isDarkMode && { color: '#FFFFFF' }]}>🗓️ Today's Schedule</Text>
              <TouchableOpacity onPress={() => Alert.alert('Full Timetable', 'Opening weekly class schedule...')}>
                <Text style={styles.seeAllText}>Full Schedule ➔</Text>
              </TouchableOpacity>
            </View>

            <View style={{ gap: 8 }}>
              {[
                { time: '08:00 AM - 10:00 AM', title: '📐 Mathematics: Calculus & Definite Integrals', room: 'Room 102', teacher: 'Mr. Rahul Singh', status: 'Completed', icon: '📐' },
                { time: '10:15 AM - 12:15 PM', title: '⚡ Physics: Electrostatics & Potential', room: 'Main Hall', teacher: 'Mr. Anil Jha', status: 'Next Class', icon: '⚡' },
                { time: '02:00 PM - 04:00 PM', title: '🧪 Chemistry: Organic Mechanisms', room: 'Lab 2', teacher: 'Mrs. Priya Kumari', status: 'Upcoming', icon: '🧪' }
              ].map((item, idx) => (
                <View key={idx} style={[{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 12, borderRadius: 16, borderWidth: 1, borderColor: '#E2E8F0', justifyContent: 'space-between' }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1 }}>
                    <View style={{ width: 38, height: 38, borderRadius: 19, backgroundColor: item.status === 'Next Class' ? '#FEF3C7' : '#F1F5F9', alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 18 }}>{item.icon}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={[{ fontSize: 12, fontWeight: '900', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>{item.title}</Text>
                      <Text style={[{ fontSize: 9.5, color: '#64748B', marginTop: 2 }, isDarkMode && { color: '#94A3B8' }]}>⏰ {item.time} • {item.room} ({item.teacher})</Text>
                    </View>
                  </View>
                  <Text style={{ fontSize: 9, fontWeight: '900', color: item.status === 'Next Class' ? '#B45309' : item.status === 'Completed' ? '#16A34A' : '#64748B', backgroundColor: item.status === 'Next Class' ? '#FDE68A' : '#F1F5F9', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 }}>
                    {item.status}
                  </Text>
                </View>
              ))}
            </View>

            {/* 📝 5. PENDING HOMEWORK CHECKLIST */}
            <View style={styles.sectionHeaderRow}>
              <Text style={[styles.sectionHeading, isDarkMode && { color: '#FFFFFF' }]}>📝 Homework & Assignments</Text>
              <TouchableOpacity onPress={() => setSubScreen('homework')}>
                <Text style={styles.seeAllText}>Open Portal ➔</Text>
              </TouchableOpacity>
            </View>

            <View style={[{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 14, borderWidth: 1, borderColor: '#E2E8F0', gap: 10 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
              {[
                { id: 1, title: 'Physics Chapter 4 PYQ Worksheet', sub: 'Due Today by 5:00 PM • 15 Questions', tag: 'High Priority' },
                { id: 2, title: 'Calculus Integration Exercise 3.2', sub: 'Due Tomorrow • Page 142 NCERT', tag: 'Medium' },
                { id: 3, title: 'Chemistry Lab Journal - Electrochemistry', sub: 'Due Friday • Lab Report #3', tag: 'Normal' }
              ].map((hw) => {
                const isChecked = completedHomework.includes(hw.id);
                return (
                  <TouchableOpacity
                    key={hw.id}
                    style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderBottomWidth: 1, borderBottomColor: isDarkMode ? '#1E293B' : '#F1F5F9', paddingBottom: 8 }}
                    onPress={() => toggleHomework(hw.id)}
                  >
                    <Text style={{ fontSize: 18 }}>{isChecked ? '✅' : '⬜'}</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={[{ fontSize: 11.5, fontWeight: '800', color: isChecked ? '#94A3B8' : '#0F172A', textDecorationLine: isChecked ? 'line-through' : 'none' }, isDarkMode && !isChecked && { color: '#FFFFFF' }]}>
                        {hw.title}
                      </Text>
                      <Text style={{ fontSize: 9.5, color: '#64748B' }}>{hw.sub}</Text>
                    </View>
                    <Text style={{ fontSize: 8.5, fontWeight: '900', color: hw.tag === 'High Priority' ? '#EF4444' : '#64748B', backgroundColor: isDarkMode ? '#1E293B' : '#F1F5F9', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }}>
                      {hw.tag}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* 📚 6. CONTINUE LEARNING CAROUSEL */}
            <View style={styles.sectionHeaderRow}>
              <Text style={[styles.sectionHeading, isDarkMode && { color: '#FFFFFF' }]}>📚 Continue Learning</Text>
              <TouchableOpacity onPress={() => setActiveTab('courses')}>
                <Text style={styles.seeAllText}>All Courses ➔</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
              {[
                { title: 'Class 12 Physics', progress: 68, last: 'Capacitance & Dielectrics', icon: '⚡', color: '#F59E0B' },
                { title: 'Class 12 Mathematics', progress: 82, last: 'Definite Integrals', icon: '📐', color: '#2563EB' },
                { title: 'Class 12 Chemistry', progress: 54, last: 'Aldehydes & Ketones', icon: '🧪', color: '#10B981' }
              ].map((c, idx) => (
                <TouchableOpacity key={idx} style={[{ width: 210, backgroundColor: '#FFFFFF', borderRadius: 18, padding: 14, borderWidth: 1, borderColor: '#E2E8F0', gap: 8 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]} onPress={() => setActiveTab('courses')}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <Text style={{ fontSize: 20 }}>{c.icon}</Text>
                    <Text style={[{ fontSize: 12, fontWeight: '900', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>{c.title}</Text>
                  </View>

                  <Text style={{ fontSize: 9.5, color: '#64748B' }}>Last: {c.last}</Text>

                  {/* Progress Bar */}
                  <View style={{ gap: 4 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ fontSize: 8.5, color: '#94A3B8', fontWeight: '800' }}>Progress</Text>
                      <Text style={{ fontSize: 8.5, color: c.color, fontWeight: '900' }}>{c.progress}%</Text>
                    </View>
                    <View style={{ height: 5, backgroundColor: isDarkMode ? '#1E293B' : '#F1F5F9', borderRadius: 3, overflow: 'hidden' }}>
                      <View style={{ width: `${c.progress}%`, height: '100%', backgroundColor: c.color, borderRadius: 3 }} />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* 🕒 7. RECENT ACTIVITY TIMELINE */}
            <View style={styles.sectionHeaderRow}>
              <Text style={[styles.sectionHeading, isDarkMode && { color: '#FFFFFF' }]}>🕒 Recent Activity</Text>
            </View>

            <View style={[{ backgroundColor: '#FFFFFF', borderRadius: 20, padding: 14, borderWidth: 1, borderColor: '#E2E8F0', gap: 10 }, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]}>
              {[
                { title: 'Scorecard Updated', desc: 'Scored 92% in Physics Daily Test #14', time: '2 hours ago', icon: '🏆' },
                { title: 'Library Book Issued', desc: 'Concepts of Physics Vol 2 by HC Verma', time: 'Yesterday', icon: '📖' },
                { title: 'Assignment Submitted', desc: 'Calculus Differential Equations Practice Sheet', time: '2 days ago', icon: '📝' }
              ].map((act, idx) => (
                <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, borderBottomWidth: idx === 2 ? 0 : 1, borderBottomColor: isDarkMode ? '#1E293B' : '#F1F5F9', paddingBottom: 8 }}>
                  <Text style={{ fontSize: 18 }}>{act.icon}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={[{ fontSize: 11.5, fontWeight: '800', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>{act.title}</Text>
                    <Text style={{ fontSize: 9.5, color: '#64748B' }}>{act.desc}</Text>
                  </View>
                  <Text style={{ fontSize: 9, color: '#94A3B8', fontWeight: '700' }}>{act.time}</Text>
                </View>
              ))}
            </View>

            {/* 👑 PREMIUM COURSE & BATCH SELECTOR BANNER */}
            <View style={[{ backgroundColor: '#051329', borderRadius: 20, padding: 16, borderWidth: 1, borderColor: '#1E293B', gap: 10, marginVertical: 4 }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(245, 158, 11, 0.15)', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12, alignSelf: 'flex-start', gap: 6 }}>
                <Text style={{ fontSize: 13 }}>👑</Text>
                <Text style={{ color: '#F59E0B', fontSize: 10, fontWeight: '900', letterSpacing: 0.5 }}>CUSTOM BATCH & CONTENT SELECTOR</Text>
              </View>

              <View style={{ gap: 4 }}>
                <Text style={{ fontSize: 18, fontWeight: '900', color: '#FFFFFF' }}>Find Your Class Batch & Unlock Premium Plan!</Text>
                <Text style={{ fontSize: 11.5, color: '#CBD5E1', lineHeight: 16 }}>
                  Choose your Class Segment, Exam Goal (JEE / NEET / Boards), and preferred batch timings to unlock custom study roadmaps, printed kits & scholarship waivers.
                </Text>
              </View>

              <TouchableOpacity 
                style={[styles.primaryYellowBtn, { alignSelf: 'flex-start', paddingHorizontal: 16, paddingVertical: 10 }]} 
                onPress={() => setSubScreen('premium_request')}
              >
                <Text style={styles.primaryYellowBtnText}>Select Class & Customize Plan ➔</Text>
              </TouchableOpacity>
            </View>

            {/* 3. KEY FEATURES BAR */}
            <View style={styles.featuresRowBar}>
              <View style={styles.featureColItem}>
                <View style={[styles.featureIconCircle, { backgroundColor: '#EFF6FF' }]}>
                  <Text style={styles.featureEmoji}>🎓</Text>
                </View>
                <Text style={styles.featureColTitle}>Expert Faculty</Text>
                <Text style={styles.featureColDesc}>Learn from high-qualified and experienced teachers.</Text>
              </View>

              <View style={styles.featureColItem}>
                <View style={[styles.featureIconCircle, { backgroundColor: '#FDF2F8' }]}>
                  <Text style={styles.featureEmoji}>📈</Text>
                </View>
                <Text style={styles.featureColTitle}>Regular Tests &{"\n"}Analysts</Text>
                <Text style={styles.featureColDesc}>Track your program and improve continuously.</Text>
              </View>

              <View style={styles.featureColItem}>
                <View style={[styles.featureIconCircle, { backgroundColor: '#FEF3C7' }]}>
                  <Text style={styles.featureEmoji}>🎯</Text>
                </View>
                <Text style={styles.featureColTitle}>Personal Attention</Text>
              </View>
            </View>

            {/* UPCOMING BATCHES SECTION */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Upcoming Batches</Text>
              <TouchableOpacity onPress={() => setActiveTab('admission')}>
                <Text style={styles.seeAllText}>Enrol Now</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingVertical: 4 }}>
              {/* Batch 1 */}
              <View style={styles.batchCard}>
                <View style={[styles.batchBadge, { backgroundColor: '#FEE2E2' }]}>
                  <Text style={[styles.batchBadgeText, { color: '#EF4444' }]}>NEET 2026</Text>
                </View>
                <Text style={styles.batchTitle}>NEET Target Batch</Text>
                <Text style={styles.batchInfoText}>📅 Starts: 1st Aug 2025</Text>
                <Text style={styles.batchInfoText}>⏰ Time: 9:00 AM - 1:00 PM</Text>
                <TouchableOpacity style={styles.batchBtn} onPress={() => setActiveTab('admission')}>
                  <Text style={styles.batchBtnText}>Book Seat ➔</Text>
                </TouchableOpacity>
              </View>

              {/* Batch 2 */}
              <View style={styles.batchCard}>
                <View style={[styles.batchBadge, { backgroundColor: '#DBEAFE' }]}>
                  <Text style={[styles.batchBadgeText, { color: '#2563EB' }]}>JEE 2026</Text>
                </View>
                <Text style={styles.batchTitle}>JEE Mains Booster</Text>
                <Text style={styles.batchInfoText}>📅 Starts: 5th Aug 2025</Text>
                <Text style={styles.batchInfoText}>⏰ Time: 2:00 PM - 6:00 PM</Text>
                <TouchableOpacity style={styles.batchBtn} onPress={() => setActiveTab('admission')}>
                  <Text style={styles.batchBtnText}>Book Seat ➔</Text>
                </TouchableOpacity>
              </View>

              {/* Batch 3 */}
              <View style={styles.batchCard}>
                <View style={[styles.batchBadge, { backgroundColor: '#D1FAE5' }]}>
                  <Text style={[styles.batchBadgeText, { color: '#059669' }]}>Class 10th</Text>
                </View>
                <Text style={styles.batchTitle}>Board Exam Special</Text>
                <Text style={styles.batchInfoText}>📅 Starts: 10th Aug 2025</Text>
                <Text style={styles.batchInfoText}>⏰ Time: 4:00 PM - 7:00 PM</Text>
                <TouchableOpacity style={styles.batchBtn} onPress={() => setActiveTab('admission')}>
                  <Text style={styles.batchBtnText}>Book Seat ➔</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            {/* 4. COURSES DESIGNED FOR YOUR SUCCESS */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>
                Courses Designed {"\n"}For Your <Text style={{ color: '#F59E0B' }}>Success</Text>
              </Text>
              <TouchableOpacity onPress={() => setActiveTab('courses')}>
                <Text style={styles.seeAllText}>View All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.coursesCompactGrid}>
              {/* Row 1 */}
              <View style={styles.coursesGridRow}>
                <TouchableOpacity style={styles.courseGridCard} onPress={() => setActiveTab('courses')}>
                  <View style={[styles.courseGridIconCircle, { backgroundColor: '#EFF6FF' }]}>
                    <Text style={styles.courseEmoji}>📘</Text>
                  </View>
                  <Text style={styles.courseGridCardTitle}>Classes 6 - 10</Text>
                  <View style={styles.viewDetailsBtn}>
                    <Text style={styles.viewDetailsText}>View Details ➔</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.courseGridCard} onPress={() => setActiveTab('courses')}>
                  <View style={[styles.courseGridIconCircle, { backgroundColor: '#ECFDF5' }]}>
                    <Text style={styles.courseEmoji}>🎓</Text>
                  </View>
                  <Text style={styles.courseGridCardTitle}>Classes 11 & 12</Text>
                  <View style={styles.viewDetailsBtn}>
                    <Text style={styles.viewDetailsText}>View Details ➔</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Row 2 */}
              <View style={styles.coursesGridRow}>
                <TouchableOpacity style={styles.courseGridCard} onPress={() => setActiveTab('courses')}>
                  <View style={[styles.courseGridIconCircle, { backgroundColor: '#F5F3FF' }]}>
                    <Text style={styles.courseEmoji}>🎯</Text>
                  </View>
                  <Text style={styles.courseGridCardTitle}>Competitive Exams</Text>
                  <View style={styles.viewDetailsBtn}>
                    <Text style={styles.viewDetailsText}>View Details ➔</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.courseGridCard} onPress={() => setActiveTab('courses')}>
                  <View style={[styles.courseGridIconCircle, { backgroundColor: '#FFFBEB' }]}>
                    <Text style={styles.courseEmoji}>📖</Text>
                  </View>
                  <Text style={styles.courseGridCardTitle}>Foundation Courses</Text>
                  <View style={styles.viewDetailsBtn}>
                    <Text style={styles.viewDetailsText}>View Details ➔</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Row 3 */}
              <View style={styles.coursesGridRow}>
                <TouchableOpacity style={styles.courseGridCard} onPress={() => setActiveTab('courses')}>
                  <View style={[styles.courseGridIconCircle, { backgroundColor: '#FDF2F8' }]}>
                    <Text style={styles.courseEmoji}>🏅</Text>
                  </View>
                  <Text style={styles.courseGridCardTitle}>Board Preparation</Text>
                  <View style={styles.viewDetailsBtn}>
                    <Text style={styles.viewDetailsText}>View Details ➔</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.courseGridCard} onPress={() => setActiveTab('courses')}>
                  <View style={[styles.courseGridIconCircle, { backgroundColor: '#E0F2FE' }]}>
                    <Text style={styles.courseEmoji}>🎓</Text>
                  </View>
                  <Text style={styles.courseGridCardTitle}>Scholarship Exams</Text>
                  <View style={styles.viewDetailsBtn}>
                    <Text style={styles.viewDetailsText}>View Details ➔</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* OUR FACULTY SECTION */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Our Expert Faculty</Text>
              <TouchableOpacity onPress={() => setActiveTab('contact')}>
                <Text style={styles.seeAllText}>Meet All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingVertical: 4 }}>
              {/* Teacher 1 */}
              <View style={styles.teacherCard}>
                <View style={styles.teacherAvatarCircle}>
                  <Text style={{ fontSize: 24 }}>👨‍🏫</Text>
                </View>
                <Text style={styles.teacherName}>Mr. Anil Jha</Text>
                <Text style={styles.teacherRole}>Founder & Mathematics Expert</Text>
                <Text style={styles.teacherExp}>🎓 20+ Years Exp</Text>
              </View>

              {/* Teacher 2 */}
              <View style={styles.teacherCard}>
                <View style={styles.teacherAvatarCircle}>
                  <Text style={{ fontSize: 24 }}>👩‍🏫</Text>
                </View>
                <Text style={styles.teacherName}>Mrs. Priya Kumari</Text>
                <Text style={styles.teacherRole}>Physics Head</Text>
                <Text style={styles.teacherExp}>🎓 12+ Years Exp</Text>
              </View>

              {/* Teacher 3 */}
              <View style={styles.teacherCard}>
                <View style={styles.teacherAvatarCircle}>
                  <Text style={{ fontSize: 24 }}>👨‍🔬</Text>
                </View>
                <Text style={styles.teacherName}>Mr. Rahul Singh</Text>
                <Text style={styles.teacherRole}>Chemistry Specialist</Text>
                <Text style={styles.teacherExp}>🎓 10+ Years Exp</Text>
              </View>
            </ScrollView>

            {/* 5. COMPACT STATS BAR */}
            <View style={styles.statsBarNavy}>
              <View style={styles.statsBarItem}>
                <Text style={styles.statIconEmoji}>👥</Text>
                <Text style={styles.statsBarText}>500+ Students</Text>
              </View>
              <View style={styles.statsBarDivider} />
              <View style={styles.statsBarItem}>
                <Text style={styles.statIconEmoji}>🏆</Text>
                <Text style={styles.statsBarText}>50+ Awards</Text>
              </View>
              <View style={styles.statsBarDivider} />
              <View style={styles.statsBarItem}>
                <Text style={styles.statIconEmoji}>😊</Text>
                <Text style={styles.statsBarText}>95% Success</Text>
              </View>
            </View>

            {/* 6. SUCCESS STORIES */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Success Stories</Text>
              <TouchableOpacity onPress={() => setActiveTab('courses')}>
                <Text style={styles.seeAllText}>View All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingVertical: 4 }}>
              <View style={styles.successStoryCard}>
                <Text style={styles.quoteSymbol}>“</Text>
                <Text style={styles.successQuoteText}>
                  Moonlight Coaching Centre helped me build strong concepts and support are amazing!
                </Text>
                <View style={styles.successAuthorRow}>
                  <View>
                    <Text style={styles.successAuthorName}>Anjali Kumari</Text>
                    <Text style={styles.successAuthorTitle}>NEET Qualifier</Text>
                  </View>
                  <View style={styles.successAuthorPicBadge}>
                    <Text style={{ fontSize: 16 }}>👩‍🎓</Text>
                  </View>
                </View>
              </View>

              <View style={styles.successStoryCard}>
                <Text style={styles.quoteSymbol}>“</Text>
                <Text style={styles.successQuoteText}>
                  Great environment, regular tests and mock assessments improved my score significantly.
                </Text>
                <View style={styles.successAuthorRow}>
                  <View>
                    <Text style={styles.successAuthorName}>Rohit Kumar</Text>
                    <Text style={styles.successAuthorTitle}>JEE Mains Qualifier</Text>
                  </View>
                  <View style={styles.successAuthorPicBadge}>
                    <Text style={{ fontSize: 16 }}>👨‍🎓</Text>
                  </View>
                </View>
              </View>

              <View style={styles.successStoryCard}>
                <Text style={styles.quoteSymbol}>“</Text>
                <Text style={styles.successQuoteText}>
                  The study resources, peaceful environment, and separate reading rooms helped me a lot.
                </Text>
                <View style={styles.successAuthorRow}>
                  <View>
                    <Text style={styles.successAuthorName}>Sneha Singh</Text>
                    <Text style={styles.successAuthorTitle}>Class 12th Board (95%)</Text>
                  </View>
                  <View style={styles.successAuthorPicBadge}>
                    <Text style={{ fontSize: 16 }}>👩‍🎓</Text>
                  </View>
                </View>
              </View>
            </ScrollView>

            {/* Pagination Dots */}
            <View style={styles.dotsIndicatorRow}>
              <View style={[styles.dotIndicator, styles.dotIndicatorActive]} />
              <View style={styles.dotIndicator} />
              <View style={styles.dotIndicator} />
            </View>

            {/* VIDEO LECTURES SECTION */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Free Demo Lectures</Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://youtube.com')}>
                <Text style={styles.seeAllText}>Watch All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.demoVideoCard}>
              <View style={styles.demoVideoPlayIconCircle}>
                <Text style={{ fontSize: 24 }}>▶️</Text>
              </View>
              <View style={styles.demoVideoTextGroup}>
                <Text style={styles.demoVideoTitle}>Watch Free Lectures on YouTube</Text>
                <Text style={styles.demoVideoSub}>Learn shortcut tricks, formula revision & conceptual topics by experts.</Text>
                <TouchableOpacity style={styles.demoVideoBtn} onPress={() => Linking.openURL('https://youtube.com')}>
                  <Text style={styles.demoVideoBtnText}>Watch on YouTube 📺</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* 7. ABOUT US / MISSION / VISION CARD */}
            <View style={styles.footerNavyCard}>
              <View style={styles.footerRowGroup}>
                <View style={styles.footerColBlock}>
                  <Text style={styles.footerBlockTitle}>About Us</Text>
                  <Text style={styles.footerBlockText}>
                    Join Moonlight Coaching Centre and unlock your potential. We provide qualified educators, quality education, personal attention, and expert guidance.
                  </Text>
                </View>
                <View style={styles.footerColBlock}>
                  <Text style={styles.footerBlockTitle}>Mission/Vision</Text>
                  <Text style={styles.footerBlockText}>
                    We build pathways as our Mission and personal attention, highly targeted to provide a brighter future.
                  </Text>
                </View>
              </View>

              <View style={styles.footerNavyDivider} />

              <View style={styles.footerRowGroup}>
                <View style={styles.footerColBlock}>
                  <Text style={styles.footerBlockTitle}>Our Offerings</Text>
                  <Text style={styles.footerBlockSubtitle}>Classes 6-10</Text>
                  <Text style={styles.footerBlockBullet}>• Science & Math</Text>
                  <Text style={styles.footerBlockBullet}>• Classes 11 & 12</Text>
                  <Text style={styles.footerBlockBullet}>• Board preparation</Text>
                </View>
                <View style={styles.footerColBlock}>
                  <Text style={styles.footerBlockTitle}>Competitive Exams</Text>
                  <Text style={styles.footerBlockBullet}>• NEET Special Batches</Text>
                  <Text style={styles.footerBlockBullet}>• JEE Board online</Text>
                  <Text style={styles.footerBlockBullet}>• Competitive exams prep</Text>
                </View>
              </View>
            </View>

            {/* 8. CONTACT US BANNER */}
            <View style={styles.contactBarBanner}>
              <Text style={styles.contactBarText}>Have questions? Get direct assistance.</Text>
              <TouchableOpacity style={styles.contactBarBtn} onPress={handleCall}>
                <Text style={styles.contactBarBtnText}>Contact Us ➔</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* ================= COURSES TAB ================= */}
        {subScreen === 'none' && activeTab === 'courses' && (
          <View style={styles.tabContent}>
            
            {/* Header Title and Offers Button */}
            <View style={styles.coursesTabHeaderRow}>
              <View>
                <Text style={styles.coursesPageTitle}>Our Courses</Text>
                <Text style={styles.coursesPageSub}>Explore courses designed for your success.</Text>
              </View>
              <TouchableOpacity style={styles.offersBtn} onPress={() => Alert.alert('Special Offers', 'Get flat 20% off on all premium courses! Valid till 31st July.')}>
                <Text style={styles.offersBtnText}>🎁 Offers ➔</Text>
              </TouchableOpacity>
            </View>

            {/* Search and Filter Bar */}
            <View style={styles.searchBarRow}>
              <View style={styles.searchBarInputContainer}>
                <Text style={styles.searchIconSymbol}>🔍</Text>
                <TextInput 
                  style={styles.searchBarTextInput} 
                  placeholder="Search for courses, exams, topics..." 
                  placeholderTextColor="#94A3B8"
                />
              </View>
              <TouchableOpacity style={styles.filterBtn}>
                <Text style={styles.filterBtnIcon}>⏳</Text>
                <Text style={styles.filterBtnText}>Filter</Text>
              </TouchableOpacity>
            </View>

            {/* Horizontal Category Tab Bar */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryTabsScroll}>
              <TouchableOpacity style={[styles.categoryTabPill, styles.categoryTabPillActive]}>
                <Text style={styles.categoryTabIconEmoji}>📱</Text>
                <Text style={[styles.categoryTabTextPill, styles.categoryTabTextPillActive]}>All Courses</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.categoryTabPill}>
                <Text style={styles.categoryTabIconEmoji}>🏫</Text>
                <Text style={styles.categoryTabTextPill}>School</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.categoryTabPill}>
                <Text style={styles.categoryTabIconEmoji}>🎓</Text>
                <Text style={styles.categoryTabTextPill}>Foundation</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.categoryTabPill}>
                <Text style={styles.categoryTabIconEmoji}>🎯</Text>
                <Text style={styles.categoryTabTextPill}>Competitive</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.categoryTabPill}>
                <Text style={styles.categoryTabIconEmoji}>📋</Text>
                <Text style={styles.categoryTabTextPill}>Board Exams</Text>
              </TouchableOpacity>
            </ScrollView>

            {/* ⚡ PROMO BANNER */}
            <View style={styles.promoBannerCard}>
              <View style={styles.promoBannerMainRow}>
                {/* Left side text */}
                <View style={styles.promoBannerTextCol}>
                  <View style={styles.promoLimitBadge}>
                    <Text style={styles.promoLimitBadgeText}>⚡ LIMITED TIME OFFER</Text>
                  </View>
                  <Text style={styles.promoBannerTitleWhite}>Unlock Your</Text>
                  <Text style={styles.promoBannerTitleYellow}>True Potential!</Text>
                  <Text style={styles.promoBannerSub}>Join our premium courses and take the first step towards your dream career.</Text>
                  
                  <TouchableOpacity style={styles.promoEnrollBtn} onPress={() => setActiveTab('admission')}>
                    <Text style={styles.promoEnrollBtnText}>Enroll Now ➔</Text>
                  </TouchableOpacity>

                  {/* Rating / Enrolled students */}
                  <View style={styles.promoStudentsRow}>
                    <View style={styles.miniProfileAvatars}>
                      <Text style={{ fontSize: 11 }}>👨‍🎓👩‍🎓👨‍🏫</Text>
                    </View>
                    <View>
                      <Text style={styles.promoStudentsTextBold}>1.2K+</Text>
                      <Text style={styles.promoStudentsTextSub}>Students Enrolled</Text>
                    </View>
                  </View>
                </View>

                {/* Right side image */}
                <View style={styles.promoBannerImageCol}>
                  <Image 
                    source={require('./assets/indian_girl_student.png')} 
                    style={styles.promoBannerRightImage} 
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>

            {/* SCHOLARSHIP CARD (MSAT) */}
            <View style={styles.msatCardContainer}>
              <View style={styles.msatBadgeRow}>
                <View style={styles.msatBadge}>
                  <Text style={styles.msatBadgeText}>🏆 UP TO 90% SCHOLARSHIP</Text>
                </View>
              </View>
              <Text style={styles.msatCardTitle}>Moonlight Scholarship cum Admission Test</Text>
              <Text style={styles.msatCardDesc}>For students entering Class 6th to 12th & JEE/NEET droppers. Showcase your talent and get fee waivers!</Text>
              <View style={styles.msatBulletPointsRow}>
                <Text style={styles.msatBulletText}>• Online & Offline Modes</Text>
                <Text style={styles.msatBulletText}>• Target Maths, Science & IQ</Text>
              </View>
              <TouchableOpacity style={styles.msatRegisterBtn} onPress={() => setActiveTab('admission')}>
                <Text style={styles.msatRegisterBtnText}>Register for MSAT Test ➔</Text>
              </TouchableOpacity>
            </View>

            {/* Value Props Bar */}
            <View style={styles.coursesValuePropsBar}>
              <View style={styles.coursesValuePropItem}>
                <Text style={{ fontSize: 18 }}>👨‍🏫</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.coursesPropTitle}>Expert Faculty</Text>
                  <Text style={styles.coursesPropDesc}>Learn from highly experienced teachers.</Text>
                </View>
              </View>
              <View style={styles.coursesPropDivider} />
              <View style={styles.coursesValuePropItem}>
                <Text style={{ fontSize: 18 }}>📊</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.coursesPropTitle}>Regular Tests</Text>
                  <Text style={styles.coursesPropDesc}>Test series & analysis for improvement.</Text>
                </View>
              </View>
            </View>

            {/* 🔥 Popular Courses Title Section */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>🔥 Popular Courses</Text>
              <TouchableOpacity onPress={() => Alert.alert('All Courses', 'Please check the categories above to view all courses.')}>
                <Text style={styles.seeAllText}>View All ➔</Text>
              </TouchableOpacity>
            </View>

            {/* Courses grid - 2 columns */}
            <View style={styles.popularCoursesFlexGrid}>
              {/* Row 1 */}
              <View style={styles.popularCoursesGridRow}>
                {/* Course Card 1 */}
                <View style={styles.coursesTabCard}>
                  <View style={styles.coursesTabCardHeader}>
                    <Text style={{ fontSize: 16 }}>📘</Text>
                    <View style={styles.coursesTabPopularBadge}>
                      <Text style={styles.coursesTabPopularBadgeText}>🔥 Popular</Text>
                    </View>
                  </View>
                  <Text style={styles.coursesTabCardTitle}>Class 6 to 10</Text>
                  <Text style={styles.coursesTabCardSub}>CBSE | ICSE | State Board{"\n"}All Subjects</Text>
                  
                  {/* Bullets box */}
                  <View style={styles.coursesTabBulletsBox}>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> 6th - 10th</Text>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> Hindi / English</Text>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> Live Classes</Text>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> Notes & Tests</Text>
                  </View>

                  {/* Rating */}
                  <View style={styles.coursesCardRatingRow}>
                    <Text style={{ fontSize: 10 }}>⭐⭐⭐⭐⭐</Text>
                    <Text style={styles.coursesCardRatingText}>4.8 (235)</Text>
                  </View>

                  <TouchableOpacity style={styles.exploreCourseBtn} onPress={() => setActiveTab('admission')}>
                    <Text style={styles.exploreCourseBtnText}>Explore Course ➔</Text>
                  </TouchableOpacity>
                </View>

                {/* Course Card 2 */}
                <View style={styles.coursesTabCard}>
                  <View style={styles.coursesTabCardHeader}>
                    <Text style={{ fontSize: 16 }}>🎓</Text>
                    <View style={styles.coursesTabPopularBadge}>
                      <Text style={styles.coursesTabPopularBadgeText}>🔥 Popular</Text>
                    </View>
                  </View>
                  <Text style={styles.coursesTabCardTitle}>Class 11 & 12</Text>
                  <Text style={styles.coursesTabCardSub}>Science | Commerce | Arts{"\n"}Stream Based Preparation</Text>
                  
                  {/* Bullets box */}
                  <View style={styles.coursesTabBulletsBox}>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> 11th - 12th</Text>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> Hindi / English</Text>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> Live Classes</Text>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> Notes & Tests</Text>
                  </View>

                  {/* Rating */}
                  <View style={styles.coursesCardRatingRow}>
                    <Text style={{ fontSize: 10 }}>⭐⭐⭐⭐⭐</Text>
                    <Text style={styles.coursesCardRatingText}>4.9 (189)</Text>
                  </View>

                  <TouchableOpacity style={styles.exploreCourseBtn} onPress={() => setActiveTab('admission')}>
                    <Text style={styles.exploreCourseBtnText}>Explore Course ➔</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Row 2 */}
              <View style={styles.popularCoursesGridRow}>
                {/* Course Card 3 */}
                <View style={styles.coursesTabCard}>
                  <View style={styles.coursesTabCardHeader}>
                    <Text style={{ fontSize: 16 }}>🎯</Text>
                  </View>
                  <Text style={styles.coursesTabCardTitle}>Competitive Exams</Text>
                  <Text style={styles.coursesTabCardSub}>JEE | NEET | BPSC | SSC{"\n"}BANK | RAILWAY | Others</Text>
                  
                  {/* Bullets box */}
                  <View style={styles.coursesTabBulletsBox}>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> All Levels</Text>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> Live Classes</Text>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> Test Series</Text>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> Doubt Support</Text>
                  </View>

                  {/* Rating */}
                  <View style={styles.coursesCardRatingRow}>
                    <Text style={{ fontSize: 10 }}>⭐⭐⭐⭐⭐</Text>
                    <Text style={styles.coursesCardRatingText}>4.9 (312)</Text>
                  </View>

                  <TouchableOpacity style={styles.exploreCourseBtn} onPress={() => setActiveTab('admission')}>
                    <Text style={styles.exploreCourseBtnText}>Explore Course ➔</Text>
                  </TouchableOpacity>
                </View>

                {/* Course Card 4 */}
                <View style={styles.coursesTabCard}>
                  <View style={styles.coursesTabCardHeader}>
                    <Text style={{ fontSize: 16 }}>📖</Text>
                  </View>
                  <Text style={styles.coursesTabCardTitle}>Foundation Courses</Text>
                  <Text style={styles.coursesTabCardSub}>NTSE | Olympiad | CLAT{"\n"}Early Learning Programs</Text>
                  
                  {/* Bullets box */}
                  <View style={styles.coursesTabBulletsBox}>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> 5th - 10th</Text>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> English / Hindi</Text>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> Concept Building</Text>
                    <Text style={styles.coursesTabBullet}><Text style={{ color: '#2563EB' }}>✓</Text> Worksheets</Text>
                  </View>

                  {/* Rating */}
                  <View style={styles.coursesCardRatingRow}>
                    <Text style={{ fontSize: 10 }}>⭐⭐⭐⭐⭐</Text>
                    <Text style={styles.coursesCardRatingText}>4.7 (156)</Text>
                  </View>

                  <TouchableOpacity style={styles.exploreCourseBtn} onPress={() => setActiveTab('admission')}>
                    <Text style={styles.exploreCourseBtnText}>Explore Course ➔</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* STUDY MATERIAL PREVIEW */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Our Printed Study Material</Text>
              <TouchableOpacity onPress={() => Alert.alert('Study Material', 'Study materials are provided free with enrollment!')}>
                <Text style={styles.seeAllText}>Preview All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingVertical: 4 }}>
              {/* Card 1 */}
              <View style={styles.studyMaterialCard}>
                <View style={styles.studyMaterialIconCircle}>
                  <Text style={{ fontSize: 22 }}>📚</Text>
                </View>
                <Text style={styles.studyMaterialTitle}>NEET Physics Booster</Text>
                <Text style={styles.studyMaterialSub}>Formula Handbook & 5000+ Topicwise MCQs</Text>
                <View style={styles.studyMaterialBadge}>
                  <Text style={styles.studyMaterialBadgeText}>Free Preview</Text>
                </View>
              </View>

              {/* Card 2 */}
              <View style={styles.studyMaterialCard}>
                <View style={styles.studyMaterialIconCircle}>
                  <Text style={{ fontSize: 22 }}>📖</Text>
                </View>
                <Text style={styles.studyMaterialTitle}>JEE Maths Handbook</Text>
                <Text style={styles.studyMaterialSub}>Shortcut Tricks, Formula Sheet & Worked Examples</Text>
                <View style={styles.studyMaterialBadge}>
                  <Text style={styles.studyMaterialBadgeText}>Free Preview</Text>
                </View>
              </View>

              {/* Card 3 */}
              <View style={styles.studyMaterialCard}>
                <View style={styles.studyMaterialIconCircle}>
                  <Text style={{ fontSize: 22 }}>📙</Text>
                </View>
                <Text style={styles.studyMaterialTitle}>Class 10 Board Spec</Text>
                <Text style={styles.studyMaterialSub}>Chapter Notes, Revision Cards & 5 Mock Papers</Text>
                <View style={styles.studyMaterialBadge}>
                  <Text style={styles.studyMaterialBadgeText}>Free Preview</Text>
                </View>
              </View>
            </ScrollView>

            {/* Top Exams We Cover */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Top Exams We Cover</Text>
              <TouchableOpacity onPress={() => Alert.alert('All Exams', 'We cover BPSC, NEET, JEE, SSC, Bank, and many more state exams!')}>
                <Text style={styles.seeAllText}>View All ➔</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryTabsScroll}>
              <View style={styles.examCoverPill}>
                <Text style={{ fontSize: 14 }}>🩺</Text>
                <View>
                  <Text style={styles.examCoverPillTitle}>NEET</Text>
                  <Text style={styles.examCoverPillSub}>Medical</Text>
                </View>
              </View>
              
              <View style={styles.examCoverPill}>
                <Text style={{ fontSize: 14 }}>⚙️</Text>
                <View>
                  <Text style={styles.examCoverPillTitle}>JEE Main</Text>
                  <Text style={styles.examCoverPillSub}>Engineering</Text>
                </View>
              </View>

              <View style={styles.examCoverPill}>
                <Text style={{ fontSize: 14 }}>🏛️</Text>
                <View>
                  <Text style={styles.examCoverPillTitle}>BPSC</Text>
                  <Text style={styles.examCoverPillSub}>State Exams</Text>
                </View>
              </View>

              <View style={styles.examCoverPill}>
                <Text style={{ fontSize: 14 }}>💼</Text>
                <View>
                  <Text style={styles.examCoverPillTitle}>SSC</Text>
                  <Text style={styles.examCoverPillSub}>Govt Jobs</Text>
                </View>
              </View>
            </ScrollView>

            {/* FAQ SECTION */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Frequently Asked Questions</Text>
            </View>

            <View style={styles.faqListContainer}>
              <View style={styles.faqCard}>
                <Text style={styles.faqCardQuestion}>❓ What is the average batch size?</Text>
                <Text style={styles.faqCardAnswer}>We maintain small batch sizes (maximum 30 students) to ensure focused personal attention to everyone.</Text>
              </View>

              <View style={styles.faqCard}>
                <Text style={styles.faqCardQuestion}>❓ Do you provide backup classes for missed lectures?</Text>
                <Text style={styles.faqCardAnswer}>Yes, all students get access to recorded lectures on our portal in case they miss any class.</Text>
              </View>

              <View style={styles.faqCard}>
                <Text style={styles.faqCardQuestion}>❓ Is library membership free with courses?</Text>
                <Text style={styles.faqCardAnswer}>Yes, 24/7 library access and study rooms are absolutely free for our year-long batch students.</Text>
              </View>
            </View>

            {/* Not Sure Which Course Card */}
            <View style={styles.notSureBannerCard}>
              <View style={styles.notSureBannerMain}>
                <View style={{ flex: 1.2, gap: 4 }}>
                  <Text style={styles.notSureTitle}>Not Sure Which Course{"\n"}Is <Text style={{ color: '#F59E0B' }}>Right For You?</Text></Text>
                  <Text style={styles.notSureSub}>Get expert advice and find the perfect course for your goals.</Text>
                  <TouchableOpacity style={styles.notSureTalkBtn} onPress={handleCall}>
                    <Text style={styles.notSureTalkBtnText}>Talk to Expert ➔</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.notSureCounsellingCol}>
                  <Text style={{ fontSize: 28 }}>💬</Text>
                  <Text style={styles.notSureCounsellingText}>Free{"\n"}Counselling</Text>
                </View>
              </View>
            </View>

          </View>
        )}

        {/* ================= TESTS TAB (LIBRARY) ================= */}
        {subScreen === 'none' && activeTab === 'library' && (
          <View style={styles.tabContent}>
            
            {/* 1. HERO BANNER */}
            <View style={styles.testsHeroCard}>
              <View style={styles.testsHeroMainRow}>
                <View style={styles.testsHeroTextCol}>
                  <Text style={styles.testsHeroTitleWhite}>Test Your Preparation,</Text>
                  <Text style={styles.testsHeroTitleYellow}>Boost <Text style={{ color: '#FFFFFF' }}>Your Score!</Text></Text>
                  <Text style={styles.testsHeroSub}>Attempt tests, analyze performance and track your progress.</Text>
                  <TouchableOpacity style={styles.testsHeroBtn} onPress={() => Alert.alert('Start Test', 'Choose a recommended test below to begin.')}>
                    <Text style={styles.testsHeroBtnText}>Start a Test ➔</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.testsHeroImgCol}>
                  <Text style={{ fontSize: 75 }}>⏱️</Text>
                </View>
              </View>
            </View>

            {/* 2. CATEGORY CARDS (4 Columns) */}
            <View style={styles.testsCategoryRow}>
              <TouchableOpacity style={styles.testCategoryCard}>
                <Text style={{ fontSize: 20 }}>📄</Text>
                <Text style={styles.testCatTitle}>All Tests</Text>
                <Text style={styles.testCatSub}>120+ Tests</Text>
                <View style={[styles.testCatLine, { backgroundColor: '#6366F1' }]} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.testCategoryCard}>
                <Text style={{ fontSize: 20 }}>🎓</Text>
                <Text style={styles.testCatTitle}>Mock Tests</Text>
                <Text style={styles.testCatSub}>45+ Tests</Text>
                <View style={[styles.testCatLine, { backgroundColor: '#10B981' }]} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.testCategoryCard}>
                <Text style={{ fontSize: 20 }}>🎯</Text>
                <Text style={styles.testCatTitle}>Chapter Tests</Text>
                <Text style={styles.testCatSub}>200+ Tests</Text>
                <View style={[styles.testCatLine, { backgroundColor: '#F59E0B' }]} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.testCategoryCard}>
                <Text style={{ fontSize: 20 }}>✍️</Text>
                <Text style={styles.testCatTitle}>Custom Tests</Text>
                <Text style={styles.testCatSub}>Create Now</Text>
                <View style={[styles.testCatLine, { backgroundColor: '#3B82F6' }]} />
              </TouchableOpacity>
            </View>

            {/* 3. YOUR PROGRESS CARD */}
            <View style={styles.progressMainCard}>
              <View style={styles.progressHeaderRow}>
                <View>
                  <Text style={styles.progressCardTitle}>Your Progress</Text>
                  <Text style={styles.progressCardSub}>Keep going! You're doing great.</Text>
                </View>
                <TouchableOpacity onPress={() => Alert.alert('Analytics', 'Full performance report is updated after every test.')}>
                  <Text style={styles.viewAnalyticsText}>View Analytics ➔</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.progressStatsGrid}>
                <View style={styles.progStatItem}>
                  <View style={styles.progStatIconCircle}>
                    <Text style={{ fontSize: 13 }}>📝</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.progStatLabel}>Tests Attempted</Text>
                    <Text style={styles.progStatVal}>28</Text>
                  </View>
                </View>

                <View style={styles.progStatItem}>
                  <View style={styles.progStatIconCircle}>
                    <Text style={{ fontSize: 13 }}>📈</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.progStatLabel}>Average Score</Text>
                    <Text style={styles.progStatVal}>72%</Text>
                  </View>
                </View>

                <View style={styles.progStatItem}>
                  <View style={styles.progStatIconCircle}>
                    <Text style={{ fontSize: 13 }}>🏅</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.progStatLabel}>Best Score</Text>
                    <Text style={styles.progStatVal}>92%</Text>
                  </View>
                </View>

                <View style={styles.progStatItem}>
                  <View style={styles.progStatIconCircle}>
                    <Text style={{ fontSize: 13 }}>🏆</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.progStatLabel}>Current Rank</Text>
                    <Text style={styles.progStatVal}>#128 <Text style={{ fontSize: 8.5, color: '#64748B' }}>(Top 12%)</Text></Text>
                  </View>
                </View>
              </View>
            </View>

            {/* 4. RECOMMENDED TESTS */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Recommended Tests</Text>
              <TouchableOpacity onPress={() => Alert.alert('Recommended Tests', 'These tests are selected by AI based on your target exams.')}>
                <Text style={styles.seeAllText}>View All ➔</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.recTestsContainer}>
              {/* Test Card 1 */}
              <View style={styles.recTestCard}>
                <View style={[styles.recTestIconBox, { backgroundColor: '#F3E8FF' }]}>
                  <Text style={{ fontSize: 20 }}>🩺</Text>
                </View>
                <View style={styles.recTestTextCol}>
                  <View style={styles.recTestBadgeRow}>
                    <View style={styles.featuredBadge}>
                      <Text style={styles.featuredBadgeText}>FEATURED</Text>
                    </View>
                  </View>
                  <Text style={styles.recTestCardTitle}>NEET Full Length Mock Test</Text>
                  <Text style={styles.recTestCardSub}>180 Questions  •  180 Marks  •  3 Hours</Text>
                  <View style={styles.recTestTargetBadge}>
                    <Text style={styles.recTestTargetText}>For NEET 2025</Text>
                  </View>
                </View>
                <View style={styles.recTestRightCol}>
                  <Text style={styles.recTestScoreText}>Score 86%</Text>
                  <Text style={styles.recTestScoreSub}>Best Score</Text>
                  <TouchableOpacity style={styles.recTestBtn} onPress={() => Alert.alert('Start Test', 'Are you ready to start NEET Full Mock?')}>
                    <Text style={styles.recTestBtnText}>Start Test ➔</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Test Card 2 */}
              <View style={styles.recTestCard}>
                <View style={[styles.recTestIconBox, { backgroundColor: '#DCFCE7' }]}>
                  <Text style={{ fontSize: 20 }}>🧪</Text>
                </View>
                <View style={styles.recTestTextCol}>
                  <Text style={styles.recTestCardTitle}>JEE Main Mock Test 1</Text>
                  <Text style={styles.recTestCardSub}>90 Questions  •  300 Marks  •  3 Hours</Text>
                  <View style={styles.recTestTargetBadge}>
                    <Text style={styles.recTestTargetText}>For JEE 2025</Text>
                  </View>
                </View>
                <View style={styles.recTestRightCol}>
                  <Text style={styles.recTestScoreText}>Score 78%</Text>
                  <Text style={styles.recTestScoreSub}>Best Score</Text>
                  <TouchableOpacity style={styles.recTestBtn} onPress={() => Alert.alert('Start Test', 'Are you ready to start JEE Mock Test 1?')}>
                    <Text style={styles.recTestBtnText}>Start Test ➔</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Test Card 3 */}
              <View style={styles.recTestCard}>
                <View style={[styles.recTestIconBox, { backgroundColor: '#FFE4E6' }]}>
                  <Text style={{ fontSize: 20 }}>📖</Text>
                </View>
                <View style={styles.recTestTextCol}>
                  <Text style={styles.recTestCardTitle}>Class 12 Physics Chapter Test</Text>
                  <Text style={styles.recTestCardSub}>25 Questions  •  25 Marks  •  30 Mins</Text>
                  <View style={styles.recTestTagsRow}>
                    <Text style={styles.recTestOrangeTag}>Physics</Text>
                    <Text style={styles.recTestOrangeTag}>•  Chapter: Current Electricity</Text>
                  </View>
                </View>
                <View style={styles.recTestRightCol}>
                  <Text style={styles.recTestScoreText}>Score 92%</Text>
                  <Text style={styles.recTestScoreSub}>Best Score</Text>
                  <TouchableOpacity style={styles.recTestBtn} onPress={() => Alert.alert('Start Test', 'Are you ready to start Class 12 Physics Chapter Test?')}>
                    <Text style={styles.recTestBtnText}>Start Test ➔</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* 5. POPULAR EXAMS */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Popular Exams</Text>
              <TouchableOpacity onPress={() => Alert.alert('All Exams', 'We support BPSC, NEET, JEE, SSC, and Banking Exams!')}>
                <Text style={styles.seeAllText}>View All ➔</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryTabsScroll}>
              <View style={styles.examCoverPill}>
                <Text style={{ fontSize: 14 }}>🩺</Text>
                <View>
                  <Text style={styles.examCoverPillTitle}>NEET</Text>
                  <Text style={styles.examCoverPillSub}>Medical</Text>
                </View>
              </View>
              
              <View style={styles.examCoverPill}>
                <Text style={{ fontSize: 14 }}>⚙️</Text>
                <View>
                  <Text style={styles.examCoverPillTitle}>JEE Main</Text>
                  <Text style={styles.examCoverPillSub}>Engineering</Text>
                </View>
              </View>

              <View style={styles.examCoverPill}>
                <Text style={{ fontSize: 14 }}>🏛️</Text>
                <View>
                  <Text style={styles.examCoverPillTitle}>BPSC</Text>
                  <Text style={styles.examCoverPillSub}>State Exams</Text>
                </View>
              </View>

              <View style={styles.examCoverPill}>
                <Text style={{ fontSize: 14 }}>💼</Text>
                <View>
                  <Text style={styles.examCoverPillTitle}>SSC</Text>
                  <Text style={styles.examCoverPillSub}>Govt Jobs</Text>
                </View>
              </View>
            </ScrollView>

            {/* ========================================================
                ADDITIONAL 3 CUSTOM SECTIONS ADDED FOR MOONLIGHT CONTEXT
                ======================================================== */}

            {/* SECTION 1: LIVE & UPCOMING TEST SCHEDULE */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Live & Upcoming Schedule</Text>
              <TouchableOpacity onPress={() => Alert.alert('Calendar', 'Full monthly calendar is available in study rooms.')}>
                <Text style={styles.seeAllText}>Calendar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.scheduleCardsList}>
              <View style={styles.scheduleItemCard}>
                <View style={styles.scheduleDateBadge}>
                  <Text style={styles.scheduleDateDay}>26</Text>
                  <Text style={styles.scheduleDateMonth}>JULY</Text>
                </View>
                <View style={styles.scheduleTextCol}>
                  <Text style={styles.scheduleTitle}>MSAT Scholarship Entrance Exam</Text>
                  <Text style={styles.scheduleSubText}>Time: 10:00 AM - 1:00 PM  •  Online</Text>
                </View>
                <TouchableOpacity style={styles.scheduleRegBtn} onPress={() => setActiveTab('admission')}>
                  <Text style={styles.scheduleRegBtnText}>Register</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.scheduleItemCard}>
                <View style={[styles.scheduleDateBadge, { backgroundColor: '#F3E8FF' }]}>
                  <Text style={[styles.scheduleDateDay, { color: '#6B21A8' }]}>28</Text>
                  <Text style={[styles.scheduleDateMonth, { color: '#6B21A8' }]}>JULY</Text>
                </View>
                <View style={styles.scheduleTextCol}>
                  <Text style={styles.scheduleTitle}>Biology Monthly Chapter Test</Text>
                  <Text style={styles.scheduleSubText}>Topic: Plant Kingdom  •  40 Mins</Text>
                </View>
                <TouchableOpacity style={[styles.scheduleRegBtn, { backgroundColor: '#051329' }]} onPress={() => Alert.alert('Set Reminder', 'Reminder has been configured!')}>
                  <Text style={styles.scheduleRegBtnText}>Remind</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* SECTION 2: MOCK TESTS TOP PERFORMANCE WALL */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Hall of Fame: Recent Toppers</Text>
            </View>
            <View style={styles.leaderboardContainer}>
              <View style={styles.leaderRowItem}>
                <Text style={styles.leaderRank}>🥇</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.leaderNameText}>Amit Sharma</Text>
                  <Text style={styles.leaderExamsText}>NEET Full Mock Test</Text>
                </View>
                <Text style={styles.leaderScore}>705/720</Text>
              </View>
              <View style={styles.leaderDivider} />
              <View style={styles.leaderRowItem}>
                <Text style={styles.leaderRank}>🥈</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.leaderNameText}>Priya Patel</Text>
                  <Text style={styles.leaderExamsText}>JEE Mains Mock Test</Text>
                </View>
                <Text style={styles.leaderScore}>285/300</Text>
              </View>
              <View style={styles.leaderDivider} />
              <View style={styles.leaderRowItem}>
                <Text style={styles.leaderRank}>🥉</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.leaderNameText}>Sonu Singh</Text>
                  <Text style={styles.leaderExamsText}>Class 10th Boards Mock</Text>
                </View>
                <Text style={styles.leaderScore}>98/100</Text>
              </View>
            </View>

          </View>
        )}

        {/* ================= STUDY CENTER TAB (ADMISSION) ================= */}
        {subScreen === 'none' && activeTab === 'admission' && (
          <View style={styles.tabContent}>
            
            {/* Header Title */}
            <View style={styles.studyCenterHeaderContainer}>
              <Text style={styles.studyCenterTitle}>Study Center</Text>
              <Text style={styles.studyCenterSub}>Your all in one place to learn and grow.</Text>
            </View>

            {/* Hero Card */}
            <View style={styles.studyHeroCard}>
              <View style={styles.studyHeroMainRow}>
                <View style={styles.studyHeroTextCol}>
                  <Text style={styles.studyHeroTitleWhite}>Stay Consistent,</Text>
                  <Text style={styles.studyHeroTitleYellow}>Achieve Excellence!</Text>
                  <Text style={styles.studyHeroSubText}>Access notes, videos, ebooks and more to boost your preparation.</Text>
                  <TouchableOpacity style={styles.studyHeroBtn} onPress={() => Alert.alert('Learning', 'Accessing your course dashboard...')}>
                    <Text style={styles.studyHeroBtnText}>Continue Learning ➔</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.studyHeroImgCol}>
                  <Text style={{ fontSize: 75 }}>📚</Text>
                </View>
              </View>
            </View>

            {/* 8 Category Options Grid */}
            <View style={styles.studyCategoryGrid}>
              {/* Row 1 */}
              <View style={styles.studyCategoryRow}>
                <TouchableOpacity style={styles.studyOptionCard} onPress={() => Alert.alert('My Notes', 'Opening saved study notes...')}>
                  <View style={[styles.studyOptionIconBox, { backgroundColor: '#EFF6FF' }]}>
                    <Text style={{ fontSize: 18 }}>📖</Text>
                  </View>
                  <Text style={styles.studyOptionTitle}>My Notes</Text>
                  <Text style={styles.studyOptionSub}>Your saved notes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.studyOptionCard} onPress={() => Alert.alert('Video Lectures', 'Opening video dashboard...')}>
                  <View style={[styles.studyOptionIconBox, { backgroundColor: '#ECFDF5' }]}>
                    <Text style={{ fontSize: 18 }}>▶️</Text>
                  </View>
                  <Text style={styles.studyOptionTitle}>Video Lectures</Text>
                  <Text style={styles.studyOptionSub}>Watch & Learn</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.studyOptionCard} onPress={() => Alert.alert('E-Books', 'Opening digital library...')}>
                  <View style={[styles.studyOptionIconBox, { backgroundColor: '#FFFBEB' }]}>
                    <Text style={{ fontSize: 18 }}>📄</Text>
                  </View>
                  <Text style={styles.studyOptionTitle}>E-Books</Text>
                  <Text style={styles.studyOptionSub}>Read & Grow</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.studyOptionCard} onPress={() => Alert.alert('PDF Library', 'Opening PDF repository...')}>
                  <View style={[styles.studyOptionIconBox, { backgroundColor: '#EEF2F6' }]}>
                    <Text style={{ fontSize: 18 }}>📥</Text>
                  </View>
                  <Text style={styles.studyOptionTitle}>PDF Library</Text>
                  <Text style={styles.studyOptionSub}>Download PDFs</Text>
                </TouchableOpacity>
              </View>

              {/* Row 2 */}
              <View style={styles.studyCategoryRow}>
                <TouchableOpacity style={styles.studyOptionCard} onPress={() => Alert.alert('Bookmarks', 'Opening bookmarked pages...')}>
                  <View style={[styles.studyOptionIconBox, { backgroundColor: '#FDF2F8' }]}>
                    <Text style={{ fontSize: 18 }}>🔖</Text>
                  </View>
                  <Text style={styles.studyOptionTitle}>Bookmarks</Text>
                  <Text style={styles.studyOptionSub}>Saved for Later</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.studyOptionCard} onPress={() => Alert.alert('Practice Sheets', 'Opening worksheets...')}>
                  <View style={[styles.studyOptionIconBox, { backgroundColor: '#FFF7ED' }]}>
                    <Text style={{ fontSize: 18 }}>📝</Text>
                  </View>
                  <Text style={styles.studyOptionTitle}>Practice Sheets</Text>
                  <Text style={styles.studyOptionSub}>Extra Practice</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.studyOptionCard} onPress={() => Alert.alert('Doubt Wall', 'Connecting to teachers...')}>
                  <View style={[styles.studyOptionIconBox, { backgroundColor: '#F3E8FF' }]}>
                    <Text style={{ fontSize: 18 }}>💬</Text>
                  </View>
                  <Text style={styles.studyOptionTitle}>Doubt Wall</Text>
                  <Text style={styles.studyOptionSub}>Ask & Get Answers</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.studyOptionCard} onPress={() => Alert.alert('Announcements', 'Opening notice board...')}>
                  <View style={[styles.studyOptionIconBox, { backgroundColor: '#ECFDF5' }]}>
                    <Text style={{ fontSize: 18 }}>📢</Text>
                  </View>
                  <Text style={styles.studyOptionTitle}>Announcements</Text>
                  <Text style={styles.studyOptionSub}>Latest Updates</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Continue Learning Section */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Continue Learning</Text>
              <TouchableOpacity onPress={() => Alert.alert('Continue Learning', 'Resume your active courses.')}>
                <Text style={styles.seeAllText}>View All ➔</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12, paddingVertical: 4 }}>
              {/* Physics Card */}
              <View style={styles.continueCard}>
                <View style={styles.continueCardHeader}>
                  <View style={styles.continueBadge}>
                    <Text style={styles.continueBadgeText}>In Progress</Text>
                  </View>
                  <Text style={{ fontSize: 24 }}>🎬</Text>
                </View>
                <Text style={styles.continueClassTitle}>Class 12 Physics</Text>
                <Text style={styles.continueTopicTitle}>Electrostatics</Text>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: '65%' }]} />
                  </View>
                  <Text style={styles.progressText}>65% Completed</Text>
                </View>
              </View>

              {/* Mathematics Card */}
              <View style={styles.continueCard}>
                <View style={styles.continueCardHeader}>
                  <View style={styles.continueBadge}>
                    <Text style={styles.continueBadgeText}>In Progress</Text>
                  </View>
                  <Text style={{ fontSize: 24 }}>📐</Text>
                </View>
                <Text style={styles.continueClassTitle}>JEE Mathematics</Text>
                <Text style={styles.continueTopicTitle}>Quadratic Equations</Text>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: '42%' }]} />
                  </View>
                  <Text style={styles.progressText}>42% Completed</Text>
                </View>
              </View>

              {/* Biology Card */}
              <View style={styles.continueCard}>
                <View style={styles.continueCardHeader}>
                  <View style={styles.continueBadge}>
                    <Text style={styles.continueBadgeText}>In Progress</Text>
                  </View>
                  <Text style={{ fontSize: 24 }}>🌱</Text>
                </View>
                <Text style={styles.continueClassTitle}>NEET Biology</Text>
                <Text style={styles.continueTopicTitle}>Human Physiology</Text>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: '30%' }]} />
                  </View>
                  <Text style={styles.progressText}>30% Completed</Text>
                </View>
              </View>
            </ScrollView>

            {/* Recommended For You Section */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Recommended For You</Text>
              <TouchableOpacity onPress={() => Alert.alert('Recommendations', 'Recommended study guides based on your recent activity.')}>
                <Text style={styles.seeAllText}>View All ➔</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.recForYouGrid}>
              <View style={styles.recForYouRow}>
                <TouchableOpacity style={styles.recForYouCard} onPress={() => Alert.alert('Chemistry', 'Opening Chemistry study bundle...')}>
                  <View style={[styles.recForYouIconCircle, { backgroundColor: '#ECFDF5' }]}>
                    <Text style={{ fontSize: 16 }}>📹</Text>
                  </View>
                  <Text style={styles.recForYouClass}>Class 11 Chemistry</Text>
                  <Text style={styles.recForYouTopic}>Chemical Bonding</Text>
                  <Text style={styles.recForYouCount}>12 Videos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.recForYouCard} onPress={() => Alert.alert('Mathematics', 'Opening Math study bundle...')}>
                  <View style={[styles.recForYouIconCircle, { backgroundColor: '#EFF6FF' }]}>
                    <Text style={{ fontSize: 16 }}>📄</Text>
                  </View>
                  <Text style={styles.recForYouClass}>Class 10 Math</Text>
                  <Text style={styles.recForYouTopic}>Trigonometry</Text>
                  <Text style={styles.recForYouCount}>8 PDFs</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.recForYouRow}>
                <TouchableOpacity style={styles.recForYouCard} onPress={() => Alert.alert('Biology', 'Opening Biology study bundle...')}>
                  <View style={[styles.recForYouIconCircle, { backgroundColor: '#FFFBEB' }]}>
                    <Text style={{ fontSize: 16 }}>📖</Text>
                  </View>
                  <Text style={styles.recForYouClass}>NEET Biology Notes</Text>
                  <Text style={styles.recForYouTopic}>Short Notes PDF</Text>
                  <Text style={styles.recForYouCount}>15 PDFs</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.recForYouCard} onPress={() => Alert.alert('Physics', 'Opening Physics study bundle...')}>
                  <View style={[styles.recForYouIconCircle, { backgroundColor: '#F5F3FF' }]}>
                    <Text style={{ fontSize: 16 }}>📹</Text>
                  </View>
                  <Text style={styles.recForYouClass}>JEE Physics Prep</Text>
                  <Text style={styles.recForYouTopic}>Complete Revision</Text>
                  <Text style={styles.recForYouCount}>20 Videos</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Study Streak Section */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Study Streak</Text>
              <Text style={{ fontSize: 11.5, color: '#EA580C', fontWeight: '800' }}>Keep it up! 🔥</Text>
            </View>

            <View style={styles.streakMainCard}>
              <View style={styles.streakContainerRow}>
                <View style={styles.streakCountBox}>
                  <Text style={{ fontSize: 24 }}>🔥</Text>
                  <Text style={styles.streakCountVal}>12</Text>
                  <Text style={styles.streakCountSub}>Days Streak</Text>
                </View>
                <View style={styles.streakDividerLine} />
                <View style={styles.streakDaysCol}>
                  <View style={styles.streakDaysRow}>
                    <View style={styles.streakDayCircleActive}><Text style={styles.streakDayTextActive}>M</Text></View>
                    <View style={styles.streakDayCircleActive}><Text style={styles.streakDayTextActive}>T</Text></View>
                    <View style={styles.streakDayCircleActive}><Text style={styles.streakDayTextActive}>W</Text></View>
                    <View style={styles.streakDayCircleActive}><Text style={styles.streakDayTextActive}>T</Text></View>
                    <View style={styles.streakDayCircleActive}><Text style={styles.streakDayTextActive}>F</Text></View>
                    <View style={styles.streakDayCircleActive}><Text style={styles.streakDayTextActive}>S</Text></View>
                    <View style={styles.streakDayCircle}><Text style={styles.streakDayText}>S</Text></View>
                  </View>
                  <Text style={styles.streakQuoteText}>🏆 Great Going! You are doing amazing.</Text>
                </View>
              </View>
            </View>

            {/* Online Admission Enquiry Form */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Online Admission Enquiry (2025-26)</Text>
            </View>
            <View style={styles.formCard}>
              <Text style={styles.label}>Student Full Name *</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Rahul Kumar"
                value={studentName}
                onChangeText={setStudentName}
              />

              <Text style={styles.label}>Parent / Guardian Name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Suresh Kumar"
                value={parentName}
                onChangeText={setParentName}
              />

              <Text style={styles.label}>Mobile Number *</Text>
              <TextInput
                style={styles.input}
                placeholder="7870391245"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />

              <TouchableOpacity style={styles.submitBtn} onPress={handleFormSubmit}>
                <Text style={styles.submitBtnText}>Submit Enquiry Now ➔</Text>
              </TouchableOpacity>
            </View>
 
          </View>
        )}
 
        {/* ================= PROFILE TAB (CONTACT) ================= */}
        {subScreen === 'none' && activeTab === 'contact' && (
          <View style={styles.tabContent}>
            
            {/* Header: Title Block */}
            <View style={styles.profileHeaderTitleRow}>
              <View>
                <Text style={[styles.profilePageTitle, isDarkMode && { color: '#FFFFFF' }]}>My Profile</Text>
                <Text style={[styles.profilePageSub, isDarkMode && { color: '#94A3B8' }]}>Manage your account and view study metrics.</Text>
              </View>
              <TouchableOpacity style={[styles.settingsGearBtn, isDarkMode && { borderColor: '#1E293B' }]} onPress={() => Alert.alert('Settings', 'Settings menu is locked under child-lock control.')}>
                <Text style={{ fontSize: 18 }}>⚙️</Text>
              </TouchableOpacity>
            </View>
 
            {/* Profile Hero Card */}
            <View style={styles.profileHeroCard}>
              {/* Profile Main Info */}
              <View style={styles.profileHeroMainRow}>
                {/* Avatar and Camera badge */}
                <TouchableOpacity 
                  style={styles.profileAvatarContainer}
                  onPress={() => {
                    setEditAvatarField(userAvatar);
                    setEditNameField(userName);
                    setEditEmailField(userEmail);
                    setEditPhoneField(userPhone);
                    setEditClassField(userClass);
                    setSubScreen('edit_profile');
                  }}
                >
                  <View style={styles.profileAvatarCircle}>
                    <Text style={{ fontSize: 32 }}>{userAvatar}</Text>
                  </View>
                  <View style={styles.cameraIconBadge}>
                    <Text style={{ fontSize: 10 }}>📷</Text>
                  </View>
                </TouchableOpacity>
 
                {/* Text details */}
                <View style={styles.profileHeroTextCol}>
                  <View style={styles.premiumMemberBadge}>
                    <Text style={styles.premiumMemberBadgeText}>👑 {userClass}</Text>
                  </View>
                  <Text style={styles.profileHeroName}>{userName}</Text>
                  <Text style={styles.profileHeroEmail}>{userEmail}</Text>
                  <Text style={styles.profileHeroPhone}>+91 {userPhone}</Text>
                </View>
 
                {/* Badge/Level */}
                <View style={styles.learnerLevelBadge}>
                  <Text style={{ fontSize: 22 }}>🛡️</Text>
                  <Text style={styles.learnerLevelTitle}>Learner</Text>
                  <Text style={styles.learnerLevelSub}>Level 4</Text>
                </View>
              </View>
 
              {/* Metric stats row at the bottom of the card */}
              <View style={styles.profileHeroMetricsRow}>
                <View style={styles.profileHeroMetricItem}>
                  <Text style={{ fontSize: 16 }}>📖</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.profileHeroMetricVal}>28</Text>
                    <Text style={styles.profileHeroMetricLabel}>Tests Taken</Text>
                  </View>
                </View>
 
                <View style={styles.profileHeroMetricItem}>
                  <Text style={{ fontSize: 16 }}>🎯</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.profileHeroMetricVal}>72%</Text>
                    <Text style={styles.profileHeroMetricLabel}>Avg Score</Text>
                  </View>
                </View>
 
                <View style={styles.profileHeroMetricItem}>
                  <Text style={{ fontSize: 16 }}>🏆</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.profileHeroMetricVal}>92%</Text>
                    <Text style={styles.profileHeroMetricLabel}>Best Score</Text>
                  </View>
                </View>
 
                <View style={styles.profileHeroMetricItem}>
                  <Text style={{ fontSize: 16 }}>📈</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.profileHeroMetricVal}>12</Text>
                    <Text style={styles.profileHeroMetricLabel}>Day Streak</Text>
                  </View>
                </View>
              </View>
            </View>
 
            {/* Crown banner */}
            <View style={[styles.crownBannerCard, isDarkMode && { backgroundColor: '#1E1B4B', borderColor: '#312E81' }]}>
              <Text style={{ fontSize: 18 }}>👑</Text>
              <View style={{ flex: 1 }}>
                <Text style={[styles.crownBannerTitle, isDarkMode && { color: '#FFFFFF' }]}>You're doing great!</Text>
                <Text style={[styles.crownBannerSub, isDarkMode && { color: '#C084FC' }]}>Keep learning and achieve your goals.</Text>
              </View>
              <TouchableOpacity onPress={() => setSubScreen('view_progress')}>
                <Text style={[styles.crownBannerLinkText, isDarkMode && { color: '#A855F7' }]}>View Progress ➔</Text>
              </TouchableOpacity>
            </View>

            {/* My Learning Section */}
            <View style={styles.sectionHeaderRow}>
              <Text style={[styles.sectionHeading, isDarkMode && { color: '#FFFFFF' }]}>My Learning & Activities</Text>
            </View>
            <View style={styles.myLearningListGrid}>
              <View style={styles.myLearningRow}>
                <TouchableOpacity style={[styles.myLearningItemCard, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]} onPress={() => setActiveTab('courses')}>
                  <Text style={{ fontSize: 15 }}>📘</Text>
                  <Text style={[styles.myLearningItemTitle, isDarkMode && { color: '#F8FAFC' }]}>My Courses</Text>
                  <Text style={{ fontSize: 10, color: '#94A3B8' }}>➔</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.myLearningItemCard, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]} onPress={() => setSubScreen('homework')}>
                  <Text style={{ fontSize: 15 }}>📄</Text>
                  <Text style={[styles.myLearningItemTitle, isDarkMode && { color: '#F8FAFC' }]}>Homework Desk</Text>
                  <Text style={{ fontSize: 10, color: '#94A3B8' }}>➔</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.myLearningRow}>
                <TouchableOpacity style={[styles.myLearningItemCard, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]} onPress={() => setSubScreen('attendance')}>
                  <Text style={{ fontSize: 15 }}>📊</Text>
                  <Text style={[styles.myLearningItemTitle, isDarkMode && { color: '#F8FAFC' }]}>Attendance Log</Text>
                  <Text style={{ fontSize: 10, color: '#94A3B8' }}>➔</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.myLearningItemCard, isDarkMode && { backgroundColor: '#0D1E36', borderColor: '#1E293B' }]} onPress={() => setActiveTab('library')}>
                  <Text style={{ fontSize: 15 }}>📝</Text>
                  <Text style={[styles.myLearningItemTitle, isDarkMode && { color: '#F8FAFC' }]}>My Tests</Text>
                  <Text style={{ fontSize: 10, color: '#94A3B8' }}>➔</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Account List Options */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Account</Text>
            </View>
            <View style={[styles.accountSettingsList, themeCardStyle]}>
              {/* Dark Mode Toggle */}
              <View style={[styles.settingsRowItem, { borderBottomColor: themeBorderColor }]}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>🌙</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>Dark Mode</Text>
                </View>
                <TouchableOpacity 
                  style={[styles.switchTrack, isDarkMode && styles.switchTrackActive]} 
                  onPress={() => setIsDarkMode(!isDarkMode)}
                >
                  <View style={[styles.switchThumb, isDarkMode && styles.switchThumbActive]} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity 
                style={[styles.settingsRowItem, { borderBottomColor: themeBorderColor }]} 
                onPress={() => {
                  setEditAvatarField(userAvatar);
                  setEditNameField(userName);
                  setEditEmailField(userEmail);
                  setEditPhoneField(userPhone);
                  setEditClassField(userClass);
                  setSubScreen('edit_profile');
                }}
              >
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>👤</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>Edit Profile</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.settingsRowItem, { borderBottomColor: themeBorderColor }]} 
                onPress={() => {
                  setCurrentPassField('');
                  setNewPassField('');
                  setConfirmPassField('');
                  setSubScreen('change_password');
                }}
              >
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>🔒</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>Change Password</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.settingsRowItem, { borderBottomColor: themeBorderColor }]} 
                onPress={() => {
                  setSubScreen('notifications');
                }}
              >
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>🔔</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>Notification Settings</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.settingsRowItem} onPress={() => setSubScreen('help_support')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>❓</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>Help & Support (Helpdesk)</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>
            </View>

            {/* Institute Information Section */}
            <View style={styles.sectionHeaderRow}>
              <Text style={[styles.sectionHeading, isDarkMode && { color: '#FFFFFF' }]}>Institute Information</Text>
            </View>
            <View style={[styles.accountSettingsList, themeCardStyle]}>
              <TouchableOpacity style={[styles.settingsRowItem, { borderBottomColor: themeBorderColor }]} onPress={() => setSubScreen('about')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>ℹ️</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>About Moonlight Centre</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>
 
              <TouchableOpacity style={[styles.settingsRowItem, { borderBottomColor: themeBorderColor }]} onPress={() => setSubScreen('faculty')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>👨‍🏫</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>Meet Our Faculty</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>
 
              <TouchableOpacity style={[styles.settingsRowItem, { borderBottomColor: themeBorderColor }]} onPress={() => setSubScreen('gallery')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>🖼️</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>Campus Photo Gallery</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>
 
              <TouchableOpacity style={[styles.settingsRowItem, { borderBottomColor: themeBorderColor }]} onPress={() => setSubScreen('library_info')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>📚</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>Central Library & Rules</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>
 
              <TouchableOpacity style={[styles.settingsRowItem, { borderBottomColor: themeBorderColor }]} onPress={() => setSubScreen('contact_info')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>📞</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>Contact Details & Map</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>
 
              <TouchableOpacity style={[styles.settingsRowItem, { borderBottomColor: 'transparent' }]} onPress={() => setSubScreen('faq')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>❓</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>Frequently Asked Questions (FAQ)</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>
            </View>
 
            {/* Legal & Policies Section */}
            <View style={styles.sectionHeaderRow}>
              <Text style={[styles.sectionHeading, isDarkMode && { color: '#FFFFFF' }]}>Legal & Policies</Text>
            </View>
            <View style={[styles.accountSettingsList, themeCardStyle]}>
              <TouchableOpacity style={[styles.settingsRowItem, { borderBottomColor: themeBorderColor }]} onPress={() => setSubScreen('disclaimer')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>⚖️</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>Disclaimer</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>
 
              <TouchableOpacity style={[styles.settingsRowItem, { borderBottomColor: themeBorderColor }]} onPress={() => setSubScreen('privacy')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>🛡️</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>Privacy Policy</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>
 
              <TouchableOpacity style={[styles.settingsRowItem, { borderBottomColor: 'transparent' }]} onPress={() => setSubScreen('terms')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>📄</Text>
                  <Text style={[styles.settingsRowTitle, themeTextStyle]}>Terms & Conditions</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>
            </View>
 
            {/* Refer and Earn Card */}
            <View style={[styles.referEarnCard, isDarkMode && { backgroundColor: '#1E293B', borderColor: '#334155' }]}>
              <View style={[styles.referGiftIconCircle, isDarkMode && { backgroundColor: '#0F172A' }]}>
                <Text style={{ fontSize: 24 }}>🎁</Text>
              </View>
              <View style={{ flex: 1, gap: 2 }}>
                <Text style={styles.referTitle}>Refer & Earn</Text>
                <Text style={styles.referDesc}>Invite your friends and earn exciting rewards.</Text>
              </View>
              <TouchableOpacity style={styles.referInviteBtn} onPress={() => Alert.alert('Invite Link', 'Copied your referral link! Share it with your friends.')}>
                <Text style={styles.referInviteBtnText}>Invite Now</Text>
              </TouchableOpacity>
            </View>

            {/* Logout button */}
            <TouchableOpacity style={styles.logoutBtn} onPress={() => { setAuthScreen('login'); setSubScreen('none'); }}>
              <Text style={styles.logoutBtnText}>🚪 Sign Out / Logout</Text>
            </TouchableOpacity>

          </View>
        )}

      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={[styles.bottomNav, isDarkMode && { backgroundColor: '#0D1E36', borderTopColor: '#1E293B' }]}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => { setActiveTab('home'); setSubScreen('none'); }}
        >
          {activeTab === 'home' && <View style={styles.navActiveIndicatorLine} />}
          <Text style={[styles.navIcon, activeTab === 'home' && styles.navIconActive]}>🏠</Text>
          <Text style={[styles.navText, activeTab === 'home' && styles.navTextActive]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => { setActiveTab('courses'); setSubScreen('none'); }}
        >
          {activeTab === 'courses' && <View style={styles.navActiveIndicatorLine} />}
          <Text style={[styles.navIcon, activeTab === 'courses' && styles.navIconActive]}>📚</Text>
          <Text style={[styles.navText, activeTab === 'courses' && styles.navTextActive]}>Courses</Text>
        </TouchableOpacity>

        {/* SPECIAL CENTER BUTTON FOR TESTS */}
        <TouchableOpacity
          style={[styles.navItem, styles.centerNavItem]}
          onPress={() => { setActiveTab('library'); setSubScreen('none'); }}
        >
          <View style={[styles.centerNavCircle, activeTab === 'library' && styles.centerNavCircleActive]}>
            <Text style={{ fontSize: 28 }}>📝</Text>
          </View>
          <Text style={[styles.navText, activeTab === 'library' && styles.navTextActive]}>Tests</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => { setActiveTab('admission'); setSubScreen('none'); }}
        >
          {activeTab === 'admission' && <View style={styles.navActiveIndicatorLine} />}
          <Text style={[styles.navIcon, activeTab === 'admission' && styles.navIconActive]}>🏫</Text>
          <Text style={[styles.navText, activeTab === 'admission' && styles.navTextActive]}>Study Center</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => { setActiveTab('contact'); setSubScreen('none'); }}
        >
          {activeTab === 'contact' && <View style={styles.navActiveIndicatorLine} />}
          <Text style={[styles.navIcon, activeTab === 'contact' && styles.navIconActive]}>🧑‍🎓</Text>
          <Text style={[styles.navText, activeTab === 'contact' && styles.navTextActive]}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* GLOBAL SEARCH MODAL */}
      <Modal
        visible={showSearchModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowSearchModal(false)}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(5, 19, 41, 0.75)', justifyContent: 'flex-end' }}>
          <View style={[{ backgroundColor: '#FFFFFF', borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 20, height: '80%', gap: 14 }, isDarkMode && { backgroundColor: '#0D1E36' }]}>
            
            {/* Modal Header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Text style={{ fontSize: 20 }}>🔍</Text>
                <Text style={[{ fontSize: 16, fontWeight: '900', color: '#051329' }, isDarkMode && { color: '#FFFFFF' }]}>Search Moonlight App</Text>
              </View>
              <TouchableOpacity 
                style={[{ width: 32, height: 32, borderRadius: 16, backgroundColor: '#F1F5F9', alignItems: 'center', justifyContent: 'center' }, isDarkMode && { backgroundColor: '#1E293B' }]} 
                onPress={() => { setShowSearchModal(false); setGlobalSearchQuery(''); }}
              >
                <Text style={[{ fontSize: 14, fontWeight: '900', color: '#64748B' }, isDarkMode && { color: '#FFFFFF' }]}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Input Bar */}
            <View style={[{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8FAFC', borderWidth: 1.5, borderColor: '#E2E8F0', borderRadius: 16, paddingHorizontal: 12, height: 46 }, isDarkMode && { backgroundColor: '#1E293B', borderColor: '#334155' }]}>
              <Text style={{ fontSize: 16, marginRight: 8 }}>🔍</Text>
              <TextInput
                style={[{ flex: 1, fontSize: 13, color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}
                placeholder="Search courses, faculty, library books, tests..."
                placeholderTextColor="#94A3B8"
                value={globalSearchQuery}
                onChangeText={setGlobalSearchQuery}
                autoFocus={true}
              />
              {globalSearchQuery.length > 0 && (
                <TouchableOpacity onPress={() => setGlobalSearchQuery('')}>
                  <Text style={{ fontSize: 12, color: '#94A3B8', fontWeight: '800' }}>Clear</Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Search Suggestions & Dynamic Results */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
              {globalSearchQuery.trim() === '' ? (
                <View style={{ gap: 12 }}>
                  <Text style={[{ fontSize: 11, fontWeight: '900', color: '#64748B', letterSpacing: 0.5 }, isDarkMode && { color: '#94A3B8' }]}>POPULAR QUICK SEARCHES</Text>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                    {['NEET Physics', 'Class 12 Electrostatics', 'HC Verma Book', 'Scholarship MSAT Test', 'Anil Jha Sir', 'Library Rules', 'Fee Structure'].map((tag, idx) => (
                      <TouchableOpacity 
                        key={idx} 
                        style={[{ backgroundColor: '#F1F5F9', borderRadius: 12, paddingVertical: 6, paddingHorizontal: 12 }, isDarkMode && { backgroundColor: '#1E293B' }]}
                        onPress={() => setGlobalSearchQuery(tag)}
                      >
                        <Text style={[{ fontSize: 11, fontWeight: '800', color: '#334155' }, isDarkMode && { color: '#E2E8F0' }]}>🔍 {tag}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>

                  <Text style={[{ fontSize: 11, fontWeight: '900', color: '#64748B', letterSpacing: 0.5, marginTop: 8 }, isDarkMode && { color: '#94A3B8' }]}>DIRECT SECTION SHORTCUTS</Text>
                  
                  <TouchableOpacity style={[{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8FAFC', padding: 12, borderRadius: 14, borderWidth: 1, borderColor: '#E2E8F0', gap: 10 }, isDarkMode && { backgroundColor: '#1E293B', borderColor: '#334155' }]} onPress={() => { setShowSearchModal(false); setActiveTab('courses'); setSubScreen('none'); }}>
                    <Text style={{ fontSize: 20 }}>📚</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={[{ fontSize: 12, fontWeight: '900', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>Browse Coaching Courses</Text>
                      <Text style={[{ fontSize: 10, color: '#64748B' }, isDarkMode && { color: '#94A3B8' }]}>Class 6th-12th & Competitive Exam Batches</Text>
                    </View>
                    <Text style={{ fontSize: 12, color: '#94A3B8' }}>➔</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8FAFC', padding: 12, borderRadius: 14, borderWidth: 1, borderColor: '#E2E8F0', gap: 10 }, isDarkMode && { backgroundColor: '#1E293B', borderColor: '#334155' }]} onPress={() => { setShowSearchModal(false); setSubScreen('faculty'); }}>
                    <Text style={{ fontSize: 20 }}>👨‍🏫</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={[{ fontSize: 12, fontWeight: '900', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>Meet Our Faculty Team</Text>
                      <Text style={[{ fontSize: 10, color: '#64748B' }, isDarkMode && { color: '#94A3B8' }]}>Qualified educators & 1-on-1 doubt mentors</Text>
                    </View>
                    <Text style={{ fontSize: 12, color: '#94A3B8' }}>➔</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8FAFC', padding: 12, borderRadius: 14, borderWidth: 1, borderColor: '#E2E8F0', gap: 10 }, isDarkMode && { backgroundColor: '#1E293B', borderColor: '#334155' }]} onPress={() => { setShowSearchModal(false); setSubScreen('library_info'); }}>
                    <Text style={{ fontSize: 20 }}>📖</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={[{ fontSize: 12, fontWeight: '900', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>Central Library & Book Catalog</Text>
                      <Text style={[{ fontSize: 10, color: '#64748B' }, isDarkMode && { color: '#94A3B8' }]}>Search shelf numbers & reference guides</Text>
                    </View>
                    <Text style={{ fontSize: 12, color: '#94A3B8' }}>➔</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                /* Dynamic Filtered Search Results */
                <View style={{ gap: 8 }}>
                  <Text style={[{ fontSize: 11, fontWeight: '900', color: '#64748B' }, isDarkMode && { color: '#94A3B8' }]}>SEARCH RESULTS FOR "{globalSearchQuery}"</Text>
                  {[
                    { title: 'Class 12 Physics - Electrostatics', category: 'Course', icon: '⚡', action: () => { setShowSearchModal(false); setActiveTab('courses'); setSubScreen('none'); } },
                    { title: 'JEE Mathematics - Quadratic Equations', category: 'Course', icon: '📐', action: () => { setShowSearchModal(false); setActiveTab('courses'); setSubScreen('none'); } },
                    { title: 'NEET Biology - Human Physiology', category: 'Course', icon: '🌱', action: () => { setShowSearchModal(false); setActiveTab('courses'); setSubScreen('none'); } },
                    { title: 'Mr. Anil Jha (Physics Faculty)', category: 'Faculty', icon: '👨‍🏫', action: () => { setShowSearchModal(false); setSubScreen('faculty'); } },
                    { title: 'Concepts of Physics by HC Verma', category: 'Library Book (Shelf A-1)', icon: '📖', action: () => { setShowSearchModal(false); setSubScreen('library_info'); } },
                    { title: 'MSAT Scholarship Entrance Exam', category: 'Test Schedule', icon: '🏆', action: () => { setShowSearchModal(false); setActiveTab('library'); setSubScreen('none'); } },
                    { title: 'Fee Structure & Online Payment', category: 'Help & Support', icon: '📞', action: () => { setShowSearchModal(false); setSubScreen('help_support'); } }
                  ]
                  .filter(item => item.title.toLowerCase().includes(globalSearchQuery.toLowerCase()) || item.category.toLowerCase().includes(globalSearchQuery.toLowerCase()))
                  .map((res, idx) => (
                    <TouchableOpacity
                      key={idx}
                      style={[{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 12, borderRadius: 14, borderWidth: 1, borderColor: '#E2E8F0', gap: 10 }, isDarkMode && { backgroundColor: '#1E293B', borderColor: '#334155' }]}
                      onPress={res.action}
                    >
                      <Text style={{ fontSize: 18 }}>{res.icon}</Text>
                      <View style={{ flex: 1 }}>
                        <Text style={[{ fontSize: 12, fontWeight: '900', color: '#0F172A' }, isDarkMode && { color: '#FFFFFF' }]}>{res.title}</Text>
                        <Text style={{ fontSize: 9.5, fontWeight: '800', color: '#F59E0B' }}>{res.category}</Text>
                      </View>
                      <Text style={{ fontSize: 11, color: '#2563EB', fontWeight: '900' }}>Open ➔</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoBadgeContainer: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logoImageHeader: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  logoSubtitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#F59E0B',
  },
  logoTagline: {
    fontSize: 9,
    color: '#64748B',
    fontStyle: 'italic',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerIconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  bellRedDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EF4444',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 110,
  },
  tabContent: {
    gap: 16,
  },
  heroCard: {
    backgroundColor: '#051329', // Dark navy banner
    borderRadius: 22,
    padding: 16,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  heroBestBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  heroBestBadgeStar: {
    fontSize: 10,
    color: '#F59E0B',
    marginRight: 4,
  },
  heroBestBadgeText: {
    color: '#F59E0B',
    fontWeight: '800',
    fontSize: 9,
  },
  heroMainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  heroTextCol: {
    flex: 1.1,
    paddingRight: 6,
  },
  heroTitleWhite: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFFFFF',
    lineHeight: 26,
  },
  heroTitleYellow: {
    fontSize: 22,
    fontWeight: '900',
    color: '#F59E0B',
    lineHeight: 26,
    marginBottom: 8,
  },
  heroSubtextText: {
    fontSize: 12,
    color: '#CBD5E1',
    lineHeight: 16,
    marginBottom: 12,
  },
  heroBtnRow: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  primaryYellowBtn: {
    flex: 1,
    backgroundColor: '#F59E0B',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryYellowBtnText: {
    color: '#051329',
    fontWeight: '900',
    fontSize: 10,
  },
  secondaryBorderBtn: {
    flex: 1.2,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryBorderBtnText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 10,
  },
  heroImageCol: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroRightImage: {
    width: '100%',
    height: 180,
  },
  joinBatchesBar: {
    backgroundColor: '#F59E0B',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  joinBatchesTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#051329',
  },
  joinBatchesSubtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(5, 19, 41, 0.8)',
    marginTop: 2,
  },
  enrolNowBtn: {
    backgroundColor: '#051329',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  enrolNowBtnText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 11,
  },
  featuresRowBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  featureColItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  featureIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  featureEmoji: {
    fontSize: 16,
  },
  featureColTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    height: 26,
  },
  featureColDesc: {
    fontSize: 8,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 2,
    lineHeight: 10,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  sectionHeading: {
    fontSize: 17,
    fontWeight: '900',
    color: '#0F172A',
    lineHeight: 22,
  },
  seeAllText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#2563EB',
  },
  coursesCompactGrid: {
    gap: 12,
  },
  coursesGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  courseGridCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
  },
  courseGridIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  courseEmoji: {
    fontSize: 16,
  },
  courseGridCardTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    height: 16,
    marginBottom: 8,
  },
  viewDetailsBtn: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center',
  },
  viewDetailsText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#475569',
  },
  statsBarNavy: {
    backgroundColor: '#051329',
    borderRadius: 18,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statsBarItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIconEmoji: {
    fontSize: 14,
    marginRight: 6,
  },
  statsBarText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 11,
  },
  statsBarDivider: {
    width: 1,
    height: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  successStoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    width: 260,
    gap: 8,
  },
  quoteSymbol: {
    fontSize: 28,
    fontWeight: '900',
    color: '#2563EB',
    height: 20,
    marginTop: -8,
  },
  successQuoteText: {
    fontSize: 11,
    color: '#475569',
    lineHeight: 16,
    fontStyle: 'italic',
  },
  successAuthorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 8,
  },
  successAuthorName: {
    fontSize: 11,
    fontWeight: '800',
    color: '#0F172A',
  },
  successAuthorTitle: {
    fontSize: 9,
    color: '#64748B',
    fontWeight: '600',
  },
  successAuthorPicBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsIndicatorRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 2,
  },
  dotIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#CBD5E1',
  },
  dotIndicatorActive: {
    backgroundColor: '#2563EB',
    width: 14,
  },
  footerNavyCard: {
    backgroundColor: '#051329',
    borderRadius: 22,
    padding: 16,
    gap: 12,
  },
  footerRowGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  footerColBlock: {
    flex: 1,
  },
  footerBlockTitle: {
    color: '#F59E0B',
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 6,
  },
  footerBlockText: {
    color: '#94A3B8',
    fontSize: 9,
    lineHeight: 13,
  },
  footerNavyDivider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  footerBlockSubtitle: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
    marginBottom: 4,
  },
  footerBlockBullet: {
    color: '#94A3B8',
    fontSize: 9,
    lineHeight: 13,
  },
  contactBarBanner: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contactBarText: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#334155',
    flex: 1,
  },
  contactBarBtn: {
    backgroundColor: '#F59E0B',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 14,
  },
  contactBarBtnText: {
    color: '#051329',
    fontWeight: '900',
    fontSize: 10,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 16,
    left: 12,
    right: 12,
    backgroundColor: '#051329',
    flexDirection: 'row',
    height: 74,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 15,
    elevation: 12,
  },
  navItem: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  centerNavItem: {
    justifyContent: 'flex-start',
    marginTop: -16,
  },
  centerNavCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 2,
  },
  centerNavCircleActive: {
    backgroundColor: '#9333EA',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  navActiveIndicatorLine: {
    position: 'absolute',
    top: 4,
    width: 24,
    height: 3,
    backgroundColor: '#F59E0B',
    borderRadius: 1.5,
  },
  navIcon: {
    fontSize: 26,
    color: '#94A3B8',
    opacity: 0.6,
  },
  navIconActive: {
    color: '#F59E0B',
    opacity: 1,
  },
  navText: {
    color: '#94A3B8',
    fontSize: 9,
    fontWeight: '700',
    marginTop: 3,
    textAlign: 'center',
  },
  navTextActive: {
    color: '#F59E0B',
    fontWeight: '900',
  },
  courseCard: {
    borderRadius: 16,
    padding: 14,
    borderWidth: 1.5,
    gap: 6,
  },
  courseBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    fontSize: 10,
    fontWeight: '900',
  },
  courseTitle: {
    fontSize: 15,
    fontWeight: '900',
  },
  courseDesc: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 16,
  },
  courseBtn: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 6,
  },
  courseBtnText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 12,
  },
  libraryBannerCard: {
    backgroundColor: '#051329',
    borderRadius: 18,
    padding: 16,
    gap: 8,
  },
  libraryTagPill: {
    backgroundColor: '#F59E0B',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  libraryTagText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#0F172A',
  },
  libraryTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },
  librarySub: {
    color: '#CBD5E1',
    fontSize: 12,
    lineHeight: 17,
  },
  libraryBtn: {
    backgroundColor: '#066E38',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 4,
  },
  libraryBtnText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 12,
  },
  featureBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 10,
  },
  featureItem: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: '800',
    color: '#334155',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    color: '#0F172A',
    backgroundColor: '#F8FAFC',
  },
  submitBtn: {
    backgroundColor: '#0F172A',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 6,
  },
  submitBtnText: {
    color: '#F59E0B',
    fontWeight: '900',
    fontSize: 13,
  },
  contactCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 10,
  },
  contactTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#0F172A',
  },
  contactText: {
    fontSize: 12,
    color: '#334155',
    fontWeight: '600',
  },
  batchCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    width: 200,
    gap: 6,
  },
  batchBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  batchBadgeText: {
    fontSize: 9,
    fontWeight: '900',
  },
  batchTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0F172A',
  },
  batchInfoText: {
    fontSize: 10,
    color: '#475569',
    fontWeight: '600',
  },
  batchBtn: {
    backgroundColor: '#051329',
    paddingVertical: 6,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 4,
  },
  batchBtnText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 10,
  },
  teacherCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    width: 170,
    alignItems: 'center',
    gap: 6,
  },
  teacherAvatarCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teacherName: {
    fontSize: 12.5,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
  },
  teacherRole: {
    fontSize: 10,
    color: '#066E38',
    fontWeight: '800',
    textAlign: 'center',
  },
  teacherExp: {
    fontSize: 9,
    color: '#64748B',
    fontWeight: '700',
    textAlign: 'center',
  },
  demoVideoCard: {
    backgroundColor: '#051329',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  demoVideoPlayIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  demoVideoTextGroup: {
    flex: 1,
    gap: 4,
  },
  demoVideoTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },
  demoVideoSub: {
    color: '#94A3B8',
    fontSize: 10,
    lineHeight: 14,
  },
  demoVideoBtn: {
    backgroundColor: '#EF4444',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 14,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  demoVideoBtnText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 10.5,
  },
  coursesTabHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  coursesPageTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0F172A',
  },
  coursesPageSub: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  offersBtn: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F97316',
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  offersBtnText: {
    color: '#F97316',
    fontWeight: '900',
    fontSize: 11,
  },
  searchBarRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
    alignItems: 'center',
  },
  searchBarInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
  },
  searchIconSymbol: {
    fontSize: 14,
    color: '#94A3B8',
    marginRight: 8,
  },
  searchBarTextInput: {
    flex: 1,
    fontSize: 12,
    color: '#0F172A',
    paddingVertical: 0,
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#051329',
    borderRadius: 20,
    paddingHorizontal: 14,
    height: 40,
    gap: 6,
  },
  filterBtnIcon: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  filterBtnText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 11,
  },
  categoryTabsScroll: {
    gap: 10,
    paddingVertical: 4,
  },
  categoryTabPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 6,
  },
  categoryTabPillActive: {
    backgroundColor: '#051329',
    borderColor: '#051329',
  },
  categoryTabIconEmoji: {
    fontSize: 13,
  },
  categoryTabTextPill: {
    fontSize: 10.5,
    color: '#475569',
    fontWeight: '800',
  },
  categoryTabTextPillActive: {
    color: '#FFFFFF',
  },
  promoBannerCard: {
    backgroundColor: '#051329',
    borderRadius: 22,
    padding: 16,
    overflow: 'hidden',
  },
  promoBannerMainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promoBannerTextCol: {
    flex: 1.2,
    paddingRight: 6,
  },
  promoLimitBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  promoLimitBadgeText: {
    color: '#F59E0B',
    fontSize: 8.5,
    fontWeight: '900',
  },
  promoBannerTitleWhite: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
  },
  promoBannerTitleYellow: {
    color: '#F59E0B',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 6,
  },
  promoBannerSub: {
    color: '#CBD5E1',
    fontSize: 10.5,
    lineHeight: 14,
    marginBottom: 10,
  },
  promoEnrollBtn: {
    backgroundColor: '#F59E0B',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 18,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  promoEnrollBtnText: {
    color: '#051329',
    fontSize: 10,
    fontWeight: '900',
  },
  promoStudentsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  miniProfileAvatars: {
    width: 55,
  },
  promoStudentsTextBold: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },
  promoStudentsTextSub: {
    color: '#94A3B8',
    fontSize: 8.5,
    fontWeight: '600',
  },
  promoBannerImageCol: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoBannerRightImage: {
    width: '100%',
    height: 155,
  },
  coursesValuePropsBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coursesValuePropItem: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  coursesPropTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#0F172A',
  },
  coursesPropDesc: {
    fontSize: 8,
    color: '#64748B',
    marginTop: 1,
  },
  coursesPropDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#E2E8F0',
  },
  popularCoursesFlexGrid: {
    gap: 12,
  },
  popularCoursesGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  coursesTabCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    gap: 6,
  },
  coursesTabCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coursesTabPopularBadge: {
    backgroundColor: '#FFedd5',
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  coursesTabPopularBadgeText: {
    color: '#EA580C',
    fontSize: 8,
    fontWeight: '900',
  },
  coursesTabCardTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#0F172A',
  },
  coursesTabCardSub: {
    fontSize: 9,
    color: '#64748B',
    lineHeight: 12,
  },
  coursesTabBulletsBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    padding: 8,
    gap: 4,
  },
  coursesTabBullet: {
    fontSize: 9,
    fontWeight: '700',
    color: '#475569',
  },
  coursesCardRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  coursesCardRatingText: {
    fontSize: 9,
    color: '#64748B',
    fontWeight: '700',
  },
  exploreCourseBtn: {
    backgroundColor: '#051329',
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: 'center',
  },
  exploreCourseBtnText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 9.5,
  },
  examCoverPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 12,
    gap: 8,
    width: 130,
  },
  examCoverPillTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: '#0F172A',
  },
  examCoverPillSub: {
    fontSize: 8,
    color: '#64748B',
  },
  notSureBannerCard: {
    backgroundColor: '#051329',
    borderRadius: 22,
    padding: 16,
  },
  notSureBannerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notSureTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 18,
  },
  notSureSub: {
    color: '#94A3B8',
    fontSize: 9.5,
    lineHeight: 13,
  },
  notSureTalkBtn: {
    backgroundColor: '#F59E0B',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 18,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  notSureTalkBtnText: {
    color: '#051329',
    fontWeight: '900',
    fontSize: 10,
  },
  notSureCounsellingCol: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  notSureCounsellingText: {
    color: '#F59E0B',
    fontSize: 9,
    fontWeight: '800',
    textAlign: 'center',
  },
  msatCardContainer: {
    backgroundColor: '#EFF6FF',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#3B82F6',
    gap: 8,
  },
  msatBadgeRow: {
    flexDirection: 'row',
  },
  msatBadge: {
    backgroundColor: '#2563EB',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  msatBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
  },
  msatCardTitle: {
    fontSize: 14.5,
    fontWeight: '900',
    color: '#0F172A',
  },
  msatCardDesc: {
    fontSize: 10.5,
    color: '#475569',
    lineHeight: 14,
  },
  msatBulletPointsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    marginTop: 2,
  },
  msatBulletText: {
    fontSize: 9.5,
    fontWeight: '700',
    color: '#1E40AF',
  },
  msatRegisterBtn: {
    backgroundColor: '#051329',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  msatRegisterBtnText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 11,
  },
  studyMaterialCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 14,
    width: 180,
    gap: 6,
    alignItems: 'center',
  },
  studyMaterialIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  studyMaterialTitle: {
    fontSize: 11.5,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
  },
  studyMaterialSub: {
    fontSize: 9,
    color: '#64748B',
    lineHeight: 12,
    textAlign: 'center',
  },
  studyMaterialBadge: {
    backgroundColor: '#DCFCE7',
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  studyMaterialBadgeText: {
    color: '#15803D',
    fontSize: 8.5,
    fontWeight: '800',
  },
  faqListContainer: {
    gap: 10,
  },
  faqCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    gap: 4,
  },
  faqCardQuestion: {
    fontSize: 11.5,
    fontWeight: '900',
    color: '#0F172A',
  },
  faqCardAnswer: {
    fontSize: 10,
    color: '#475569',
    lineHeight: 14,
  },
  testsHeroCard: {
    backgroundColor: '#051329',
    borderRadius: 22,
    padding: 16,
  },
  testsHeroMainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  testsHeroTextCol: {
    flex: 1.3,
    paddingRight: 6,
  },
  testsHeroTitleWhite: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  testsHeroTitleYellow: {
    fontSize: 20,
    fontWeight: '900',
    color: '#F59E0B',
    marginBottom: 6,
  },
  testsHeroSub: {
    fontSize: 10.5,
    color: '#CBD5E1',
    lineHeight: 14,
    marginBottom: 10,
  },
  testsHeroBtn: {
    backgroundColor: '#F59E0B',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 18,
    alignSelf: 'flex-start',
  },
  testsHeroBtnText: {
    color: '#051329',
    fontSize: 10,
    fontWeight: '900',
  },
  testsHeroImgCol: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  testsCategoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  testCategoryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  testCatTitle: {
    fontSize: 9.5,
    fontWeight: '900',
    color: '#0F172A',
    marginTop: 6,
    textAlign: 'center',
  },
  testCatSub: {
    fontSize: 8.5,
    color: '#64748B',
    fontWeight: '700',
    marginTop: 2,
    textAlign: 'center',
  },
  testCatLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
  },
  progressMainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 14,
    gap: 12,
  },
  progressHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressCardTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0F172A',
  },
  progressCardSub: {
    fontSize: 10,
    color: '#64748B',
    fontWeight: '600',
  },
  viewAnalyticsText: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#6366F1',
  },
  progressStatsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 10,
  },
  progStatItem: {
    width: '48%',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  progStatIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progStatLabel: {
    fontSize: 8.5,
    color: '#64748B',
    fontWeight: '600',
  },
  progStatVal: {
    fontSize: 11.5,
    fontWeight: '900',
    color: '#0F172A',
    marginTop: 1,
  },
  recTestsContainer: {
    gap: 12,
  },
  recTestCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    alignItems: 'center',
    gap: 10,
  },
  recTestIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recTestTextCol: {
    flex: 1.1,
    gap: 2,
  },
  recTestBadgeRow: {
    flexDirection: 'row',
  },
  featuredBadge: {
    backgroundColor: '#EDE9FE',
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  featuredBadgeText: {
    color: '#7C3AED',
    fontSize: 7.5,
    fontWeight: '900',
  },
  recTestCardTitle: {
    fontSize: 11.5,
    fontWeight: '900',
    color: '#0F172A',
  },
  recTestCardSub: {
    fontSize: 9,
    color: '#64748B',
    fontWeight: '600',
  },
  recTestTargetBadge: {
    backgroundColor: '#EFF6FF',
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
    marginTop: 2,
  },
  recTestTargetText: {
    color: '#2563EB',
    fontSize: 8,
    fontWeight: '800',
  },
  recTestRightCol: {
    flex: 0.9,
    alignItems: 'flex-end',
    gap: 2,
  },
  recTestScoreText: {
    color: '#10B981',
    fontSize: 10.5,
    fontWeight: '900',
  },
  recTestScoreSub: {
    color: '#64748B',
    fontSize: 8,
    fontWeight: '600',
  },
  recTestBtn: {
    backgroundColor: '#051329',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 4,
  },
  recTestBtnText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
  },
  recTestTagsRow: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 2,
  },
  recTestOrangeTag: {
    color: '#EA580C',
    fontSize: 8,
    fontWeight: '800',
  },
  scheduleCardsList: {
    gap: 10,
  },
  scheduleItemCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    alignItems: 'center',
    gap: 10,
  },
  scheduleDateBadge: {
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scheduleDateDay: {
    fontSize: 14,
    fontWeight: '900',
    color: '#2563EB',
  },
  scheduleDateMonth: {
    fontSize: 7.5,
    fontWeight: '900',
    color: '#2563EB',
    marginTop: -2,
  },
  scheduleTextCol: {
    flex: 1.2,
    gap: 2,
  },
  scheduleTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: '#0F172A',
  },
  scheduleSubText: {
    fontSize: 8.5,
    color: '#64748B',
    fontWeight: '600',
  },
  scheduleRegBtn: {
    backgroundColor: '#F59E0B',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  scheduleRegBtnText: {
    color: '#051329',
    fontSize: 9.5,
    fontWeight: '900',
  },
  guidelinesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    gap: 8,
  },
  guidelineBullet: {
    fontSize: 9.5,
    color: '#475569',
    lineHeight: 14,
  },
  leaderboardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 14,
    gap: 10,
  },
  leaderRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  leaderRank: {
    fontSize: 20,
  },
  leaderNameText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#0F172A',
  },
  leaderExamsText: {
    fontSize: 9.5,
    color: '#64748B',
    fontWeight: '600',
    marginTop: 1,
  },
  leaderScore: {
    fontSize: 12.5,
    fontWeight: '900',
    color: '#066E38',
  },
  leaderDivider: {
    height: 1,
    backgroundColor: '#F1F5F9',
  },
  studyCenterHeaderContainer: {
    marginTop: 6,
  },
  studyCenterTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0F172A',
  },
  studyCenterSub: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  studyHeroCard: {
    backgroundColor: '#051329',
    borderRadius: 22,
    padding: 16,
  },
  studyHeroMainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  studyHeroTextCol: {
    flex: 1.3,
    paddingRight: 6,
  },
  studyHeroTitleWhite: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  studyHeroTitleYellow: {
    fontSize: 20,
    fontWeight: '900',
    color: '#F59E0B',
    marginBottom: 6,
  },
  studyHeroSubText: {
    fontSize: 10.5,
    color: '#CBD5E1',
    lineHeight: 14,
    marginBottom: 10,
  },
  studyHeroBtn: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 18,
    alignSelf: 'flex-start',
  },
  studyHeroBtnText: {
    color: '#051329',
    fontSize: 10,
    fontWeight: '900',
  },
  studyHeroImgCol: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  studyCategoryGrid: {
    gap: 12,
  },
  studyCategoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  studyOptionCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingVertical: 12,
    paddingHorizontal: 6,
    alignItems: 'center',
    gap: 6,
  },
  studyOptionIconBox: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  studyOptionTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
  },
  studyOptionSub: {
    fontSize: 8,
    color: '#64748B',
    fontWeight: '600',
    textAlign: 'center',
  },
  continueCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 14,
    width: 200,
    gap: 6,
  },
  continueCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  continueBadge: {
    backgroundColor: '#EEF2F6',
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  continueBadgeText: {
    color: '#64748B',
    fontSize: 8.5,
    fontWeight: '800',
  },
  continueClassTitle: {
    fontSize: 12.5,
    fontWeight: '900',
    color: '#0F172A',
  },
  continueTopicTitle: {
    fontSize: 10.5,
    color: '#475569',
    fontWeight: '600',
  },
  progressContainer: {
    gap: 4,
    marginTop: 4,
  },
  progressBarBg: {
    height: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#10B981',
  },
  progressText: {
    fontSize: 8.5,
    color: '#64748B',
    fontWeight: '600',
  },
  recForYouGrid: {
    gap: 12,
  },
  recForYouRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  recForYouCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    gap: 4,
  },
  recForYouIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  recForYouClass: {
    fontSize: 11,
    fontWeight: '900',
    color: '#0F172A',
  },
  recForYouTopic: {
    fontSize: 9.5,
    color: '#475569',
    fontWeight: '600',
  },
  recForYouCount: {
    fontSize: 8.5,
    color: '#64748B',
    fontWeight: '700',
    marginTop: 2,
  },
  streakMainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 14,
  },
  streakContainerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakCountBox: {
    flex: 0.9,
    alignItems: 'center',
    gap: 2,
  },
  streakCountVal: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0F172A',
  },
  streakCountSub: {
    fontSize: 8.5,
    color: '#64748B',
    fontWeight: '700',
  },
  streakDividerLine: {
    width: 1,
    height: 48,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 12,
  },
  streakDaysCol: {
    flex: 2.1,
    gap: 8,
  },
  streakDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  streakDayCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#EEF2F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  streakDayCircleActive: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  streakDayText: {
    color: '#64748B',
    fontSize: 9,
    fontWeight: '900',
  },
  streakDayTextActive: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
  },
  streakQuoteText: {
    fontSize: 9.5,
    color: '#066E38',
    fontWeight: '800',
  },
  profileHeaderTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  profilePageTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0F172A',
  },
  profilePageSub: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  settingsGearBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeroCard: {
    backgroundColor: '#051329',
    borderRadius: 22,
    padding: 16,
    gap: 14,
  },
  profileHeroMainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileAvatarContainer: {
    position: 'relative',
  },
  profileAvatarCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraIconBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#051329',
  },
  profileHeroTextCol: {
    flex: 1.2,
    gap: 2,
  },
  premiumMemberBadge: {
    backgroundColor: '#FFFBEB',
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
  },
  premiumMemberBadgeText: {
    color: '#D97706',
    fontSize: 8.5,
    fontWeight: '900',
  },
  profileHeroName: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFFFFF',
    marginTop: 2,
  },
  profileHeroEmail: {
    fontSize: 11,
    color: '#94A3B8',
  },
  profileHeroPhone: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  learnerLevelBadge: {
    flex: 0.8,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  learnerLevelTitle: {
    color: '#818CF8',
    fontSize: 10,
    fontWeight: '800',
    marginTop: 2,
  },
  learnerLevelSub: {
    color: '#A5B4FC',
    fontSize: 8.5,
    fontWeight: '600',
  },
  profileHeroMetricsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 14,
    justifyContent: 'space-between',
  },
  profileHeroMetricItem: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    flex: 1,
  },
  profileHeroMetricVal: {
    color: '#FFFFFF',
    fontSize: 12.5,
    fontWeight: '900',
  },
  profileHeroMetricLabel: {
    color: '#64748B',
    fontSize: 7.5,
    fontWeight: '800',
  },
  crownBannerCard: {
    flexDirection: 'row',
    backgroundColor: '#FAF5FF',
    borderRadius: 18,
    padding: 14,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#F3E8FF',
  },
  crownBannerTitle: {
    fontSize: 12.5,
    fontWeight: '900',
    color: '#0F172A',
  },
  crownBannerSub: {
    fontSize: 10,
    color: '#6B21A8',
    fontWeight: '600',
  },
  crownBannerLinkText: {
    fontSize: 10.5,
    fontWeight: '900',
    color: '#7C3AED',
  },
  myLearningListGrid: {
    gap: 12,
  },
  myLearningRow: {
    flexDirection: 'row',
    gap: 12,
  },
  myLearningItemCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myLearningItemTitle: {
    fontSize: 12.5,
    fontWeight: '900',
    color: '#0F172A',
    flex: 1,
    marginLeft: 10,
  },
  accountSettingsList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 6,
  },
  settingsRowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  settingsRowIconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingsRowTitle: {
    fontSize: 12.5,
    fontWeight: '800',
    color: '#334155',
  },
  referEarnCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFBEB',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FEF3C7',
    padding: 14,
    alignItems: 'center',
    gap: 12,
  },
  referGiftIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  referTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0F172A',
  },
  referDesc: {
    fontSize: 9.5,
    color: '#B45309',
    fontWeight: '600',
  },
  referInviteBtn: {
    backgroundColor: '#D97706',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  referInviteBtnText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },
  logoutBtn: {
    borderWidth: 1.5,
    borderColor: '#EF4444',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 6,
  },
  logoutBtnText: {
    color: '#EF4444',
    fontWeight: '900',
    fontSize: 12.5,
  },
  subScreenContainer: {
    gap: 16,
  },
  subScreenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    gap: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  subScreenBackBtn: {
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  subScreenBackBtnText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#0F172A',
  },
  subScreenTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#0F172A',
    flex: 1,
  },
  subScreenContent: {
    gap: 16,
  },
  badgeRowGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
  },
  miniPillBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  miniPillBadgeText: {
    fontSize: 9.5,
    fontWeight: '800',
    color: '#F59E0B',
  },
  imageWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  fullWidthImage: {
    width: '100%',
    height: 180,
  },
  imageCaption: {
    fontSize: 10,
    color: '#64748B',
    textAlign: 'center',
    paddingVertical: 8,
    fontWeight: '600',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardHeading: {
    fontSize: 15,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 12,
  },
  directorDeskRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  directorPic: {
    width: 80,
    height: 110,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  quoteMark: {
    fontSize: 24,
    fontWeight: '900',
    color: '#F59E0B',
    height: 14,
    marginTop: -8,
  },
  quoteText: {
    fontSize: 10.5,
    color: '#475569',
    lineHeight: 14,
    fontStyle: 'italic',
  },
  directorName: {
    fontSize: 12,
    fontWeight: '950',
    color: '#0F172A',
    marginTop: 8,
  },
  directorRole: {
    fontSize: 9.5,
    color: '#64748B',
    fontWeight: '800',
  },
  splitCardsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  splitCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 14,
    borderWidth: 1.5,
    gap: 6,
  },
  splitCardTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0F172A',
  },
  splitCardDesc: {
    fontSize: 10,
    color: '#475569',
    lineHeight: 13,
  },
  timelineList: {
    gap: 12,
  },
  timelineCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    gap: 12,
  },
  timelineIconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineYear: {
    fontSize: 12.5,
    fontWeight: '900',
    color: '#0F172A',
  },
  timelineDesc: {
    fontSize: 10.5,
    color: '#64748B',
    lineHeight: 13.5,
    marginTop: 2,
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  galleryGridCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  galleryGridCardImage: {
    width: '100%',
    height: 90,
  },
  galleryGridCardText: {
    fontSize: 9.5,
    fontWeight: '800',
    color: '#334155',
    padding: 8,
    textAlign: 'center',
  },
  subSectionIntro: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  facultyFlexList: {
    gap: 16,
  },
  facultyProfileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    gap: 6,
  },
  facultyCardTop: {
    position: 'relative',
    marginBottom: 4,
  },
  facultyCardAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#F1F5F9',
  },
  facultySubjectBadgeCircle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#F59E0B',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  facultySubjectBadgeText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#051329',
  },
  facultyCardName: {
    fontSize: 14.5,
    fontWeight: '900',
    color: '#0F172A',
  },
  facultyCardRole: {
    fontSize: 11,
    fontWeight: '800',
    color: '#2563EB',
  },
  facultyCardExp: {
    fontSize: 10,
    fontWeight: '700',
    color: '#B45309',
  },
  facultyCardDesc: {
    fontSize: 10.5,
    color: '#475569',
    lineHeight: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  galleryFilterScroll: {
    gap: 8,
    paddingVertical: 2,
  },
  galleryFilterPill: {
    backgroundColor: '#E2E8F0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  galleryFilterPillActive: {
    backgroundColor: '#051329',
  },
  galleryFilterPillText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#475569',
  },
  galleryFilterPillTextActive: {
    color: '#FFFFFF',
  },
  galleryFlexGrid: {
    gap: 16,
  },
  galleryItemCardLarge: {
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    height: 180,
    position: 'relative',
  },
  galleryItemCardImage: {
    width: '100%',
    height: '100%',
  },
  galleryItemCardTextOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(5, 19, 41, 0.75)',
    padding: 12,
  },
  galleryItemCardCategory: {
    fontSize: 9,
    fontWeight: '900',
    color: '#F59E0B',
  },
  galleryItemCardTitle: {
    fontSize: 12.5,
    fontWeight: '900',
    color: '#FFFFFF',
    marginTop: 2,
  },
  libraryTimingsCard: {
    backgroundColor: '#051329',
    borderRadius: 22,
    padding: 16,
    gap: 8,
  },
  libraryTimingsCardTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#F59E0B',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    paddingBottom: 8,
  },
  libraryTimingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  libraryTimingsDay: {
    fontSize: 11.5,
    color: '#CBD5E1',
    fontWeight: '700',
  },
  libraryTimingsTime: {
    fontSize: 11.5,
    color: '#FFFFFF',
    fontWeight: '900',
  },
  libraryResourcesList: {
    gap: 12,
  },
  libraryResourceItemCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    gap: 12,
  },
  libraryResourceIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  libraryResourceTitle: {
    fontSize: 12.5,
    fontWeight: '900',
    color: '#0F172A',
  },
  libraryResourceDesc: {
    fontSize: 10.5,
    color: '#475569',
    lineHeight: 14,
    marginTop: 2,
  },
  libraryRulesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 8,
  },
  libraryRulesCardTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 4,
  },
  libraryRuleText: {
    fontSize: 11,
    color: '#475569',
    lineHeight: 16,
  },
  contactDetailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  contactDetailCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    gap: 6,
  },
  contactDetailCardTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: '#0F172A',
  },
  contactDetailCardDesc: {
    fontSize: 9,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 12,
  },
  mapSimulatorCard: {
    backgroundColor: '#ECFDF5',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#A7F3D0',
    padding: 24,
    alignItems: 'center',
  },
  mapSimulatorPinContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  mapSimulatorTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#0F172A',
  },
  mapSimulatorSub: {
    fontSize: 9.5,
    color: '#64748B',
    marginTop: 2,
    fontWeight: '600',
  },
  contactSuccessCard: {
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#A7F3D0',
    borderRadius: 22,
    padding: 20,
    gap: 8,
  },
  contactSuccessTitle: {
    fontSize: 14.5,
    fontWeight: '900',
    color: '#065F46',
    textAlign: 'center',
  },
  contactSuccessDesc: {
    fontSize: 11,
    color: '#047857',
    textAlign: 'center',
    lineHeight: 15,
  },
  contactResetBtn: {
    backgroundColor: '#047857',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  contactResetBtnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
  },
  faqListContainerSub: {
    gap: 12,
  },
  noDataText: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    paddingVertical: 20,
  },
  faqAccordionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
  },
  faqAccordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    gap: 12,
  },
  faqAccordionQuestion: {
    fontSize: 12,
    fontWeight: '900',
    color: '#0F172A',
    flex: 1,
  },
  faqAccordionArrow: {
    fontSize: 10,
    color: '#64748B',
    fontWeight: 'bold',
  },
  faqAccordionBody: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 10,
    gap: 6,
  },
  faqAccordionAnswer: {
    fontSize: 11,
    color: '#475569',
    lineHeight: 15,
  },
  faqAccordionBadge: {
    fontSize: 8.5,
    color: '#94A3B8',
    fontWeight: '700',
  },
  policySubtext: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#B45309',
    textAlign: 'center',
  },
  policyFaqContainer: {
    gap: 12,
  },
  showAllTermsBtn: {
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 6,
  },
  showAllTermsBtnText: {
    fontSize: 11.5,
    fontWeight: '900',
    color: '#0F172A',
  },
  policyHeaderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F172A',
    borderRadius: 22,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  policyHeaderEmoji: {
    fontSize: 28,
  },
  policyHeaderTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  policyHeaderSub: {
    fontSize: 10,
    color: '#94A3B8',
    marginTop: 2,
    fontWeight: '700',
  },
  policyDateBadge: {
    backgroundColor: '#FFFBEB',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#FEF3C7',
  },
  policyDateBadgeText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#D97706',
  },
  policyPillarsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    gap: 12,
    justifyContent: 'space-between',
  },
  policyPillarItem: {
    width: '48%',
    alignItems: 'center',
    padding: 8,
    gap: 4,
  },
  policyPillarTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
  },
  policyPillarText: {
    fontSize: 8.5,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 11,
    fontWeight: '700',
  },
  policyPillsHeading: {
    fontSize: 12,
    fontWeight: '900',
    color: '#334155',
    marginBottom: 8,
  },
  policyPillsScrollContainer: {
    gap: 8,
    paddingVertical: 2,
  },
  policyPill: {
    backgroundColor: '#E2E8F0',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  policyPillActive: {
    backgroundColor: '#D97706',
  },
  policyPillActiveBlue: {
    backgroundColor: '#2563EB',
  },
  policyPillText: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#475569',
  },
  policyPillTextActive: {
    color: '#FFFFFF',
  },
  policyAccordionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
  },
  policyAccordionCardActiveDisclaimer: {
    backgroundColor: '#FFFDF5',
    borderColor: '#F59E0B',
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  policyAccordionCardActiveBlue: {
    backgroundColor: '#EFF6FF',
    borderColor: '#2563EB',
    borderLeftWidth: 4,
    borderLeftColor: '#2563EB',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  policyAccordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    gap: 12,
  },
  policyAccordionQuestion: {
    fontSize: 12,
    fontWeight: '900',
    color: '#0F172A',
    flex: 1,
  },
  policyAccordionQuestionActive: {
    color: '#B45309',
  },
  policyAccordionQuestionActiveBlue: {
    color: '#1E40AF',
  },
  policyAccordionArrow: {
    fontSize: 10,
    color: '#64748B',
    fontWeight: 'bold',
  },
  policyAccordionBody: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    borderTopWidth: 1,
    borderTopColor: 'rgba(226, 232, 240, 0.5)',
    paddingTop: 10,
    gap: 6,
  },
  policyAccordionAnswer: {
    fontSize: 11,
    color: '#475569',
    lineHeight: 15,
  },
  policySupportBanner: {
    flexDirection: 'row',
    backgroundColor: '#051329',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
  policySupportTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  policySupportDesc: {
    fontSize: 10,
    color: '#94A3B8',
    fontWeight: '700',
  },
  policySupportBtn: {
    backgroundColor: '#F59E0B',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  policySupportBtnText: {
    color: '#051329',
    fontSize: 10,
    fontWeight: '900',
  },
  facultyGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  facultyProfileCardMini: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    gap: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  facultyCardTopMini: {
    position: 'relative',
    marginBottom: 2,
  },
  facultyCardAvatarMini: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#F59E0B',
  },
  facultySubjectBadgeCircleMini: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#051329',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  facultySubjectBadgeTextMini: {
    fontSize: 9.5,
    fontWeight: '900',
    color: '#F59E0B',
  },
  facultyCardNameMini: {
    fontSize: 12,
    fontWeight: '900',
    color: '#051329',
    textAlign: 'center',
  },
  facultyRoleBadge: {
    backgroundColor: 'rgba(37, 99, 235, 0.08)',
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderWidth: 0.5,
    borderColor: 'rgba(37, 99, 235, 0.2)',
  },
  facultyRoleBadgeText: {
    fontSize: 8.5,
    fontWeight: '900',
    color: '#2563EB',
  },
  facultyCardExpMini: {
    fontSize: 8.5,
    fontWeight: '800',
    color: '#D97706',
  },
  facultyCardDivider: {
    width: '80%',
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 4,
  },
  facultyCardDescMini: {
    fontSize: 9,
    color: '#475569',
    lineHeight: 12,
    textAlign: 'center',
  },
  avatarSelectionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  avatarSelectionItem: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarSelectionItemActive: {
    borderColor: '#2563EB',
    backgroundColor: '#EFF6FF',
  },
  classSelectorPill: {
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 2,
  },
  classSelectorPillActive: {
    backgroundColor: '#051329',
    borderColor: '#051329',
  },
  classSelectorPillText: {
    fontSize: 10.5,
    color: '#475569',
    fontWeight: '800',
  },
  classSelectorPillTextActive: {
    color: '#FFFFFF',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 12,
  },
  passwordTextInput: {
    flex: 1,
    fontSize: 12.5,
    color: '#0F172A',
    fontWeight: '800',
    height: '100%',
    padding: 0,
  },
  passwordEyeBtn: {
    padding: 6,
  },
  switchRowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  switchRowTitle: {
    fontSize: 12.5,
    fontWeight: '900',
    color: '#0F172A',
  },
  switchRowSub: {
    fontSize: 9.5,
    color: '#64748B',
    fontWeight: '700',
  },
  switchTrack: {
    width: 44,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#CBD5E1',
    padding: 2,
    justifyContent: 'center',
  },
  switchTrackActive: {
    backgroundColor: '#10B981',
  },
  switchThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  switchThumbActive: {
    alignSelf: 'flex-end',
  },
  // Password Strength styles
  passStrengthContainer: {
    marginBottom: 10,
    gap: 4,
  },
  passStrengthBarBg: {
    height: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  passStrengthBarFill: {
    height: '100%',
    borderRadius: 2,
  },
  passStrengthLabel: {
    fontSize: 9.5,
    fontWeight: '900',
    textAlign: 'right',
  },
  passChecklistContainer: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
    gap: 4,
  },
  passChecklistItem: {
    fontSize: 10,
    color: '#475569',
    fontWeight: '700',
  },
  // Help & Support styles
  supportHeaderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#051329',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 18,
    gap: 14,
    marginBottom: 8,
  },
  supportHeaderTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  supportHeaderSub: {
    fontSize: 10,
    color: '#94A3B8',
    fontWeight: '700',
    lineHeight: 14,
  },
  supportChannelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 8,
  },
  supportChannelBtn: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  supportChannelTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#051329',
  },
  supportChannelSub: {
    fontSize: 8.5,
    color: '#64748B',
    fontWeight: '700',
  },
  supportFaqList: {
    gap: 8,
    marginBottom: 8,
  },
  supportTicketSuccessCard: {
    backgroundColor: '#ECFDF5',
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
    padding: 18,
    alignItems: 'center',
    textAlign: 'center',
    gap: 8,
    marginBottom: 12,
  },
  supportTicketSuccessTitle: {
    fontSize: 14,
    fontWeight: '950',
    color: '#065F46',
    textAlign: 'center',
  },
  ticketIdBadge: {
    backgroundColor: '#051329',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  ticketIdText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#F59E0B',
  },
  supportTicketSuccessDesc: {
    fontSize: 10,
    color: '#047857',
    textAlign: 'center',
    lineHeight: 14,
    fontWeight: '700',
  },
  // Library Timings Schedule
  scheduleRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  scheduleRowItem: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  scheduleDayLabel: {
    fontSize: 10,
    color: '#94A3B8',
    fontWeight: '800',
  },
  scheduleTimeVal: {
    fontSize: 11.5,
    color: '#FFFFFF',
    fontWeight: '900',
  },
  scheduleRowDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  // Library Search Simulator
  bookSearchResultsList: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 8,
    gap: 8,
  },
  bookSearchResultsCountText: {
    fontSize: 9.5,
    color: '#64748B',
    fontWeight: '800',
  },
  bookSearchItemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 8,
    gap: 8,
  },
  bookSearchItemTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: '#051329',
  },
  bookSearchItemAuthor: {
    fontSize: 9,
    color: '#64748B',
    fontWeight: '700',
  },
  bookSearchShelfBadge: {
    backgroundColor: '#EFF6FF',
    borderWidth: 0.5,
    borderColor: '#BFDBFE',
    borderRadius: 6,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  bookSearchShelfText: {
    fontSize: 8.5,
    fontWeight: '900',
    color: '#2563EB',
  },
  bookNoResultsText: {
    fontSize: 10,
    color: '#EF4444',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '700',
  },
  // Library Rules Modern Card
  libraryRulesModernList: {
    gap: 8,
    marginBottom: 8,
  },
  libraryRuleModernCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    gap: 12,
  },
  libraryRuleIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  libraryRuleModernTitle: {
    fontSize: 11.5,
    fontWeight: '900',
    color: '#051329',
  },
  libraryRuleModernDesc: {
    fontSize: 9.5,
    color: '#64748B',
    lineHeight: 12,
    fontWeight: '700',
  },
  // Contact Map Simulator visual
  mapVisualContainer: {
    width: '100%',
    height: 140,
    backgroundColor: '#E2E8F0',
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  mapVisualRoadH: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 70,
    height: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#94A3B8',
  },
  mapVisualRoadV: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '55%',
    width: 16,
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#94A3B8',
  },
  mapLandmarkCircle: {
    position: 'absolute',
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#94A3B8',
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  mapLandmarkText: {
    fontSize: 7.5,
    fontWeight: '900',
    color: '#64748B',
  },
  mapCoachingPin: {
    position: 'absolute',
    top: 50,
    left: '52%',
    alignItems: 'center',
    zIndex: 10,
  },
  mapPulsingDot: {
    position: 'absolute',
    top: 6,
    left: 6,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#EF4444',
    opacity: 0.4,
  },
  mapPinLabel: {
    fontSize: 8.5,
    fontWeight: '900',
    color: '#EF4444',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderWidth: 0.5,
    borderColor: '#EF4444',
    marginTop: -2,
  },
  travelGuideContainer: {
    gap: 8,
    marginBottom: 8,
  },
  travelGuideCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    gap: 12,
  },
  travelGuideTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: '#051329',
  },
  travelGuideDesc: {
    fontSize: 9,
    color: '#64748B',
    lineHeight: 12,
    fontWeight: '700',
  },
  // Gallery Filters
  galleryFilterScroll: {
    gap: 8,
    paddingVertical: 4,
    marginBottom: 10,
  },
  galleryFilterPill: {
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  galleryFilterPillActive: {
    backgroundColor: '#051329',
    borderColor: '#051329',
  },
  galleryFilterPillText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#475569',
  },
  galleryFilterPillTextActive: {
    color: '#FFFFFF',
  },
  galleryFlexGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
  galleryItemCardLarge: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 2,
    shadowColor: '#000000',
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  galleryItemCardImage: {
    width: '100%',
    height: 100,
  },
  galleryItemCardTextOverlay: {
    padding: 8,
    gap: 2,
  },
  galleryItemCardCategory: {
    fontSize: 7.5,
    fontWeight: '900',
    color: '#2563EB',
  },
  galleryItemCardTitle: {
    fontSize: 9.5,
    fontWeight: '900',
    color: '#051329',
    lineHeight: 12,
  },
  // Lightbox Modal styling
  lightboxOverlay: {
    flex: 1,
    backgroundColor: 'rgba(5, 19, 41, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: 20,
  },
  lightboxCloseBtn: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  lightboxCloseText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },
  lightboxImage: {
    width: '100%',
    height: 280,
    marginBottom: 20,
  },
  lightboxCaptionContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    gap: 4,
  },
  lightboxCategory: {
    fontSize: 9,
    fontWeight: '900',
    color: '#F59E0B',
  },
  lightboxTitle: {
    fontSize: 15,
    fontWeight: '950',
    color: '#FFFFFF',
  },
  lightboxDesc: {
    fontSize: 11,
    color: '#94A3B8',
    lineHeight: 15,
    fontWeight: '700',
  },
  // Progress Dashboard screen
  progressRankCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#051329',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    gap: 12,
    marginBottom: 8,
  },
  progressRankCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F59E0B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressRankVal: {
    fontSize: 16,
    fontWeight: '950',
    color: '#051329',
  },
  progressRankTitle: {
    fontSize: 13,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  progressRankSub: {
    fontSize: 9.5,
    color: '#94A3B8',
    fontWeight: '700',
  },
  chartContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  chartBarsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    height: 120,
    paddingHorizontal: 8,
  },
  chartBarCol: {
    alignItems: 'center',
    gap: 4,
    width: '12%',
  },
  chartBarLabelVal: {
    fontSize: 8,
    color: '#64748B',
    fontWeight: '800',
  },
  chartBarTrack: {
    width: 14,
    height: 90,
    backgroundColor: '#F1F5F9',
    borderRadius: 7,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  chartBarFill: {
    width: '100%',
    backgroundColor: '#F59E0B',
    borderRadius: 7,
  },
  chartBarDay: {
    fontSize: 9,
    fontWeight: '800',
    color: '#475569',
  },
  chartFooterText: {
    fontSize: 9.5,
    color: '#64748B',
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 6,
  },
  subjectProgressItem: {
    marginBottom: 10,
    gap: 4,
  },
  subjectProgressTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subjectProgressName: {
    fontSize: 11,
    fontWeight: '900',
    color: '#0F172A',
  },
  subjectProgressPercentText: {
    fontSize: 10.5,
    fontWeight: '900',
  },
  subjectProgressBarBg: {
    height: 6,
    backgroundColor: '#F1F5F9',
    borderRadius: 3,
    overflow: 'hidden',
  },
  subjectProgressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  milestonesList: {
    gap: 8,
    marginBottom: 8,
  },
  milestoneCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    gap: 12,
  },
  milestoneIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  milestoneTitle: {
    fontSize: 11.5,
    fontWeight: '900',
    color: '#051329',
  },
  milestoneDesc: {
    fontSize: 9.5,
    color: '#64748B',
    lineHeight: 12,
    fontWeight: '700',
  },
  milestoneBadgeStatus: {
    borderRadius: 6,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  milestoneBadgeText: {
    fontSize: 8.5,
    fontWeight: '900',
  },
  // Faculty Extra details styles
  facultyCardEduText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#2563EB',
    textAlign: 'center',
    marginTop: -2,
  },
  facultyAchievementTag: {
    backgroundColor: '#FFFBEB',
    borderWidth: 0.5,
    borderColor: '#FDE68A',
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 6,
    marginTop: 2,
  },
  facultyAchievementTagText: {
    fontSize: 8,
    fontWeight: '900',
    color: '#B45309',
  },
  facultyActionButtonsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 4,
    marginTop: 4,
  },
  facultyActionBtnMini: {
    flex: 1,
    backgroundColor: '#051329',
    borderRadius: 8,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facultyActionBtnText: {
    fontSize: 8.5,
    color: '#FFFFFF',
    fontWeight: '950',
  },
  // Dark Mode Switch Toggle styles
  switchTrack: {
    width: 44,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#CBD5E1',
    padding: 2,
    justifyContent: 'center',
  },
  switchTrackActive: {
    backgroundColor: '#10B981',
  },
  switchThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  switchThumbActive: {
    alignSelf: 'flex-end',
  },
  // Logout Button styles
  logoutBtn: {
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FCA5A5',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  logoutBtnText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#EF4444',
  },
});
