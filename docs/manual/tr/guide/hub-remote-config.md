# Uzaktan yapılandırma

Seçili Hub’dan **Uzak yapılandırma**yı açın. Kullanılabilir denetimler oturum açan role ve Hub durumuna bağlıdır. Davet göndermeden, PIN değiştirmeden, rol aktarmadan, SSH etkinleştirmeden veya Hub’ı yeniden başlatmadan önce hedefi ve onay mesajını gözden geçirin.

![Kullanıcı Yönetimi ve Uygulama Kullanıcısı kartları: 1 Kullanıcı Yönetimi, 2 rol, 3 oda kapsamı, 4 e-posta, 5 Davet gönder, 6 Uygulama Kullanıcısı, 7 Yapılandır](/images/hubs/hub-remote-config-main.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, devre dışı durum, izin veya risk |
|---|---|---|---|
| 1 | Kullanıcı Yönetimi | Davet ve Uygulama Kullanıcısı alanını gösterip gizlemek için daraltılabilir başlığı seçin. | Daraltma Hub ayarını değiştirmez. |
| 2 | Davet rolü | Davet oluşturmadan önce **Yönetici** veya **Normal Kullanıcı** seçin. | Kullanılamayan roller devre dışıdır; Yönetici davetleri tüm odaları kullanır. |
| 3 | Oda kapsamı | Normal Kullanıcı için tüm odaları veya izinli odaları seçin. | Odasız kısmi kapsam gönderilemez. |
| 4 | E-posta | Alıcının e-postasını girin. | Boş veya geçersiz giriş daveti engeller. |
| 5 | Davet gönder | Rolü, oda kapsamını ve e-postayı gözden geçirip gönderin. | Bu yüksek riskli işlem başarıyla davet yollar; ret veya hata kullanıcı listesini değiştirmez. |
| 6 | Uygulama Kullanıcısı | Mevcut uzak Uygulama Kullanıcısı kartlarını açın veya kapatın. | Yalnızca görüntüleme/gezinme. |
| 7 | Yapılandır | Amaçlanan Uygulama Kullanıcısı kartını açın. | Kullanıcı veya mevcut operatör yapılandırılamıyorsa kullanılamaz. |

![Kullanıcı davet formu: 1 rol, 2 oda kapsamı, 3 e-posta, 4 Davet gönder](/images/hubs/hub-remote-config-invite.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, devre dışı durum, izin veya risk |
|---|---|---|---|
| 1 | Rol | Mevcut operatörün davet edebileceği rolü seçin. | Yönetici seçimi kapsamı tüm odalara sıfırlar. |
| 2 | Oda kapsamı | Normal Kullanıcı için tüm odaları veya izinli alt kümeyi seçin. | Kısmi kapsam için en az bir oda gerekir. |
| 3 | E-posta | Alıcının e-postasını yazın. | Zorunludur; gönderim hatasında yeniden denemeden e-postayı, rolü ve odaları denetleyin. |
| 4 | Davet gönder | Tüm alanları gözden geçirdikten sonra gönderin. | Başarı davet yollar; hata veya devre dışı durum hiçbir şey göndermez. |

![Uygulama Kullanıcısı ayarları: 1 bildirim yöntemleri, 2 telefon, 3 Telefonu kaldır, 4 Telefon ekle, 5 PIN yapılandır, 6 aktarım hedefi, 7 Süper Yönetici aktar, 8 Kaydet](/images/hubs/hub-app-user-settings.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, devre dışı durum, izin veya risk |
|---|---|---|---|
| 1 | Bildirim yöntemleri | Alarm, arıza, olay ve işlem teslim yöntemlerini seçin. | Ana **Kaydet** gerekir; hata onaylanan uzak yapılandırmayı değiştirmez. |
| 2 | Telefon numarası | Gösterilen Uygulama Kullanıcısı için geçerli biçimli numara girin. | SMS veya telefon araması numara gerektirebilir; geçersiz giriş kaydetmeyi engeller. |
| 3 | Telefonu kaldır | Birden fazla telefonu olan Süper Yönetici için kullanılabilir. | Kaydedilmemiş satırı kaldırır; yine kaydetme gerekir. |
| 4 | Telefon ekle | Üçten az telefonu olan Süper Yönetici için kullanılabilir. | Kaydedilmemiş satır ekler. Normal Uygulama Kullanıcılarında en fazla bir telefon vardır. |
| 5 | PIN yapılandır | Geçerli cihaz-kullanıcı-numarası önekli Uygulama Kullanıcısı için PIN taslağını açın. | Taslaktan sonra da ana Kaydet gerekir. |
| 6 | Aktarım hedefi | Mevcut Süper Yönetici uygun yerel olmayan Uygulama Kullanıcısını seçer. | Seçim tek başına rol aktarmaz. |
| 7 | Süper Yönetici aktar | Hedefi gözden geçirip onayı açın. | Yüksek risklidir; yalnızca yetkili mevcut Süper Yönetici ilerleyebilir. |
| 8 | Kaydet | Değişen yöntemleri, telefonları ve bekleyen PIN’i kaydedin. | Meşgul, kullanılamayan, geçersiz veya değişmemiş formlar uzak güncelleme oluşturmaz. |

![Uygulama Kullanıcısı PIN iletişim kutusu: 1 sabit önek, 2 düzenlenebilir rakamlar, 3 İptal, 4 Kaydet](/images/hubs/hub-app-user-pin.png){.manual-shot}

| No. | PIN denetimi | Ön koşul ve işlem | Sonuç veya hata |
|---|---|---|---|
| 1 | Sabit önek | Cihaz-kullanıcı numarasından türetilen iki rakamı okuyun. | Salt okunur. |
| 2 | PIN rakamları | Dört rakamlı sayısal son eki girin. | Sayısal olmayan veya eksik giriş geçerli taslak oluşturamaz. |
| 3 | İptal | Taslak iletişim kutusunu kapatın. | Kaydedilmemiş düzenlemeleri atar. |
| 4 | Kaydet | Geçerli taslağı kaydedin, ardından ana ayarlarda Kaydet’i kullanın. | PIN yalnızca ana ayarlar başarıyla kaydedilince değişir. |

![Süper Yönetici aktarımı onayı: 1 sonuç, 2 İptal, 3 Onayla](/images/hubs/hub-super-admin-transfer-confirm.png){.manual-shot}

| No. | Onay denetimi | İşlem | Sonuç, hata veya yüksek risk sonucu |
|---|---|---|---|
| 1 | Sonuç | Kaynağı ve hedefi tekrar denetleyin. | Onay rolü, cihaz-kullanıcı numarasını ve oda kapsamını değiştirir; PIN’i temizler, bildirim seçimlerini taşır ve ikinci/üçüncü PC telefon numaralarını siler. |
| 2 | İptal | Onayı kapatın. | Aktarım isteği gönderilmez. |
| 3 | Onayla | Yetkili aktarımı gönderin. | Aktarımı yalnızca başarı mesajı görünür ve kullanıcı listesi yeni rolleri gösterirse tamamlanmış sayın. Hata varsa önce listeyi kontrol edin; rol zaten değiştiyse yeniden aktarmayın. |

![Bakım: 1 Bakım bölümü, 2 SSH anahtarı, 3 Hub’ı yeniden başlat](/images/hubs/hub-maintenance.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, devre dışı durum, izin veya risk |
|---|---|---|---|
| 1 | Bakım | Bakım denetimlerini açın veya kapatın. | Yalnızca görüntüleme; uzak komut göndermez. |
| 2 | SSH anahtarı | Yetkili operatörler hedef Hub’ı denetledikten sonra SSH’yi açar veya kapatır. | SSH güvenli uzaktan bakım kanalıdır. Anahtar geri dönerse veya başarı mesajı görünmezse ayarın değiştiğini varsaymayın ya da sürekli yeniden denemeyin. |
| 3 | Hub’ı yeniden başlat | İşlem penceresini denetledikten sonra onayı açın. | Onaydan sonra Hub durumu ve izleme sonuçlarını bekleyin. Başarısız işlem veya başarı mesajı yokluğu yeniden başlatmayı doğrulamaz. |

![Hub yeniden başlatma onayı: 1 uyarı, 2 İptal, 3 Onayla](/images/hubs/hub-restart-confirm.png){.manual-shot}

| No. | Onay denetimi | İşlem | Sonuç, hata veya risk |
|---|---|---|---|
| 1 | Uyarı | Hub adını ve SN’yi doğrulayın. | Gösterilen 30-60 saniyelik çevrim dışı süre yalnızca tahmindir; tamamlanmayı Hub durumu ve izleme ile belirleyin. |
| 2 | İptal | İletişim kutusunu kapatın. | Yeniden başlatma komutu gönderilmez. |
| 3 | Onayla | Yetkili yeniden başlatmayı gönderin. | Hub durumu ve izleme sonuçlarını bekleyin; iletişim kutusunun kapanması başarı değildir. |
