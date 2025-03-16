import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { hospitals } from '../constants/hospitals'

const Hospitals = () => {
  return (
    <div className="container mx-auto py-30 p-3">
      <h1 className="text-3xl font-semibold mb-8 text-center">Explore Hospitals</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {hospitals.map((hospital) => (
          <Card key={hospital.id} className="shadow-md shadow-blue-500/50">
            <CardHeader>
              <CardTitle className="text-lg">{hospital.name}</CardTitle>
              <CardDescription className="text-md">{hospital.location}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
              <img src={hospital.image} alt={hospital.name} className="mb-4 rounded-md w-80 h-50 " />
              <p className="mb-4 text-center">{hospital.description}</p>
              
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;