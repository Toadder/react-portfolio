import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex items-center justify-center h-full w-full'>
          <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-60% object-contain" />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px]' style={{ margin: 0 }}>{experience.company_name}</p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li className='text-white-100 text-[14px] pl-1 tracking-wider ' key={`experience-point-${index}`}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What have done so far</p>
				<h2 className={styles.sectionHeadText}>Work Experience</h2>
			</motion.div>

      <div
        className='xs:mt-20 mt-5 flex flex-col'
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
		</>
	);
};

export default SectionWrapper(Experience, 'work');
