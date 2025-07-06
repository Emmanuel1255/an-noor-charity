import React from 'react';
import { Input, Button } from '../ui';

const DonationForm: React.FC = () => (
  <form className="space-y-4">
    <Input type="text" name="donorName" placeholder="Your Name" required />
    <Input type="email" name="email" placeholder="Your Email" required />
    <Input type="number" name="amount" placeholder="Donation Amount" required />
    <Input as="textarea" name="message" placeholder="Message (optional)" />
    <Button type="submit">Donate</Button>
  </form>
);

export default DonationForm;
