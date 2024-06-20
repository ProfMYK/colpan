function About() {
  return (
    <div className="h-[94%] w-screen flex justify-center items-center p-[100px]">
      <div className="w-full h-full flex items-left justify-center gap-[30px] flex-col pr-[200px]">
        <h1 className="font-bold font-serif text-6xl text-foreground-primary">BIZ KIMIZ</h1>
        <p className="font-sans text-lg text-foreground-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est </p>
        <h1 className="font-bold font-serif text-6xl text-foreground-primary">AMACIMIZ</h1>
        <p className="font-sans text-lg text-foreground-secondary">Bu projenin amacı, lise düzeyinde fizik eğitiminde karşılaşılan mevcut zorlukları aşmak ve öğrenciler için daha etkili bir öğrenme ortamı sağlamaktır. Fen bilimleri eğitiminde somut deneyimlerin önemi büyük olduğundan, özellikle atışlar konusu gibi soyut kavramların öğrenciler tarafından daha iyi anlaşılabilmesini hedeflemektedir. Bu bağlamda geliştirilen web tabanlı fizik eğitim modülü, 5E modeliyle uyumlu olarak öğrencilere ilgi çekici deneyimler sunmayı, konuları keşfetme ve derinleştirme imkanı sağlamayı amaçlamaktadır. Modülün tasarımı, kitapların anlaşılabilirliğini artırmak, laboratuvar imkanlarını genişletmek ve fiziksel düzeneklere erişimi standartlaştırmak için bir çözüm sunmaktadır. Bu proje aynı zamanda eğitim teknolojilerinin etkin kullanımını teşvik ederek, Türkiye'deki fizik eğitimine fırsat eşitliği ve yenilik getirmeyi amaçlamaktadır.</p>
      </div>
      <div className="w-[100%] h-[800px]">
        <img src={require("./takim.jpeg")} />
      </div>
    </div>
  );
}

export default About;