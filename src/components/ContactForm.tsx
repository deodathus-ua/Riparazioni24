import React, {useState, useEffect} from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import {CookieManager} from '@/lib/cookies';

const serviceOptions = [
  { value: 'lavatrice', label: 'Lavatrice' },
  {value: 'asciugatrice', label: 'Asciugatrice'},
  { value: 'lavastoviglie', label: 'Lavastoviglie' },
  { value: 'frigorifero', label: 'Frigorifero' },
  {value: 'congelatore', label: 'Congelatore'},
  {value: 'piano-cottura', label: 'Piano Cottura'},
  { value: 'forno', label: 'Forno' },
  {value: 'altro', label: 'Altro'}
];

const brandOptions = [
  {value: 'aeg', label: 'AEG'},
  {value: 'ariston', label: 'Ariston'},
  {value: 'bauknecht', label: 'Bauknecht'},
  {value: 'beko', label: 'Beko'},
  {value: 'bosch', label: 'Bosch'},
  {value: 'candy', label: 'Candy'},
  {value: 'electrolux', label: 'Electrolux'},
  {value: 'grundig', label: 'Grundig'},
  {value: 'haier', label: 'Haier'},
  {value: 'hisense', label: 'Hisense'},
  {value: 'hotpoint', label: 'Hotpoint'},
  {value: 'hoover', label: 'Hoover'},
  {value: 'ignis', label: 'Ignis'},
  {value: 'indesit', label: 'Indesit'},
  {value: 'lg', label: 'LG'},
  {value: 'miele', label: 'Miele'},
  {value: 'samsung', label: 'Samsung'},
  {value: 'siemens', label: 'Siemens'},
  {value: 'smeg', label: 'Smeg'},
  {value: 'whirlpool', label: 'Whirlpool'},
  {value: 'zanussi', label: 'Zanussi'},
  {value: 'altro', label: 'Altra Marca'},
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
    brand: '',
    location: '',
    problem: '',
    privacyAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.fullName || !formData.phone || !formData.applianceType || !formData.location || !formData.problem) {
      toast({
        title: "Errore",
        description: "Per favore completa tutti i campi obbligatori.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.privacyAccepted) {
      toast({
        title: "Errore",
        description: "Per procedere devi accettare la privacy policy.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Отправка данных на бэкенд
      const response = await fetch('https://riparazioni24-backend-master-hyswa5.laravel.cloud/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data;
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        // If response is not JSON, treat as error
        throw new Error('Il servizio è temporaneamente non disponibile');
      }

      if (!response.ok) {
        throw new Error(data.message || 'Errore durante l\'invio.');
      }

      // Success message
      toast({
        title: "Richiesta inviata!",
        description: "Ti ricontatteremo entro 60 minuti per fissare un appuntamento.",
        variant: "default",
      });

      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        applianceType: '',
        brand: '',
        location: '',
        problem: '',
        privacyAccepted: false,
      });

      // Очищаем сохраненные данные после успешной отправки
      CookieManager.clearFormData('contact');
    } catch (error) {
      toast({
        title: "Errore",
        description: error instanceof Error ? error.message : "Si è verificato un errore. Per favore riprova più tardi o contattaci telefonicamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Загружаем сохраненные данные формы при монтировании компонента
  useEffect(() => {
    const savedData = CookieManager.getFormData('contact');
    if (savedData) {
      setFormData(prevData => ({
        ...prevData,
        ...savedData,
        privacyAccepted: false // Всегда требуем заново принять соглашение
      }));
    }
  }, []);

  // Сохраняем данные формы при изменении (кроме checkbox)
  useEffect(() => {
    const {privacyAccepted, ...dataToSave} = formData;
    if (formData.fullName || formData.phone || formData.email) {
      CookieManager.saveFormData('contact', dataToSave);
    }
  }, [formData]);

  return (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#1e3a8a]">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="bg-gray-50 focus:bg-white focus:border-[#1e3a8a]"
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
                  className="bg-gray-50 focus:bg-white focus:border-[#1e3a8a]"
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
                  className="bg-gray-50 focus:bg-white focus:border-[#1e3a8a]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="applianceType">Tipo di Elettrodomestico *</Label>
              <Select
                  value={formData.applianceType}
                  onValueChange={(value) => handleSelectChange('applianceType', value)}
              >
                <SelectTrigger className="bg-gray-50 focus:bg-white focus:border-[#1e3a8a]">
                  <SelectValue placeholder="Seleziona l'elettrodomestico" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="brand">Marca *</Label>
              <Select
                  value={formData.brand}
                  onValueChange={(value) => handleSelectChange('brand', value)}
              >
                <SelectTrigger className="bg-gray-50 focus:bg-white focus:border-[#1e3a8a]">
                  <SelectValue placeholder="Seleziona la marca"/>
                </SelectTrigger>
                <SelectContent>
                  {brandOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Indirizzo o Città *</Label>
              <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Inserisci il tuo indirizzo o città (es. Milano, Via Roma 123)"
                  required
                  className="bg-gray-50 focus:bg-white focus:border-[#1e3a8a]"
              />
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
                  className="bg-gray-50 focus:bg-white focus:border-[#1e3a8a]"
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
                Ho letto e accetto la <a href="#/privacy-policy"
                                         className="text-[#1e3a8a] hover:text-[#10b981] underline" target="_blank"
                                         rel="noopener noreferrer">Privacy Policy</a> *
              </label>
            </div>

            <Button
                type="submit"
                className="bg-[#10b981] hover:bg-[#059669] text-white font-semibold py-3 px-6 w-full"
                disabled={isSubmitting}
            >
              {isSubmitting ? 'Invio in corso...' : 'Richiedi Preventivo Gratuito'}
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
