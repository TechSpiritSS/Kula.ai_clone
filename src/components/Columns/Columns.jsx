import React, { useState, useEffect } from 'react';
import './Columns.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const videos = [
  'https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4',
  'https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4',
  'https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4',
];

const fetchAPI = async () => {
  const url = 'https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const Columns = () => {
  AOS.init();
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [textParagraphs, setTextParagraphs] = useState([]);

  useEffect(() => {
    fetchAPI().then((data) => {
      setTextParagraphs(data.texts);
    });
  }, []);

  function findActiveTextParagraph() {
    let activeParagraph;

    const textParagraphs = document.querySelectorAll('.text-paragraph');

    // Iterate through the paragraphs to find the one that is currently in the viewport
    textParagraphs.forEach((paragraph, index) => {
      const rect = paragraph.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        activeParagraph = index;
      }
    });

    // Return the index of the active paragraph
    return activeParagraph;
  }

  function handleVideoContainerPosition() {
    const videoContainer = document.querySelector('.video-container');
    if (
      currentParagraph === textParagraphs.length - 1 ||
      currentParagraph === 0
    ) {
      videoContainer.classList.remove('sticky');
    } else {
      videoContainer.classList.add('sticky');
    }
  }

  // Scroll event listener
  const handleScroll = () => {
    const activeTextParagraph = findActiveTextParagraph();
    if (activeTextParagraph !== -1) {
      setCurrentParagraph(activeTextParagraph);
      setCurrentVideo(activeTextParagraph);
      handleVideoContainerPosition();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="columns-container">
      <div className="left-column" onScroll={handleScroll}>
        {textParagraphs.map((text, index) => (
          <div key={index} className="text-paragraph">
            <h1>{text.heading}</h1>
            <h3>{text.subHeading}</h3>
            <p>{text.description}</p>
          </div>
        ))}
      </div>
      <div className="right-column">
        <div className="video-container" data-aos="fade-up">
          <video
            className="videoFile"
            src={videos[currentParagraph]}
            autoPlay
          />
        </div>
      </div>
    </div>
  );
};

export default Columns;
