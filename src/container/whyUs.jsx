import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WhyUs = () => {
  return (
    <section id="why-us" className="bg-gradient-to-b from-[#FBFFE4] to-[#DFD0B8] min-h-screen">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-semibold text-center mb-10 pt-20 text-[#153448]">
          WHY US?
        </h2>
        <p className="text-lg font-semibold text-center">
        We offer an AI-powered solution for global healthcare. We address the complexities of medical tourism by providing clear information, transparent pricing, and end-to-end support for a smooth medical care experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
          <Card className="h-80 w-75 flex justify-center shadow shadow-black">
            <CardHeader className="text-center">
              <CardTitle className="font-semibold text-xl">AI-Powered</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-xl">
                Our AI-powered platform streamlines your medical journey, analyzing global healthcare options to provide personalized recommendations. 
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="h-80 w-75 flex justify-center shadow shadow-black">
            <CardHeader className="text-center">
            <CardTitle className="font-semibold text-xl">Expert Diagnostic Evaluation</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-xl">
              We understand the critical importance of accurate diagnoses. Misdiagnoses can lead to inappropriate treatments and prolonged health issues..
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="h-80 w-75 flex justify-center shadow shadow-black">
            <CardHeader className="text-center">
              <CardTitle className="font-semibold text-xl">Patient's peace of mind</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-xl">
                We release patient's stress and anxiety by providing them with
                the right medical opinion from the right doctor.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="h-80 w-75 flex justify-center shadow shadow-black">
            <CardHeader className="text-center">
            <CardTitle className="font-semibold text-xl">Second Perspective</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-xl">
                With our Second Opinion from the right doctor, you gain a new
                perspective on your treatment plan.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
