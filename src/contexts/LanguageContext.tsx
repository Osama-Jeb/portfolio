import React, { createContext, useContext, useState, type ReactNode,  } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  selectedLanguage: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setSelectedLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const value: LanguageContextType = {
    selectedLanguage,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
