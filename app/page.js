import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductOverview from "./components/ProductOverview";
import Grades from "./components/Grades";
import Specifications from "./components/Specifications";
import Certifications from "./components/Certifications";
import ExportInfo from "./components/ExportInfo";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <ProductOverview />
      <Grades />
      <Specifications />
      <Certifications />
      <ExportInfo />
      <EnquiryForm />
      <Footer />
    </main>
  );
}
