export const contactanos = ()=>{
     emailjs.init("QTz3k0bJv26nzFjiM"); 

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const formMessage = document.getElementById('formMessage');
            formMessage.classList.remove('hidden', 'success', 'error');

            emailjs.sendForm('service_hola123', 'template_arcggpc', this)
                .then(() => {
                    formMessage.textContent = '¡Mensaje enviado con éxito! Te contactaré pronto.';
                    formMessage.classList.add('success');
                    this.reset(); // Limpiar el formulario
                }, (error) => {
                    formMessage.textContent = 'Error al enviar el mensaje. Por favor, intenta de nuevo.';
                    formMessage.classList.add('error');
                    console.error('Error:', error);
                });
        });

        document.addEventListener('DOMContentLoaded', () => {
            const contactSection = document.querySelector('#Contact');
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-animate');
                        entry.target.querySelectorAll('h2, h3').forEach(el => {
                            el.classList.add('element-animate');
                        });
                    }
                });
            }, observerOptions);

            if (contactSection) {
                observer.observe(contactSection);
            }
        });
}