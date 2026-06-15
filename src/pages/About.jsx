import { useTranslation } from "react-i18next";
import {
FaMapMarkerAlt,
FaEye,
FaBullseye,
FaHistory,
FaUsers,
FaAward,
} from "react-icons/fa";
import PageHead from "../components/PageHead";

import img1 from '@/images/5.jpeg'

import img11 from "@/images/3.jpeg"

export default function About() {
const { t } = useTranslation();

const leaders = [
{
name: "அமுதா.நா",
role: "நிறுவனர் & தலைவர்",
image: img11,
},
{
name: "துணைத் தலைவர்",
role: "Vice Chairperson",
image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
},
{
name: "செயலாளர்",
role: "Secretary",
image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
},
{
name: "பொருளாளர்",
role: "Treasurer",
image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
},
];

const values = [
"பெண்கள் அதிகாரமடைதல்",
"சமூக முன்னேற்றம்",
"இயற்கை பாதுகாப்பு",
"நேர்மை",
"சமத்துவம்",
"சேவை மனப்பான்மை",
];

return (
<> <PageHead
     eyebrow="அமுதம்"
     title="எங்களைப் பற்றி"
     subtitle="பெண்களை வலுப்படுத்தி • இயற்கையை பாதுகாத்து • சமூகத்தை முன்னேற்றுவோம்"
   />

```
  {/* ABOUT INTRO */}


  {/* FOUNDER */}
  <section
    className="amu-section bg-cream overflow-hidden"
    style={{ background: "#fff8ef" }}
  >
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-4 text-center" data-aos="zoom-in">
         <img
  src={img1}
  alt="Founder"
  className="img-fluid shadow-lg"
  style={{
    width: "100%",
    maxWidth: "400px",
    aspectRatio: "4 / 5",
    objectFit: "cover",
    borderRadius: "30px",
  }}
/>
        </div>

        <div className="col-lg-8" data-aos="fade-left">
          <span className="amu-eyebrow">நிறுவனர்</span>

          <h2 className="amu-h2">நா.அமுதா</h2>

          <h5 style={{ color: "#d97706" }}>
            Founder 
          </h5>

          <p className="mt-4">
            "பெண்களின் முன்னேற்றமே சமூகத்தின் முன்னேற்றம்"
            என்ற உயர்ந்த எண்ணத்துடன் அமுதம் மகளிர் நல
            அறக்கட்டளையை நிறுவி சமூக சேவையில் தொடர்ந்து
            செயல்பட்டு வருகிறார்.
          </p>

          <p>
            பெண்களின் கல்வி, வேலைவாய்ப்பு, சுயதொழில்,
            சுற்றுச்சூழல் பாதுகாப்பு மற்றும் சமூக
            மேம்பாட்டிற்கான பல்வேறு நலத்திட்டங்களை
            முன்னெடுத்து வருகிறார்.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* OUR STORY */}
  <section className="amu-section overflow-hidden">
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="amu-eyebrow">எங்கள் கதை</span>
        <h2 className="amu-h2">Our Story</h2>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="amu-card h-100 text-center">
            <FaHistory size={40} color="#d97706" />
            <h4 className="mt-3">2024</h4>
            <p>
              25 ஜனவரி 2024 அன்று அறக்கட்டளை நிறுவப்பட்டது.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="amu-card h-100 text-center">
            <FaUsers size={40} color="#16a34a" />
            <h4 className="mt-3">சமூக சேவை</h4>
            <p>
              பெண்கள், குழந்தைகள் மற்றும் சமூக நலத்திற்கான
              பல்வேறு திட்டங்கள்.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="amu-card h-100 text-center">
            <FaAward size={40} color="#dc2626" />
            <h4 className="mt-3">எதிர்காலம்</h4>
            <p>
              தமிழகம் முழுவதும் சமூக மாற்றத்தை உருவாக்கும்
              நோக்கம்.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* VISION MISSION HISTORY */}
  <section
    className="amu-section overflow-hidden"
    style={{ background: "#fff8ef" }}
  >
    <div className="container">
      <div className="row g-4">
        {[
          {
            title: "பார்வை",
            icon: <FaEye />,
            text: "பெண்கள் பாதுகாப்பாகவும் அதிகாரமுடனும் வாழும் சமூகத்தை உருவாக்குதல்.",
          },
          {
            title: "பணி",
            icon: <FaBullseye />,
            text: "பெண்கள், குழந்தைகள் மற்றும் சமூக முன்னேற்றத்திற்கான நிலையான திட்டங்களை செயல்படுத்துதல்.",
          },
          {
            title: "வரலாறு",
            icon: <FaHistory />,
            text: "2024 ஆம் ஆண்டு தொடங்கி சமூக சேவையில் தொடர்ந்து செயல்பட்டு வருகிறது.",
          },
        ].map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="amu-card h-100 text-center">
              <div
                style={{
                  fontSize: "40px",
                  color: "#d97706",
                  marginBottom: "15px",
                }}
              >
                {item.icon}
              </div>

              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* LEADERSHIP TEAM */}
  <section className="amu-section overflow-hidden">
    <div className="container">
      <div className="text-center mb-5">
        <span className="amu-eyebrow">நிர்வாகக் குழு</span>
        <h2 className="amu-h2">எங்கள் தலைமை குழு</h2>
      </div>

      <div className="row g-4">
        {leaders.map((leader, index) => (
          <div
            className="col-md-6 col-lg-3"
            key={index}
            data-aos="zoom-in"
          >
            <div className="amu-card text-center h-100">
              <img
                src={leader.image}
                alt={leader.name}
                className="img-fluid mb-3"
                style={{
                  height: "260px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />

              <h5>{leader.name}</h5>
              <p>{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>


  

  {/* VALUES */}
  <section
    className="amu-section overflow-hidden"
    style={{ background: "#fff8ef" }}
  >
    <div className="container text-center">
      <span className="amu-eyebrow">எங்கள் மதிப்புகள்</span>
      <h2 className="amu-h2 mb-5">Our Values</h2>

      <div className="row justify-content-center g-3">
        {values.map((value, index) => (
          <div className="col-auto" key={index}>
            <div
              className="amu-chip"
              style={{
                padding: "12px 25px",
                borderRadius: "50px",
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* LOCATION */}
  <section className="amu-section overflow-hidden">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-5">
          <span className="amu-eyebrow">எங்கள் இருப்பிடம்</span>

          <h2 className="amu-h2">மேல்பாக்கம் கிராமம்</h2>

          <p className="amu-section-sub">
            மேல்பாக்கம், திண்டிவனம்,
            விழுப்புரம் மாவட்டம்,
            தமிழ்நாடு.
          </p>
        </div>

        <div className="col-lg-7">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Melpakkam,+Tindivanam,+Villupuram,+Tamil+Nadu&output=embed"
            style={{
              width: "100%",
              height: "400px",
              border: "0",
              borderRadius: "25px",
            }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</>


);
}
