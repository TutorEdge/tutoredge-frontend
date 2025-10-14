import dynamic from 'next/dynamic';

const PaymentMethods = dynamic(() => import('@/components/parent-dashboard'), {
  ssr: false,
});

export default function PaymentMethodsPage() {
  return <PaymentMethods />;
}
