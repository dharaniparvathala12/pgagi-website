import Calendlylink from "../buttons/callbutton"; // Import the CalendlyLink component

export default function Book() {
    const url = "https://calendly.com/vivek-_ou/30min";
  
    return (
      <div className="bg-[#14213D] min-h-screen flex items-center justify-center px-10 mt-20">
        <div className="flex flex-col md:flex-row justify-between gap-4 w-full max-w-6xl p-8"> {/* Adjusted max-width and added gap */}
          <div className="flex-1 mb-4 md:mb-0 p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#14213D' }}>
            <h1 className="text-6xl font-bold text-white">Book a call</h1>
            <p className="mt-4 text-white text-xl">
              <ul className="list-disc list-inside text-xl space-y-2">
                <li>Want to improve usability in your product?</li>
                <li>Want to engage users at a higher level and <br></br>outperform your competition?</li>
              </ul>
              <p className="mt-6">
                Our UX studio is here to help — every step of<br></br> the way:
                More of a texter?<br/>
              </p>
            </p>
            <p className="mt-4 text-white text-3xl font-bold"> Use the contact form </p>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg" style={{ marginTop: '-100px' }}>
            <iframe
              src={url}
              width="100%"
              height="600px"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    );
}
