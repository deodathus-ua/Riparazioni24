
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const applianceOptions = [
  { value: 'lavatrice', label: 'Lavatrice' },
  { value: 'lavastoviglie', label: 'Lavastoviglie' },
  { value: 'frigorifero', label: 'Frigorifero' },
  { value: 'forno', label: 'Forno' },
  { value: 'microonde', label: 'Microonde' },
  { value: 'piano-cottura', label: 'Piano Cottura' },
  { value: 'asciugatrice', label: 'Asciugatrice' },
  { value: 'congelatore', label: 'Congelatore' },
  { value: 'altro', label: 'Altro Elettrodomestico' },
];

const locationOptions = [
  { value: 'milano', label: 'Milano' },
  { value: 'sesto-san-giovanni', label: 'Sesto San Giovanni' },
  { value: 'cinisello-balsamo', label: 'Cinisello Balsamo' },
  { value: 'rho', label: 'Rho' },
  { value: 'rozzano', label: 'Rozzano' },
  { value: 'cologno-monzese', label: 'Cologno Monzese' },
  { value: 'corsico', label: 'Corsico' },
  { value: 'novate-milanese', label: 'Novate Milanese' },
  { value: 'segrate', label: 'Segrate' },
  { value: 'buccinasco', label: 'Buccinasco' },
  { value: 'altro', label: 'Altra Località' },
];

interface ContactFormProps {
  title?: string;
  description?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  title = "Richiedi Assistenza", 
  description = "Compila il modulo e ti contatteremo entro 60 minuti per fissare un appuntamento."
}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    applianceType: '',
    location: '',
    problem: '',
    privacyAccepted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.phone || !formData.applianceType || !formData.location || !formData.problem) {
      toast({
        title: "Errore",
        description: "Per favore completa tutti i campi obbligatori.",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.privacyAccepted) {
      toast({
        title: "Errore",
        description: "Per procedere devi accettare la privacy policy.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Mock form submission
      // In a real application, you'd send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success message
      toast({
        title: "Richiesta inviata!",
        description: "Ti ricontatteremo entro 60 minuti per fissare un appuntamento.",
        variant: "default"
      });
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        applianceType: '',
        location: '',
        problem: '',
        privacyAccepted: false
      });
    } catch (error) {
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Per favore riprova più tardi o contattaci telefonicamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5">
          <div className="space-y-2">
            <Label htmlFor="fullName">Nome e Cognome *</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Inserisci il tuo nome completo"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Numero di Telefono *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Inserisci il tuo numero di telefono"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Inserisci la tua email (facoltativo)"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="applianceType">Tipo di Elettrodomestico *</Label>
            <Select
              value={formData.applianceType}
              onValueChange={(value) => handleSelectChange('applianceType', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleziona l'elettrodomestico" />
              </SelectTrigger>
              <SelectContent>
                {applianceOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Località *</Label>
            <Select
              value={formData.location}
              onValueChange={(value) => handleSelectChange('location', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleziona la tua località" />
              </SelectTrigger>
              <SelectContent>
                {locationOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="problem">Descrizione del Problema *</Label>
            <Textarea
              id="problem"
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              placeholder="Descrivi brevemente il problema che riscontri con il tuo elettrodomestico"
              rows={4}
              required
            />
          </div>
          
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="privacyAccepted"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              className="mt-1"
            />
            <label htmlFor="privacyAccepted" className="text-sm text-gray-600">
              Ho letto e accetto la <a href="/privacy-policy" className="text-brand-blue hover:text-brand-lightBlue underline">Privacy Policy</a> *
            </label>
          </div>
          
          <Button 
            type="submit" 
            className="btn-primary w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
          </Button>
        </div>
      </form>
      
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>* Campi obbligatori</p>
        <p className="mt-2">Risposta garantita entro 60 minuti negli orari di lavoro</p>
      </div>
    </div>
  );
};

export default ContactForm;
