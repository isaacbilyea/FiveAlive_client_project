export function contactForm() {
    const app = Vue.createApp({
        data() {
            return {
                formData: {
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    honeypot: ''
                },
                responseMessage: '',
                errors: '',
                showRequiredMessage: true,
                buttonText: 'Submit',
                tickMark: '<svg width="45" height="32" viewBox="0 0 58 45" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="nonzero" d="M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65"/></svg>',
                submitted: false
            }
        },
        methods: {
            submitForm() {
                
                fetch('email.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams(this.formData)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data.errors);
                    if(data.errors) {
                        this.errors = data.errors;
                        this.responseMessage = '';
                        this.showRequiredMessage = false;
                        this.scrollToMessage();
                    } else {
                        this.errors = '';
                        this.responseMessage = data.message;
                        this.showRequiredMessage = false;
                        this.formData = {
                            name: '',
                            email: '',
                            subject: '',
                            message: '',
                            honeypot: ''
                        };
                        this.buttonText = this.tickMark;
                        this.submitted = true;
                        this.scrollToMessage();

                        setTimeout(() => {
                            this.buttonText = 'Submit';
                            this.submitted = false;
                            this.responseMessage = '';
                            this.showRequiredMessage = true;
                        }, 3000);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    this.errors = ['An error occurred. Please try again later.'];
                    this.showRequiredMessage = false;
                    this.scrollToMessage();
                });
            },
            
            scrollToMessage() {
                let target = '';
                
                if (this.errors) {
                    target = '.error-messages';
                } else if (this.responseMessage) {
                    target = '.success-message';
                }
                
                gsap.to(window, {
                    duration: 0.8,
                    scrollTo: {
                        y: target,
                        offsetY: 500 
                    },
                    ease: "power2.inOut"
                });
            }
        }
    }).mount("#contact-con");

    return app;
}