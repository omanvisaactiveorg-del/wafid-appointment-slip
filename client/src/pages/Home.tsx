import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

/**
 * Design Philosophy: Professional Medical Appointment Slip
 * - Clean, organized layout for appointment information
 * - Two-column table structure for appointment details
 * - Professional color scheme with medical/official branding
 * - Responsive design for mobile and desktop
 * - Print-friendly styling
 */

export default function Home() {
  const [passportNo, setPassportNo] = useState("");
  const [nationality, setNationality] = useState("");
  const [showSlip, setShowSlip] = useState(true);

  // Sample appointment data
  const appointmentData = {
    merchantRef: "Appointment-20208202360280021-9WQdRvPTtc",
    slipNo: "20208202360280021",
    firstName: "TOYBA GUMATA",
    lastName: "ALI",
    nationality: "Ethiopian",
    nationalId: "",
    gender: "Female",
    maritalStatus: "Unmarried",
    countryTraveling: "Saudi Arabia",
    dateOfBirth: "21/Dec/1995",
    passportNo: "EP6485695",
    passportExpiry: "18/May/2026",
    passportIssuePlace: "Ethiopia",
    passportIssueDate: "19/May/2021",
    appliedPosition: "House Maid",
    paymentStatus: "PAID",
    amount: "10 USD",
    appointmentType: "Standard",
  };

  const medicalCenter = {
    name: "BETHZATHA HEALTH SERVICES",
    address:
      "Ethiopia, Addis Ababa, kirkos sub city woreda 07, house no. 363-365 addis ababa ethiopia P.O box 55 code 1110",
    phone: "+251115514141",
    email: "ermiasm2011@gmail.com",
  };

  const handleSearch = () => {
    if (passportNo && nationality) {
      setShowSlip(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/manus-storage/wafid-logo_cc3cd5cf.svg"
              alt="Wafid Logo"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Wafid</h1>
              <p className="text-xs text-gray-600">وافد</p>
            </div>
          </div>
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Wafid Appointment Slip
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Passport NO
              </label>
              <Input
                type="text"
                placeholder="Enter Passport No"
                value={passportNo}
                onChange={(e) => setPassportNo(e.target.value)}
                className="border-2 border-red-300 focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nationality
              </label>
              <Select value={nationality} onValueChange={setNationality}>
                <SelectTrigger className="border-2 border-red-300 focus:border-red-500">
                  <SelectValue placeholder="Select nationality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="afghan">Afghan</SelectItem>
                  <SelectItem value="albanian">Albanian</SelectItem>
                  <SelectItem value="algerian">Algerian</SelectItem>
                  <SelectItem value="american">American</SelectItem>
                  <SelectItem value="andorran">Andorran</SelectItem>
                  <SelectItem value="angolan">Angolan</SelectItem>
                  <SelectItem value="argentinian">Argentinian</SelectItem>
                  <SelectItem value="armenian">Armenian</SelectItem>
                  <SelectItem value="australian">Australian</SelectItem>
                  <SelectItem value="austrian">Austrian</SelectItem>
                  <SelectItem value="bangladeshi">Bangladeshi</SelectItem>
                  <SelectItem value="brazilian">Brazilian</SelectItem>
                  <SelectItem value="british">British</SelectItem>
                  <SelectItem value="canadian">Canadian</SelectItem>
                  <SelectItem value="chilean">Chilean</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                  <SelectItem value="colombian">Colombian</SelectItem>
                  <SelectItem value="egyptian">Egyptian</SelectItem>
                  <SelectItem value="ethiopian">Ethiopian</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="ghanaian">Ghanaian</SelectItem>
                  <SelectItem value="greek">Greek</SelectItem>
                  <SelectItem value="indian">Indian</SelectItem>
                  <SelectItem value="indonesian">Indonesian</SelectItem>
                  <SelectItem value="iranian">Iranian</SelectItem>
                  <SelectItem value="iraqi">Iraqi</SelectItem>
                  <SelectItem value="irish">Irish</SelectItem>
                  <SelectItem value="israeli">Israeli</SelectItem>
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="jamaican">Jamaican</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                  <SelectItem value="jordanian">Jordanian</SelectItem>
                  <SelectItem value="kenyan">Kenyan</SelectItem>
                  <SelectItem value="korean">Korean</SelectItem>
                  <SelectItem value="kuwaiti">Kuwaiti</SelectItem>
                  <SelectItem value="lebanese">Lebanese</SelectItem>
                  <SelectItem value="liberian">Liberian</SelectItem>
                  <SelectItem value="libyan">Libyan</SelectItem>
                  <SelectItem value="malaysian">Malaysian</SelectItem>
                  <SelectItem value="mexican">Mexican</SelectItem>
                  <SelectItem value="moroccan">Moroccan</SelectItem>
                  <SelectItem value="nepalese">Nepalese</SelectItem>
                  <SelectItem value="nigerian">Nigerian</SelectItem>
                  <SelectItem value="norwegian">Norwegian</SelectItem>
                  <SelectItem value="omani">Omani</SelectItem>
                  <SelectItem value="pakistani">Pakistani</SelectItem>
                  <SelectItem value="palestinian">Palestinian</SelectItem>
                  <SelectItem value="peruvian">Peruvian</SelectItem>
                  <SelectItem value="polish">Polish</SelectItem>
                  <SelectItem value="portuguese">Portuguese</SelectItem>
                  <SelectItem value="qatari">Qatari</SelectItem>
                  <SelectItem value="romanian">Romanian</SelectItem>
                  <SelectItem value="russian">Russian</SelectItem>
                  <SelectItem value="saudi">Saudi</SelectItem>
                  <SelectItem value="singaporean">Singaporean</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="srilankn">Sri Lankan</SelectItem>
                  <SelectItem value="sudanese">Sudanese</SelectItem>
                  <SelectItem value="swedish">Swedish</SelectItem>
                  <SelectItem value="swiss">Swiss</SelectItem>
                  <SelectItem value="syrian">Syrian</SelectItem>
                  <SelectItem value="taiwanese">Taiwanese</SelectItem>
                  <SelectItem value="thai">Thai</SelectItem>
                  <SelectItem value="turkish">Turkish</SelectItem>
                  <SelectItem value="ugandan">Ugandan</SelectItem>
                  <SelectItem value="ukrainian">Ukrainian</SelectItem>
                  <SelectItem value="vietnamese">Vietnamese</SelectItem>
                  <SelectItem value="yemeni">Yemeni</SelectItem>
                  <SelectItem value="zambian">Zambian</SelectItem>
                  <SelectItem value="zimbabwean">Zimbabwean</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={handleSearch}
            className="w-full md:w-auto bg-gray-800 hover:bg-gray-900 text-white px-8 py-2"
          >
            Search
          </Button>
        </div>

        {/* Appointment Slip */}
        {showSlip && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden print:shadow-none">
            {/* Slip Header */}
            <div className="bg-gray-100 border-b border-gray-300 p-6 text-center">
              <img
                src="/manus-storage/gcc-slip-logo_1a4bdd68.svg"
                alt="GCC Logo"
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                Medical Examination Registration Confirmation
              </h3>
            </div>

            {/* Slip Content */}
            <div className="p-6">
              {/* GCC Logo and Title */}
              <div className="text-center mb-8 pb-6 border-b border-gray-200">
                <img
                  src="/manus-storage/gcc-logo-white_1a8c9c4b.png"
                  alt="GCC Logo White"
                  className="h-12 mx-auto mb-3"
                />
                <h2 className="text-xl font-bold text-gray-900">
                  Medical Examination Appointment Slip
                </h2>
              </div>

              {/* Appointment Details Table */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Merchant reference №
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.merchantRef}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        GCC Slip №
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.slipNo}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        First name
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.firstName}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Last name
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.lastName}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Gender
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.gender}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Country traveling to
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.countryTraveling}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Passeport №
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.passportNo}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Passport issues place
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.passportIssuePlace}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Applied position
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.appliedPosition}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">
                        Amount
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.amount}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Nationality
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.nationality}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        National ID
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.nationalId || "-"}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Marital status
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.maritalStatus}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Date of Birth
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.dateOfBirth}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Passport expiry date
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.passportExpiry}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Passport issue date
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.passportIssueDate}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Payment status
                      </p>
                      <p className="text-green-600 font-semibold">
                        ✓ {appointmentData.paymentStatus}
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <p className="text-sm text-gray-600 font-medium">
                        Appointment Type
                      </p>
                      <p className="text-gray-900 font-semibold">
                        {appointmentData.appointmentType}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medical Center Information */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Medical center information
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 font-medium mb-1">
                      Medical Center Name
                    </p>
                    <p className="text-gray-900 font-semibold">
                      {medicalCenter.name}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium mb-1">
                        Location
                      </p>
                      <p className="text-gray-900">{medicalCenter.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Phone className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium mb-1">
                        Mobile Number
                      </p>
                      <p className="text-gray-900">{medicalCenter.phone}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Mail className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium mb-1">
                        Email
                      </p>
                      <p className="text-gray-900">{medicalCenter.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barcode Placeholder */}
              <div className="text-center py-6 border-t border-b border-gray-200 mb-6">
                <div className="inline-block bg-black px-4 py-2">
                  <div className="text-white text-xs font-mono">
                    |||||||||||||||||||||||||||
                  </div>
                </div>
              </div>

              {/* Generated Data */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div>
                  <p className="font-medium">Generated data</p>
                  <p>2/Aug/2023</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-600 font-medium">
                    ℹ Slip is valid only till
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex gap-3 justify-end print:hidden">
              <Button
                variant="outline"
                onClick={() => setShowSlip(false)}
                className="border-gray-300"
              >
                Close
              </Button>
              <Button
                variant="outline"
                onClick={() => window.print()}
                className="border-gray-300"
              >
                Print
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                PDF
              </Button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <img
                src="/manus-storage/gcc-logo-white_f3999f66.svg"
                alt="GCC Logo"
                className="h-12 mb-4"
              />
              <p className="text-gray-400 text-sm">
                Gulf Health Council - Medical Examination Services
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/ghc_gcc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/GHCouncil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/ghc_gcc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCrKbHYpmpC_OrAfZ5P_qZXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
            <p>© 2026 Gulf Health Council. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
