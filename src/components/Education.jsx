import React from "react";
import tu_photo from '../assets/tu_photo.jpg';

export const Education = () => {
  return (
    <div className="text-gray-400">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {/* Master education */}
        <li className="border">
          <div className="timeline-middle">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg> */}
            <img className="w-10 rounded-badge" src={tu_photo} alt="" />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">October 2018 - Present</time>
            <div className="text-lg font-black">
              Chemnitz University of Technology
            </div>
            <p>
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the
              original Apple Macintosh personal computer. It played a pivotal
              role in establishing desktop publishing as a general office
              function. The motherboard, a 9 in (23 cm) CRT monitor, and a
              floppy drive were housed in a beige case with integrated carrying
              handle; it came with a keyboard and single-button mouse.
            </p>
          </div>
          <hr className="bg-white"/>
        </li>
        {/* Bachelor Education */}
        <li className="border">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic"> January 2014 - June 2014</time>
            <div className="text-lg font-black">Daffodil International University</div>
            <p>
              iMac is a family of all-in-one Mac desktop computers designed and
              built by Apple Inc. It has been the primary part of Apple's
              consumer desktop offerings since its debut in August 1998, and has
              evolved through seven distinct forms
            </p>
          </div>
          <hr className="bg-white"/>
        </li>
      </ul>
    </div>
  );
};