import React, {useState, useEffect} from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import {CookieManager} from '@/lib/cookies';
import {CheckCircle, Clock, Star} from 'lucide-react';

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
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
        {/* Decorative element */}
        <div
            className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-10 transform translate-x-8 -translate-y-8"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <div
                className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <Star size={16} className="mr-2"/>
              Preventivo gratuito
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-3">
                <Label htmlFor="fullName" className="text-sm font-semibold text-gray-900">Nome e Cognome *</Label>
                <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Inserisci il tuo nome completo"
                    required
                    className="bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500 rounded-lg px-4 py-3 transition-all duration-200"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-sm font-semibold text-gray-900">Numero di Telefono *</Label>
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Inserisci il tuo numero di telefono"
                    required
                    className="bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500 rounded-lg px-4 py-3 transition-all duration-200"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-900">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Inserisci la tua email (facoltativo)"
                    className="bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500 rounded-lg px-4 py-3 transition-all duration-200"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="applianceType" className="text-sm font-semibold text-gray-900">Tipo di Elettrodomestico
                  *</Label>
                <Select
                    value={formData.applianceType}
                    onValueChange={(value) => handleSelectChange('applianceType', value)}
                >
                  <SelectTrigger
                      className="bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500 rounded-lg px-4 py-3 h-12 transition-all duration-200">
                    <SelectValue placeholder="Seleziona l'elettrodomestico"/>
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

              <div className="space-y-3">
                <Label htmlFor="brand" className="text-sm font-semibold text-gray-900">Marca *</Label>
                <Select
                    value={formData.brand}
                    onValueChange={(value) => handleSelectChange('brand', value)}
                >
                  <SelectTrigger
                      className="bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500 rounded-lg px-4 py-3 h-12 transition-all duration-200">
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

              <div className="space-y-3">
                <Label htmlFor="location" className="text-sm font-semibold text-gray-900">Indirizzo o Città *</Label>
                <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Inserisci il tuo indirizzo o città (es. Milano, Via Roma 123)"
                    required
                    className="bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500 rounded-lg px-4 py-3 transition-all duration-200"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="problem" className="text-sm font-semibold text-gray-900">Descrizione del Problema
                  *</Label>
                <Textarea
                    id="problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    placeholder="Descrivi brevemente il problema che riscontri con il tuo elettrodomestico"
                    rows={4}
                    required
                    className="bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500 rounded-lg px-4 py-3 transition-all duration-200 resize-none"
                />
              </div>

              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <input
                    type="checkbox"
                    id="privacyAccepted"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="privacyAccepted" className="text-sm text-gray-700 leading-relaxed">
                  Ho letto e accetto la <a href="#/privacy-policy"
                                           className="text-blue-600 hover:text-blue-700 underline font-medium"
                                           target="_blank"
                                           rel="noopener noreferrer">Privacy Policy</a> *
                </label>
              </div>

              <Button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-8 w-full rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={isSubmitting}
              >
                {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Invio in corso...
                    </div>
                ) : (
                    <div className="flex items-center justify-center">
                      <CheckCircle size={20} className="mr-2"/>
                      Richiedi Preventivo Gratuito
                    </div>
                )}
              </Button>
            </div>
          </form>

          {/* Enhanced footer */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                <Clock size={16} className="mr-2 text-green-600"/>
                <span className="font-medium">Risposta garantita entro 60 minuti</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center">
                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0"/>
                <span className="text-sm text-gray-600">Preventivo gratuito</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0"/>
                <span className="text-sm text-gray-600">Intervento entro 24h</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0"/>
                <span className="text-sm text-gray-600">Garanzia 12 mesi</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              * Campi obbligatori - I tuoi dati sono protetti e non verranno condivisi con terzi
            </p>
          </div>
        </div>
      </div>
  );
};

export default ContactForm;
