import React from 'react';
import { Input, Button } from '../ui';

const MembershipForm: React.FC = () => (
  <form className="space-y-4">
    <Input type="text" name="name" placeholder="Full Name" required />
    <Input type="email" name="email" placeholder="Email" required />
    <Input type="text" name="phone" placeholder="Phone Number" required />
    <Button type="submit">Become a Member</Button>
  </form>
);

export default MembershipForm;
