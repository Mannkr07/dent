"use client"
import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Textarea } from '../../../components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion';
import { Label } from '../../../components/ui/label';
import { toast } from '../../../components/ui/toast';
import { Send, HelpCircle } from 'lucide-react';

const Support = () =>  {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    toast({
      title: 'Inquiry Submitted',
      description: "We'll get back to you as soon as possible.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='h-screen dark:bg-black'>
      <Card className="w-full spcae-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Customer Support</CardTitle>
          <CardDescription>Get help or find answers to common questions</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="inquiry" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="inquiry">Submit Inquiry</TabsTrigger>
              <TabsTrigger value="faq">FAQs</TabsTrigger>
            </TabsList>
            <TabsContent value="inquiry">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" /> Send Inquiry
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="faq">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I schedule an appointment?</AccordionTrigger>
                  <AccordionContent>
                    You can schedule an appointment by calling our office during business hours or using our online booking system on our website.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What insurance plans do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept most major dental insurance plans. Please contact our office for a complete list of accepted insurance providers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How often should I have a dental check-up?</AccordionTrigger>
                  <AccordionContent>
                    We recommend having a dental check-up and cleaning every six months for most patients. However, some patients may need more frequent visits based on their oral health needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What should I do in case of a dental emergency?</AccordionTrigger>
                  <AccordionContent>
                    In case of a dental emergency, please call our office immediately. We offer emergency dental services and will provide guidance on what to do until you can be seen by a dentist.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <HelpCircle className="w-4 h-4 mr-2" /> Contact Us
          </Button>
          <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
        </CardFooter>
      </Card>
    </div>
  );
}
export default Support