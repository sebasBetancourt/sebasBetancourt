export const CONTACT = {
  email: "s3basbetan@gmail.com",
  phone: "+573046417789",
  linkedin: "https://www.linkedin.com/in/sebastian-betancourt-605654293",
  github: "https://github.com/sebasBetancourt",
  instagram: "https://www.instagram.com/sebasbetan_soft/",
  cv: "/cv.pdf",
};

export const whatsappUrl = (message: string) =>
  `https://wa.me/${CONTACT.phone.replace("+", "")}?text=${encodeURIComponent(message)}`;
