import Navbar from '@/app/[locale]/ui/homepage/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Navbar />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
 
    </div>
  );
}