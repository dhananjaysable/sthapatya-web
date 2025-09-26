import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, MapPin, Users, Building, Heart, Trophy, Clock, Play, ChevronRight, Mail, Phone, Linkedin, Twitter, Facebook, Upload, X, GraduationCap, Award, Coffee, Target, TrendingUp, Shield, Lightbulb, Star, Gift, Globe } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { CardContent} from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel';
//import "./styles/globals.css"
//import "./styles/careers.css"

// Brand colors
const brandColors = {
    lightGray: '#f3f3f3',
    deepRed: '#95231c',
    mutedBrickRed: '#ba7b72',
    white: '#fefefe',
    mediumGray: '#dddcdb',
    beige: '#d8bea5',
    golden: '#e1d385',
};

// Mock data
const jobListings = [
    {
        id: 1,
        title: 'Senior Structural Engineer',
        department: 'Engineering',
        location: 'Mumbai',
        seniority: 'Senior',
        summary: 'Lead structural design projects for commercial and residential buildings.',
        description: 'We are seeking an experienced structural engineer to join our team. You will be responsible for designing and analyzing structural systems, collaborating with architects, and ensuring compliance with building codes.',
        requirements: ['Bachelor\'s degree in Civil/Structural Engineering', '5+ years of experience', 'Proficiency in AutoCAD, Revit, and structural analysis software', 'Knowledge of Indian building codes'],
        type: 'Full-time'
    },
    {
        id: 2,
        title: 'Architectural Designer',
        department: 'Design',
        location: 'Delhi',
        seniority: 'Mid-level',
        summary: 'Create innovative architectural designs for diverse project types.',
        description: 'Join our creative team to develop architectural concepts and detailed designs. You\'ll work on exciting projects ranging from residential complexes to commercial buildings.',
        requirements: ['Bachelor\'s degree in Architecture', '3-5 years of experience', 'Proficiency in AutoCAD, SketchUp, and Adobe Creative Suite', 'Strong design portfolio'],
        type: 'Full-time'
    },
    {
        id: 3,
        title: 'Project Manager',
        department: 'Management',
        location: 'Bangalore',
        seniority: 'Senior',
        summary: 'Oversee construction projects from inception to completion.',
        description: 'Lead cross-functional teams to deliver projects on time and within budget. You\'ll coordinate with clients, contractors, and internal teams to ensure successful project execution.',
        requirements: ['Bachelor\'s degree in Engineering or related field', '7+ years of project management experience', 'PMP certification preferred', 'Strong leadership and communication skills'],
        type: 'Full-time'
    },
    {
        id: 4,
        title: 'Junior Civil Engineer',
        department: 'Engineering',
        location: 'Pune',
        seniority: 'Junior',
        summary: 'Support engineering teams in design and analysis activities.',
        description: 'Perfect opportunity for recent graduates to start their career in civil engineering. You\'ll work under senior engineers on various infrastructure projects.',
        requirements: ['Bachelor\'s degree in Civil Engineering', '0-2 years of experience', 'Basic knowledge of design software', 'Eagerness to learn and grow'],
        type: 'Full-time'
    },
];

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'Senior Architect',
        message: 'Working at Sthapatya has been an incredible journey. The company truly values innovation and provides opportunities for professional growth.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5cc?w=150&h=150&fit=crop&crop=face'
    },
    {
        id: 2,
        name: 'Rajesh Kumar',
        role: 'Project Manager',
        message: 'The collaborative culture here is amazing. Every project is a learning experience, and the support from leadership is outstanding.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
        id: 3,
        name: 'Anita Verma',
        role: 'Structural Engineer',
        message: 'Sthapatya provides the perfect balance of challenging work and work-life balance. I\'ve grown tremendously in my career here.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
];

const blogPosts = [
    {
        id: 1,
        title: 'Sthapatya Wins Best Design Award 2024',
        excerpt: 'Our innovative approach to sustainable architecture has been recognized...',
        date: '2024-12-15',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop'
    },
    {
        id: 2,
        title: 'New Office Opening in Chennai',
        excerpt: 'We\'re excited to announce our expansion to South India...',
        date: '2024-12-10',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop'
    },
    {
        id: 3,
        title: 'Employee Spotlight: Innovation Team',
        excerpt: 'Meet the brilliant minds behind our cutting-edge solutions...',
        date: '2024-12-05',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop'
    },
];

const faqData = [
    {
        question: 'What is the hiring process like?',
        answer: 'Our hiring process typically involves three stages: initial screening, technical interview, and final interview with the leadership team. The entire process usually takes 2-3 weeks.'
    },
    {
        question: 'Do you offer remote work options?',
        answer: 'Yes, we offer flexible work arrangements including hybrid and remote options for eligible positions. We believe in maintaining a healthy work-life balance.'
    },
    {
        question: 'What benefits do you provide?',
        answer: 'We offer comprehensive benefits including health insurance, retirement plans, professional development opportunities, flexible working hours, and wellness programs.'
    },
    {
        question: 'How do you support career growth?',
        answer: 'We provide mentorship programs, regular training sessions, conference attendance opportunities, and clear career progression paths for all our employees.'
    },
];

