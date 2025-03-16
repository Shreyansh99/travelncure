import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Textarea } from "@/components/ui/textarea"

const EditProfile = () => {
  return (
    <div className="p-30">
      <Card className="w-[60vh] block mx-auto space-y-5 h-auto items-center">
        <CardHeader className="text-lg">
          <CardTitle>View Profile</CardTitle>
          {/*<CardDescription>Add your medical condition</CardDescription>*/}
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <Label className="text-md">Name</Label>
            <span style = {{color: "grey"}}>Anshika Gupta</span>
          </div>
          <div>
            <Label className="text-md">Contact Number</Label>
            <span style = {{color: "grey"}}>7564424367</span>
          </div>
          <div>
            <Label className="text-md">E-Mail ID</Label>
            <span style = {{color: "grey"}}>Anshikagupta@gmail.com</span>
          </div>
          {/* <form>
            <div className="flex flex-col gap-3">
              <div className="grid gap-1">
                <Label htmlFor="firstname">Medical Department </Label>
                <Combobox />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="lastname">Medical Treatment </Label>
                <Combobox />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="emailid">Upload Reports</Label>
                <Input
                  id="emailid"
                  type="file"
                  placeholder="patient@example.com"
                />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="contact">Briefly describe your medical condition</Label>
                <Textarea placeholder="Write here..." />
              </div>
              <div className="grid gap-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              
            </div>
          </form> */}
        </CardContent>
        {/* <CardFooter>
        <Button className="w-full">Save</Button>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default EditProfile;
