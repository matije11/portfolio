export const handleContactMe = () => {
  const email = "matije.vukovic@gmail.com";
  const subject = "Email from website";

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(subject)}`;

  window.open(gmailUrl, "_blank");
};
