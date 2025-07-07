import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Truck, HeadphonesIcon, Award, CheckCircle } from "lucide-react";

// Import product images
import ledTvImage from "@/assets/led-tv.jpg";
import ceilingFanImage from "@/assets/ceiling-fan.jpg";
import airCoolerImage from "@/assets/air-cooler.jpg";

const Index = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "Avimax 55\" 4K Smart LED TV",
      price: "₹45,999",
      originalPrice: "₹52,999",
      image: ledTvImage,
      rating: 4.8,
      reviews: 1247,
      features: ["4K Ultra HD", "Smart TV", "HDR Support", "Voice Control"]
    },
    {
      id: 2,
      name: "Fuzion Premium Ceiling Fan 52\"",
      price: "₹8,499",
      originalPrice: "₹9,999",
      image: ceilingFanImage,
      rating: 4.7,
      reviews: 892,
      features: ["LED Lights", "Remote Control", "Energy Efficient", "5 Year Warranty"]
    },
    {
      id: 3,
      name: "Avimax Tower Air Cooler 45L",
      price: "₹12,999",
      originalPrice: "₹14,999",
      image: airCoolerImage,
      rating: 4.6,
      reviews: 634,
      features: ["Honeycomb Pads", "Ice Chamber", "4-Way Air Deflection", "Remote Control"]
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      text: "Amazing picture quality on the Avimax TV! Customer service was excellent too."
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      text: "The ceiling fan is whisper quiet and the LED lights are perfect for our living room."
    },
    {
      name: "Amit Patel",
      location: "Pune",
      rating: 5,
      text: "Best air cooler I've purchased! Keeps the room cool even in peak summer."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Genuine Products",
      description: "100% authentic products with manufacturer warranty"
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Free Delivery",
      description: "Free installation and delivery across India"
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all queries"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "5 Year Warranty",
      description: "Extended warranty on all electronic products"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Avimax</h1>
              <p className="text-xs text-muted-foreground">by Fuzion Industries</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Reviews</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button size="sm" className="hidden md:block">
            Get Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-hover text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🎉 Festive Sale - Up to 30% Off
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Electronics for
              <span className="block text-yellow-300">Modern Homes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover our range of LED TVs, Ceiling Fans & Air Coolers with cutting-edge technology and unbeatable prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Shop Now - Free Delivery
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">Discover our best-selling electronics with unbeatable prices</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-square bg-muted/50 p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-muted-foreground line-through">{product.originalPrice}</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Save {Math.round((1 - parseInt(product.price.replace(/[^\d]/g, '')) / parseInt(product.originalPrice.replace(/[^\d]/g, ''))) * 100)}%
                    </Badge>
                  </div>
                  <div className="mb-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" size="lg">
                    Buy Now - Free Delivery
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Avimax?</h2>
            <p className="text-muted-foreground text-lg">Experience the difference with our premium service and quality products</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground text-lg">Join thousands of satisfied customers across India</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Trusted & Certified</h3>
            <p className="text-muted-foreground">Your trust is our priority</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="font-semibold">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              <span className="font-semibold">BIS Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="font-semibold">Genuine Products</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-6 h-6 text-primary" />
              <span className="font-semibold">Pan India Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Avimax</h3>
                  <p className="text-xs text-gray-400">by Fuzion Industries</p>
                </div>
              </div>
              <p className="text-gray-400">Premium electronics for modern homes. Quality you can trust.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LED TVs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ceiling Fans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Air Coolers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Customer Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Installation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 1800-123-4567</li>
                <li>✉️ info@avimax.com</li>
                <li>📍 Mumbai, India</li>
                <li>🕒 24/7 Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Avimax by Fuzion Industries. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      {isSticky && (
        <div className="fixed bottom-0 left-0 right-0 bg-primary text-white p-4 shadow-lg z-50 md:hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">🎉 Festive Sale Live!</p>
              <p className="text-sm text-white/80">Up to 30% Off + Free Delivery</p>
            </div>
            <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
              Buy Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;