import React from "react";

export default function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233657.09980794627!2d88.57844412258167!3d23.7868533296077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f94a104fc1c02f%3A0xbac2303153cf2bb!2sMeherpur%20District!5e0!3m2!1sen!2sbd!4v1648844898348!5m2!1sen!2sbd"
        width={100}
        height={450}
        style={{ border: 0, width: "100%" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
