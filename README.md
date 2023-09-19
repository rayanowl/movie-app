# MOVAPII - It's Movie time!

Merhaba, SabancıDx DxTechWay Talent Program / Case Study açıklama bölümüne hoşgeldiniz.

Size hazırlamış olduğum, Movie Search Application (Frontend) projemden bahsedeceğim.

Bu vaka çalışması özetle, filmlerin isim - yapımcı - tarih gibi spesifik bilgilerin sıralanabildiği bir uygulamadır.

***Not: Uygulama başlamadan önce Loading animasyonu devreye girecektir. Biraz bekleyin.***

# ...

1- ***Anlaşılır ve estetik görüntü :*** Bootstrap, React Native ve yazılan custom CSS kodları ile arayüz her tarayıcıya uygundur.

2- ***API destekli :*** Belli bir sunucudan film ->  posteri, tarihleri gibi bilgiler çekilir ve ekranda gösterilir.

3- ***Kullanıcı dostu :*** Uygulama site arayüzüyle uyumludur.

4- Seçilen veri türüne göre filmler listelenir. Filmin üzerine tıklandığında tüm bilgiler listelenir. (Film türü - Yapımcı - Oyuncular...)

5- ***Data'nın gelmediği durumlar*** : Data gelmediği takdirde poster belirli bir font ile gösterilir. 

6- Filmin üzerine tıklandığında çıkan bilgilerde direktör ve oyuncuların üstü tıklanabilir yapıdadır. Tıkladığınız takdirde bir küçük remove butonu ve seçili filtre yazılı ile birlikte oynanan film sıralanacaktır. 

***Not: Oyuncu ve Direktör id'leri sadece tek bir filmi göstermektedir. API'da tek bir veri olduğu için tek film görünecektir.***

7- Sadece tür veya tarih seçtiğinizdede veriler sıralanacaktır. Reset tuşuna bastıktan sonra Search butonuna tıkladığınız takdirde tüm filmler listelenecektir.

# Proje kurulumu

 *Node.js kurulumu yapılmalı. (LTS seçilmesi mantıklı çünkü projeyi çalıştırmada sorun yaşayabilirsiniz.)*

 *Command Prompt'u (cmd) yönetici olarak çalıştırın. > npm install -g create-react-app 
 komutunu çalıştırın. Sonra cmd'yi kapatın.*

 *VS Code'da indirdiğiniz dosyayı açın. Büyük ihtimal çalışmayacaktır, node_modules klasörünü silin ve VS Code terminalini açın. > npm install 
 komutunu çalıştırın. Sonrasında > npm start yazın ve uygulamamız çalışacaktır.*


