import { useState } from "react"
import Meraklisina from "./Meraklisina"

function Meraklisinalar() {
  const paragraph1 = `Fizik derslerinde, atışlar konusu her zaman ilgi çekici olmuştur. Özellikle, bir cismin en uzak mesafeye ulaşabilmesi için ideal atış açısının 45 derece olduğu bilgisi, birçok öğrencinin aklını kurcalamıştır. Peki, bu ideal açının gerçek hayatta ne kadar kullanışlı olduğunu hiç düşündünüz mü?
İdeal şartlarda, yani hava direncinin olmadığı bir ortamda, bir cismin en uzak mesafeye ulaşabilmesi için 45 derece açıyla fırlatılması gerekir. Ancak, gerçek hayatta bu durum genellikle geçerli değildir. Hava direnci, rüzgâr, cismin şekli ve yüzey alanı gibi faktörler, bu ideal açıyı etkileyebilir.
Örneğin, futbolcuların serbest vuruş yaparken topu nasıl bir açıyla vurduklarına dikkat ettiniz mi? Futbol sahasında, topu havada mümkün olan en uzun süre tutmak ve en uzak mesafeye göndermek için genellikle 45 dereceden daha düşük açılar tercih edilir. Bunun sebebi, hava direncinin topun hızını yavaşlatması ve 45 derece gibi yüksek açılarda topun beklenenden daha kısa mesafede düşmesidir. Bu yüzden futbolcular, topun yere düşmeden önce maksimum mesafeyi kat etmesi için daha düşük açılar kullanırlar.
Bir diğer ilginç örnek ise, okçuların hedefe en doğru atışı yapmak için kullandıkları açılardır. Uzun mesafeli atışlarda, ideal atış açısı hava direncini ve ok yayının esneklik gücünü dikkate alarak 45 derecenin biraz üzerinde olabilir. Okun aerodinamik yapısı, rüzgârın hızı ve yönü gibi faktörler, bu açının belirlenmesinde rol oynar. Bu sebeple, okçular genellikle hem matematiksel hesaplama yapar hem de deneyimlerine dayanarak doğru açıyı bulmaya çalışırlar.
Sonuç olarak, ideal atış açısı, teorik olarak 45 derece olsa da, gerçek dünyada bu açının kullanımı çevresel ve fiziksel faktörlere bağlı olarak değişkenlik gösterir. Bu durum, fiziğin sadece bir ders kitabı bilgisi olmadığını, aynı zamanda günlük yaşamın her alanında uygulandığını gösterir.`;

  const paragraph2 = `Fizik derslerinde sıkça karşımıza çıkan konulardan biri de sürtünmesiz düzlemdir. Bu ideal senaryo, cisimlerin üzerinde hareket ettiği yüzeyde hiçbir sürtünme kuvvetinin olmadığı varsayımı üzerine kuruludur. Peki, gerçekte sürtünmesiz bir düzlem var mı? Eğer olsaydı, bu nasıl bir etki yaratırdı?
Sürtünme kuvveti, günlük hayatımızın vazgeçilmez bir parçasıdır. Bu kuvvet olmasaydı, yürümek, durmak, hatta nesneleri tutmak bile mümkün olmazdı. Sürtünmesiz bir düzlemde, bir cismi ittiğinizde, cismin sonsuza kadar aynı hızla hareket edeceğini hayal edin. Çünkü sürtünme olmadığı için, cismi yavaşlatacak ya da durduracak bir kuvvet de olmayacaktır. 
Gerçek hayatta, tam anlamıyla sürtünmesiz bir yüzey bulmak imkânsızdır. Ancak bilim insanları, bu teorik kavramı kullanarak cisimlerin hareketini daha iyi anlayabilir ve karmaşık hesaplamalar yapabilirler. Örneğin, süper iletkenler üzerinde yapılan çalışmalar, sürtünmesiz hareketin bir benzerini sunar. Süper iletken bir malzeme, belirli bir sıcaklığın altına soğutulduğunda elektrik akımını neredeyse kayıpsız bir şekilde iletir. Bu durum, sürtünmesiz düzlem fikrinin elektrik alanında nasıl gerçek olabileceğini gösterir.

Bir diğer uygulama alanı ise uzay boşluğudur. Uzayda, cisimler büyük ölçüde sürtünmesiz bir ortamda hareket ederler. Ancak burada da, çok az da olsa var olan gaz molekülleri ve diğer parçacıklar, cisimlerin hareketini etkileyebilir. Uzayda bir cismi iterseniz, o cisim, herhangi bir kuvvet tarafından durdurulmadığı sürece hareketine sonsuza kadar devam edecektir. Bu, uydu ve uzay araçlarının hareketinde dikkate alınması gereken önemli bir faktördür.
Sonuç olarak, sürtünmesiz düzlem kavramı, fiziksel dünyada birebir karşılık bulmasa da, hem teorik çalışmalar hem de bazı özel durumlar için önemli bir referans noktasıdır. Sürtünmenin olmadığı bir dünyayı hayal etmek, günlük yaşamımızda fark etmeden sürekli kullandığımız fiziksel yasaların ne kadar önemli olduğunu anlamamıza yardımcı olur.`;

  return (
    <>
      <div className="w-screen h-auto flex flex-col p-5 gap-10">
        <Meraklisina title="İdeal Atış Açısı ve Gerçek Hayattaki Uygulamaları" paragraph={paragraph1} />
        <Meraklisina title="Sürtünmesiz Düzlem ve Gerçek Hayattaki Karşılığı" paragraph={paragraph2}/>
      </div>
    </>
  )
}

export default Meraklisinalar;