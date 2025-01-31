+
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const CheckoutForm: React.FC = () => {
  return (
    <div className="container mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* Billing Details */}
      <Card className="p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Billing details</h2>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>
          <Input placeholder="Company Name (Optional)" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Country / Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Sri Lanka">Sri Lanka</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Street address" />
          <Input placeholder="Town / City" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Province" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Western Province">Western Province</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="ZIP Code" />
          <Input placeholder="Phone" />
          <Input placeholder="Email address" />
          <Input placeholder="Additional information" />
        </CardContent>
      </Card>
      
      {/* Order Summary */}
      <Card className="p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Product</h2>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>Asgaard sofa × 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-bold text-xl">
            <span>Total</span>
            <span>Rs. 250,000.00</span>
          </div>
          
          {/* Payment Methods */}
          <RadioGroup defaultValue="bank-transfer">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bank-transfer" id="bank-transfer" />
              <Label htmlFor="bank-transfer">Direct Bank Transfer</Label>
            </div>
            <p className="text-sm text-gray-600">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cash-on-delivery" id="cash-on-delivery" />
              <Label htmlFor="cash-on-delivery">Cash On Delivery</Label>
            </div>
          </RadioGroup>
          <p className="text-sm text-gray-600">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="text-blue-600">privacy policy</a>.
          </p>
          <Button className="w-full mt-4">Place order</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutForm;
