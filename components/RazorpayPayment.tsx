
import React, { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';

interface RazorpayPaymentProps {
  amount: number;
  onSuccess: () => void;
  onFailure: (error: any) => void;
}

export const RazorpayPayment: React.FC<RazorpayPaymentProps> = ({ amount, onSuccess, onFailure }) => {
  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      setLoading(false);
      return;
    }

    // This is a Test Key. Replace with your own key from Razorpay Dashboard.
    const key = "rzp_test_1DP5mmOlF5G5ag"; 

    const options = {
      key: key, 
      amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Sui Dhaga",
      description: "Test Transaction",
      image: "https://ui-avatars.com/api/?name=Sui+Dhaga&background=ec4899&color=fff", // Placeholder logo
      handler: function (response: any) {
        // In a real app, verify signature on backend here
        // console.log(response.razorpay_payment_id);
        // console.log(response.razorpay_order_id);
        // console.log(response.razorpay_signature);
        onSuccess();
      },
      prefill: {
        name: "Test User",
        email: "test.user@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "Sui Dhaga Corporate Office"
      },
      theme: {
        color: "#ec4899" // Pink-500
      },
      // Enabling specific payment methods (optional, Razorpay handles this automatically usually)
      method: {
        upi: true,
        qr: true,
        card: true,
        netbanking: true,
        wallet: true,
      }
    };

    try {
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      paymentObject.on('payment.failed', function (response: any){
          onFailure(response.error);
      });
    } catch (error) {
      console.error("Payment Error", error);
      onFailure(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handlePayment}
      disabled={loading}
      className="w-full bg-black text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-gray-800 transition-all active:scale-[0.99] shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" size={16} /> Processing...
        </>
      ) : (
        <>
          <CreditCard size={16} /> Pay Rs. {amount.toLocaleString()} Now
        </>
      )}
    </button>
  );
};
