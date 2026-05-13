
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceTypeChange = (value) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);


    try {
      await emailjs.send(
        'service_kbqkwfc',
        'template_imlx7l7',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.serviceType,
          message: formData.message,
        },
        'PGK-Dk3v96eib3tN2'
      );

      toast.success('Message sent successfully. We will contact you soon.');

      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });

    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="text-foreground"
            placeholder="Enter your name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="text-foreground"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="text-foreground"
            placeholder="(555) 123-4567"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceType">Service type *</Label>
          <Select value={formData.serviceType} onValueChange={handleServiceTypeChange} required>
            <SelectTrigger id="serviceType" className="text-foreground">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential electrical</SelectItem>
              <SelectItem value="commercial">Commercial electrical</SelectItem>
              <SelectItem value="lighting">Lighting installation</SelectItem>
              <SelectItem value="troubleshooting">Troubleshooting & repairs</SelectItem>
              <SelectItem value="remodel">Remodel & renovation</SelectItem>
              <SelectItem value="new-construction">New construction</SelectItem>
              <SelectItem value="panel-upgrade">Panel upgrade</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project details *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="text-foreground resize-none"
          placeholder="Tell us about your electrical project..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  );
}

export default ContactForm;
