"use client"
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { CreditCard, Banknote, Building, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/alert';

const Payment = () =>  {
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (paymentMethod === 'credit_card') {
      if (!cardNumber || !expiryDate || !cvv) {
        setError('Please fill in all credit card details');
        return;
      }
      // Add credit card validation logic here
      if (!/^\d{16}$/.test(cardNumber)) {
        setError('Invalid card number');
        return;
      }
      if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        setError('Invalid expiry date');
        return;
      }
      if (!/^\d{3}$/.test(cvv)) {
        setError('Invalid CVV');
        return;
      }
    }

    // Process payment
    console.log('Processing payment:', { paymentMethod, cardNumber, expiryDate, cvv });
    // You would typically send this data to your backend for processing
    setSuccess(true);
  };

  return (
    <Card className="w-full space-w-md mx-auto">
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>Choose your preferred payment method</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <RadioGroup
            value={paymentMethod}
            onValueChange={setPaymentMethod}
            className="grid grid-cols-1 gap-4 mb-6"
          >
            <div>
              <RadioGroupItem value="credit_card" id="credit_card" className="peer sr-only" />
              <Label
                htmlFor="credit_card"
                className="flex items-center justify-between w-full p-4 border rounded-md cursor-pointer peer-checked:border-primary"
              >
                <div className="flex items-center">
                  <CreditCard className="w-6 h-6 mr-3" />
                  <span>Credit Card</span>
                </div>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="cash" id="cash" className="peer sr-only" />
              <Label
                htmlFor="cash"
                className="flex items-center justify-between w-full p-4 border rounded-md cursor-pointer peer-checked:border-primary"
              >
                <div className="flex items-center">
                  <Banknote className="w-6 h-6 mr-3" />
                  <span>Cash</span>
                </div>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="insurance" id="insurance" className="peer sr-only" />
              <Label
                htmlFor="insurance"
                className="flex items-center justify-between w-full p-4 border rounded-md cursor-pointer peer-checked:border-primary"
              >
                <div className="flex items-center">
                  <Building className="w-6 h-6 mr-3" />
                  <span>Insurance</span>
                </div>
              </Label>
            </div>
          </RadioGroup>

          {paymentMethod === 'credit_card' && (
            <div className="space-y-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength={16}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    type="text"
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    maxLength={5}
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    type="text"
                    id="cvv"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength={3}
                  />
                </div>
              </div>
            </div>
          )}

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Payment processed successfully!</AlertDescription>
            </Alert>
          )}
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit}>
          Process Payment
        </Button>
      </CardFooter>
    </Card>
  );
}
export default Payment