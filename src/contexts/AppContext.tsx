import React, { createContext, useContext, useState, type ReactNode,  } from 'react';

export type Language = 'en' | 'fr';

interface AppContextType {
  selectedLanguage: Language;
  toggleLanguage: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setSelectedLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const value: AppContextType = {
    selectedLanguage,
    toggleLanguage,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};
