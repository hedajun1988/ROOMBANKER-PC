# Hesaplar

Yalnızca atanmış kapsamı hesap yönetimine izin veren yönetici hesap oluşturabilir veya değiştirebilir. Örneklerde `admin@example.com` gibi örnek hesaplar kullanılır.

![Hesap listesi: 1 rol filtresi, 2 durum filtresi, 3 anahtar sözcük arama, 4 ayrıntı, 5 düzenle, 6 doğrudan durum anahtarı](/images/accounts/account-status-toggle.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, hata, izin veya risk |
|---|---|---|---|
| 1 | Rol filtresi | Görünür hesap listesini daraltmak için rol seçin. | Liste sorgusunu değiştirir; boş sonuç geçerlidir. Yalnızca mevcut yöneticinin kapsamındaki hesaplar döner. |
| 2 | Durum filtresi | Etkin veya Devre Dışı seçin. | Rol ve anahtar sözcük filtreleriyle birleşir. |
| 3 | Anahtar sözcük arama | Ad veya e-posta anahtar sözcüğü girin; Enter’a basın veya sayfa aramasını bekleyin. | Eşleşen satırlar yenilenir. Değeri temizlemek filtresiz kapsamı geri getirir. |
| 4 | Ayrıntı | Satırın Ayrıntı işlemini seçin. | Salt okunur kimlik, şirket, rol, telefon, notlar ve izinli parola sıfırlama işlemini gösterir. |
| 5 | Düzenle | Düzenlenebilir hesapta Düzenle’yi seçin. | Düzenleme iletişim kutusunu açar. Mevcut rol hedefi değiştiremiyorsa işlem görünmez. |
| 6 | Etkinleştir / devre dışı bırak | Yalnızca hedefi ve amaçlanan durumu doğruladıktan sonra satır anahtarını kullanın. | Doğrudan değişir, onay iletişim kutusu yoktur. Korunan Süper Yönetici devre dışı bırakılamaz; hata gösterilen durumu geri yükler. Bu yüksek riskli erişim değişikliğidir. |

## Hesap oluştur

![Hesap oluştur: 1 ad, 2 e-posta, 3 şirket, 4 rol, 5 parolayı göstermek için basılı tut, 6 onayla, 7 iptal](/images/accounts/account-create.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, hata, izin veya risk |
|---|---|---|---|
| 1 | Ad | Yeni hesap görünen adını girin. | Onaydan önce zorunludur. |
| 2 | E-posta | Hesap e-postasını girin. | Zorunludur; geçersiz veya yinelenen e-posta kaydedilemez. |
| 3 | Şirket | Seçilen rol şirket kapsamındaysa zorunlu şirketi seçin. | Seçenekler ve izinli birleşimler mevcut yöneticinin rolüyle sınırlıdır. |
| 4 | Rol | İzinli rolü seçin. | Rol listesi, oluşturanın yetkisi ve şirket seçimiyle sınırlıdır. Desteklenmeyen birleşimler kullanılamaz veya doğrulamada hata verir. |
| 5 | Parolayı göstermek için basılı tut | Parolayı girerken göz denetimine basılı tutun. | Yalnızca basılıyken gösterir, tarayıcı depolamasına kaydetmez; parolalar izinli karakterlerden oluşmalı ve en az sekiz karakter olmalıdır. |
| 6 | Onayla | Zorunlu alanları tamamlayıp onaylayın. | Başarı hesabı oluşturur; hata formu düzeltme için açık bırakır. |
| 7 | İptal | İptal’i seçin. | Hesap oluşturmadan listeye döner. |

## Ayrıntı, sıfırlama ve düzenleme

![Hesap ayrıntısı: 1 Parolayı sıfırla, 2 Hesap listesine dön](/images/accounts/account-detail.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, hata, izin veya risk |
|---|---|---|---|
| 1 | Parolayı sıfırla | Süper Yönetici olmayan hesabı açın ve Parolayı sıfırla’yı seçin. | Süper Yönetici hedeflerinde korunur ve görünmez. Başka yöneticinin parolasını sıfırlamak yüksek risklidir. |
| 2 | Hesap listesine dön | Hesap listesine dön’ü seçin. | Seçili hesabı değiştirmeden döner. |

![Parolayı sıfırla: 1 yeni parola, 2 onay, 3 göstermek için basılı tut, 4 iptal, 5 sıfırla](/images/accounts/account-reset-password.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, hata, izin veya risk |
|---|---|---|---|
| 1 | Yeni parola | Yeni parolayı girin. | İzinli karakter ve en az sekiz karakter kuralını karşılamalıdır. |
| 2 | Yeni parolayı onayla | Aynı parolayı tekrar girin. | Uyumsuz veya boş değer geçerli sıfırlamayı engeller. |
| 3 | Parolayı göstermek için basılı tut | Yazarken değeri denetlemek için basılı tutun. | Bırakılınca gizlenir. |
| 4 | İptal | Onaylamadan iletişim kutusunu kapatın. | Parola isteği gönderilmez. |
| 5 | Parolayı sıfırla | Hedefi ve iki girişi doğruladıktan sonra onaylayın. | Başarı seçili yönetici parolasını günceller; hata iletişim kutusunu düzeltme için açık bırakır. |

![Hesabı düzenle: 1 ad, 2 salt okunur e-posta, 3 şirket, 4 rol, 5 iptal, 6 kaydet](/images/accounts/account-edit.png){.manual-shot}

| No. | Denetim | Ön koşul ve işlem | Sonuç, hata, izin veya risk |
|---|---|---|---|
| 1 | Ad | Düzenlenebilir görünen adı değiştirin. | Zorunludur. |
| 2 | E-posta | E-posta alanını inceleyin. | Bu iletişim kutusunda salt okunurdur. |
| 3 | Şirket | Şirketi yalnızca hedef rol şirket bağını destekliyorsa değiştirin. | Şirket değişiminden sonra rol seçimi yeniden hesaplanabilir; geçersiz eski bağlar kaydedilemez. |
| 4 | Rol | İzinli hedef rolü seçin. | Süper Yönetici ve normal kullanıcı bu yoldan atanamaz; şirket gereksinimleri doğrulanır. |
| 5 | İptal | İletişim kutusunu kapatın. | Kaydedilmemiş yerel değişiklikleri atar. |
| 6 | Değişiklikleri kaydet | Alanları doğrulayıp kaydedin. | İzinli değişikliği kaydeder veya doğrulama hatası verir. |
