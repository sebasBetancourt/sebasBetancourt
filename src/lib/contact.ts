export const CONTACT = {
  email: "s3basbetan@gmail.com",
  phone: "+573024341150",
  linkedin: "https://www.linkedin.com/in/sebastian-betancourt-605654293",
  github: "https://github.com/sebasBetancourt",
  instagram: "https://www.instagram.com/sebasbetan_soft/",
  // Generadas con `python3 cv/build.py`
  cv: {
    en: "/cv/CV-Sebastian-Betancourt-EN.pdf",
    es: "/cv/CV-Sebastian-Betancourt-ES.pdf",
  },
};

export const whatsappUrl = (message: string) =>
  `https://wa.me/${CONTACT.phone.replace("+", "")}?text=${encodeURIComponent(message)}`;
