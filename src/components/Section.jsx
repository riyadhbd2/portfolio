// Section.js
import React from 'react';

function Section({ id, title, children }) {
  return (
    <section id={id}>
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  );
}

export default Section;
