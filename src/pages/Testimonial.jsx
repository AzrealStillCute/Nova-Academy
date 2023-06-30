import React, { useState } from 'react'
import styles from '../Styles'
import FeedbackCard from '../components/FeedbackCard'
import boyOne from "../assets/boyOne.jpg"
import boyTwo from "../assets/boyTwo.jpg"
import boyThree from "../assets/boyThree.jpg"
import boyFour from "../assets/boyFour.jpg"
import girlOne from "../assets/girlOne.jpg"
import girlTwo from "../assets/girlTwo.jpg"
import girlThree from "../assets/girlThree.jpg"
import girlFour from "../assets/girlFour.jpg"


const students = [
  {
    photo: boyOne,
    name: "John Smith",
    feedback: "Excellent school, great teachers! The school provides a nurturing environment that encourages academic growth and personal development. The teachers are knowledgeable, approachable, and always ready to help. I'm grateful for the quality education I've received here."
  },
  {
    photo: girlOne,
    name: "Jane Doe",
    feedback: "The school has a good learning environment. The classrooms are well-equipped with modern technology, making learning engaging and interactive. The curriculum is comprehensive, covering a wide range of subjects. The school also offers various extracurricular activities that promote holistic development."
  },
  {
    photo: boyTwo,
    name: "Michael Johnson",
    feedback: "I've learned a lot in this school. The teachers go the extra mile to ensure that every student understands the concepts thoroughly. The school organizes regular workshops and seminars to enhance our knowledge and skills. The supportive atmosphere and friendly classmates make the learning experience enjoyable."
  },
  {
    photo: girlTwo,
    name: "Emily Williams",
    feedback: "The teachers are very supportive. They create a positive learning environment where everyone feels encouraged to ask questions and participate actively. The school emphasizes individual growth and provides personalized attention to students. I appreciate the effort the school puts into fostering a sense of community and inclusivity."
  },
  {
    photo: boyThree,
    name: "Daniel Brown",
    feedback: "The facilities provided by the school are top-notch. The library is well-stocked with a wide range of books and resources. The science and computer labs are equipped with modern equipment. The school also has sports facilities that encourage students to stay physically active. Overall, the infrastructure adds great value to the learning experience."
  },
  {
    photo: girlThree,
    name: "Olivia Davis",
    feedback: "The school offers a wide range of extracurricular activities. From music and drama to sports and clubs, there's something for everyone. These activities help us explore our interests and talents beyond academics. The school encourages participation and provides ample opportunities to showcase our skills. It's a great platform for overall personality development."
  },
  {
    photo: boyFour,
    name: "William Taylor",
    feedback: "I'm grateful for the opportunities this school has given me. The school organizes field trips, competitions, and events that enhance our learning experience. The teachers guide and motivate us to reach our full potential. The strong emphasis on character building and values education sets this school apart."
  },
  {
    photo: girlFour,
    name: "Sophia Anderson",
    feedback: "The school fosters a culture of inclusivity. Diversity is celebrated, and everyone is treated with respect. The teachers create a safe space where all students feel valued and heard. The school promotes teamwork and collaboration, which prepares us for real-world challenges. I'm proud to be a part of such an inclusive community."
  }
];


function Testimonial() {

  const [visible, setVisible] = useState(4)

  const seeMoreHandle = () => {
    if ( visible === students.length) {
      setVisible(4)
    } else {
      setVisible( prev => prev + 4)
    }
  }

  return (
    <div className=' mb-72' id='Testimonial'>
        <div className=' md:text-center mb-10'>
            <span className={styles.subHeading}> Discover Inspiring Testimonials</span>
            <h2 className={styles.heading}>Hear From Our Satisfied Students</h2>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7'>
          { 
            students.slice(0, visible).map((i, index) => <FeedbackCard key={index} photo={i.photo} name={i.name} batch={i.batch} feedback={i.feedback}/>)
          }
        </div>
        <div className=' flex items-center justify-center mt-10'>
          <button onClick={seeMoreHandle} className={`${styles.bodyText}  text-sky-500`}>
            {
              visible === students.length ? "See Less" : "See More"
            }  
          </button> 
        </div>
    </div>
  )
}

export default Testimonial
