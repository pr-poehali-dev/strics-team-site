import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Главная");

  const renderContent = () => {
    switch (activeTab) {
      case "Главная":
        return <HeroSection />;
      case "Игры":
        return (
          <div className="py-20 px-6 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Игры</h2>
            <p className="text-gray-600">Скоро здесь появятся наши проекты</p>
          </div>
        );
      case "ЧАвО":
        return (
          <div className="py-20 px-6 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Частые вопросы
            </h2>
            <p className="text-gray-600">Раздел в разработке</p>
          </div>
        );
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main>{renderContent()}</main>
    </div>
  );
};

export default Index;
