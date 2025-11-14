import Footer from "./Footer";
import Navbar from "./Navbar";

const WebLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-full bg-black">
        <Navbar />
        <main className="h-[100dvh] overflow-x-hidden">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default WebLayoutWrapper;
