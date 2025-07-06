import React from 'react';
import { Input, Button } from '../ui';

const ContactForm: React.FC = () => (
  <form className="space-y-4">
    <Input type="text" name="name" placeholder="Your Name" required />
    <Input type="email" name="email" placeholder="Your Email" required />
    <Input type="text" name="subject" placeholder="Subject" required />
    <Input as="textarea" name="message" placeholder="Message" required />
    <Button type="submit">Send Message</Button>
  </form>
);

export default ContactForm;
