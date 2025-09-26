import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm" style={{ color: '#95231c' }}>Follow Us:</span>
      <div className="flex gap-3">
        {socialLinks.map(({ icon: Icon, href, label }, index) => (
          <a
            key={index}
            href={href}
            aria-label={label}
            className="p-2 rounded-full transition-all duration-200"
            style={{ 
              backgroundColor: '#d8bea5',
              color: '#95231c'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#95231c';
              e.target.style.color = '#fefefe';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#d8bea5';
              e.target.style.color = '#95231c';
            }}
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  );
}