const galleryEvents = [
    {
        id: 1,
        title: 'Annual Team Building Retreat',
        description: 'Our annual team retreat fostering collaboration and innovation. This year we focused on design thinking workshops and outdoor team challenges.',
        date: '2024-11-15',
        category: 'Team Building',
        image: 'https://images.unsplash.com/photo-1748346674126-8c0df10f2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwYnVpbGRpbmclMjBldmVudHxlbnwxfHx8fDE3NTc4NDQ2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
        id: 2,
        title: 'Excellence Awards Ceremony',
        description: 'Celebrating outstanding achievements and recognizing exceptional contributions to our projects and company culture.',
        date: '2024-12-01',
        category: 'Recognition',
        image: 'https://images.unsplash.com/photo-1726804973612-3e610a28ba3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBhd2FyZHMlMjBjZXJlbW9ueXxlbnwxfHx8fDE3NTc4NDQ2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
        id: 3,
        title: 'Holiday Celebration',
        description: 'Annual holiday party bringing together all our offices for a night of celebration, entertainment, and appreciation.',
        date: '2024-12-20',
        category: 'Celebration',
        image: 'https://images.unsplash.com/photo-1710854897963-d45e8e26f7fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBob2xpZGF5JTIwcGFydHklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NTc4NDQ2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
        id: 4,
        title: 'Professional Development Workshop',
        description: 'Monthly skill enhancement workshops featuring industry experts and cutting-edge architectural technologies.',
        date: '2024-11-28',
        category: 'Learning',
        image: 'https://images.unsplash.com/photo-1623121608226-ca93dec4d94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc1Nzg0NDYyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
];

const videoTestimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        role: 'Senior Architect',
        message: 'Working at Sthapatya has been an incredible journey. The company truly values innovation and provides opportunities for professional growth.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5cc?w=150&h=150&fit=crop&crop=face',
        duration: '2:34'
    },
    {
        id: 2,
        name: 'Rajesh Kumar',
        role: 'Project Manager',
        message: 'The collaborative culture here is amazing. Every project is a learning experience, and the support from leadership is outstanding.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        duration: '3:12'
    },
    {
        id: 3,
        name: 'Anita Verma',
        role: 'Structural Engineer',
        message: 'Sthapatya provides the perfect balance of challenging work and work-life balance. I\'ve grown tremendously in my career here.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        duration: '2:48'
    },
];

const workCultureFeatures = [
    {
        icon: Users,
        title: 'Collaboration',
        description: 'Cross-functional teams working together to create exceptional architectural solutions.',
        isKey: true
    },
    {
        icon: Heart,
        title: 'Inclusivity',
        description: 'A diverse workplace where every voice is heard and every contribution valued.',
        isKey: true
    },
    {
        icon: Trophy,
        title: 'Innovation',
        description: 'Pushing boundaries with cutting-edge design technology and sustainable practices.',
        isKey: true
    },
    {
        icon: Target,
        title: 'Goal-Oriented',
        description: 'Clear objectives and milestones that drive our teams toward exceptional results.',
        isKey: false
    },
    {
        icon: TrendingUp,
        title: 'Growth Mindset',
        description: 'Continuous learning and development opportunities for personal and professional advancement.',
        isKey: false
    },
    {
        icon: Shield,
        title: 'Trust & Integrity',
        description: 'Building relationships based on transparency, honesty, and mutual respect.',
        isKey: false
    },
    {
        icon: Lightbulb,
        title: 'Creativity',
        description: 'Encouraging innovative thinking and creative problem-solving in all aspects of our work.',
        isKey: false
    },
    {
        icon: Globe,
        title: 'Global Perspective',
        description: 'International outlook with local expertise in architectural design and engineering.',
        isKey: false
    },
    {
        icon: Gift,
        title: 'Recognition',
        description: 'Regular appreciation and rewards for outstanding contributions and achievements.',
        isKey: false
    }
];

const ScrollIndicator = () => {
    return (
        <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <div className="flex flex-col items-center gap-2">
                <span className="text-sm opacity-70">Scroll to explore</span>
                <ChevronDown className="w-6 h-6" style={{ color: brandColors.deepRed }} />
            </div>
        </motion.div>
    );
};

