import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
          Мы новая команда
        </h1>
        <p className="text-xl text-gray-600 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          Strics Team специализируется на разработке PC-игр. Мы создаём
          качественные игровые проекты с вниманием к деталям.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Gamepad2" size={24} className="text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Игры для PC
            </h3>
            <p className="text-gray-600 font-light">
              Разрабатываем игры любых жанров для персональных компьютеров
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Команда</h3>
            <p className="text-gray-600 font-light">
              Молодая и амбициозная команда разработчиков
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} className="text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Качество</h3>
            <p className="text-gray-600 font-light">
              Каждый проект создаётся с особым вниманием к деталям
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
