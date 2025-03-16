import React, { useState, useEffect } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import axios from "axios";
import { Loader2 } from "lucide-react";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [savingChanges, setSavingChanges] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://medical-tourism-lqcu.onrender.com/api/patient/profile",
        { withCredentials: true }
      );
      
      if (response.data) {
        setProfile({
          name: response.data.name || "",
          email: response.data.email || "",
          phone: response.data.phone || ""
        });
      }
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load profile");
      toast.error("Failed to load profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSavingChanges(true);
    
    try {
      const response = await axios.patch(
        "https://medical-tourism-lqcu.onrender.com/api/patient/profile",
        profile,
        { withCredentials: true }
      );
      
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update profile");
    } finally {
      setSavingChanges(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10">
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl font-bold">
                {isEditing ? "Edit Profile" : "Patient Profile"}
              </CardTitle>
              <CardDescription>
                {isEditing 
                  ? "Update your personal information" 
                  : "Your personal information and medical history"}
              </CardDescription>
            </div>
            {!isEditing && (
              <Button 
                onClick={() => setIsEditing(true)}
                variant="outline"
              >
                Edit Profile
              </Button>
            )}
          </div>
        </CardHeader>
        
        {error && (
          <div className="px-6 mb-4">
            <div className="bg-red-50 text-red-600 p-3 rounded-md border border-red-200">
              {error}
            </div>
          </div>
        )}
        
        <CardContent className="space-y-6">
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  disabled
                />
                <p className="text-xs text-gray-500">Email cannot be changed</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  placeholder="Your contact number"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  placeholder="Your current address"
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="medicalHistory">Medical History</Label>
                <Textarea
                  id="medicalHistory"
                  name="medicalHistory"
                  value={profile.medicalHistory}
                  onChange={handleChange}
                  placeholder="Any pre-existing conditions or important medical information"
                  rows={4}
                />
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm text-gray-500">Full Name</Label>
                  <p className="font-medium">{profile.name || "Not provided"}</p>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm text-gray-500">Email Address</Label>
                  <p className="font-medium">{profile.email || "Not provided"}</p>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm text-gray-500">Phone Number</Label>
                  <p className="font-medium">{profile.phone || "Not provided"}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        
        {isEditing && (
          <CardFooter className="flex justify-end space-x-4 pt-4">
            <Button 
              variant="outline" 
              onClick={() => {
                setIsEditing(false);
                fetchProfile(); // Reset to original data
              }}
              disabled={savingChanges}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={savingChanges}
            >
              {savingChanges ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default EditProfile;
