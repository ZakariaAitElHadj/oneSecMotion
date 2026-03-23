"use client"

import Link from "next/link"
import { ChevronRight, Mail, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GitForkIcon as TiktokIcon } from "lucide-react"
import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"


export default function Home() {
  const [activeCategory, setActiveCategory] = useState("behind the scenes")

  const portfolioData = [
    {
      id: 4,
      category: "Golf Industry",
      title: "Golf du maroc",
      image: "/images/videos/Onesecmotion-frmgolf.mp4",
      poster: "/images/videos/Onesecmotion-frmgolf_thumb.jpg",
    },
    {
      id: 5,
      category: "Golf Industry",
      title: "Golf du maroc",
      image: "/images/videos/Onesecmotion-golfdumaroc.mp4",
      poster: "/images/videos/Onesecmotion-golfdumaroc_thumb.jpg",
    },
    {
      id: 6,
      category: "Golf Industry",
      title: "Golf du maroc",
      image: "/images/videos/Onesecmotion-golfdusoleil.mp4",
      poster: "/images/videos/Onesecmotion-golfdusoleil_thumb.jpg",
    },
    {
      id: 7,
      category: "events",
      title: "College LaSalle",
      image: "/images/CollegeLaSalle/collegeLaSalle0.jpg",
    },
    {
      id: 8,
      category: "events",
      title: "College LaSalle",
      image: "/images/CollegeLaSalle/collegeLaSalle1.jpg",
    },
    {
      id: 9,
      category: "events",
      title: "College LaSalle",
      image: "/images/CollegeLaSalle/collegeLaSalle2.jpg",
    },
    {
      id: 10,
      category: "events",
      title: "College LaSalle",
      image: "/images/CollegeLaSalle/collegeLaSalle3.jpeg",
    },
    {
      id: 11,
      category: "events",
      title: "College LaSalle",
      image: "/images/CollegeLaSalle/collegeLaSalle4.jpeg",
    },
    {
      id: 12,
      category: "events",
      title: "College LaSalle",
      image: "/images/CollegeLaSalle/collegeLaSalle5.jpeg",
    },
    {
      id: 13,
      category: "events",
      title: "College LaSalle",
      image: "/images/CollegeLaSalle/collegeLaSalle6.png",
    },
    {
      id: 14,
      category: "behind the scenes",
      title: "Restaurant",
      image: "/images/restaurants/restaurant0.jpeg",
    },
    {
      id: 15,
      category: "behind the scenes",
      title: "Restaurant",
      image: "/images/restaurants/restaurant1.jpeg",
    },
    {
      id: 16,
      category: "behind the scenes",
      title: "Restaurant",
      image: "/images/restaurants/restaurant2.jpeg",
    },
    {
      id: 17,
      category: "behind the scenes",
      title: "Restaurant",
      image: "/images/restaurants/restaurant5.jpeg",
    },
    {
      id: 18,
      category: "behind the scenes",
      title: "Restaurant",
      image: "/images/restaurants/restaurant4.jpeg",
    },
    {
    id: 19,
    category: "events",
    title: "College LaSalle",
    image: "/images/CollegeLaSalle/collegeLaSalleVideo0_compressed.mp4",
    poster: "/images/CollegeLaSalle/collegeLaSalleVideo0_thumb.jpg",
    },
    {
      id: 20,
      category: "Automotive",
      title: "car edit",
      image: "/images/edits/carEdit0.mov",
      poster: "/images/edits/carEdit0_thumb.jpg",
    },
    {
      id: 21,
      category: "behind the scenes",
      title: "Restaurant",
      image: "/images/restaurants/restaurant6.jpeg",
    },
    {
      id: 22,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0002.jpg",
    },
    {
      id: 23,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0003.jpg",
    },
    {
      id: 24,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0004.jpg",
    },
    {
      id: 25,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0005.jpg",
    },
    {
      id: 26,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0006.jpg",
    },
    {
      id: 27,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0007.jpg",
    },
    {
      id: 28,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0008.jpg",
    },
    {
      id: 29,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0009.jpg",
    },
    {
      id: 30,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0010.jpg",
    },
    {
      id: 31,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0011.jpg",
    },
    {
      id: 32,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0012.jpg",
    },
    {
      id: 33,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0013.jpg",
    },
    {
      id: 34,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0014.jpg",
    },
    {
      id: 35,
      category: "Jewelery",
      title: "Samira Store",
      image: "/images/Jewelery/samirasstore-20250815-0015.jpg",
    },
  ]

  const categories = ["all","behind the scenes","events","Jewelery", "Golf Industry","Automotive"]

  const filteredPortfolio =
    activeCategory === "all" ? portfolioData : portfolioData.filter((item) => item.category === activeCategory)

    
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-accent">OneSecMotion</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#portfolio" className="text-sm text-foreground/70 hover:text-foreground transition">
              Portfolio
            </Link>
            <Link href="#about" className="text-sm text-foreground/70 hover:text-foreground transition">
              About
            </Link>
            <Link href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition">
              Contact
            </Link>
          </div>
          {/* <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Inquire
          </Button> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider">Welcome</p>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">Mustapha Doauz</h1>
                <p className="text-xl text-accent font-semibold">OneSecMotion</p>
                <p className="text-lg text-accent font-semibold">Capturing moments, crafting stories</p>
              </div>
              <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
                I'm a professional photographer with 3 years of experience specializing in portrait, landscape, and
                editorial photography. My work celebrates authentic moments and transforms them into visual narratives.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  View My Work
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Hero Image - CHANGE: Replace headshot with circular logo */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-accent">
                <Image
                  src="/images/onesecmotionlogo.jpg"
                  alt="OneSecMotion Logo"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Selected Work</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Portfolio</h2>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3 mb-12 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-card text-foreground border border-border hover:border-accent"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg aspect-square bg-card cursor-pointer shadow-md hover:shadow-lg transition-shadow"
              >
                {item.image.endsWith(".mp4")  || item.image.endsWith(".mov") ? (
              <VideoWrapper key={item.id} src={item.image} poster={item.poster} />
            ) : (
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
                <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                  <div>
                    <p className="text-sm text-foreground/80 capitalize">{item.category}</p>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">About</p>
            <h2 className="text-4xl font-bold text-foreground mb-6">Behind the Lens</h2>
            <div className="space-y-4 text-foreground/70 max-w-3xl">
              <p className="leading-relaxed">
                With 3 years of dedicated experience in photography, I've had the privilege of capturing moments and
                creating visual stories. My passion lies in telling authentic stories through the lens, whether it's the
                quiet beauty of a landscape or the raw emotion in a portrait.
              </p>
              <p className="leading-relaxed">
                I work closely with clients to understand their vision and bring it to life. Every project is an
                opportunity to create something meaningful and lasting. My approach combines technical expertise with
                creative vision to deliver exceptional results.
              </p>
              <p className="leading-relaxed">
                When I’m not capturing moments, I’m immersed in digital content management, marketing, and building strong online profiles for myself and my clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Services</p>
            <h2 className="text-4xl font-bold text-foreground">What I Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Portrait Photography",
                description:
                  "Professional headshots, family portraits, and personal branding sessions that capture your essence.",
              },
              {
                title: "Landscape Photography",
                description: "Stunning landscapes and nature photography that showcase the beauty of our world.",
              },
              {
                title: "Video Production",
                description: "High-quality video content creation for brands, events, and creative projects.",
              },
              {
                title: "Product Photography",
                description: "High-quality product photography that showcases your items in the best light.",
              },
              {
                title: "Event Coverage",
                description: "Professional event photography capturing important moments and memories.",
              },
              {
                title: "Retouching & Editing",
                description: "Expert post-production work to enhance and perfect your images.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 rounded-lg border border-border bg-card hover:border-accent hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Contact Info */}
      <footer id="contact" className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-accent mb-4">OneSecMotion</h3>
              <p className="text-sm text-foreground/70">
                Professional photography capturing moments that matter. Creating visual stories with passion and
                precision.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-4">Links</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <Link href="#portfolio" className="hover:text-accent transition">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-accent transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-accent transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-4">Get In Touch</p>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li>
                  <a
                    href="mailto:Onesecmotion@gmail.com"
                    className="flex items-center gap-3 hover:text-accent transition"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Onesecmotion@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/onesecmotion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-accent transition"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@onesecmotion</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+212711751538"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-accent transition"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://tiktok.com/@onesecmotion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-accent transition"
                  >
                    <TiktokIcon className="w-5 h-5" />
                    <span>@onesecmotion</span>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex items-center justify-between text-sm text-foreground/70">
            <p>&copy; 2026 OneSecMotion. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-accent transition">
                Privacy
              </Link>
              <Link href="#" className="hover:text-accent transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function VideoWrapper({ src, poster }: { src: string, poster?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.playsInline = true;

      // Add event listener for manual looping 🔄
      const handleEnded = () => {
        v.currentTime = 0;
        v.play().catch(e => console.error("Loop play failed:", e));
      };

      v.addEventListener('ended', handleEnded);

      return () => {
        v.removeEventListener('ended', handleEnded);
      };
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      controls={true} 
      playsInline
      preload="none"
      poster={poster}
      className="w-full h-full object-cover"
    />
  );
}

