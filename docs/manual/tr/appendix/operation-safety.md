# İşlem güvenliği

Her yetkili işlemden önce hedefi, mevcut rolü, iş etkisini ve kurtarma yolunu doğrulayın.

| İşlem | Ön koşullar ve sonuç | Hata ve kurtarma |
|---|---|---|
| Hub silme | Yetkili kullanıcı hedefi onaylar. Kişi ve şirket bağlarını kaldırır; yeniden bağlanana kadar PC göremez. Fiziksel SN kaydı kalır. | Başarısız istek bağın kaldırıldığı anlamına gelmez; erişim geri gelmeliyse amaçlanan Hub’ı yeniden bağlayın. |
| SSH | Yetkili kullanıcı Hub’ı onaylar. SSH güvenli bir uzaktan bakım kanalıdır. | Anahtar önceki duruma dönerse veya başarı mesajı yoksa ayarın değiştiğini varsaymayın; işlemsel geri alma yordamını izleyin. |
| Yeniden başlatma | Yetkili kullanıcı Hub’ı ve uygun bakım penceresini onaylar. | Başarı işareti yoksa yeniden başlatma doğrulanmış sayılmaz. Başka denemeden önce Hub durumunu ve izlemeyi bekleyin. |
| Süper Yönetici aktarımı | İki kullanıcıyı ve oda kapsamını doğrulayın. Aktarım rolü, tanımlayıcıyı ve oda kapsamını değiştirir; PIN’i temizler, bildirim seçimini taşır ve ikinci/üçüncü PC telefon numaralarını siler. | Sonuç hesapları gözden geçirin; aktarım yanlışsa yetkili yönetimle kapsamı düzeltin. |
| Hesabımı sil | Oturum açan kimliği doğrulayın. Yalnızca mevcut hesabı siler. | Hata hesabı değiştirmez; cihazları veya yapılandırmayı silmez. |
| Şirket silme | Yetkili kullanıcı şirketi onaylar. Silindikten sonra kullanılabilir şirket listesinde görünmez ve ilgili yönetim sürdürülemez. | Hata şirketi korur; istenmeyen durum için yetkili yönetim kullanın. |
