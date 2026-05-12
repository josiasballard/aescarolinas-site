
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

function TestimonialCard({ name, location, rating, review }) {
  const initials = name.split(' ').map(n => n[0]).join('');
  
  const colors = [
    'bg-blue-500',
    'bg-amber-500',
    'bg-emerald-500',
    'bg-purple-500',
    'bg-rose-500'
  ];
  
  const colorIndex = name.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];
  
  return (
    <Card className="h-full break-inside-avoid mb-6">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center shrink-0`}>
            <span className="text-white font-semibold text-sm">{initials}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'fill-accent text-accent' : 'text-muted'}`}
            />
          ))}
        </div>
        
        <p className="text-muted-foreground leading-relaxed">{review}</p>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
