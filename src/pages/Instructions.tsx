import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Instructions = () => {
  const steps = [
    {
      title: "Выберите номинал",
      description:
        "Выберите подходящий номинал подарочной карты: 1000, 2500 или 5000 рублей.",
    },
    {
      title: "Оформите заказ",
      description: "Заполните необходимые данные и выберите способ оплаты.",
    },
    {
      title: "Получите код",
      description:
        "После оплаты вы моментально получите код активации на email.",
    },
    {
      title: "Активируйте карту",
      description:
        "Введите код в App Store или iTunes Store для пополнения баланса.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Как купить Gift Card
          </h1>
          <p className="text-xl text-gray-600">
            Простой процесс покупки за 4 шага
          </p>
        </div>

        <div className="grid gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:shadow-md transition-shadow"
            >
              <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {index + 1}
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="ml-16">
                <p className="text-red-700">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Instructions;
