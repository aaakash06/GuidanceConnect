"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export default function FacilitatorEditProfile() {
  const [facilitator, setFacilitator] = React.useState({
    name: "Dr. Emily Chen",
    image: "https://i.pravatar.cc/300?img=47",
    bio: "Experienced computer science professor with a passion for mentoring students in AI and machine learning.",
    expertise: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Science",
      "Career Guidance",
    ],
    skills: ["Python", "TensorFlow", "Data Analysis", "Research Methodology"],
    accomplishments: [
      "Ph.D. in Computer Science from Stanford University",
      "Published 20+ research papers in top-tier conferences",
      "Mentored 50+ students who secured positions in leading tech companies",
      "Certified AWS Machine Learning Specialist",
    ],
    email: "emily.chen@example.com",
    phone: "+1 (555) 123-4567",
    linkedin: "https://www.linkedin.com/in/emilychen",
    website: "https://www.emilychen.com",
  });

  const [newExpertise, setNewExpertise] = React.useState("");
  const [newSkill, setNewSkill] = React.useState("");
  const [newAccomplishment, setNewAccomplishment] = React.useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFacilitator((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddExpertise = () => {
    if (newExpertise && !facilitator.expertise.includes(newExpertise)) {
      setFacilitator((prev) => ({
        ...prev,
        expertise: [...prev.expertise, newExpertise],
      }));
      setNewExpertise("");
    }
  };

  const handleRemoveExpertise = (item: string) => {
    setFacilitator((prev) => ({
      ...prev,
      expertise: prev.expertise.filter((e) => e !== item),
    }));
  };

  const handleAddSkill = () => {
    if (newSkill && !facilitator.skills.includes(newSkill)) {
      setFacilitator((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill],
      }));
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (item: string) => {
    setFacilitator((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== item),
    }));
  };

  const handleAddAccomplishment = () => {
    if (
      newAccomplishment &&
      !facilitator.accomplishments.includes(newAccomplishment)
    ) {
      setFacilitator((prev) => ({
        ...prev,
        accomplishments: [...prev.accomplishments, newAccomplishment],
      }));
      setNewAccomplishment("");
    }
  };

  const handleRemoveAccomplishment = (item: string) => {
    setFacilitator((prev) => ({
      ...prev,
      accomplishments: prev.accomplishments.filter((a) => a !== item),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the updated facilitator data to your backend
    console.log("Updated facilitator data:", facilitator);
    // Show a success message or redirect
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={facilitator.image} alt={facilitator.name} />
                <AvatarFallback>
                  {facilitator.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Button>Change Photo</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={facilitator.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={facilitator.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={facilitator.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  value={facilitator.linkedin}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  name="website"
                  value={facilitator.website}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                value={facilitator.bio}
                onChange={handleInputChange}
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Expertise</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {facilitator.expertise.map((item, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {item}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => handleRemoveExpertise(item)}
                  />
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newExpertise}
                onChange={(e) => setNewExpertise(e.target.value)}
                placeholder="Add new expertise"
              />
              <Button type="button" onClick={handleAddExpertise}>
                Add
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {facilitator.skills.map((item, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {item}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => handleRemoveSkill(item)}
                  />
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add new skill"
              />
              <Button type="button" onClick={handleAddSkill}>
                Add
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Accomplishments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {facilitator.accomplishments.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span>{item}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveAccomplishment(item)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <div className="flex gap-2">
              <Input
                value={newAccomplishment}
                onChange={(e) => setNewAccomplishment(e.target.value)}
                placeholder="Add new accomplishment"
              />
              <Button type="button" onClick={handleAddAccomplishment}>
                Add
              </Button>
            </div>
          </CardContent>
        </Card>

        <Button type="submit" size="lg">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