const JobCard = ({ job, onExpand, isExpanded }) => {
    return (
        <motion.div
            layout
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            whileHover={{ y: -4 }}
            onClick={() => onExpand(job.id)}
            style={{ border: `1px solid ${brandColors.mediumGray}` }}
        >
            <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-semibold mb-2" style={{ color: brandColors.deepRed }}>
                            {job.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                                <Building className="w-4 h-4" />
                                {job.department}
                            </span>
                        </div>
                    </div>
                    <Badge variant="secondary" style={{ backgroundColor: brandColors.beige, color: brandColors.deepRed }}>
                        {job.seniority}
                    </Badge>
                </div>

                <p className="text-gray-700 mb-4">{job.summary}</p>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="border-t pt-4 mt-4" style={{ borderColor: brandColors.mediumGray }}>
                                <h4 className="font-semibold mb-2">Job Description</h4>
                                <p className="text-gray-700 mb-4">{job.description}</p>

                                <h4 className="font-semibold mb-2">Requirements</h4>
                                <ul className="list-disc list-inside text-gray-700 mb-6">
                                    {job.requirements.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>

                                <Dialog>
                                    <DialogTrigger
                                        className="w-full px-4 py-2 rounded-md transition-all duration-300 text-white font-medium"
                                        style={{
                                            backgroundColor: brandColors.deepRed,
                                            borderColor: brandColors.deepRed
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = brandColors.golden;
                                            e.target.style.borderColor = brandColors.golden;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = brandColors.deepRed;
                                            e.target.style.borderColor = brandColors.deepRed;
                                        }}
                                    >
                                        Apply Now
                                    </DialogTrigger>
                                    <ApplicationModal jobTitle={job.title} />
                                </Dialog>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {!isExpanded && (
                    <div className="flex items-center text-sm font-medium" style={{ color: brandColors.deepRed }}>
                        View Details <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                )}
            </CardContent>
        </motion.div>
    );
};

const ApplicationModal = ({ jobTitle }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Application submitted:', formData);
        // Handle form submission
    };

    return (
        <DialogContent className="max-w-md mx-auto">
            <DialogHeader>
                <DialogTitle style={{ color: brandColors.deepRed }}>
                    Apply for {jobTitle}
                </DialogTitle>
                <DialogDescription>
                    Fill out the form below to submit your application.
                </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                        id="coverLetter"
                        placeholder="Tell us why you're interested in this position..."
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                        rows={4}
                    />
                </div>

                <div>
                    <Label htmlFor="resume">Resume</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center" style={{ borderColor: brandColors.mediumGray }}>
                        <Upload className="w-8 h-8 mx-auto mb-2" style={{ color: brandColors.deepRed }} />
                        <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                        <Input
                            id="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                            className="mt-2"
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full"
                    style={{ backgroundColor: brandColors.deepRed }}
                >
                    Submit Application
                </Button>
            </form>
        </DialogContent>
    );
};

const InternshipModal = () => {
    const [internData, setInternData] = useState({
        name: '',
        email: '',
        phone: '',
        university: '',
        course: '',
        year: '',
        duration: '',
        skills: '',
        motivation: '',
        resume: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Internship application submitted:', internData);
        // Handle form submission
    };

    return (
        <DialogContent className="max-w-2xl mx-auto max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle style={{ color: brandColors.deepRed }}>
                    Internship Application
                </DialogTitle>
                <DialogDescription>
                    Join our internship program and kickstart your career in architecture and engineering.
                </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="intern-name">Full Name *</Label>
                        <Input
                            id="intern-name"
                            value={internData.name}
                            onChange={(e) => setInternData({ ...internData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="intern-email">Email Address *</Label>
                        <Input
                            id="intern-email"
                            type="email"
                            value={internData.email}
                            onChange={(e) => setInternData({ ...internData, email: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="intern-phone">Phone Number *</Label>
                        <Input
                            id="intern-phone"
                            value={internData.phone}
                            onChange={(e) => setInternData({ ...internData, phone: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="university">University/College *</Label>
                        <Input
                            id="university"
                            value={internData.university}
                            onChange={(e) => setInternData({ ...internData, university: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    <div>
                        <Label htmlFor="course">Course/Major *</Label>
                        <Select value={internData.course} onValueChange={(value) => setInternData({ ...internData, course: value })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select course" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="architecture">Architecture</SelectItem>
                                <SelectItem value="civil">Civil Engineering</SelectItem>
                                <SelectItem value="structural">Structural Engineering</SelectItem>
                                <SelectItem value="interior">Interior Design</SelectItem>
                                <SelectItem value="planning">Urban Planning</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label htmlFor="year">Current Year *</Label>
                        <Select value={internData.year} onValueChange={(value) => setInternData({ ...internData, year: value })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1st">1st Year</SelectItem>
                                <SelectItem value="2nd">2nd Year</SelectItem>
                                <SelectItem value="3rd">3rd Year</SelectItem>
                                <SelectItem value="4th">4th Year</SelectItem>
                                <SelectItem value="5th">5th Year</SelectItem>
                                <SelectItem value="final">Final Year</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label htmlFor="duration">Preferred Duration *</Label>
                        <Select value={internData.duration} onValueChange={(value) => setInternData({ ...internData, duration: value })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Duration" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1-month">1 Month</SelectItem>
                                <SelectItem value="2-months">2 Months</SelectItem>
                                <SelectItem value="3-months">3 Months</SelectItem>
                                <SelectItem value="6-months">6 Months</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div>
                    <Label htmlFor="skills">Technical Skills & Software Knowledge</Label>
                    <Textarea
                        id="skills"
                        placeholder="e.g., AutoCAD, Revit, SketchUp, Adobe Creative Suite..."
                        value={internData.skills}
                        onChange={(e) => setInternData({ ...internData, skills: e.target.value })}
                        rows={3}
                    />
                </div>

                <div>
                    <Label htmlFor="motivation">Why do you want to intern with Sthapatya? *</Label>
                    <Textarea
                        id="motivation"
                        placeholder="Tell us about your career goals and what excites you about this opportunity..."
                        value={internData.motivation}
                        onChange={(e) => setInternData({ ...internData, motivation: e.target.value })}
                        rows={4}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="intern-resume">Resume/CV *</Label>
                    <div className="border-2 border-dashed rounded-lg p-4 text-center" style={{ borderColor: brandColors.mediumGray }}>
                        <Upload className="w-6 h-6 mx-auto mb-2" style={{ color: brandColors.deepRed }} />
                        <p className="text-sm text-gray-600 mb-2">Upload your resume</p>
                        <Input
                            id="intern-resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setInternData({ ...internData, resume: e.target.files[0] })}
                            required
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full text-lg py-3"
                    style={{ backgroundColor: brandColors.deepRed }}
                >
                    Submit Application
                </Button>

                <p className="text-sm text-gray-600 text-center">
                    Our internship coordinator will review your application and contact you within 3-5 business days.
                </p>
            </form>
        </DialogContent>
    );
};

const PlacementCellModal = () => {
    const [placementData, setPlacementData] = useState({
        instituteName: '',
        contactPerson: '',
        email: '',
        phone: '',
        studentCount: '',
        courses: '',
        graduationYear: '',
        requirements: '',
        previousCollabs: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Placement cell inquiry submitted:', placementData);
        // Handle form submission
    };

    return (
        <DialogContent className="max-w-2xl mx-auto max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle style={{ color: brandColors.deepRed }}>
                    Placement Cell Partnership
                </DialogTitle>
                <DialogDescription>
                    Partner with us to provide excellent career opportunities for your students.
                </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="institute-name">Institute/University Name *</Label>
                        <Input
                            id="institute-name"
                            value={placementData.instituteName}
                            onChange={(e) => setPlacementData({ ...placementData, instituteName: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="contact-person">Contact Person *</Label>
                        <Input
                            id="contact-person"
                            value={placementData.contactPerson}
                            onChange={(e) => setPlacementData({ ...placementData, contactPerson: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="placement-email">Email Address *</Label>
                        <Input
                            id="placement-email"
                            type="email"
                            value={placementData.email}
                            onChange={(e) => setPlacementData({ ...placementData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="placement-phone">Phone Number *</Label>
                        <Input
                            id="placement-phone"
                            value={placementData.phone}
                            onChange={(e) => setPlacementData({ ...placementData, phone: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="student-count">Number of Students (Approx.) *</Label>
                        <Select value={placementData.studentCount} onValueChange={(value) => setPlacementData({ ...placementData, studentCount: value })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1-50">1-50 Students</SelectItem>
                                <SelectItem value="51-100">51-100 Students</SelectItem>
                                <SelectItem value="101-200">101-200 Students</SelectItem>
                                <SelectItem value="201-500">201-500 Students</SelectItem>
                                <SelectItem value="500+">500+ Students</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label htmlFor="graduation-year">Graduation Year *</Label>
                        <Select value={placementData.graduationYear} onValueChange={(value) => setPlacementData({ ...placementData, graduationYear: value })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="2024">2024</SelectItem>
                                <SelectItem value="2025">2025</SelectItem>
                                <SelectItem value="2026">2026</SelectItem>
                                <SelectItem value="multiple">Multiple Years</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div>
                    <Label htmlFor="courses-offered">Courses/Programs Offered *</Label>
                    <Textarea
                        id="courses-offered"
                        placeholder="e.g., B.Arch, B.Tech Civil, M.Arch, M.Tech Structural..."
                        value={placementData.courses}
                        onChange={(e) => setPlacementData({ ...placementData, courses: e.target.value })}
                        rows={3}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="requirements">Specific Requirements or Partnership Ideas</Label>
                    <Textarea
                        id="requirements"
                        placeholder="Tell us about your expectations, preferred collaboration format, student skills..."
                        value={placementData.requirements}
                        onChange={(e) => setPlacementData({ ...placementData, requirements: e.target.value })}
                        rows={4}
                    />
                </div>

                <div>
                    <Label htmlFor="previous-collabs">Previous Industry Collaborations</Label>
                    <Textarea
                        id="previous-collabs"
                        placeholder="Brief overview of past placement partnerships and success stories..."
                        value={placementData.previousCollabs}
                        onChange={(e) => setPlacementData({ ...placementData, previousCollabs: e.target.value })}
                        rows={3}
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full text-lg py-3"
                    style={{ backgroundColor: brandColors.deepRed }}
                >
                    Submit Partnership Request
                </Button>

                <p className="text-sm text-gray-600 text-center">
                    Our recruitment team will review your request and schedule a meeting within 5 business days.
                </p>
            </form>
        </DialogContent>
    );
};

const GeneralInquiryModal = () => {
    const [inquiryData, setInquiryData] = useState({
        name: '',
        email: '',
        phone: '',
        areaOfInterest: '',
        experienceLevel: '',
        currentLocation: '',
        preferredLocation: '',
        message: '',
        resume: null,
        portfolio: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('General inquiry submitted:', inquiryData);
        // Handle form submission
    };

    return (
        <DialogContent className="max-w-2xl mx-auto max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle style={{ color: brandColors.deepRed }}>
                    General Career Inquiry
                </DialogTitle>
                <DialogDescription>
                    We'd love to hear from you! Share your details and interests, and our team will get back to you about potential opportunities.
                </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="inquiry-name">Full Name *</Label>
                        <Input
                            id="inquiry-name"
                            value={inquiryData.name}
                            onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="inquiry-email">Email Address *</Label>
                        <Input
                            id="inquiry-email"
                            type="email"
                            value={inquiryData.email}
                            onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="inquiry-phone">Phone Number *</Label>
                        <Input
                            id="inquiry-phone"
                            value={inquiryData.phone}
                            onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="area-interest">Area of Interest *</Label>
                        <Select value={inquiryData.areaOfInterest} onValueChange={(value) => setInquiryData({ ...inquiryData, areaOfInterest: value })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select your area of interest" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="architecture">Architecture & Design</SelectItem>
                                <SelectItem value="structural">Structural Engineering</SelectItem>
                                <SelectItem value="civil">Civil Engineering</SelectItem>
                                <SelectItem value="project-management">Project Management</SelectItem>
                                <SelectItem value="planning">Urban Planning</SelectItem>
                                <SelectItem value="interior">Interior Design</SelectItem>
                                <SelectItem value="sustainability">Sustainability & Green Building</SelectItem>
                                <SelectItem value="business-development">Business Development</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="experience-level">Experience Level *</Label>
                        <Select value={inquiryData.experienceLevel} onValueChange={(value) => setInquiryData({ ...inquiryData, experienceLevel: value })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                                <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                                <SelectItem value="senior">Senior Level (6-10 years)</SelectItem>
                                <SelectItem value="lead">Lead/Principal (10+ years)</SelectItem>
                                <SelectItem value="executive">Executive Level</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label htmlFor="current-location">Current Location</Label>
                        <Input
                            id="current-location"
                            placeholder="e.g., Mumbai, Maharashtra"
                            value={inquiryData.currentLocation}
                            onChange={(e) => setInquiryData({ ...inquiryData, currentLocation: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <Label htmlFor="preferred-location">Preferred Work Location</Label>
                    <Select value={inquiryData.preferredLocation} onValueChange={(value) => setInquiryData({ ...inquiryData, preferredLocation: value })}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select preferred location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="any">Open to any location</SelectItem>
                            <SelectItem value="mumbai">Mumbai</SelectItem>
                            <SelectItem value="delhi">Delhi NCR</SelectItem>
                            <SelectItem value="bangalore">Bangalore</SelectItem>
                            <SelectItem value="pune">Pune</SelectItem>
                            <SelectItem value="chennai">Chennai</SelectItem>
                            <SelectItem value="hyderabad">Hyderabad</SelectItem>
                            <SelectItem value="remote">Remote</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label htmlFor="inquiry-message">Tell us about yourself and your career interests</Label>
                    <Textarea
                        id="inquiry-message"
                        placeholder="Share your background, career goals, and what interests you about Sthapatya Consultants..."
                        value={inquiryData.message}
                        onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                        rows={5}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="inquiry-resume">Resume/CV *</Label>
                        <div className="border-2 border-dashed rounded-lg p-4 text-center" style={{ borderColor: brandColors.mediumGray }}>
                            <Upload className="w-6 h-6 mx-auto mb-2" style={{ color: brandColors.deepRed }} />
                            <p className="text-sm text-gray-600 mb-2">Upload your resume</p>
                            <Input
                                id="inquiry-resume"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => setInquiryData({ ...inquiryData, resume: e.target.files[0] })}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="inquiry-portfolio">Portfolio (Optional)</Label>
                        <div className="border-2 border-dashed rounded-lg p-4 text-center" style={{ borderColor: brandColors.mediumGray }}>
                            <Upload className="w-6 h-6 mx-auto mb-2" style={{ color: brandColors.deepRed }} />
                            <p className="text-sm text-gray-600 mb-2">Upload portfolio or samples</p>
                            <Input
                                id="inquiry-portfolio"
                                type="file"
                                accept=".pdf,.zip,.rar"
                                onChange={(e) => setInquiryData({ ...inquiryData, portfolio: e.target.files[0] })}
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <Button
                        type="submit"
                        className="w-full text-lg py-3 transition-all duration-300"
                        style={{ backgroundColor: brandColors.deepRed }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = brandColors.golden;
                            e.target.style.borderColor = brandColors.golden;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = brandColors.deepRed;
                            e.target.style.borderColor = brandColors.deepRed;
                        }}
                    >
                        Submit Inquiry
                    </Button>
                </div>

                <p className="text-sm text-gray-600 text-center">
                    Our HR team will review your submission and get back to you within 5-7 business days.
                </p>
            </form>
        </DialogContent>
    );
};

export default function Career() {
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('all');
    const [locationFilter, setLocationFilter] = useState('all');
    const [seniorityFilter, setSeniorityFilter] = useState('all');
    const [expandedJob, setExpandedJob] = useState(null);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1, rootMargin: '-50px' }
        );

        // Add staggered animations for elements
        const staggerObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate-in');
                        }, index * 100);
                    }
                });
            },
            { threshold: 0.2 }
        );

        document.querySelectorAll('[id]').forEach((el) => {
            observer.observe(el);
        });

        document.querySelectorAll('.stagger-animation').forEach((el) => {
            staggerObserver.observe(el);
        });

        return () => {
            observer.disconnect();
            staggerObserver.disconnect();
        };
    }, []);

    const filteredJobs = jobListings.filter(job => {
        return (
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (departmentFilter === 'all' || job.department === departmentFilter) &&
            (locationFilter === 'all' || job.location === locationFilter) &&
            (seniorityFilter === 'all' || job.seniority === seniorityFilter)
        );
    });

    const handleJobExpand = (jobId) => {
        setExpandedJob(expandedJob === jobId ? null : jobId);
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: brandColors.white }}>
            {/* Hero Section */}
            <section
                id="hero"
                className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${brandColors.lightGray} 0%, ${brandColors.beige} 30%, ${brandColors.white} 70%, ${brandColors.mediumGray} 100%)`
                }}
            >
                {/* Subtle geometric background pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, ${brandColors.deepRed} 1px, transparent 1px), radial-gradient(circle at 75% 75%, ${brandColors.golden} 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        backgroundPosition: '0 0, 20px 20px'
                    }} />
                </div>

                {/* Elegant architectural accents */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.08, scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute top-20 left-20 w-40 h-40 border border-solid transform rotate-45"
                        style={{ borderColor: brandColors.deepRed }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.06, scale: 1 }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                        className="absolute bottom-20 right-16 w-32 h-32 border border-solid transform rotate-12"
                        style={{ borderColor: brandColors.mutedBrickRed }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 0.04, x: 0 }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        className="absolute top-1/3 right-0 w-64 h-px"
                        style={{ backgroundColor: brandColors.golden }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 0.04, x: 0 }}
                        transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
                        className="absolute bottom-1/3 left-0 w-48 h-px"
                        style={{ backgroundColor: brandColors.deepRed }}
                    />
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    {/* Company name with elegant styling */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <div className="flex items-center justify-center mb-8">
                            <motion.div
                                className="h-px flex-1 max-w-24"
                                style={{ backgroundColor: brandColors.deepRed }}
                                initial={{ width: 0 }}
                                animate={{ width: '6rem' }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                            <motion.span
                                className="mx-8 text-sm font-semibold tracking-[0.3em] uppercase"
                                style={{ color: brandColors.deepRed }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                Sthapatya Consultants
                            </motion.span>
                            <motion.div
                                className="h-px flex-1 max-w-24"
                                style={{ backgroundColor: brandColors.deepRed }}
                                initial={{ width: 0 }}
                                animate={{ width: '6rem' }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-7xl font-bold mb-8 leading-tight"
                        style={{ color: brandColors.deepRed }}
                    >
                        Build Your Future with Excellence
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-700"
                    >
                        Join India's leading architectural consultancy where innovation meets tradition.
                        Shape the skylines of tomorrow while building a rewarding career in design and engineering.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <Button
                            size="lg"
                            className="px-10 py-4 text-lg transition-all duration-300 shadow-lg"
                            style={{
                                backgroundColor: brandColors.deepRed,
                                border: `2px solid ${brandColors.deepRed}`,
                                boxShadow: `0 8px 32px ${brandColors.deepRed}20`
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = brandColors.golden;
                                e.target.style.borderColor = brandColors.golden;
                                e.target.style.transform = 'scale(1.05) translateY(-2px)';
                                e.target.style.boxShadow = `0 12px 40px ${brandColors.golden}30`;
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = brandColors.deepRed;
                                e.target.style.borderColor = brandColors.deepRed;
                                e.target.style.transform = 'scale(1) translateY(0)';
                                e.target.style.boxShadow = `0 8px 32px ${brandColors.deepRed}20`;
                            }}
                            onClick={() => document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explore Opportunities
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="px-10 py-4 text-lg transition-all duration-300 shadow-lg"
                            style={{
                                borderColor: brandColors.mutedBrickRed,
                                color: brandColors.mutedBrickRed,
                                backgroundColor: 'transparent',
                                boxShadow: `0 8px 32px ${brandColors.mutedBrickRed}15`
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = brandColors.mutedBrickRed;
                                e.target.style.color = 'white';
                                e.target.style.transform = 'scale(1.05) translateY(-2px)';
                                e.target.style.boxShadow = `0 12px 40px ${brandColors.mutedBrickRed}25`;
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = brandColors.mutedBrickRed;
                                e.target.style.transform = 'scale(1) translateY(0)';
                                e.target.style.boxShadow = `0 8px 32px ${brandColors.mutedBrickRed}15`;
                            }}
                            onClick={() => document.getElementById('culture').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Learn About Culture
                        </Button>
                    </motion.div>
                </div>

                <ScrollIndicator />
            </section>

            {/* Company Work Culture Section */}
            <section
                id="culture"
                className="py-24 px-4"
                style={{ backgroundColor: brandColors.white }}
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible.culture ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isVisible.culture ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="inline-block mb-6 px-6 py-2 rounded-full"
                            style={{ backgroundColor: brandColors.lightGray, color: brandColors.deepRed }}
                        >
                            <span className="text-sm font-semibold tracking-wide uppercase">Our Values</span>
                        </motion.div>
                        <h2 className="text-5xl font-bold mb-8" style={{ color: brandColors.deepRed }}>
                            Our Work Culture
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            We foster an environment of creativity, collaboration, and continuous learning where every individual can thrive and contribute to architectural excellence.
                        </p>
                    </motion.div>

                    {/* Key Features Highlight */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible.culture ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-16"
                    >
                        <h3 className="text-2xl font-semibold text-center mb-12" style={{ color: brandColors.deepRed }}>
                            🌟 Key Highlights
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {workCultureFeatures.filter(feature => feature.isKey).map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    animate={isVisible.culture ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                                    transition={{ duration: 0.8, delay: 0.5 + (index * 0.2) }}
                                    whileHover={{ y: -12, scale: 1.05 }}
                                    className="relative rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group"
                                    style={{
                                        background: `linear-gradient(135deg, ${brandColors.golden} 0%, ${brandColors.beige} 100%)`,
                                        border: `2px solid ${brandColors.deepRed}`
                                    }}
                                >
                                    <div className="absolute top-4 right-4">
                                        <Star className="w-6 h-6" style={{ color: brandColors.deepRed }} />
                                    </div>
                                    <div
                                        className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"
                                        style={{ backgroundColor: brandColors.deepRed }}
                                    >
                                        <feature.icon className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: brandColors.deepRed }}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-700 text-center leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* All Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible.culture ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-center mb-12" style={{ color: brandColors.deepRed }}>
                            Complete Culture Experience
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {workCultureFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isVisible.culture ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.8, delay: 0.8 + (index * 0.1) }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${feature.isKey ? 'ring-2 ring-opacity-50' : ''}`}
                                    style={{
                                        border: `1px solid ${brandColors.mediumGray}`,
                                        background: feature.isKey
                                            ? `linear-gradient(135deg, ${brandColors.beige} 0%, ${brandColors.lightGray} 100%)`
                                            : `linear-gradient(135deg, ${brandColors.white} 0%, ${brandColors.lightGray} 100%)`,
                                        ringColor: feature.isKey ? brandColors.golden : 'transparent'
                                    }}
                                >
                                    <div
                                        className="w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto"
                                        style={{ backgroundColor: feature.isKey ? brandColors.deepRed : brandColors.golden }}
                                    >
                                        <feature.icon className={`w-7 h-7 ${feature.isKey ? 'text-white' : ''}`} style={{ color: feature.isKey ? 'white' : brandColors.deepRed }} />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: brandColors.deepRed }}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section
                id="gallery"
                className="py-20 px-4"
                style={{ backgroundColor: brandColors.lightGray }}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible.gallery ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6" style={{ color: brandColors.deepRed }}>
                            Life at Sthapatya
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the vibrant culture and memorable moments that make our workplace special
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {galleryEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                animate={isVisible.gallery ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span
                                            className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                                            style={{ backgroundColor: brandColors.deepRed }}
                                        >
                                            {event.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 right-4">
                                        <span
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-90"
                                            style={{ color: brandColors.deepRed }}
                                        >
                                            {new Date(event.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3" style={{ color: brandColors.deepRed }}>
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Listings & Search */}
            <section
                id="jobs"
                className="py-20 px-4"
                style={{ backgroundColor: brandColors.lightGray }}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible.jobs ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6" style={{ color: brandColors.deepRed }}>
                            Open Positions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Find your perfect role and join our growing team
                        </p>
                    </motion.div>

                    {/* Search and Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={isVisible.jobs ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                        className="bg-white rounded-xl p-6 shadow-lg mb-12 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="grid md:grid-cols-4 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <Input
                                    placeholder="Search jobs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>

                            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Departments</SelectItem>
                                    <SelectItem value="Engineering">Engineering</SelectItem>
                                    <SelectItem value="Design">Design</SelectItem>
                                    <SelectItem value="Management">Management</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={locationFilter} onValueChange={setLocationFilter}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Locations</SelectItem>
                                    <SelectItem value="Mumbai">Mumbai</SelectItem>
                                    <SelectItem value="Delhi">Delhi</SelectItem>
                                    <SelectItem value="Bangalore">Bangalore</SelectItem>
                                    <SelectItem value="Pune">Pune</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={seniorityFilter} onValueChange={setSeniorityFilter}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Seniority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Levels</SelectItem>
                                    <SelectItem value="Junior">Junior</SelectItem>
                                    <SelectItem value="Mid-level">Mid-level</SelectItem>
                                    <SelectItem value="Senior">Senior</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </motion.div>

                    {/* Job Cards */}
                    <div className="grid gap-6">
                        {filteredJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isVisible.jobs ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                            >
                                <JobCard
                                    job={job}
                                    onExpand={handleJobExpand}
                                    isExpanded={expandedJob === job.id}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* General Inquiry Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible.jobs ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center mt-16"
                    >
                        <div
                            className="bg-white rounded-xl p-8 shadow-lg"
                            style={{ border: `1px solid ${brandColors.mediumGray}` }}
                        >
                            <h3 className="text-2xl font-semibold mb-4" style={{ color: brandColors.deepRed }}>
                                Can't Find the Right Opportunity?
                            </h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                We're always looking for talented individuals to join our team. Share your details with us,
                                and we'll reach out when opportunities that match your skills and interests become available.
                            </p>

                            <Dialog>
                                <DialogTrigger
                                    className="px-8 py-3 text-lg transition-all duration-300 rounded-md text-white font-medium"
                                    style={{
                                        backgroundColor: brandColors.mutedBrickRed,
                                        borderColor: brandColors.mutedBrickRed
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = brandColors.deepRed;
                                        e.target.style.borderColor = brandColors.deepRed;
                                        e.target.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = brandColors.mutedBrickRed;
                                        e.target.style.borderColor = brandColors.mutedBrickRed;
                                        e.target.style.transform = 'scale(1)';
                                    }}
                                >
                                    Contact Our Team
                                </DialogTrigger>
                                <GeneralInquiryModal />
                            </Dialog>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Internship Section */}
            <section
                id="internships"
                className="py-20 px-4"
                style={{ backgroundColor: brandColors.white }}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible.internships ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div
                            className="rounded-2xl p-12 relative overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, ${brandColors.beige} 0%, ${brandColors.lightGray} 50%, ${brandColors.white} 100%)`
                            }}
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                <GraduationCap className="w-full h-full" style={{ color: brandColors.deepRed }} />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isVisible.internships ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative z-10"
                            >
                                <div className="flex items-center justify-center mb-6">
                                    <GraduationCap className="w-16 h-16 mr-4" style={{ color: brandColors.deepRed }} />
                                    <h2 className="text-5xl font-bold" style={{ color: brandColors.deepRed }}>
                                        Interns Welcome!
                                    </h2>
                                </div>

                                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                                    Launch your career with us! We offer comprehensive internship programs designed to provide hands-on experience in architecture, engineering, and design.
                                </p>

                                <div className="grid md:grid-cols-3 gap-6 mb-10">
                                    {[
                                        { icon: Award, title: 'Real Projects', desc: 'Work on actual client projects' },
                                        { icon: Users, title: 'Mentorship', desc: 'One-on-one guidance from experts' },
                                        { icon: Trophy, title: 'Certification', desc: 'Industry-recognized certificates' }
                                    ].map((benefit, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={isVisible.internships ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                            transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                                            className="text-center"
                                        >
                                            <div
                                                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                                                style={{ backgroundColor: brandColors.deepRed }}
                                            >
                                                <benefit.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="font-semibold mb-2" style={{ color: brandColors.deepRed }}>
                                                {benefit.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">{benefit.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isVisible.internships ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                                >
                                    <Dialog>
                                        <DialogTrigger
                                            className="px-10 py-4 text-lg transition-all duration-300 rounded-md text-white font-medium shadow-lg"
                                            style={{
                                                backgroundColor: brandColors.deepRed,
                                                borderColor: brandColors.deepRed
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = brandColors.golden;
                                                e.target.style.borderColor = brandColors.golden;
                                                e.target.style.transform = 'scale(1.05) translateY(-2px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = brandColors.deepRed;
                                                e.target.style.borderColor = brandColors.deepRed;
                                                e.target.style.transform = 'scale(1) translateY(0)';
                                            }}
                                        >
                                            Apply for Internship
                                        </DialogTrigger>
                                        <InternshipModal />
                                    </Dialog>

                                    <div className="text-center">
                                        <p className="text-sm text-gray-600">
                                            <strong>Next intake:</strong> January 2025 | <strong>Duration:</strong> 2-6 months
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Employee Value Proposition */}
            <section
                id="evp"
                className="py-20 px-4"
                style={{ backgroundColor: brandColors.white }}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible.evp ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-6" style={{ color: brandColors.deepRed }}>
                            Why Choose Sthapatya?
                        </h2>
                        <p className="text-xl text-gray-600">
                            We invest in our people because they are our greatest asset
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Heart,
                                title: 'Benefits',
                                items: ['Comprehensive Healthcare', 'Retirement Plans', 'Wellness Programs', 'Life Insurance']
                            },
                            {
                                icon: Trophy,
                                title: 'Growth',
                                items: ['Mentorship Programs', 'Career Advancement', 'Skill Development', 'Leadership Training']
                            },
                            {
                                icon: Clock,
                                title: 'Work-Life Balance',
                                items: ['Flexible Hours', 'Remote Work Options', 'Generous Leave Policy', 'Family Support']
                            },
                            {
                                icon: Users,
                                title: 'Rewards & Recognition',
                                items: ['Performance Bonuses', 'Annual Awards', 'Peer Recognition', 'Achievement Celebrations']
                            }
                        ].map((block, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isVisible.evp ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                whileHover={{ y: -8 }}
                                className="rounded-xl p-8 transition-all duration-300"
                                style={{
                                    backgroundColor: brandColors.beige,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'none';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                                }}
                            >
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                                    style={{ backgroundColor: brandColors.deepRed }}
                                >
                                    <block.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: brandColors.deepRed }}>
                                    {block.title}
                                </h3>

                                <ul className="space-y-3">
                                    {block.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-center text-gray-700">
                                            <div
                                                className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                                                style={{ backgroundColor: brandColors.golden }}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement & Interactive Features */}
            <section
                id="engagement"
                className="py-20 px-4"
                style={{ backgroundColor: brandColors.lightGray }}
            >
                <div className="max-w-6xl mx-auto">
                    {/* Video Testimonials */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible.engagement ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: brandColors.deepRed }}>
                            Employee Stories
                        </h2>
                        <p className="text-center text-gray-600 mb-12 text-lg">
                            Hear directly from our team members about their experiences at Sthapatya
                        </p>

                        <Carousel className="max-w-5xl mx-auto">
                            <CarouselContent>
                                {videoTestimonials.map((testimonial, index) => (
                                    <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-white rounded-xl overflow-hidden shadow-lg group h-full"
                                        >
                                            <div className="relative">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                                                    <motion.div
                                                        whileHover={{ scale: 1.1 }}
                                                        className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center cursor-pointer shadow-lg"
                                                    >
                                                        <Play className="w-6 h-6 ml-1" style={{ color: brandColors.deepRed }} />
                                                    </motion.div>
                                                </div>
                                                <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                                                    {testimonial.duration}
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <div className="flex items-center mb-4">
                                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold" style={{ color: brandColors.deepRed }}>
                                                            {testimonial.name}
                                                        </h4>
                                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                                    </div>
                                                </div>

                                                <p className="text-gray-700 text-sm leading-relaxed italic">
                                                    "{testimonial.message}"
                                                </p>

                                                <div className="mt-4 flex items-center text-xs text-gray-500">
                                                    <Play className="w-3 h-3 mr-1" />
                                                    Click to watch full video testimonial
                                                </div>
                                            </div>
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </motion.div>

                    {/* Blog/News Feed */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible.engagement ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-20"
                    >
                        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: brandColors.deepRed }}>
                            Latest News & Updates
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 50, rotateX: 15 }}
                                    animate={isVisible.engagement ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 15 }}
                                    transition={{ duration: 0.8, delay: 0.4 + (index * 0.15), type: "spring", stiffness: 100 }}
                                    whileHover={{ y: -12, scale: 1.02, rotateX: -2 }}
                                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <div className="text-sm text-gray-500 mb-2">
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </div>
                                        <h3 className="font-semibold mb-3" style={{ color: brandColors.deepRed }}>
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Placement Cell Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible.engagement ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-20"
                    >
                        <div
                            className="rounded-2xl p-10 relative overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, ${brandColors.deepRed} 0%, ${brandColors.mutedBrickRed} 100%)`,
                                backgroundImage: `url('https://images.unsplash.com/photo-1698047681820-f26b00b6c639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHJlY3J1aXRtZW50fGVufDF8fHx8MTc1Nzg0NDYyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundBlendMode: 'overlay'
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                            <div className="relative z-10 text-center text-white">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isVisible.engagement ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                >
                                    <h2 className="text-4xl font-bold mb-6">
                                        Calling All Placement Cells & Recruiters
                                    </h2>
                                    <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                                        Partner with Sthapatya Consultants to connect with top talent in architecture and engineering.
                                        Let's build successful career pathways together.
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                                        {[
                                            { icon: GraduationCap, title: 'Fresh Graduates', desc: 'Access to skilled new graduates' },
                                            { icon: Building, title: 'Industry Ready', desc: 'Trained professionals with real experience' },
                                            { icon: Trophy, title: 'Top Performers', desc: 'Connect with our highest achievers' }
                                        ].map((benefit, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={isVisible.engagement ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                                                className="text-center"
                                            >
                                                <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mx-auto mb-3">
                                                    <benefit.icon className="w-8 h-8 text-white" />
                                                </div>
                                                <h3 className="font-semibold mb-2 text-white">
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-sm text-white opacity-90">{benefit.desc}</p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isVisible.engagement ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                        transition={{ duration: 0.8, delay: 1 }}
                                    >
                                        <Dialog>
                                            <DialogTrigger
                                                className="px-10 py-4 text-lg transition-all duration-300 rounded-md font-medium shadow-lg bg-white text-gray-900 hover:bg-opacity-90 hover:scale-105 hover:shadow-xl"
                                            >
                                                Partner With Us
                                            </DialogTrigger>
                                            <PlacementCellModal />
                                        </Dialog>

                                        <div className="mt-4">
                                            <p className="text-sm text-white opacity-80">
                                                <strong>Direct Contact:</strong> placements@sthapatya.com | +91 98765 43211
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* FAQ Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible.engagement ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: brandColors.deepRed }}>
                            Frequently Asked Questions
                        </h2>

                        <div className="max-w-4xl mx-auto">
                            <Accordion type="single" collapsible className="w-full">
                                {faqData.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={isVisible.engagement ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                        transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                                    >
                                        <AccordionItem value={`item-${index}`} className="border-b-2" style={{ borderColor: brandColors.mediumGray }}>
                                            <AccordionTrigger
                                                className="text-left hover:no-underline py-6 hover:bg-gray-50 px-4 rounded-lg transition-colors duration-300"
                                                style={{ color: brandColors.deepRed }}
                                            >
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-gray-700 pb-6 px-4 leading-relaxed">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </motion.div>
                                ))}
                            </Accordion>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="py-16 px-4"
                style={{ backgroundColor: brandColors.white }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="mb-4">
                                <h4 className="text-2xl font-bold tracking-wider" style={{ color: brandColors.deepRed }}>
                                    STHAPATYA
                                </h4>
                                <p className="text-sm text-gray-500 tracking-[0.2em] uppercase">
                                    Consultants Pvt. Ltd.
                                </p>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Building excellence through innovative architectural solutions and sustainable design practices.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4" style={{ color: brandColors.deepRed }}>
                                Quick Links
                            </h4>
                            <ul className="space-y-2">
                                {['About Us', 'Services', 'Projects', 'Contact'].map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:underline transition-colors duration-300"
                                            style={{
                                                '&:hover': { color: brandColors.deepRed }
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = brandColors.deepRed}
                                            onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4" style={{ color: brandColors.deepRed }}>
                                Careers
                            </h4>
                            <ul className="space-y-2">
                                {['Open Positions', 'Internships', 'Benefits', 'Culture'].map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:underline transition-colors duration-300"
                                            onMouseEnter={(e) => e.target.style.color = brandColors.deepRed}
                                            onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4" style={{ color: brandColors.deepRed }}>
                                Connect With Us
                            </h4>
                            <div className="flex items-center gap-4 mb-4">
                                {[
                                    { icon: Linkedin, href: '#' },
                                    { icon: Twitter, href: '#' },
                                    { icon: Facebook, href: '#' }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                                        style={{ backgroundColor: brandColors.lightGray }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = brandColors.mutedBrickRed;
                                            e.target.querySelector('svg').style.color = brandColors.white;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = brandColors.lightGray;
                                            e.target.querySelector('svg').style.color = brandColors.deepRed;
                                        }}
                                    >
                                        <social.icon className="w-5 h-5" style={{ color: brandColors.deepRed }} />
                                    </motion.a>
                                ))}
                            </div>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    careers@sthapatya.com
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    +91 98765 43210
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="border-t pt-8 text-center text-gray-600"
                        style={{ borderColor: brandColors.mediumGray }}
                    >
                        <p>&copy; 2024 Sthapatya Consultants Pvt. Ltd. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}