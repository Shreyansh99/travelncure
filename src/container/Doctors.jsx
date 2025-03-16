import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { doctors } from '../constants/doctors'

const Doctors = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-semibold mb-8 text-center">Our Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="shadow-md shadow-blue-500/50">
            <CardHeader>
              <CardTitle className="text-lg">{doctor.name}</CardTitle>
              <CardDescription className="text-md">{doctor.specialization}</CardDescription>
            </CardHeader>
             <CardContent className="flex flex-col justify-center items-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-40 h-50 mb-4 rounded-md"
              />
              <p className="mb-4 text-center">{doctor.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Doctors;