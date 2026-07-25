// Bundler re-evaluation trigger for logo assets
import React, { useState } from 'react';
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
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'courses' | 'library' | 'admission' | 'contact'>('home');

  // Sub-screen State
  const [subScreen, setSubScreen] = useState<'none' | 'about' | 'faculty' | 'gallery' | 'library_info' | 'contact_info' | 'faq' | 'disclaimer' | 'privacy' | 'terms'>('none');

  // FAQ State
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [faqActiveCategory, setFaqActiveCategory] = useState('All FAQs');
  const [faqOpenId, setFaqOpenId] = useState<number | null>(1);

  // Gallery State
  const [galleryFilter, setGalleryFilter] = useState('All');

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
              source={{ uri: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500" }}
              style={styles.directorPic}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.quoteMark}>“</Text>
              <Text style={styles.quoteText}>
                At Moonlight Coaching Centre, we believe every student is unique and has the potential to achieve excellence. Our mission is to provide the right guidance, quality education and a supportive environment to help students reach their goals and build a successful future.
              </Text>
              <Text style={styles.directorName}>Mrs. Anil Jha</Text>
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
      { name: "Mr. Anil Jha", role: "Director & Math Expert", subject: "Mathematics", experience: "15+ Years", desc: "Expert in IIT / JEE & Board Level Mathematics.", icon: "√x", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
      { name: "Mrs. Priya Kumari", role: "Physics Expert", subject: "Physics", experience: "12+ Years", desc: "Specializes in Concept Building and Problem Solving.", icon: "⚛️", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
      { name: "Mr. Rahul Singh", role: "Chemistry Faculty", subject: "Chemistry", experience: "10+ Years", desc: "Focused on making Chemistry easy and interesting for all.", icon: "🧪", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400" },
      { name: "Mrs. Neha Verma", role: "English Faculty", subject: "English", experience: "9+ Years", desc: "Improves English grammar & communication skills.", icon: "📖", image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400" },
      { name: "Mr. Amit Kumar", role: "Accounts Expert", subject: "Accounts", experience: "8+ Years", desc: "Simplifies Accounts & builds strong financial clarity.", icon: "📊", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
      { name: "Mrs. Shalini Mishra", role: "CS Expert", subject: "CS", experience: "7+ Years", desc: "Expert in Python, C++, and Computer Applications.", icon: "💻", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" },
      { name: "Mr. Deepak Sharma", role: "Biology Expert", subject: "Biology", experience: "8+ Years", desc: "Makes Biology fun and easy with real-life examples.", icon: "🧬", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
      { name: "Mrs. Kavita Jha", role: "Social Science", subject: "SST", experience: "9+ Years", desc: "Helps students understand History, Geography & Civics.", icon: "🌐", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" }
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

              <Text style={styles.facultyCardExpMini}>{fac.experience} Exp</Text>

              {/* Divider */}
              <View style={styles.facultyCardDivider} />

              {/* Description */}
              <Text style={styles.facultyCardDescMini} numberOfLines={3}>{fac.desc}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  const renderGallerySubScreen = () => {
    const galleryItems = [
      { id: 1, title: "Modern Classroom Session", category: "Classrooms", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" },
      { id: 2, title: "Central Library & Reading Hall", category: "Library", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800" },
      { id: 3, title: "Group Study & Doubt Clearance", category: "Classrooms", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" },
      { id: 4, title: "Annual Student Award Function", category: "Events", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" },
      { id: 5, title: "Parsauni Campus Front View", category: "Campus", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" },
      { id: 6, title: "Board Exam Practice Test Session", category: "Classrooms", image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" }
    ];

    const categories = ["All", "Campus", "Classrooms", "Library", "Events"];
    const filtered = galleryFilter === "All" ? galleryItems : galleryItems.filter(item => item.category === galleryFilter);

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
              <Text style={[styles.galleryFilterPillText, galleryFilter === cat && styles.galleryFilterPillTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Gallery items grid */}
        <View style={styles.galleryFlexGrid}>
          {filtered.map((item) => (
            <View key={item.id} style={styles.galleryItemCardLarge}>
              <Image source={{ uri: item.image }} style={styles.galleryItemCardImage} />
              <View style={styles.galleryItemCardTextOverlay}>
                <Text style={styles.galleryItemCardCategory}>{item.category.toUpperCase()}</Text>
                <Text style={styles.galleryItemCardTitle}>{item.title}</Text>
              </View>
            </View>
          ))}
        </View>
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

    return (
      <View style={styles.subScreenContent}>
        {/* Timings Card */}
        <View style={styles.libraryTimingsCard}>
          <Text style={styles.libraryTimingsCardTitle}>⏰ Library Timings</Text>
          <View style={styles.libraryTimingsRow}>
            <Text style={styles.libraryTimingsDay}>Monday - Saturday:</Text>
            <Text style={styles.libraryTimingsTime}>6:00 AM - 8:00 PM</Text>
          </View>
          <View style={styles.libraryTimingsRow}>
            <Text style={styles.libraryTimingsDay}>Sunday:</Text>
            <Text style={styles.libraryTimingsTime}>8:00 AM - 2:00 PM</Text>
          </View>
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
        <View style={styles.libraryRulesCard}>
          <Text style={styles.libraryRulesCardTitle}>📋 Library Rules & Discipline</Text>
          <Text style={styles.libraryRuleText}>• Maintain absolute silence inside the reading hall.</Text>
          <Text style={styles.libraryRuleText}>• Mobile phones must be switched off or kept on silent mode.</Text>
          <Text style={styles.libraryRuleText}>• Strictly separate designated reading zones for Boys and Girls.</Text>
          <Text style={styles.libraryRuleText}>• Handle books and library assets with care.</Text>
          <Text style={styles.libraryRuleText}>• Return borrowed books within the stipulated time limit.</Text>
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
          <View style={styles.mapSimulatorPinContainer}>
            <Text style={{ fontSize: 32, marginBottom: 8 }}>📍</Text>
            <Text style={styles.mapSimulatorTitle}>Moonlight Coaching Centre</Text>
            <Text style={styles.mapSimulatorSub}>Parsauni, Sitamarhi, Bihar - 843316</Text>
          </View>
        </View>

        {/* Landmarks row */}
        <View style={styles.statsBarNavy}>
          <View style={styles.statsBarItem}>
            <Text style={styles.statsBarText}>🚆 Sitamarhi Jn (12 KM)</Text>
          </View>
          <View style={styles.statsBarDivider} />
          <View style={styles.statsBarItem}>
            <Text style={styles.statsBarText}>🚌 Parsauni Bus (1 KM)</Text>
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

  const renderSubScreen = () => {
    return (
      <View style={styles.subScreenContainer}>
        {/* Header / Back Bar */}
        <View style={styles.subScreenHeader}>
          <TouchableOpacity style={styles.subScreenBackBtn} onPress={() => setSubScreen('none')}>
            <Text style={styles.subScreenBackBtnText}>⬅ Back</Text>
          </TouchableOpacity>
          <Text style={styles.subScreenTitle}>
            {subScreen === 'about' && 'About Us'}
            {subScreen === 'faculty' && 'Our Faculty'}
            {subScreen === 'gallery' && 'Campus Gallery'}
            {subScreen === 'library_info' && 'Central Library'}
            {subScreen === 'contact_info' && 'Contact Us'}
            {subScreen === 'faq' && 'FAQs'}
            {subScreen === 'disclaimer' && 'Disclaimer'}
            {subScreen === 'privacy' && 'Privacy Policy'}
            {subScreen === 'terms' && 'Terms & Conditions'}
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
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="dark" backgroundColor="#FFFFFF" />

      {/* Main Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoBadgeContainer}>
            <Image source={require('./assets/logo.png')} style={styles.logoImageHeader} />
          </View>
          <View>
            <Text style={styles.logoTitle}>MOONLIGHT</Text>
            <Text style={styles.logoSubtitle}>COACHING CENTRE</Text>
            <Text style={styles.logoTagline}>Strong Foundation, Bright Future!</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIconBtn}>
            <Text style={{ fontSize: 18 }}>🔔</Text>
            <View style={styles.bellRedDot} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconBtn}>
            <Text style={{ fontSize: 18 }}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Scrollable Screen Content */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {subScreen !== 'none' && renderSubScreen()}

        {/* ================= HOME TAB (FULL RICH HOMEPAGE FEED) ================= */}
        {subScreen === 'none' && activeTab === 'home' && (
          <View style={styles.tabContent}>
            
            {/* 1. HERO CARD */}
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
                    <TouchableOpacity style={styles.primaryYellowBtn} onPress={() => setActiveTab('courses')}>
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
                <Text style={styles.teacherName}>Mrs. Anil Jha</Text>
                <Text style={styles.teacherRole}>Founder & Chemistry Mentor</Text>
                <Text style={styles.teacherExp}>🎓 20+ Years Exp</Text>
              </View>

              {/* Teacher 2 */}
              <View style={styles.teacherCard}>
                <View style={styles.teacherAvatarCircle}>
                  <Text style={{ fontSize: 24 }}>👨‍🔬</Text>
                </View>
                <Text style={styles.teacherName}>Er. Vikas Kumar</Text>
                <Text style={styles.teacherRole}>Physics Specialist</Text>
                <Text style={styles.teacherExp}>🎓 10+ Years Exp (Ex-Allen)</Text>
              </View>

              {/* Teacher 3 */}
              <View style={styles.teacherCard}>
                <View style={styles.teacherAvatarCircle}>
                  <Text style={{ fontSize: 24 }}>👨‍💻</Text>
                </View>
                <Text style={styles.teacherName}>Prof. S. N. Mishra</Text>
                <Text style={styles.teacherRole}>Mathematics HOD</Text>
                <Text style={styles.teacherExp}>🎓 15+ Years Exp</Text>
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
                <Text style={styles.profilePageTitle}>My Profile</Text>
                <Text style={styles.profilePageSub}>Manage your account and view study metrics.</Text>
              </View>
              <TouchableOpacity style={styles.settingsGearBtn} onPress={() => Alert.alert('Settings', 'Settings menu is locked under child-lock control.')}>
                <Text style={{ fontSize: 18 }}>⚙️</Text>
              </TouchableOpacity>
            </View>

            {/* Profile Hero Card */}
            <View style={styles.profileHeroCard}>
              {/* Profile Main Info */}
              <View style={styles.profileHeroMainRow}>
                {/* Avatar and Camera badge */}
                <View style={styles.profileAvatarContainer}>
                  <View style={styles.profileAvatarCircle}>
                    <Text style={{ fontSize: 32 }}>👨‍🎓</Text>
                  </View>
                  <View style={styles.cameraIconBadge}>
                    <Text style={{ fontSize: 10 }}>📷</Text>
                  </View>
                </View>

                {/* Text details */}
                <View style={styles.profileHeroTextCol}>
                  <View style={styles.premiumMemberBadge}>
                    <Text style={styles.premiumMemberBadgeText}>👑 Premium Member</Text>
                  </View>
                  <Text style={styles.profileHeroName}>Rahul Kumar</Text>
                  <Text style={styles.profileHeroEmail}>rahulkumar@gmail.com</Text>
                  <Text style={styles.profileHeroPhone}>+91 78703 91245</Text>
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
            <View style={styles.crownBannerCard}>
              <Text style={{ fontSize: 18 }}>👑</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.crownBannerTitle}>You're doing great!</Text>
                <Text style={styles.crownBannerSub}>Keep learning and achieve your goals.</Text>
              </View>
              <TouchableOpacity onPress={() => Alert.alert('Progress Analytics', 'Average completion time: 24 mins/session.')}>
                <Text style={styles.crownBannerLinkText}>View Progress ➔</Text>
              </TouchableOpacity>
            </View>

            {/* My Learning Section */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>My Learning</Text>
            </View>
            <View style={styles.myLearningListGrid}>
              <View style={styles.myLearningRow}>
                <TouchableOpacity style={styles.myLearningItemCard} onPress={() => setActiveTab('courses')}>
                  <Text style={{ fontSize: 15 }}>📘</Text>
                  <Text style={styles.myLearningItemTitle}>My Courses</Text>
                  <Text style={{ fontSize: 10, color: '#94A3B8' }}>➔</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.myLearningItemCard} onPress={() => setActiveTab('admission')}>
                  <Text style={{ fontSize: 15 }}>🎓</Text>
                  <Text style={styles.myLearningItemTitle}>Study Center</Text>
                  <Text style={{ fontSize: 10, color: '#94A3B8' }}>➔</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.myLearningRow}>
                <TouchableOpacity style={styles.myLearningItemCard} onPress={() => setActiveTab('library')}>
                  <Text style={{ fontSize: 15 }}>📝</Text>
                  <Text style={styles.myLearningItemTitle}>My Tests</Text>
                  <Text style={{ fontSize: 10, color: '#94A3B8' }}>➔</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.myLearningItemCard} onPress={() => Alert.alert('My Notes', 'Opening saved study notes...')}>
                  <Text style={{ fontSize: 15 }}>📓</Text>
                  <Text style={styles.myLearningItemTitle}>My Notes</Text>
                  <Text style={{ fontSize: 10, color: '#94A3B8' }}>➔</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Account List Options */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Account</Text>
            </View>
            <View style={styles.accountSettingsList}>
              <TouchableOpacity style={styles.settingsRowItem} onPress={() => Alert.alert('Edit Profile', 'Under maintenance.')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>👤</Text>
                  <Text style={styles.settingsRowTitle}>Edit Profile</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.settingsRowItem} onPress={() => Alert.alert('Change Password', 'Locked option.')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>🔒</Text>
                  <Text style={styles.settingsRowTitle}>Change Password</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.settingsRowItem} onPress={() => Alert.alert('Notifications', 'Push notification alerts are active.')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>🔔</Text>
                  <Text style={styles.settingsRowTitle}>Notification Settings</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.settingsRowItem} onPress={handleCall}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>❓</Text>
                  <Text style={styles.settingsRowTitle}>Help & Support (Call: 7870391245)</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>
            </View>

            {/* Institute Information Section */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Institute Information</Text>
            </View>
            <View style={styles.accountSettingsList}>
              <TouchableOpacity style={styles.settingsRowItem} onPress={() => setSubScreen('about')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>ℹ️</Text>
                  <Text style={styles.settingsRowTitle}>About Moonlight Centre</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.settingsRowItem} onPress={() => setSubScreen('faculty')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>👨‍🏫</Text>
                  <Text style={styles.settingsRowTitle}>Meet Our Faculty</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.settingsRowItem} onPress={() => setSubScreen('gallery')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>🖼️</Text>
                  <Text style={styles.settingsRowTitle}>Campus Photo Gallery</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.settingsRowItem} onPress={() => setSubScreen('library_info')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>📚</Text>
                  <Text style={styles.settingsRowTitle}>Central Library & Rules</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.settingsRowItem} onPress={() => setSubScreen('contact_info')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>📞</Text>
                  <Text style={styles.settingsRowTitle}>Contact Details & Map</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.settingsRowItem} onPress={() => setSubScreen('faq')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>❓</Text>
                  <Text style={styles.settingsRowTitle}>Frequently Asked Questions (FAQ)</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>
            </View>

            {/* Legal & Policies Section */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeading}>Legal & Policies</Text>
            </View>
            <View style={styles.accountSettingsList}>
              <TouchableOpacity style={styles.settingsRowItem} onPress={() => setSubScreen('disclaimer')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>⚖️</Text>
                  <Text style={styles.settingsRowTitle}>Disclaimer</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.settingsRowItem} onPress={() => setSubScreen('privacy')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>🛡️</Text>
                  <Text style={styles.settingsRowTitle}>Privacy Policy</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.settingsRowItem} onPress={() => setSubScreen('terms')}>
                <View style={styles.settingsRowIconLabel}>
                  <Text style={{ fontSize: 14 }}>📄</Text>
                  <Text style={styles.settingsRowTitle}>Terms & Conditions</Text>
                </View>
                <Text style={{ fontSize: 11, color: '#CBD5E1' }}>➔</Text>
              </TouchableOpacity>
            </View>

            {/* Refer and Earn Card */}
            <View style={styles.referEarnCard}>
              <View style={styles.referGiftIconCircle}>
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
            <TouchableOpacity style={styles.logoutBtn} onPress={() => Alert.alert('Logout', 'Logging out...')}>
              <Text style={styles.logoutBtnText}>🚪 Logout</Text>
            </TouchableOpacity>

          </View>
        )}

      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
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
          <Text style={[styles.navIcon, activeTab === 'courses' && styles.navIconActive]}>📖</Text>
          <Text style={[styles.navText, activeTab === 'courses' && styles.navTextActive]}>Courses</Text>
        </TouchableOpacity>

        {/* SPECIAL CENTER BUTTON FOR TESTS */}
        <TouchableOpacity
          style={[styles.navItem, styles.centerNavItem]}
          onPress={() => { setActiveTab('library'); setSubScreen('none'); }}
        >
          <View style={[styles.centerNavCircle, activeTab === 'library' && styles.centerNavCircleActive]}>
            <Text style={{ fontSize: 20 }}>📋</Text>
          </View>
          <Text style={[styles.navText, activeTab === 'library' && styles.navTextActive]}>Tests</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => { setActiveTab('admission'); setSubScreen('none'); }}
        >
          {activeTab === 'admission' && <View style={styles.navActiveIndicatorLine} />}
          <Text style={[styles.navIcon, activeTab === 'admission' && styles.navIconActive]}>🎓</Text>
          <Text style={[styles.navText, activeTab === 'admission' && styles.navTextActive]}>Study Center</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => { setActiveTab('contact'); setSubScreen('none'); }}
        >
          {activeTab === 'contact' && <View style={styles.navActiveIndicatorLine} />}
          <Text style={[styles.navIcon, activeTab === 'contact' && styles.navIconActive]}>👤</Text>
          <Text style={[styles.navText, activeTab === 'contact' && styles.navTextActive]}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    width: 48,
    height: 48,
    borderRadius: 24,
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
    fontSize: 18,
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
});
